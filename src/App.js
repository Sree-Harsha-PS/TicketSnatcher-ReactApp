import './App.css'
import Login from "./components/login/login.js"
import Register from "./components/register/register.js"
import MvApp from './components/homepage/Movies-App'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import background from './components/ticketsnatcher.png';

function Appbar(){
  return(
    <div style={{display:"block",justifyContent:'space-between',alignItems:"-moz-initial"}}>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger" style={{height:"70px"}}>
        <a class="navbar-brand mx-3 mt-3" href="http://localhost:3000/home"><p id="title" style={{color:"black" ,fontSize:"30px",fontFamily:"Impact"}}>ticketsnatcher</p></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-3">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/home" id="home" style={{}}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/login" id="login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/register" id="regis">Register</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

let root= ReactDOM.createRoot(document.getElementById("root"))
function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <>
    <div className="App" style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"100%"}}>             
    <Appbar style={{position:"absolute",top:"0px"}}></Appbar>
    {
       <Routes>
                  
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