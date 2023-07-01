import React from "react";
import "../style.css"
import Collections from "./Collections";
import PopulerPlaces from "./PopulerPlaces";
import Gettheapp from "./Gettheapp";
import { BsSearch } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'
import Exploreoptions from "./Exploreoptions";
import Footer from "./Footer";


const Header = () => {
  return (
    <div className="main">
      <div className="header-top">
      <nav className="navbar">
        <div className="GetTheApp">
          <h1>Get The App</h1>
        </div>
        <div className="navlist">
          <h2>Investor Relations</h2>
          <h2>Add Resturant</h2>
          <h2>Log in</h2>
          <h2>Sign Up</h2>
        </div>
      </nav>

      <div className="name">
        <img
          id="zomato"
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt=""
        />
        <h3>Discover the best food & drink in kolkata</h3>
        <div className="searchbar">
          <div className="searchbar_left">
            <div className="searchbar_left_left">
              <img id="location" src="./location.png" alt="" />
              <h5>Kolkata</h5>
            </div>
            <div className="searchbar_left_right">
              <AiFillCaretDown style={{fontSize: "1.5rem", padding: "0 1rem"}} />
              <div className="line"></div>
              <BsSearch style={{fontSize: "1.5rem", padding: "0 1rem"}}/>
            </div>
          </div>
          <div className="searchbar_right">
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
      </div>
    </div>
     <div className="header-bottom">
         <div className="bottom-div">
           <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
           <h3>Order Online</h3>
           <p>Stay home and order to your doorstep</p>
         </div>
         <div className="bottom-div">
           <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
           <h3>Dining</h3>
           <p>View the city's favourite dining venues</p>
         </div>
         <div className="bottom-div">
           <img src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
           <h3>Nightlife and clubs</h3>
           <p>Explore the city's top nightlife outlets</p>
         </div>
     </div>
     <Collections/>
     <PopulerPlaces />
     <Gettheapp />
     <Exploreoptions />
     <Footer />
    </div>
     
  );
};

export default Header;
