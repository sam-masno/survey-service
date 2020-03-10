const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middleware/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin,  async (req, res) => {
        // res.send('stripe')
        const charge = await stripe.charges.create({
            amount: 1000,
            currency: 'usd',
            description: 'buy credits',
            source: req.body.id
        })
        if(charge.paid) {
            try {
                req.user.credits += 5;
                const user = await req.user.save();
                res.send(user)  
            } catch (error) {
                res.status(400).send({error: 'There was an error, please contact customer service'})
            }
        } else res.status(400).send({error: 'Payment failed'})
    })
}