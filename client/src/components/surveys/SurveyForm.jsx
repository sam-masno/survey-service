import React from 'react';
import { Link } from 'react-router-dom';

//redux stuff 
import { reduxForm, Field } from 'redux-form';

//components
import SurveyField from './SurveyField';

//email validator
import validateEmails  from '../../utils/validateEmails';

//form fields
import FIELDS from './formFields.js'

const SurveyForm = ({onReview, handleSubmit}) => {
    
    return (
        <div>
            <form onSubmit={handleSubmit(onReview)}>

                {FIELDS.map(({name, label}) => (
                    <Field 
                        key={name}
                        type="text" 
                        name={name}
                        label={label} 
                        component={SurveyField}
                    />  
                ))}                                                         
                <Link to="/surveys" className="btn-flat white-text red">Cancel</Link>
                <button className="btn btn-flat blue white-text right" type="submit">
                    Review
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    )
    
}

function validate(values) {
    let errors = {};
    FIELDS.forEach(({name}) => {
        if(!values[name]) errors[name] = 'Field required.'
    })
    if(values.recipients) errors.recipients = validateEmails(values.recipients)
    return errors;
} 

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
