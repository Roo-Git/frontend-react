import {applyMiddleware, createStore} from 'redux';
import {save, load} from 'redux-localstorage-simple';
import reducer from './Reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    save({state:["dataCustomer"]})
)(createStore);

const store = createStoreWithMiddleware(
  reducer,
  load({
    preloadState : {
        dataCustomer : ''
    },
    states: ["dataCustomer"]
  }),
  
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
      trace: true,
  }) 

);

export default store;