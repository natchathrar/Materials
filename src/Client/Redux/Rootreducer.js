import { combineReducers } from 'redux';
import materialReducer from './Reducer';

const rootReducer = combineReducers({
    material: materialReducer,
});

export default rootReducer;
