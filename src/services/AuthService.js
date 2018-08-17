import store from '../store';
import { http } from './HttpService';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login(user) {
    return http().post('/auth', user)
        .then(res => {
            if (res) {
                setToken(res.data.token);
            }
        });
}

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}

function setToken(token) {
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getUsername() {
    return 'david';
}

export function getUserId() {
    return 1;
}

export function registerUser(user) {
    return http().post('/register', user);
}

