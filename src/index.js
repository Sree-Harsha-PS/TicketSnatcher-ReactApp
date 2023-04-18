import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function Appbar(){
  return(
    <div>
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

ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <Appbar/>
    <App></App>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
)