const requireLogin = require('../middleware/requireLogin');
const checkCredit = require('../middleware/checkCredit');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const mailService = require('../services/Mailer');
const surveyTemplate = require('../services/templates/surveyTemplate');

const { Path } = require('path-parser');
const { URL } = require('url');
const _ = require('lodash');


module.exports = (app) => {

    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id })
            .select('-recipients')
        res.send(surveys)
    })

    app.get('/api/surveys/:surveyId/:vote', (req, res) => {
        res.send('<h1>Thanks for Your feedback</h1>')
    })

    app.post('/api/surveys', requireLogin, checkCredit, async (req, res) => {
        const { title, body, recipients, subject } = req.body;
        const survey = new Survey({
            _user: req.user.id,
            title,
            body,
            subject,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            dateSent: Date.now()
        })

        try {
            await mailService(survey, surveyTemplate(survey))
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            res.status(200).send(user) 
        } catch (error) {
            res.status(422).send(error)
        }
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        //receive webhook events and process them to update survey values
        //events in array sent in req.body from sendgrid

        //create new path object to parse out id and vote from url
        const p = new Path('/api/surveys/:id/:vote');
        const events = req.body.map(({email, url}) => {
            //create new url object from url porp and get path name
            //test using parser, will return parsed values or null
            const match = p.test(new URL(url).pathname)
            // if params exist return object for that event
            if(match){
                return {email, surveyId: match.id, vote: match.vote}
            }
        })
        //remove any undefined or null array items
        const definedEvents = events.filter(event => event)
        // ensure objects are unique by email and survey id
        const uniqueEvents = _.uniqBy(definedEvents, 'email', 'surveyId');
        uniqueEvents.forEach(({email, surveyId, vote}) => {
            Survey.updateOne({
                _id: surveyId,
                recipients: {
                    $elemMatch: {
                        email: email, responded: false
                    }
                }
            }, {
                $inc: { [vote]: 1 },
                $set: {'recipients.$.responded': true},
                lastResponse: new Date()
            }).exec();
        })


        res.status(202).send('ok');
    })

    app.get('/api/surveys/:id/yes', (req, res) => {
        res.send(`${req.params.id} yes`)
    })

    app.get('/api/surveys/:id/no', (req, res) => {
        res.send(`${req.originalUrl} no`)
    })
}