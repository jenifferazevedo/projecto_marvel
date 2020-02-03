import { SET_LOGIN_STATE } from './constants/action-types'

export function setLoginState(loginState) {
    return { type: SET_LOGIN_STATE, 
    loginState: ""
    }
};