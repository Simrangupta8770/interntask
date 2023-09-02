import React from 'react';
import './style.css';
import {
    FaceFontIcon,SearchFontIcon
} from "@react-md/material-icons";
const Nav = () => {
  return (
   <>
          <div className="nav">
              <h3>Dashboard</h3>
              <div className="rightnav">
                  <div className="search">
                     <SearchFontIcon />
                      <input type="text" placeholder='Search' />
                      {/* <IoIosNotificationsOutline />
                      <CgProfile /> */}
                      <FaceFontIcon />
              </div>
              </div>
   </div>
   </>
  )
}

export default Nav