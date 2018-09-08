import store from '../store';
import axios from 'axios';
import * as auth from './AuthService';

// Creates a global http method to use for making request to the server
export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: auth.getToken()
        }
    });
}