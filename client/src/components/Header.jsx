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
                return <li><a href="/auth/google" className="red white-text">Sign in with Google</a></li>             
            default:
                return (
                    <Fragment>
                        <li>
                            <Link to="/surveys">
                                { auth.name }
                            </Link> 
                        </li>
                        <li>   
                            <a>
                                <StripePay />
                            </a>                         
                        </li>
                        <li>

                            <a >
                            Credits: { auth.credits }
                            </a>                           
                        </li>
                        <li>
                            <a href="/auth/logout" >Logout</a>
                        </li>
                    </Fragment>
                ) 
        }
    }

    return (
        <Fragment>
            <nav className="blue">
            <div className="nav-wrapper container">
                <Link 
                    to={auth ? '/surveys' : '/'  } 
                    className=" brand-logo "
                >
                    TalkBack
                  </Link >
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <Action />
            </ul>
            </div>
        </nav>
        
        <ul className="sidenav" id="mobile-demo">
            <Action />
        </ul>     
      </Fragment >   
    )
}

const mapStateToProps = ({auth}) => ({
    auth
})
export default connect(mapStateToProps )(Header);
