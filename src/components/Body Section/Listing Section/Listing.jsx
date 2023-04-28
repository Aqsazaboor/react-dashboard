import React from 'react';
import './listing.css';
import {BsArrowRightShort}from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'



import whitepot from '../../../Assets/white (1).jpg'
import img2 from '../../../Assets/white (2).jpg'
import seller from '../../../Assets/seller.jpg'
import img3 from '../../../Assets/white (3).jpg'
import img4 from '../../../Assets/white (4).jpg'
import user1 from '../../../Assets/users (1).jpg'
import user2 from '../../../Assets/users (2).jpg'
import user3 from '../../../Assets/users (3).jpg'
import user4 from '../../../Assets/users (4).jpg'
import user5 from '../../../Assets/users (5).jpg'
import featured1 from '../../../Assets/featured (1).jpg';
import featured2 from '../../../Assets/featured (2).jpg';
import featured3 from '../../../Assets/featured (3).jpg';
import featured4 from '../../../Assets/featured (4).jpg';
import featured5 from '../../../Assets/featured (5).jpg';

const Listing = () => {
  return (
    <div className='lisitingSection'>
      <div className="heading flex">
        <h1>My lisiting</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"
          />
        </button>
      </div>


<div className="seeContainer flex">
  <div className="singleItem">
  <AiFillHeart className="icon"/>
  <img src={whitepot} alt="imageName" />
  <h3>Annual Vince</h3>
  </div>


  <div className="singleItem">
  <AiOutlineHeart className="icon"/>
  <img src={img2} alt="imageName" />
  <h3>Bonsay Plant</h3>
  </div>


  <div className="singleItem">
  <AiOutlineHeart className="icon"/>
  <img src={img3} alt="imageName" />
  <h3>Button Fern</h3>
  </div>

  <div className="singleItem">
  <AiFillHeart className="icon"/>
  <img src={img4} alt="imageName" />
  <h3>Caman Plant</h3>
  </div>
</div>

  <div className="sellers flex">
<div className="topSellers">
  <div className="heading flex">
    <h3>Top Sellers</h3>
    <button className='btn flex'>
          See All <BsArrowRightShort className="icon"
          />
        </button>
  </div>
  <div className="card flex">
    <div className="users">
      <img src={seller}alt="" />
      <img src={user1} alt="" />
      <img src={user2} alt="" />
      <img src={user3} alt="" />
      <img src={user4} alt="" />
      <img src={user5} alt="" />
    </div>
    <div className="cardText">
      <span>
        14.556 Plant sold <br />
        <small>
        21 Sellers <span className="date">7Days
        </span>
        </small>
      </span>
    </div>
  </div>
</div>


<div className="FeaturedSellers">
  <div className="heading flex">
    <h3>Featured Sellers</h3>
    <button className='btn flex'>
          See All <BsArrowRightShort className="icon"
          />
        </button>
  </div>
  <div className="card flex">
    <div className="users">
      <img src={featured1}alt="" />
      <img src={featured2} alt="" />
      <img src={featured3} alt="" />
      <img src={featured4} alt="" />
      <img src={featured5} alt="" />
      <img src={featured1} alt="" />
    </div>
    <div className="cardText">
      <span>
        28,556 Plant sold <br />
        <small>
        21 Sellers <span className="date">31 days
        </span>
        </small>
      </span>
    </div>
  </div>
</div>
</div>

      
    </div>
  );
}

export default Listing;
