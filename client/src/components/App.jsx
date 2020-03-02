import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchUser } from '../actions'

//get materialize
import 'materialize-css/dist/css/materialize.min.css';

//components
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h1>Dashboard works</h1>
const SurveyNew = () => <h1>SurveyNew works</h1>

const App = ({fetchUser}) => {
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Landing} /> 
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default connect(null, { fetchUser })(App);