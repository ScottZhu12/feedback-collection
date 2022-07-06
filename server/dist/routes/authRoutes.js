"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const authRouter = express_1.default.Router();
// setup router
// setup google oauth route
authRouter.route('/auth/google').get(passport_1.default.authenticate('google', {
    scope: ['email', 'profile'],
}));
// setup google oauth callback route
// in the callback route url, the query code is sent back from google
authRouter.route('/auth/google/callback').get(passport_1.default.authenticate('google'));
exports.default = authRouter;
