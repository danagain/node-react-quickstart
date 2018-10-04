import React from "react";
import './Home.css';
import {Link} from 'react-router-dom'
import About from './About.js'

const Home = () => {
    return (
      <div class="cover-container">

      <div class="masthead clearfix">
        <div class="inner">
          <h3 class="masthead-brand">FullMarket</h3>
          <nav>
            <ul class="nav masthead-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="inner cover">
        <h1 class="cover-heading">Complex Neural Network Trading</h1>
        <p class="lead">Full Market is an end to end technical analysis platform for traders and investors alike, levereging advancements in Artifical Intelligence to provide accurate stock market forecasts </p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-default">Learn more</a>
        </p>
      </div>

      <div class="mastfoot">
        <div class="inner">

        </div>
      </div>

    </div>
    );
};

export default Home;