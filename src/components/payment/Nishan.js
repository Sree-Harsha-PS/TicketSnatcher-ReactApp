import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pay from './component-end/pay';

const root = ReactDOM.createRoot(document.querySelector("#root"));
let tickets=[];
let movie="";
let count=0;

function Getno(){
  const tick = document.getElementById("get");
  if(count!==1){
  for(let i=1;i<11;i++){
    const inp = document.createElement('option');
      inp.value=i;
      inp.innerHTML=i;
      tick.appendChild(inp); 
  }
  }
  count=1;
  if(tick.value!==0){
      const book = document.querySelector('#book');
      book.style.display='block';
  }
 }

 class Logo extends React.Component{
    constructor(props){
      super(props);
      movie=props.movie;
      console.log(movie);
    }       
    render(){
      return(
        <div style={{background:"black",color:"white"}}>
              <center>
              <h1 id="title">ticketsnatcher</h1>
              <p id="inter">Enter number of tickets to be booked</p>   
              <select id="get" onClick={Getno} >
                <option>select</option>
              </select>
              <div id ='book' onClick={init}>Book</div>   
              <div>
                <table id='col' onLoad={Getno}>
                <tr id="A"><td>A</td></tr>
                <tr id="B"><td>B</td></tr>
                <tr id="C"><td>C</td></tr>
                <tr id="D"><td>D</td></tr>
                <tr id="E"><td>E</td></tr>
                <tr id="F"><td>F</td></tr>
                <tr id="G"><td>G</td></tr>
                </table>
                <button id="pay" onClick={()=>{root.render(<div>
                  <Pay ticket={tickets} movie={movie}></Pay>
                </div>)}}>go to payment</button>
              </div>         
              </center>      
        </div>
      );
    }
}    

function remticks(arr,value){
  return arr.filter(function(ele){
    return ele!=value;
  })
}

function init(){
    let sel=0;
    const tick = document.getElementById("get");
    const get =document.getElementById('get');
    get.style.display='none';
    document.getElementById("inter").innerHTML="select your tickets";
    document.getElementById('book').style.display='none';
    const col=document.getElementById('col');
    col.style.display='block';
    for(let i=65;i<72;i++){
      const row = document.getElementById(String.fromCharCode(i));
      for(let j=0;j<10;j++){
        const seat=document.createElement('td');
        seat.style.height='16px';
        seat.style.width='15px';
        seat.style.background='white';
        seat.style.cursor='pointer';
        seat.style.margin='5px';
        seat.style.border='1px solid black';
        seat.style.borderRadius='5px';
        row.appendChild(seat);
        seat.addEventListener("click",()=>{
          const buy=document.getElementById('pay');
          if(tick.value===(sel+1)){
                  
          }else{
            if(seat.style.background==='red'){
                seat.style.background='white';
                let id =`${row.id}${j}`;
                tickets=remticks(tickets,id);
                sel--;
                buy.style.display='none';
            }
            else if(tick.value!=sel)
            {
                let id =`${row.id}${j}`;
                tickets.push(id);
                seat.style.background='red';
                sel++;
                if(sel==tick.value){
                    buy.style.display='block';
                }
            }
          }
        });
      }
     }  
}

export default Logo;