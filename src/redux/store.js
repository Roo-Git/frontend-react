import {createStore} from 'redux'
import {load} from 'redux-localstorage-simple';
import reducer from './Reducers/rootReducer'

const store = createStore(
    reducer,
    load({
        preloadState : {
            dataCustomer : ''
        },
        states: [dataCustomer]
    })
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) */

);

export default store;