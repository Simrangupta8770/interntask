import logo from './logo.svg';
import './App.css';
// import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginScreen from './LoginScreen';
function App() {

  return (
    <>
    <div className="App">
    <BrowserRouter>
      <Routes>
       
        <Route path="/" exact element={<LoginScreen />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
      </div>
    </>
  
  );
}

export default App;
