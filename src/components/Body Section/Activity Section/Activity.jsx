import React from 'react';
import './activity.css';
import {BsArrowRightShort}from 'react-icons/bs'
import user1 from '../../../Assets/users (1).jpg'
import featured1 from '../../../Assets/featured (1).jpg'
import featured2 from '../../../Assets/featured (2).jpg'
import featured3 from '../../../Assets/featured (3).jpg'
const Activity = () => {
  return (
    
      <div className="activitySection">
        <div className="heading flex">
          <h1>Resent Activity</h1>
          <button className='btn flex'>
            See All
            <BsArrowRightShort className="icon"/>
          </button>
        </div>

        <div className="secContainer grid"> 
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Orderd a new plants</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={featured1} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Orderd a new plants</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={featured2} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Orderd a new plants</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={featured3} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Orderd a new plants</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className='name'>Ola Martha</span>
            <small>Orderd a new plants</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        </div>
      </div>
    
  );
}

export default Activity;
