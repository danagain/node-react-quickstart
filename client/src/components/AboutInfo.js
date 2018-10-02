import React from "react";
import './AboutInfo.css';
import $ from '../../../node_modules/jquery/dist/jquery.slim';

const AboutInfo = () => {
    $(window).scroll(function(){
    if($(window).scrollTop() < 432){ 
        $(".aboutInfodiv").css({"bottom": ($(window).scrollTop()) + "px"});
        console.log($(window).scrollTop());

    }else{
        $(".test").css("background", "black");
    }
      });
    return (
        <div className="aboutInfodiv">
        </div>
    );
};

export default AboutInfo;