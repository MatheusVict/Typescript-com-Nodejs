import { Request, Response } from "express"; // Tem q importar pq o ts não consegue definir

import Email from "../services/Serviceemail";

const user = [
    {name: 'Tú', email: 'tu@gmail.com'},
]


export default {
    async index(req: Request, res: Response) { //E aqui eu defini qual é qual
        return res.json(user)
    },

    async create(req: Request, res: Response) {
        const emailservice = new Email()

        emailservice.sendMail(
            { name: 'Matheus', email: 'matheus@gmail.com' },
            {menssagem: 'olá'}
            
        )
        return res.send()
    }
};