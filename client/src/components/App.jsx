import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchUser } from '../actions'

//get materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

//components
import Header from './Header';
import Landing from './Landing';
import Loading from './Loading';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = ({fetchUser, auth}) => {
    useEffect( () => {
        M.AutoInit()
        fetchUser();
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Header />
                    <div className="container">
                        {auth === null && <Loading /> }

                        {auth === false && <Landing />}

                        {auth && (
                            <Switch>
                                <Route exact path="/" component={Landing} /> 
                                <Route exact path="/surveys" component={Dashboard} />
                                <Route exact path="/surveys/new" component={SurveyNew} />
                            </Switch>
                        )}
                        

                    </div>
            </BrowserRouter>
        </div>
    )
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps, { fetchUser })(App);