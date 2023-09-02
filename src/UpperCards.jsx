import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './upcard.css';
const UpperCards = ({title,subh,num,par}) => {
    
  return (
      <>
          <div className="card">
          <div className="card-img">
          <i className={title}></i>
            </div>
            <div className="card-subh">
                  <h6>{subh}</h6>
            </div>
              <div className="card-num">
                  <h5>{num}</h5>
                  <p>{par}</p>
            </div>

          </div>
    </>
  )
}

export default UpperCards