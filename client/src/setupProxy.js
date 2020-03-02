const proxy = require('http-proxy-middleware')

//proxy setup for dev env
 
module.exports = function(app) {
    app.use(proxy(['/auth/logout','/auth/user', '/auth/google', '/auth/google/', '/api/stripe'], { target: 'http://localhost:5000' }));
}