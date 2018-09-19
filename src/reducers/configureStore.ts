import { applyMiddleware, createStore } from 'redux'
import { promisedStateMiddleware } from 'redux-promised-state';
import rootReducer from './rootReducer'


export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(promisedStateMiddleware));
}