import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import coinsReducer from '../state/reducers/coinsReducer'

  
const reducers = combineReducers({
    coinsReducer,
})

export default createStore(reducers, applyMiddleware(thunk, logger));
