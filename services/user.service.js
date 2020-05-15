import { API_URL } from '../utils/constants'
// import { authHeader, headers } from '../utils/auth-header'
import axios from 'axios'
import Router from 'next/router';

export const userService = {
    login,
    getUser,
    logout,
    registerWithEmailPassword,
}

function logout(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    return axios({
        headers: headers,
        method: 'GET',
        withCredentials: false,
        url: API_URL + '/user/logout',
    }).then(response => {
        if (response.status === 200) {
            // sessionStorage.removeItem('token')
            // sessionStorage.removeItem('user')
            Router.push('/')
        }
        return response
    }).catch(error => {
    })
    // remove user from local storage to log user out

}

function registerWithEmailPassword(data) {
    // console.log(sessionStorage.getItem('token'))
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
    return axios({
        headers: headers,
        method: 'POST',
        withCredentials: false,
        url: API_URL + '/user/ep',
        data: data
    }).then(response => {
        console.log(response)
        if (response.status === 200) {
            // sessionStorage.setItem('token', response.data.token)
            // sessionStorage.setItem('token', response.data.token)
        }
        return response
    }).catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        // console.log(error)
        const msg = "";
        switch (error.response.status) {
            case 400:
                msg = error.response.data.msg;
                break;
            case 422:
                msg = error.response.data.msg;
                break;
            case 401:
                msg = error.response.data.msg;
                break;
            case 500:
                msg = 'Interval server error! Try again!';
                break;
            default:
                msg = error.response.data.msg;
                break;
        }
        return { status: error.status, msg: "Can not register" }
    })
    // return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse)
}
function login(data) {
    return axios({
        headers: headers,
        method: 'POST',
        url: API_URL + '/user/login',
        data: data
    }).then(response => {
        // sessionStorage.setItem('token', response.data.token)
        return response
    }).catch(error => {
        //console.log(error)
        return { status: error.status, msg: "Email or password is invalid" }
    })
}

function getUser(token) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
    return axios({
        headers: headers,
        method: 'GET',
        withCredentials: false,
        url: API_URL + '/user',
    }).then(response => {
        if (response.status === 200) {
            setCookie('user',JSON.stringify(response.data.data));
            // sessionStorage.setItem('user', JSON.stringify(response.data.data))
        }
        return response
    }).catch(error => {
        console.log(error)
    })
}