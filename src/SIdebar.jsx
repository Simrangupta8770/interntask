import React from 'react';
import {AiOutlineDashboard,GrTransaction,AiOutlineSchedule,AiOutlineUser,AiFillSetting } from "@react-md/icon";

const SIdebar = () => {
    const dash = ['DashBoard', 'Transactions', 'Schedules', 'Users', 'Settings'];
    let i = 0;
    // const ico = ['AiOutlineDashboard', 'GrTransaction', 'AiOutlineSchedule', 'AiOutlineUser', 'AiFillSetting'];
  return (
    <>
          <div className="side">
              <h1>Board </h1>
              <div className="side-content">
                  {dash.map((d) => {
                      return (
                          <p>{d}</p>
                       
                      )
                      {i++}
                      
                  })
                  }
                  </div>
          </div>
      </>
  )
}

export default SIdebar;