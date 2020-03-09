import React, { useState } from 'react';

//redux stuff
import { reduxForm } from 'redux-form';

//components
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

const SurveyNew = () => {
    const [review, setReview] = useState(false);

    const reviewSurvey = () => setReview(true);
    const cancel = () => setReview(false);

    return (
        <div>
            {review ? <SurveyReview onCancel={cancel}/> : <SurveyForm onReview={reviewSurvey} />}   
        </div>
    )
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
