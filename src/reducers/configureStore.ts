import { applyMiddleware, compose, createStore } from 'redux'
import { promiseOptionMiddleware } from 'redux-promise-option';
import rootReducer from './rootReducer'


export default function configureStore() {
    const middlewareEnhancer = applyMiddleware(promiseOptionMiddleware);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers: any = compose(...enhancers);

    const store = createStore(rootReducer, composedEnhancers);

    return store
}