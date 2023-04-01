import React from "react";
import Card from "./Card";
import cinemas from "./cinemas";
//import Flex from "./Flex";

//console.log(cinemas[0].name)
let movie="";

function createCard(cine) {
  return (
    <Card
      key={cine.id}
      name={cine.name}
      imgURL={cine.imgURL}
      t1={cine.timings[0]}
      t2={cine.timings[1]}
      t3={cine.timings[2]}
      t4={cine.timings[3]}
      t5={cine.timings[4]}
      t6={cine.timings[5]}
      f1={cine.format[0]}
      f2={cine.format[1]}
      f3={cine.format[2]}
      f4={cine.format[3]}
      movie={movie}
    />
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    movie=props.movie;
  }
  render(){
    return (
      <div style={{background:"tomato"}}>
        <h1 className="heading" >Cinemas</h1>
        {cinemas.map(createCard)}
      </div>
    );
  }
}

export default App;
