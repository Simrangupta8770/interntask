import AddProfBut from './AddProfBut';
import CirChart from './CirChart';
import './chart.css';
function ThirdRow() {

  return (
    <>
         
         <div className="cardch"><div style={{display:'flex',justifyContent:'space-between'}}>
          <h4>Activities</h4>
          <h6 style={{color:'grey'}}>12 May</h6></div>
              <div className="third-row">
                  <CirChart />
                  <AddProfBut />
                  </div>
     </div>
    </>
  );
 
  
  

}

export default ThirdRow;
