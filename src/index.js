require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var DiscordStrategy = require('passport-discord').Strategy;
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todo');
let extras = {
    webHookDate: null,
    webHookCoolDown: 1500,
    apiText: '/api/v1'
}
var scopes = ['identify', 'email'];
 
passport.use(new DiscordStrategy({
    clientID: 'id',
    clientSecret: 'secret',
    callbackURL: 'callbackURL',
    scope: scopes
},
function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ discordId: profile.id }, function(err, user) {
        return cb(err, user);
    });
}));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
function routes() {
    const routes = [require('./routes/user.route')]
    app.post(`${extras.apiText}/upload`, routes[0].post.bind(this));
    app.get(`/:userId/:blogId`, routes[0].get.bind(this));

    app.get('/auth/discord', passport.authenticate('discord'));
    app.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/'
    }), function(req, res) {
    res.redirect(`/`) // Successful auth
});
    
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    routes();
});