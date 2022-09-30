import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reDucer from './reducer';

const store = createStore(
    reDucer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;