'use strict'

import {
    ADD_CIGARETTE,
    GET_CIGARETTE,
} from '../actions/action-types'

export default function cigarettes (state = [], action) {
    switch (action.type) {
        case ADD_CIGARETTE: {
            return state
        }
        case GET_CIGARETTE: {
            return state
        }
        default: return state
    }
}
