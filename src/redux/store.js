import { createStore , applyMiddleware} from 'redux'
import { routeREducer } from './reducer';
import thunk from 'redux-thunk'


export const configerStore = () => {
    let store = createStore(routeREducer, applyMiddleware(thunk));

    return store;
}