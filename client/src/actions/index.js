import {
    FETCH_USER,
    FETCH_SURVEYS,
    DELETE_SURVEY
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
    try {
        const res = await axios.post('/api/surveys', values);
        console.log(res.data)
        history.push('/surveys');
        dispatch({type:FETCH_USER, payload: res.data }) 
        return true
    } catch (error) {
        return false
    }

}

export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');
    // console.log(res.data)
    dispatch({type: FETCH_SURVEYS, payload: res.data})
}

export const deleteSurvey = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/surveys/${id}`)
        console.log(res.data)
        dispatch({type: DELETE_SURVEY, payload: id}) 
        return true
    } catch (error) {
        return false
    }

}

