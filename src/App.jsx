import { useState } from "react";
import React from "react";
const App = ()=>{


const [bgcolor,setBgColor]=useState("#ffffff")
const changecolor=()=>{
  setBgColor("red")
}
const changecoloryellow=()=>{
  setBgColor("yellow")
}
const changecolorgreen=()=>{
  setBgColor("green")
}
const changecolorblue=()=>{
  setBgColor("blue")
}
const changecolororenge=()=>{
  setBgColor("orange")
}
const changecolorgrey=()=>{
  setBgColor("grey")
}
const changecolorblack=()=>{
  setBgColor("black")
}
const changecolorviolet=()=>{
  setBgColor("violet")
}
const changecolorskyblue=()=>{
  setBgColor("skyBlue")
}
const changecolorrose=()=>{
  setBgColor("brown")
}


return(
  
  <div style={{width:"100%",height:"100vh",backgroundColor:`${bgcolor}`}}className="d-flex justify-content-center align-items-center">
    <div className="bg-dark rounded  " >
    <button style={{backgroundColor:"red",margin:"10px",padding:"10px 50px"}} className="rounded"  onClick={changecolor}>red</button>
    <button style={{backgroundColor:"yellow",margin:"10px",padding:"10px 50px"}} className="rounded"   onClick={changecoloryellow}>yellow</button>
    <button style={{backgroundColor:"green",margin:"10px",padding:"10px 50px"}} className="rounded"  onClick={changecolorgreen}>green</button>
    <button style={{backgroundColor:"blue",margin:"10px",padding:"10px 50px"}} className="rounded"  onClick={changecolorblue}>blue</button>
    <button style={{backgroundColor:"orange",margin:"10px",padding:"10px 50px"}} className="rounded"  onClick={changecolororenge}>orange</button>
    <div>
      <button style={{backgroundColor:"grey",margin:"10px",padding:"10px 50px"}} className="rounded"  onClick={changecolorgrey}>grey</button>
      <button style={{backgroundColor:"black",margin:"10px",padding:"10px 50px"}} className="rounded text-white"  onClick={changecolorblack}>black</button>
      <button style={{backgroundColor:"violet",margin:"10px",padding:"10px 50px"}} className="rounded"  onClick={changecolorviolet}>violet</button>
      <button style={{backgroundColor:"skyBlue",margin:"10px",padding:"10px 50px"}} className="rounded text-white"  onClick={changecolorskyblue}>skyBlue</button>
      <button style={{backgroundColor:"brown",margin:"10px",padding:"10px 50px"}} className="rounded text-white"  onClick={changecolorrose}>brown</button>


   </div>
    </div>

  </div>

  
)
}
export default App





