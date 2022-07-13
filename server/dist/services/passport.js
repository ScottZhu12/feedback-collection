"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const keys_1 = require("../config/keys");
const keys_2 = require("../config/keys");
// configure google strategy
// callback function will be executed when user autherized app to access
// their google account to login (when hits the google oauth callback route)
const GoogleStrategy = passport_google_oauth20_1.default.Strategy;
passport_1.default.use(new GoogleStrategy({
    clientID: keys_1.googleClientID,
    clientSecret: keys_2.googleClientSecret,
    callbackURL: '/auth/google/callback',
    passReqToCallback: true,
}, (accessToken) => {
    console.log(accessToken);
}));
