import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const res = await axios.get('/api/vehicles');
            setVehicles(res.data);
        };
        fetchVehicles();
    }, []);

    return (
        <div>
            <h1>Available Vehicles</h1>
            <ul>
                {vehicles.map((vehicle) => (
                    <li key={vehicle.id}>
                        <Link to={`/vehicle/${vehicle.id}`}>{vehicle.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehicleList;
