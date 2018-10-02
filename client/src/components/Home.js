import React from "react";
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
    <div className="container-fluid module darken">
        <div className="row">
        <h1 className="text-center">Drawing Boards</h1>
        </div>
        <div className="row ">
        <h3 className="text-center">Event Management System</h3>
        </div>
        <div className="row manageBtn">
        <Link to='/manager'><button><i className="fas fa-angle-right"></i></button></Link>
        </div>
    </div>
    );
};

export default Home;