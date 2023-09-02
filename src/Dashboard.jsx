import { useEffect, useState } from "react";
import Nav from "./Nav";
import SIdebar from "./SIdebar";
import { Navigate } from "react-router-dom";

import AddProfBut from "./AddProfBut";
import FirstRow from "./FirstRow";
import SecondRow from './SecondRow';
import ThirdRow from "./ThirdRow";

const Dashboard = () => {
  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated") || false;
    
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    return <Navigate replace to="/" />;
  } else{ 
    return (
    <>
    <div className="fulldash">
      <div className="sidebar">
      <SIdebar />
      </div>
      <div className="rightdash">
      <Nav />
     <FirstRow />
     <SecondRow />
     <ThirdRow />
          </div> 
          </div>
  </>
  );

      }
      };


export default Dashboard;