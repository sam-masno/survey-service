import {
    FETCH_USER
} from './types';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
    // console.log('fetchUser')
    const res = await axios.get('/auth/user')
    dispatch({type: FETCH_USER, payload: res.data})
} 

export const stripePayment = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    // console.log(res.data)
    dispatch({type: FETCH_USER, payload: res.data})
}


