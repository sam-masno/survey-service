import React from 'react';
import Stripe from 'react-stripe-checkout';

//reducx stuff
import { connect } from 'react-redux';
import { stripePayment } from '../actions';


const StripePay = ({ stripePayment }) => {
    return (
        <Stripe 
            name="TalkBack +5 credits"
            description="Card no. 4242 4242 4242 4242"
            amount={1000}
            token={ stripePayment }
            stripeKey={ process.env.REACT_APP_STRIPE_KEY }
        >
            <button className="btn blue">
                Buy 5 Credits    
            </button>            
        </Stripe>
    );
}

export default connect(null, { stripePayment })(StripePay);
