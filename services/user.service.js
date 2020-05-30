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
        const status = null
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          status = error.response.status
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          status = error.request.status
        } else {
          // Something happened in setting up the request that triggered an Error
        //   console.log('Error', error.message);
        }
        // console.log(error.config);
        return { status: status, msg: "Email or password is invalid" }
    });
    
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