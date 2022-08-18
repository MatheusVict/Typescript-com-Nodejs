interface IMailTo {
    name: string
    email: string
}

interface Imessage {
    menssagem: string
    anexos?: string[]
}


class Email {
    sendMail(to: IMailTo, message:Imessage ) { // Uso das interfaces igual na outra aula
        console.log('enviado')
        console.log(`Para ${to.name}: ${message.menssagem}`)
        if(message.anexos) {
            console.log(`Possui anexos: ${message.anexos}`)
        }
        console.log(`para o email ${to.email}`)
    }
}



export default Email;