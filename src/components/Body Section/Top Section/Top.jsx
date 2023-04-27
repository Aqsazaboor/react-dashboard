import React from 'react';
import {BiSearchAlt} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {IoMdNotificationsOutline}from 'react-icons/io'

// import image======>
import admin from '../../../Assets/user3.jfif'
import rainvideo from '../../../Assets/rainvideo.mp4'
import './top.css';
const Top = () => {
  return (
    
      <div className="topSection">
        <div className="headerSection flex">
          <div className="title">
            <h1>Welcome to Pranti.</h1>
            <p>Hello IsraTeach,Welcome Back!</p>
          </div>
          <div className="searchBar flex">
            <input type="text" placeholder='Search Dashbord' />
            <BiSearchAlt className= "icon" />

          </div>
          <div className="adminDiv flex">
            <TbMessageCircle className="icon"/>
           < IoMdNotificationsOutline className="icon"/>
           <div className="adminImage">
<img src={admin} alt="admin pic" />
           </div>
          </div>

        </div>


        <div className="cardSection flex">
          <div className="rightCard flex">
            <h1>Create all sell extraordinary products</h1>
            <p>The world's fast growing industy today are natural made products!</p>
            <div className="buttons flex">
              <button className='btn'>
                Explore More
              </button>
              <button className='btn transparent'>
                sellers
              </button>
            </div>

            <div className="videoDiv">
              <video src={rainvideo} autoPlay loop muted></video>
            </div>
          </div>

          {/* <div className="leftard flex">
            <div className="main flex">
              <div className="textDiv">
                <h1>My stat</h1>

                <div className="flex">
                  <span>
                    Today <br />.<small>4 Orders</small>
                    </span>
                    <div className="flex">
                  <span>
                    This Month <br />.<small>127 Orders</small>
                    </span>
                </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    
  );
}

export default Top;
