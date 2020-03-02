const express = require('express');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const passport = require('passport')
const bodyParser = require('body-parser');

//create express server object
const app = express();

//use bodyparser middleware
app.use(bodyParser.json());

//apply cookie sessions
app.use(
    cookieSession({
        maxAge: 5 * 24 * 60 * 60 * 1000,
        keys: [keys.cookies]
    })
)
app.use(passport.initialize());
app.use(passport.session());
//run db config service and models
require('./services/db.js');
require('./models/User.js');

//run passport config
require('./services/passport.js');

//import and invoke route attachment function on app
require('./routes/authRoutes.js')(app);
require('./routes/billingRoutes.js')(app);

//serve client in production 
if (process.env.NODE_ENV === 'production' ) {
    app.use(express.static('client/build'));
    const path = require('path');
    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}


app.listen(process.env.PORT || 5000);
console.log('server running')