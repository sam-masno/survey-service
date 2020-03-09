import React , { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchSurveys } from '../actions';

const SurveyList = ({ surveys, fetchSurveys }) => {
    useEffect(() => {
        fetchSurveys();    
    }, [])

    const listSurveys = surveys.reverse().map(({_id, title, dateSent, body, subject, yes, no}) => (
            <div key={_id} className="card grey lighten-5">
                <div className="card-content">
                <p className="">Date: { new Date(dateSent).toLocaleString() }</p>
                <br/>
                <h5 className="card-title">{ title }</h5>
                    <br />
                    {/* <p>{ subject }</p> */}
                    <p>{ body }</p>
                    <br />
                <div className="card-action">
                    <p className="center">YES: { yes }</p>
                    <p className="center">NO: { no }</p>
                </div>
                </div>
            </div>            
    ))
    

    return (
        <div>
            { listSurveys }
        </div>
    );
}

const mapStateToProps = ({ surveys }) => ({
    surveys
})
export default connect(mapStateToProps, { fetchSurveys})(SurveyList);
