import express from "express"
import {client} from './db'

//middleware
const app = express()
//json

export async function execute() {
    await client.connect()
    console.log('Connected successfully')
  
    const results = await client.query('SELECT * FROM projects')
    console.table(results.rows)
  
    await client.end()
    console.log('Disconnected successfully')
  }

execute()