interface IMailTo {
    name: string
    email: string
}

interface Imessage {
    menssagem: string
    anexos?: string[]
}

interface IMessageDTO {
    to: IMailTo;
    message: Imessage;
}

interface IEmail {
    sendMail(request: IMessageDTO) : void
}

class Email implements IEmail {
    sendMail({ to, message }: IMessageDTO ) { // Uso das interfaces igual na outra aula
        console.log('enviado')
        console.log(`Para ${to.name}: ${message.menssagem}`)
        if(message.anexos) {
            console.log(`Possui anexos: ${message.anexos}`)
        }
        console.log(`para o email ${to.email}`)
    }
}



export default Email;