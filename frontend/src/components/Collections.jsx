import React from 'react'
import "../style.css"
import { FiTriangle } from 'react-icons/fi'

const Collections = () => {
  return (
    <div className='Collection-main'>
        <h1>Collections</h1>
        <div className='collection-text'>
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends</p>
            <p id="all-collection">All Collections in kolkata 
            <span><img id="red-triangle" src="./red triangle.png" alt="" /></span></p>
        </div>
       <div className="collections">
       <div className="collection-image">
          <img src="https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054191.jpg?output-format=webp" alt="" />
         <div className='collections-bottom-text'>
         <h4>11 Blissful Breakfast Places</h4>
          <h5>11 Places 
            <span><FiTriangle style={{fill: "white", rotate: '90deg' , marginLeft: '1rem'}} /></span>
          </h5>
         </div>
        </div>
        <div className="collection-image">
          <img src="https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1675231247.jpg?output-format=webp" alt="" />
         <div className='collections-bottom-text'>
         <h4>9 Newly Opened Restaura...</h4>
          <h5>5 Places
          <span><FiTriangle style={{fill: "white" , rotate: '90deg' , marginLeft: '1rem'}} /></span>
          </h5>
         </div>
        </div>
        <div className="collection-image">
          <img src="https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg?output-format=webp" alt="" />
          <div className="collections-bottom-text">
          <h4>Winners of Zomato Resta...</h4>
          <h5>12 Places
          <span><FiTriangle style={{fill: "white" , rotate: '90deg' , marginLeft: '1rem'}} /></span>
          </h5>
          </div>
        </div>
        <div className="collection-image">
          <img src="https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252730.jpg?output-format=webp" alt="" />
          <div className='collections-bottom-text'>
          <h4>11 Best Insta-worthy Places</h4>
          <h5>11 Places
          <span><FiTriangle style={{fill: "white" , rotate: '90deg', marginLeft: '1rem'}}/></span>
          </h5>
          </div>
          
        </div>
       </div>
    </div>
  )
}

export default Collections