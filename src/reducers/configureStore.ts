import { applyMiddleware, createStore } from 'redux'
import { promisedStateMiddleware } from 'redux-promised-state';
import rootReducer from './rootReducer'


export default function configureStore() {
    const middlewares = applyMiddleware(promisedStateMiddleware);

    const store = createStore(rootReducer, {}, middlewares);
    return store;
}