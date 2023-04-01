import React from "react";
// import Format from "./Format";
// import Time from "./Time";
import Flex from "./Flex";
import Btn from "./buttons";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <p>{props.key}</p>
          <Flex imgURL={props.imgURL} />
          <h2 className="name">{props.name}</h2>
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
    </div>
  );
}

export default Card;
