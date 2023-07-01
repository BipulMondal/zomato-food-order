import React from 'react'
import { AiOutlineDown } from 'react-icons/ai'

const Exploreoptions = () => {
  return (
    <div className='explore-option-main'>
        <h1>Explore options near me</h1>
        <div className="explore-options">
            <h3>Popular cuisines near me</h3>
            <AiOutlineDown />
        </div>
        <div className="explore-options">
            <h3>Popular restaurant types near me</h3>
            <AiOutlineDown />
        </div>
        <div className="explore-options">
            <h3>Top Restaurant Chinas</h3>
            <AiOutlineDown />
        </div>
        <div className="explore-options">
            <h3>Cities We Deliver To</h3>
            <AiOutlineDown />
        </div>
    </div>
  )
}

export default Exploreoptions