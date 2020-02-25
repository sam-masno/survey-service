const express = require('express');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const passport = require('passport')

//create express server object
const app = express();
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

app.get('/', (req,res)=> res.send('home'));

//import and invoke route attachment function on app
require('./routes/authRoutes.js')(app);


app.listen(process.env.PORT || 5000);
console.log('server running')