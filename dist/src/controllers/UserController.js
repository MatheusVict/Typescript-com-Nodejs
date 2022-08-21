"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Serviceemail_1 = __importDefault(require("../services/Serviceemail"));
const user = [
    { name: 'Tú', email: 'tu@gmail.com' },
];
exports.default = {
    async index(req, res) {
        return res.json(user);
    },
    async create(req, res) {
        const emailservice = new Serviceemail_1.default();
        emailservice.sendMail({
            to: {
                name: 'Matheus', email: 'matheus@gmail.com'
            },
            message: {
                menssagem: 'olá', anexos: ['Olá como está?']
            }
        });
        return res.send();
    }
};
