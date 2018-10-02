import React from "react";
import './Home.css';
import { Link } from 'react-router-dom'
import About  from './About.js'

const Home = () => {
    
    return (
        <div>
    <div className="container-fluid module darken col-12 col-md-12 col-xs-4 remove-all-margin-padding">
        <div classMenu="navMenu flex-container">
        <div className="test">
        <i className="fab fa-react fa-lg m-4"><span className="p-2">React</span></i>
        <Link to='/about' className="m-4"><i className="fas fa-shopping-cart fa-lg"><span className="p-2">Purchase</span></i></Link>
        <Link to='/contact' className="m-4"><i class="fas fa-comment fa-lg"><span className="p-2">Contact</span></i></Link>

        
        </div>
        </div>
            <div className="row p-2 homelabels">
            <h1 className="">Some Title</h1>
            <h3 className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
            {/* <div className="row manageBtn">
            <Link to='/manager'><button><i className="fas fa-angle-right"></i></button></Link>
            </div> */}
    </div>
    <About/>
    </div>
    );
};

export default Home;