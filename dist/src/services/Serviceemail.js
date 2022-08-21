"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Email {
    sendMail({ to, message }) {
        console.log('enviado');
        console.log(`Para ${to.name}: ${message.menssagem}`);
        if (message.anexos) {
            console.log(`Possui anexos: ${message.anexos}`);
        }
        console.log(`para o email ${to.email}`);
    }
}
exports.default = Email;
