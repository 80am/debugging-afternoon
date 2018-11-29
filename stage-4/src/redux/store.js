import { createStore, applyMiddleware } from 'react-router-dom';
import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));