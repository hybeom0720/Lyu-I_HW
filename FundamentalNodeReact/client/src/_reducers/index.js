import {combineReducers} from 'redux';
import user from "./user_reducer";

const rootReducer = combineReducers({
    user
})
//여러개의 reducer를 하나로 합쳐주는
export default rootReducer