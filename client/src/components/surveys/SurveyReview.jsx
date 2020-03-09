import React, { Fragment, useHistory } from 'react';
import FIELDS from './formFields';
import { withRouter } from 'react-router';

//redux stuff
import { connect } from 'react-redux';
import { submitSurvey } from '../../actions';

const SurveyReview = ({onCancel, survey, submitSurvey, history}) => {
    
    const fields = FIELDS.map(({name, label}) => (
        <Fragment key={name}>
            <label>{ label }</label>
            <p>{ survey[name] }</p>
        </Fragment>
    ))

    const handleSubmit = () => {
        submitSurvey(survey, history)
    }

    return (
        <div>
            <h3>Review your submission</h3>
            { fields }
            <button className="btn-flat red white-text" onClick={onCancel}>Cancel</button>
            <button className="btn-flat blue right white-text" onClick={handleSubmit}>
                Send Survey <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    survey: state.form.surveyForm.values
})
export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyReview));
