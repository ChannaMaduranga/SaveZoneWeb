import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css';

function Footer() {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, animi quisquam sint fuga nobis, minima accusantium ad cupiditate ea ab voluptates facere. Ipsum incidunt explicabo, voluptatibus aperiam recusandae neque eveniet!</p>
                    <div className="footer-social-icons flex">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+94 123456789</li>
                            <li>contact@gmail.com</li>
                        </ul>
                </div>

            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Tomato.com - All rights reserved.
            </p>
        </div>
    )
}

export default Footer