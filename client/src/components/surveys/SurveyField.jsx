import React from 'react';

const SurveyField = ({input, label, meta: {error, touched} }) => {
    return (
        <div className="input-field">  
            <label >{ label }</label>
            <input {...input} type="text" style={{marginBottom: '10px'}} className="validate"/>
            <p className="red-text" style={{marginBottom: '30px', marginTop: '5px'}}>
                {touched && error}
            </p>
        </div>
    );
}

export default SurveyField;
