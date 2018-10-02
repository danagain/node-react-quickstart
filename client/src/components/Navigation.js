import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <a className="navbar-brand" href="/">DrawingBoards</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                   <NavLink to="/manager" className="nav-item nav-link">Manager</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;