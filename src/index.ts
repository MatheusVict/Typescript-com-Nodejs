import express from 'express';
import routes from '../routes';
const app = express()

app.get('/', (req, res) => {
    res.send('Vamoooo')
})


app.use(routes)

const PORT:number = 8000
app.listen(PORT, () => {
    console.log(`Servidor iniciado no http://localhost:${PORT}`)
})