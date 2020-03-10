import React , { useEffect, Fragment } from 'react';

import { connect } from 'react-redux';
import { fetchSurveys, deleteSurvey } from '../actions';

import M from 'materialize-css';

const SurveyList = ({ surveys, fetchSurveys, deleteSurvey }) => {
    useEffect(() => {
        fetchSurveys();    
    }, [])

    const onDelete = async id => {
        M.toast({html: 'Deleting survey...', classes: 'red'});
        const success = await deleteSurvey(id);
        if(success) M.toast({html: 'Survey has been deleted.', classes: 'green'})
        else M.toast({html:'There was an error, please try again.', classes: 'red'})
    }

    const listSurveys = surveys.map(({_id, title, from, dateSent, body, subject, yes, no}) => (
            <div key={_id} className="card grey lighten-5 hoverable">
                <div className="card-content">
                <p className="">Date: { new Date(dateSent).toLocaleString() }</p>
                <h5 className="card-title">Title: { title }</h5>
                    <br />
                    <p>From: { from }</p>
                    <p>Subject Line: { subject }</p>
                    <p>Body: { body }</p>
                    <br />
                <div className="card-action">
                    <a href="#">Total: { yes + no }</a> 
                    <br/>
                    <a className="center">YES:{yes / (yes + no) * 100 || 0}% </a>
                    <a className="center">NO:{no / (yes + no) * 100 || 0}% </a>
                    <button className="btn right flat red" onClick={() => onDelete(_id)}>Delete</button>
                </div>
                </div>
            </div>            
    ))
    
    if(!surveys.length) {
        return (
            <Fragment>
                <h3 className="center">You dont have any surveys</h3>
                <h6 className="center">Click on the red button to send out a survey and see the results here.</h6>
                <h6 className="blue-text center">** To buy Credits, enter card no. "4242 4242 4242 4242" in purchase form **</h6>
                <h6 className="blue-text center">** Purchase process is only a test procedure, no charges are made **</h6>

            </Fragment>
        )
    }

    return (
        <div>
                    <h4 className="center">Survey History</h4>

            { listSurveys }
        </div>
    );
}

const mapStateToProps = ({ surveys }) => ({
    surveys
})
export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(SurveyList);
