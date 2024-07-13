import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingHistory = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const res = await axios.get('/api/bookings');
            setBookings(res.data);
        };
        fetchBookings();
    }, []);

    return (
        <div>
            <h1>Booking History</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        {booking.vehicleName} - {booking.duration} days
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingHistory;
