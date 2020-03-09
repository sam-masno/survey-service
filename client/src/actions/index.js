import {
    FETCH_USER,
    FETCH_SURVEYS
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

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({type:FETCH_USER, payload: res.data })
}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    console.log(res.data)
    dispatch({type: FETCH_SURVEYS, payload: res.data})
}


