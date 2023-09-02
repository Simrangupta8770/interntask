import React,{useState} from 'react';
import AddProfile from './AddProfile';
import Profile from './Profile';
import {
    AddFontIcon
} from "@react-md/material-icons";

import './style.css';
const AddProfBut = () => {
    const [modalOpen, setmodalOpen] = useState(false);
    const [pset, setpset] = useState(localStorage.getItem("prof")===null ? false : true);
    const handleClick = () => {
        setmodalOpen(!modalOpen);
        console.log(modalOpen);
        if (localStorage.getItem("prof") != null) {
            console.log(JSON.parse(localStorage.getItem("prof")).name);
            setpset(true);
            
        }
    }
    const prof = JSON.parse(localStorage.getItem("prof"));
    
  return (
      <>
          {pset ? <Profile name={prof.name} email={prof.email} phone={prof.phone} yt={prof.yt}
              insta={prof.insta} /> :
              <>
          <AddProfile modalOpen={modalOpen} />
          <div className="add-button" onClick={handleClick}>
          <AddFontIcon />
                      Add Profile
                       </div>
                      </>
     
          
}
      </>

  )
}

export default AddProfBut;