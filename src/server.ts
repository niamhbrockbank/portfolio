import express from "express"
import {client} from './db'
import {cors} from "cors"

//middleware
const app = express()
express.json()
app.use(cors())

async function execute(){
    client.connect()
}

execute()

//Get all projects
app.get('/', async (req, res) => {
    const result = await client.query('SELECT * FROM projects')
    const jsonBody = await result.json()
    res.json(jsonBody)
})

//Get one project
app.get('/:id', async (req, res) => {
    const {id} = req.params
    const result = await client.query('SELECT * FROM projects WHERE id = $1', [id])
    const jsonBody = await result.json()
    res.json(jsonBody)
})


//client.end() ????

// app.listen(5000)
//Set up a port to listen on