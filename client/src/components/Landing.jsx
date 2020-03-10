import React, { Fragment } from 'react';
//testing
// import axios from 'axios';

const Landing = () => {

    return (
        <Fragment>
            <div className="center-align section">
                <h3 className="blue-text">                
                    Welcome to TalkBack!
                </h3>
                <p>This is a portfolio project site simulating an email based survey collection service.</p>
                <p>Built using MongoDB, Express, React+Redux, and Node.js.</p>
            </div>
            <div className="row section" style={{}}>
                <div className="col s12 m4" style={container}>
                    <div className="center">
                        <i className="material-icons large blue-text">verified_user</i>
                    </div>
                        <div className="divider"></div>
                        <div style={content}>
                            <p>Creating an account is easy. Just sign in to your Google account with OAuth and you're set. Once signed in buy credits with the Stripe.com API by clicking the 'BUY CREDITS' button.</p>
                        </div>
                </div>
                <div className="col s12 m4" style={container} >
                    <div className="center">
                        <i className="material-icons large blue-text">email</i>
                    </div>
                        <div className="divider"></div>
                    <div style={content}>
                        <p>Fill out a simple form with a question and email recipients list. Your emails will be sent out with SendGrid. They will contain your question and Yes/No response links.</p>
                    </div>                    
                </div>
                <div className="col s12 m4" style={container} >
                    <div className="center">
                        <i className="material-icons large blue-text">feedback</i>
                    </div>
                        <div className="divider"></div>
                    <div style={content}>
                        <p>When your recipients respond by clicking the the links, their choices will be recorded and the results will be available on your dashboard.</p>
                    </div>                    
                </div>              

            </div>
        </Fragment>

    );
}

const container = {
    paddingTop: '40px',
}
const content = {
    paddingLeft: '15px',
    paddingRight: '15px'
}



export default Landing;
