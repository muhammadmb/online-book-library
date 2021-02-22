import React from 'react';
import { Link } from 'react-router-dom';
import './AboutStyle.css'

const About = () => {
  
    return(

        <div className="about">
            <div className="AboutHeader">
                <div className="container">
                    <h3>We provide all the books you may interest in</h3>
                </div>
            </div>
            <div className="container">
                <div className="ourMessage">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1580904578549-0d13d5a12653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=341&q=80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget purus pulvinar, feugiat turpis sed, feugiat ipsum. Pellentesque dictum venenatis nibh in lobortis. Quisque orci metus, porttitor viverra dictum sed, bibendum id ex. Praesent ornare libero nec ligula dignissim sodales. Morbi sodales aliquam purus, ac tincidunt erat interdum in.</p>
                        <h4>Ahmed Tarek</h4>
                        <span>CEO</span>
                    </div>
                    <div className="card blogCard">
                        <h2>Share your experiance with us.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget purus pulvinar, feugiat turpis sed, feugiat ipsum. Pellentesque dictum venenatis nibh in lobortis. </p>
                        <Link to="/blog"><button className="blogButton">BR Blog</button></Link>
                    </div>
                    <div className="Clear"></div>
                </div>
            </div>
        </div>
    );
}

export default About;
