'use strict'

import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const Schema = mongoose.Schema

const CigaretteSchema = new Schema({
    name: { type: String, required: true },
    resin: { type: Number, required: true },
    nicotine: { type: Number, required: true },
    price: { type: Number, required: true },
})

mongoose.model('Cigarette', CigaretteSchema)
