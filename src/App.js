import './App.css'
import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import MvApp from './components/homepage/Movies-App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import background from './components/ticketsnatcher.png';

let root= ReactDOM.createRoot(document.getElementById("root"))
function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <>
    
    <div className="App" style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"100%"}}>             
      { <Routes>
                  
          {/* <Route  path="/" element={user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>}>
         
          </Route> */}


          <Route  path="/" element={<Login/>}>
         
          </Route>
          <Route path="/home" element={<Goto></Goto>}></Route>

          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/register" element={ <Register />}>
           
          </Route>
        

      </Routes> }
     
      
      
    </div>
    </>
  );
}

function Goto(){
  root.render(<MvApp></MvApp>);
}

export default App;