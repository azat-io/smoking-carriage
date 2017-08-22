'use strict'

import bodyParser from 'body-parser'
import chalk from 'chalk'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import { db, serverPort } from '../etc/config.json'

import * as cigarettes from './utils/cigarettes'

const app = express()

mongoose.connect(`mongodb://${ db.host }:${ db.port }/${ db.name }`, {
    useMongoClient: true,
})

app.use(bodyParser.json())

app.use(cors({origin: '*'}))

app.get('/cigarettes', (request, response) => {
    cigarettes.get().then(data => {
        response.send(data)
    })
})

app.post('/cigarettes', (request, response) => {
    cigarettes.add(request.body).then(data => {
        response.send(data)
    })
})

app.listen(serverPort, () => {
    console.log(chalk.bold('Server is up and running on port ' +
        chalk.yellow(serverPort)))
})
