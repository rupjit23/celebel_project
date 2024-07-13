import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-stripe-public-key');

const Checkout = () => {
    const location = useLocation();
    const { vehicle, rentalDuration } = location.state;

    return (
        <div>
            <h1>Checkout</h1>
            <p>Vehicle: {vehicle.name}</p>
            <p>Duration: {rentalDuration} days</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm vehicle={vehicle} rentalDuration={rentalDuration} />
            </Elements>
        </div>
    );
};

export default Checkout;
