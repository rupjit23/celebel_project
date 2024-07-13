import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import VehicleList from './components/Vehicle/VehicleList';
import VehicleDetails from './components/Vehicle/VehicleDetails';
import Checkout from './components/Booking/Checkout';
import BookingHistory from './components/Booking/BookingHistory';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/vehicles" exact component={VehicleList} />
                <Route path="/vehicle/:id" component={VehicleDetails} />
                <Route path="/checkout/:id" component={Checkout} />
                <Route path="/history" component={BookingHistory} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
