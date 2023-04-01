import React from "react";
import Format from "./Format";
import Time from "./Time";
import Flex from "./Flex";
import ReactDOM from 'react-dom/client';
import Nishan from './Nishan/Nishan';
let movie = "";

function Btn(props) {
  return (
    <div>
      <button className="btn" onClick={goto}>
        <Time time={props.timings} />
        <Format format={props.format} />
      </button>
    </div>
  );
}

function Card(props){
  movie=props.movie;
  return (
      <div className="card">
        <div className="top">
          <p>{props.key}</p>
          <Flex imgURL={props.imgURL} />
          <h2 className="name" >{props.name}</h2>
        </div>
        <div className="bottom">
          <div>
            <Btn timings={props.t1} format={props.f1} />
          </div>
          <div>
            <Btn timings={props.t2} format={props.f2} />
          </div>
          <div>
            <Btn timings={props.t3} format={props.f3} />
          </div>
          <div>
            <Btn timings={props.t4} format={props.f1} />
          </div>
          <div>
            <Btn timings={props.t5} format={props.f3} />
          </div>
          <div>
            <Btn timings={props.t6} format={props.f2} />
          </div>
        </div>
      </div>
  );
}

let root=ReactDOM.createRoot(document.getElementById("root"));

function goto(){
   root.render(<Nishan movie={movie} ></Nishan>)
}


export default Card;
