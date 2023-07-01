import React from 'react'
import { BsChevronDown } from "react-icons/bs"
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer-top">
            <div className='footer-top-left'>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="Zomato" />
            </div>
            <div className='footer-top-right'>
                <div className='countries'>
                    <img id='flag' src="./india-flag-icon.png" alt="" />
                    <h4>India</h4>
                    <BsChevronDown />
                </div>
                <div className='languages'>
                    <img id='earth' src="./earth.png" alt="" />
                    <h4>English</h4>
                    <BsChevronDown />
                </div>
            </div>
        </div>
        <div className="footer-middle">
            <div className="footer-list">
                <h3>A B O U T <span>Z O M A T O</span></h3>
                 <h4>Who We Are</h4>
                 <h4>Blog</h4>
                 <h4>Work With Us</h4>
                 <h4>Investor Relations</h4>
                 <h4>Report Fraud.</h4>
                 <h4>Contact Us</h4>

            </div>
            <div className="footer-list">
                <h3>Z O M A V E R S E</h3>
                 <h4>Zomato</h4>
                 <h4>Blinkit</h4>
                 <h4>Freeding India</h4>
                 <h4>Hyperpure</h4>
                 <h4>Zomaland</h4>

            </div>
            <div className="footer-list">
                    <h3>F O R <span>R E S T A U R E N T S</span></h3>
                    <h4>Partner With Us</h4>
                    <h4>Apps For You</h4>
                    <h3 id='enterprise'>F O R <span>E N T E R P R I S E</span></h3>
                    <h4>Zomato For Enterprise</h4>

            </div>
            <div className="footer-list">
                <h3>L E A R N <span>M O R E</span></h3>
                <h4>Privacy</h4>
                <h4>Security</h4>
                <h4>Terms</h4>
                <h4>Sitemap</h4>

            </div>
            <div className="footer-list">
                <h3>S O C I A L <span>L I N K S</span></h3>
                <div className='social-link'>
                    <FaLinkedin style={{fontSize: "2.2rem", borderRadius: "5rem", cursor: "pointer"}} />
                    <FaInstagramSquare style={{fontSize: "2.2rem", marginLeft: "1rem", borderRadius: "5rem", cursor: "pointer"}} />
                    <FaTwitterSquare style={{fontSize: "2.2rem", marginLeft: "1rem", borderRadius: "5rem", cursor: "pointer"}} />
                    <FaYoutubeSquare style={{fontSize: "2.2rem", marginLeft: "1rem", borderRadius: "5rem", cursor: "pointer"}} />
                    <FaFacebook style={{fontSize: "2.2rem", marginLeft: "1rem", borderRadius: "5rem", cursor: "pointer"}} />
                </div>
                <div className='downlink-link'>
                    <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="apple store" />
                    <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="play store" />
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-<br />2023 © Zomato™ Ltd. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer