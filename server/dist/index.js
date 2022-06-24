"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || 8000;
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
