import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

//redux stuff
import { connect } from'react-redux';

//components
import StripePay from './StripePay';

const Header = ({ auth }) => {

    const Action = () => {
        switch(auth) {
            case null:
                return ''
            case false: 
                return <li><a href="/auth/google">Sign in with Google</a></li>             
            default:
                return (
                    <Fragment>
                        <li>
                            <StripePay />
                        </li>
                        <li>
                            <a >
                            Credits: { auth.credits }
                            </a>
                        </li>
                        <li>
                            <Link to="/surveys">
                                { auth.name }
                            </Link>                            
                        </li>
                        <li>
                            <a href="/auth/logout" >Logout</a>
                        </li>
                    </Fragment>
                ) 
        }
    }

    return (
        <nav className="grey">
            <div className="container">
                <div className="nav-wrapper">
                    
                    <Link 
                        to={auth ? '/surveys' : '/'  } 
                        className="left brand-logo"
                     >
                         Survey junky
                    </Link >

                    <ul className="right">
                        <Action />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = ({auth}) => ({
    auth
})
export default connect(mapStateToProps )(Header);
