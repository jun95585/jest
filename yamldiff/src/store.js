import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index'

export default function getStore(pageData, contextData) {
    const middleWares = []
    middleWares.push(thunkMiddleware)

    const preloadState = {
        originCode: '//origin',
        newCode: '//new',
    }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    return createStore(
        reducers,
        preloadState,
        composeEnhancers(applyMiddleware(...middleWares))
    )
}