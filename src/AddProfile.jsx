import React,{useState} from 'react';
import './addprof.css';
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Profile from './Profile';

const AddProfile = ({ modalOpen, setModalOpen }) => {
  const navigate = useNavigate();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "12px",
    },
  };
 
  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [yt, setYt] = useState("");
 
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleSubmit = () => {
    if (name == "" || email == "" || phone == "") {
      alert("fill in all necessary details");
      return;
    }
    const prof = {
      "name":name,
      "email": email,
      "phone": phone,
      "insta": insta,
      "yt": yt
    }
    localStorage.setItem("prof", JSON.stringify(prof));
    console.log(name);
    window.location.reload();
  };
  


  return (
  <>
     
    
        <Modal isOpen={modalOpen} style={customStyles}>
          <div className="modal-inner">
            <div className="add-form card">
      
              <div className="tab-container">
                <div
                  className={`tab ${activeTab === 1 ? 'active' : ''}`}
                  onClick={() => handleTabClick(1)}
                >
                  Basic
                </div>
                <div
                  className={`tab ${activeTab === 2 ? 'active' : ''}`}
                  onClick={() => handleTabClick(2)}
                >
                  Social
                </div>
              </div>

              <div className="tab-content">
                {activeTab === 1 && (
                  <>
                    <div className="form">
                      <label>Enter Name :</label>
                      <input type="text" value={name} placeholder='Eg : John Doe' required
                        onChange={(e) => setName(e.target.value)} />
                      <label>Enter Email :</label>
                      <input type="email" value={email} placeholder='Eg : john@eg.com' required
                        onChange={(e) => setEmail(e.target.value)} />
                      <label>Enter Phone :</label>
                      <input type="number" value={phone} placeholder='Eg :0000000000' required
                        onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <button onClick={() => handleTabClick(2)}>Next</button>
                  </>
                )}
                {activeTab === 2 && (
                  <>
                    <div className="form">
         
                      <label>Instagram Link <span class="light">(Optional)</span></label>
                      <input type="text" value={insta} placeholder='Eg. ..instagram/username '
                        onChange={(e) => setInsta(e.target.value)} />
                      <label>You Tube Link <span class="light">(Optional)</span></label>
                      <input type="text" value={yt} placeholder='Eg. ..youtube/username'
                        onChange={(e) => setYt(e.target.value)} />
                    </div>
                    <button onClick={() => handleTabClick(1)}>Back</button>
                    <button onClick={handleSubmit}>Submit</button>
                  </>
                )}
              </div>

     
            </div>
          </div>
        </Modal>
      
      </>
  )
}

export default AddProfile;