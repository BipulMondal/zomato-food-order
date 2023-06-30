import React from 'react'

const Gettheapp = () => {
  return (
    <div className='getapp-main'>
        <div className='getapp-left'>
            <img id='mobile' src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="" />
        </div>
        <div className='getapp-right'>
            <h1>Get the Zomato app</h1>
            <p>We will send you a link,open it to your phone to download <br />the app</p>
            <div className="checkbox">
                <div className="email">
                <input type="radio" id="email" />
                <label htmlFor="email">Email</label>
                </div>
                <div className="phone">
                <input type="radio" id="phone" />
                <label htmlFor="phone">Phone</label>
                </div>
            </div>
            <div className="share-link">
                <input type="text" id='search' placeholder='Email'/>
                <button id='share-link-btn'>Share App Link</button>
            </div>
            <div className="getappbottom">
            <h6>Download app from</h6>
            <div className='link'>
                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="google play" />
                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="Apple Store" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Gettheapp