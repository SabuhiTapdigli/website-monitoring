import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducder from '../Reducers/rootReducer'

const middleware = [thunk];
if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}
const store = createStore(rootReducder,applyMiddleware(...middleware))

export default store;