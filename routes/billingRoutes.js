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
        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user)
    })
}