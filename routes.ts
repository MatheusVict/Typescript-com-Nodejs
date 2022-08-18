import { Router } from "express";
const routes = Router()
import UserController from './src/controllers/UserController'



routes.get('/', (req, res) => {
    res.send('olá')
})

routes.get('/user', UserController.index)
routes.get('/user/create', UserController.create)

export default routes;