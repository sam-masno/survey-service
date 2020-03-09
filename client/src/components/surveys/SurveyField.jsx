import React from 'react';

const SurveyField = ({input, label, meta: {error, touched} }) => {
    return (
        <div>
            <label>{ label }</label>
            <input {...input} style={{marginBottom: '10px'}} />
            <p className="red-text" style={{marginBottom: '30px', marginTop: '5px'}}>
                {touched && error}
            </p>
        </div>
    );
}

export default SurveyField;
