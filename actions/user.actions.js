import { userConstants } from '../utils/constants'
import { userService } from '../services'
import { alertActions } from './'


export const userActions = {
    registerEP,
    getUser,
    logout
}
function logout(token) {
    console.log(token)
    userService.logout(token)
    return { type: userConstants.LOGOUT }
}
function registerEP(data) {
    return dispatch => {
        dispatch(request(data.email))
        userService.registerWithEmailPassword(data)
            .then(
                response => {
                    if (response.status === 200) {
                        dispatch(success(response.data.token))
                        dispatch(getUser(response.data.token))
                    } else if (response.status > 200 && response.status < 400) {
                        dispatch(failure(response.data.msg))
                        dispatch(alertActions.error(response.data.msg))
                    } else {
                        dispatch(failure(response.msg))
                        dispatch(alertActions.error(response.msg))
                    }
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(error(error.toString()))
                }
            )
    }

    function request(data) { return { type: userConstants.REGISTER_REQUEST, data } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
function login(data) {
    return dispatch => {
        dispatch(request(data.email))

        userService.login(data)
            .then(
                response => {
                    if (response.status === 200) {
                        dispatch(success(response.data.token))
                        dispatch(getUser(response.data.token))
                    } else {
                        dispatch(failure(response.msg))
                        dispatch(alertActions.error('ไม่สามารถเข้าสู่ระบบได้ กรุณาตรวจสอบอีเมลหรือรหัสผ่านของท่าน'))
                    }
                },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(error(error.toString()))
                }
            )
    }

    function request(data) { return { type: userConstants.LOGIN_REQUEST, data } }
    function success(data) { return { type: userConstants.LOGIN_SUCCESS, data } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function getUser(token) {
    return dispatch => {
        dispatch(request())
        userService.getUser(token)
            .then(res => {
                if (res.status === 200) {
                    dispatch(success(res.data.data))
                }
            },
                error => {
                    dispatch(failure(error.toString()))
                    dispatch(alertActions.error(error.toString()))
                })

    }
    function request() { return { type: userConstants.ME_REQUEST } }
    function success(data) { return { type: userConstants.ME_SUCCESS, data } }
    function failure() { return { type: userConstants.ME_FAILURE } }
}