import React, { useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
    console.log("action --> ", action,state);
   
    if(action.type === "INCR"){
      state = state + 1;
    }

    if(state > 0 && action.type === "DEC"){
        state = state - 1;
    }
    

    return state;
}


const UserReducer = () => {
  const initialData = 10 ; 
  const [state, dispatch] = useReducer(reducer, 0);

  console.log(state);
  function setCountBtn(params) {
    if (params === "increment") {
     dispatch({type:"INCR"})
    } else {
      dispatch({type:"DEC"})
      
    }

   
  }

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div
          onClick={() => {
            setCountBtn("increment");
          }}
          class="button2"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>

        <div
          onClick={() => {
            setCountBtn("decrement");
          }}
          class="button2"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Decrement
        </div>
      </div>
    </>
  );
};

export default UserReducer;
