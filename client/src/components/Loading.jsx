import React, { Fragment, useState, useEffect } from 'react';


const Loading = () => {
    return (
    <Fragment >
    <div style={{minHeight: '90vh'}} className="valign-wrapper">
        <div className="preloader-wrapper big active center-align blue" style={{left: '50%', marginLeft: '-25px'}}>
        </div> 
    </div>
                
    </Fragment>

    );
}

export default Loading;
