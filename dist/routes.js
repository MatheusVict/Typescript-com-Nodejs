"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const UserController_1 = __importDefault(require("./controllers/UserController"));
routes.get('/', (req, res) => {
    res.send('olá');
});
routes.get('/user', UserController_1.default.index);
routes.post('/user', UserController_1.default.create);
exports.default = routes;
