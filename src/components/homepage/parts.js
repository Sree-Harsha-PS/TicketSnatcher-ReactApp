import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./Cinema-App";
//import i1 from "./Kantara.png"
let root = ReactDOM.createRoot(document.getElementById("root"));
let movie="";

function Movie(props,index){
    return(
    <Router>
    <> 
        <div className="mv-card">
            <dt>

            <img className="movie-img" src={props.link} alt={props.text}/>
            <button onClick={()=>{goto(props.text)}}>
            <h2 className="movie-name">{props.text}</h2>
            </button>
            </dt>
            <dd>
            <p className="movie-sub">{props.sub} • {props.type}</p>
            </dd>
        </div>
            <Routes>
            <Route exact path="/src/components/App.js" element={<App/>}></Route>
          </Routes>

        </>
    </Router>);
}

function goto(mov){
    console.log(mov)
    root.render(<App movie={mov}></App>);
}

export default Movie;
