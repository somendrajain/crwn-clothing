import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 72;
    const publishableKey = 'pk_test_51JDNLDSE4N42ublWomeqWA656nc0iUEWpfvkoF8w6Z68MJ0nDVdy89BETzZeT9q529KRO4uqadhIVhXK38ooCVZD00P17Et4Dt';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CheapKart Company Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your Cart Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;