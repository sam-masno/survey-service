import React from 'react';
import Stripe from 'react-stripe-checkout';

//reducx stuff
import { connect } from 'react-redux';
import { stripePayment } from '../actions';


const StripePay = ({ stripePayment }) => {
    return (
        <Stripe 
            name="Survey Junky"
            description="Buy 5 credits"
            amount={1000}
            token={ stripePayment }
            stripeKey={ process.env.REACT_APP_STRIPE_KEY }
        >
            <button className="btn blue">
                Buy Credits    
            </button>            
        </Stripe>
    );
}

export default connect(null, { stripePayment })(StripePay);
