import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const VehicleDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [vehicle, setVehicle] = useState(null);
    const [rentalDuration, setRentalDuration] = useState(1);

    useEffect(() => {
        const fetchVehicle = async () => {
            const res = await axios.get(`/api/vehicles/${id}`);
            setVehicle(res.data);
        };
        fetchVehicle();
    }, [id]);

    const handleBooking = () => {
        history.push(`/checkout/${id}`, { vehicle, rentalDuration });
    };

    if (!vehicle) return <div>Loading...</div>;

    return (
        <div>
            <h1>{vehicle.name}</h1>
            <p>{vehicle.description}</p>
            <input
                type="number"
                value={rentalDuration}
                onChange={(e) => setRentalDuration(e.target.value)}
                min="1"
            />
            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
};

export default VehicleDetails;
