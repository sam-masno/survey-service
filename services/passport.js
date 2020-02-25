const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//require mongoose and models
const mongoose = require('mongoose');
const User = mongoose.model('users');


// create unique identifier for cookie based user auth
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
})

//apply google strategy
//this is being passed into routes as controller in authRoutes
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            const checkForUser = await User.findOne( { googleID: profile.id } );
            if(checkForUser) {
                console.log('user exists')
                done(null, checkForUser);
            }
            else {
                const newUser = await User.create({
                    googleID: profile.id,
                    name: profile.displayName,
                }); 
                console.log(newUser)
                done(null, newUser)
            } 
        } catch (error) {
            console.log(error)
        }

  
    }   
)
);