import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import surveysReducer from './surveysReducer';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducer
})