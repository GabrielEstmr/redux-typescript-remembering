import { combineReducers } from 'redux';
import bankReducer from './bankReducer';


const reducers = combineReducers({
    bank: bankReducer
});

//Exporting the type  of the Reducer
export type State = ReturnType<typeof reducers>

//Exporting Reducer
export default reducers;
