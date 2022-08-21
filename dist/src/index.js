"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
app.get('/', (req, res) => {
    res.send('Vamoooo');
});
app.use((0, cors_1.default)());
app.use(routes_1.default);
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado no http://localhost:${PORT}`);
});
