'use strict'

import mongoose from 'mongoose'

import '../models/cigarette'

const Cigarette = mongoose.model('Cigarette')

export function get (id) {
    return Cigarette.find()
}

export function add (data) {
    const cigarette = new Cigarette({
        name: data.name,
        resin: parseInt(data.resin),
        nicotine: parseInt(data.nicotine),
        price: parseInt(data.price),
    })

    return cigarette.save((error, flat) => {
        if (error) throw error

        return flat
    })
}
