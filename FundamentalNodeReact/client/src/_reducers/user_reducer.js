import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from "../_actions/types";

export default function (state= {}, action){
    switch(action.type){
        case LOGIN_USER:
            return { ...state, loginSuccess : action.payload}
            break;
        case REGISTER_USER:
            return {...state, register: action.payload} //action.paylaod -> 서버의 반응
        case AUTH_USER:
            return {...state, userData: action.payload} //action.paylaod -> 서버의 반응
        default:
            return state;
    }

}