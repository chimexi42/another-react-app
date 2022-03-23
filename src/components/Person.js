import React from "react";
// import Radium from "radium"
import '../CSS/Person.css'

const Person = (props) =>{
    return (
        <div className="Person">
              <p onClick={props.click}> I'm {props.name} and i am {props.age}</p>
              <p>{props.children}</p>
              <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}



export default Person