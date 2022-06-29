"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const keys_1 = require("./config/keys");
const keys_2 = require("./config/keys");
// create express application (server) and define port number
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// configure google strategy
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: keys_1.googleClientID,
    clientSecret: keys_2.googleClientSecret,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true,
}, (accessToken) => {
    console.log(accessToken);
}));
// setup google oauth route
app.get('/auth/google', passport_1.default.authenticate('google', {
    scope: ['email', 'profile'],
}));
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
