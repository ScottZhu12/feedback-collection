"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create express application and define port number
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                message: 'Welcome',
            },
        });
    }
    catch (err) {
        console.log(err);
    }
});
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});
