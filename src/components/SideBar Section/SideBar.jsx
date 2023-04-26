import React from 'react';
import './sidebar.css'
// import image
import logo from '../../Assets/images.jfif'
// import react icon
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining } from 'react-icons/md'
import {MdOutlineExplore } from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'

const SideBar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt='Image Name'/>
        <h2>Planti.</h2>
      </div>
      <div className="menuDiv">
        <h3 className='divTitle'>
          QUICK MENU
          <ul className='menuLists grid'>
           <li className="listItem">
         <a href="#"className='menuLink flex'>
       <IoMdSpeedometer className="icon" />
         <span className='smallText'>
           Dash board
      </span>
     </a>
     </li>
     <li className="listItem">
         <a href="#"className='menuLink flex'>
       <MdDeliveryDining className="icon" />
         <span className='smallText'>
           My order
      </span>
     </a>
     </li>
     <li className="listItem">
         <a href="#"className='menuLink flex'>
       <MdOutlineExplore className="icon" />
         <span className='smallText'>
           Explore
      </span>
     </a>
     </li>
     <li className="listItem">
         <a href="#"className='menuLink flex'>
       <BsTrophy className="icon" />
         <span className='smallText'>
          Product
           
      </span>
     </a>
     </li>
          </ul>
        </h3>

      </div>
      <div className="settingDiv">
        <h3 className='divTitle'>
          SETTINGS
          <ul className='menuLists grid'>
           <li className="listItem">
         <a href="#"className='menuLink flex'>
       <AiOutlinePieChart className="icon" />
         <span className='smallText'>
           Charts
      </span>
     </a>
     </li>
     <li className="listItem">
         <a href="#"className='menuLink flex'>
       <BiTrendingUp className="icon" />
         <span className='smallText'>
           Trends
      </span>
     </a>
     </li>
     <li className="listItem">
         <a href="#"className='menuLink flex'>
       <MdOutlinePermContactCalendar className="icon" />
         <span className='smallText'>
           Contact
      </span>
     </a>
     </li>
     <li className="listItem">
         <a href="#"className='menuLink flex'>
       <BsCreditCard2Front className="icon" />
         <span className='smallText'>
          Billing
           
      </span>
     </a>
     </li>
          </ul>
        </h3>

      </div>

      
    </div>
  );
}

export default SideBar;
