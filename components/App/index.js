'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from '../../reducers'

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

class App extends Component {
    render () {
        return (
            <Provider store={ store }>
                <div>
                    { 'Hello' }
                </div>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'))
