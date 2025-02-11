import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cakeReducer } from './cake/cakeReducer';
import { countReducer } from './count/countReducer';
import { laptopReducer } from './laptops/laptopReducer';


  import { thunk } from 'redux-thunk';
import { userReducer } from './users/userReducer';

var rootReducer = combineReducers({ cake: cakeReducer, count: countReducer,user:userReducer,laptop:laptopReducer });
export var store = createStore(rootReducer,applyMiddleware(thunk));
