import { Router } from "express";
const routes = Router()
import UserController from './controllers/UserController'



routes.get('/', (req, res) => {
    res.send('olá')
})

routes.get('/user', UserController.index)
routes.post('/user', UserController.create)

export default routes;