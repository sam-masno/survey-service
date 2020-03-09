const proxy = require('http-proxy-middleware')

//proxy setup for dev env
 
module.exports = function(app) {
    app.use(proxy(['/auth/logout','/auth/user', '/auth/google', '/auth/google/', '/api/stripe', '/api/surveys','/api/surveys/webhooks'], { target: 'http://localhost:5000' }));
    app.use(proxy(['/api/surveys/**'], { target: 'http://localhost:5000' } ))
}