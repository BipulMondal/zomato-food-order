import React from "react";
import "../style.css";
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineDown } from 'react-icons/ai'

const PopulerPlaces = () => {
  return (
    <div className="places-main">
      <h1>
        Populer localities in and around <span id="Kolkata">Kolkata</span>
      </h1>
      <div className="places">
        <div className="place">
          <div className="place-text">
            <h1>Park Street Area</h1>
            <h6>163 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
        <div className="place">
          <div className="place-text">
            <h1>Sector 5, Salt Lake</h1>
            <h6>215 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
        <div className="place">
          <div className="place-text">
            <h1>Sector 1, Salt Lake</h1>
            <h6>219 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <div className="places">
        <div className="place">
          <div className="place-text">
            <h1>Ballygunge</h1>
            <h6>170 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
        <div className="place">
          <div className="place-text">
            <h1>Southern Avenue</h1>
            <h6>115 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
        <div className="place">
          <div className="place-text">
            <h1>New Town</h1>
            <h6>706 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
      </div>
      <div className="places">
        <div className="place">
          <div className="place-text">
            <h1>Camac Street Area</h1>
            <h6>68 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
        <div className="place">
          <div className="place-text">
            <h1>Chinar Park</h1>
            <h6>237 places</h6>
          </div>
          <div className="right-arrow">
            <AiOutlineRight />
          </div>
        </div>
        <div className="place">
          <div className="place-text see-more">
            <h1>See more</h1>
            <AiOutlineDown style={{marginLeft: "1.5rem"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerPlaces;
