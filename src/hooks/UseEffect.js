import React, { useState,useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const [count, setCount] = useState(10);

  function setCountBtn(params) {
    console.log(params);
    if (params === "increment") {
      setCount(count + 1);
    } else {
      if(count >=1){
          setCount(count - 1);
      }  
    }
  }

  useEffect(() => {
    console.log("hii hello ");
    document.title = Chats()
  },[])
  
  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div
          onClick={() => {
            setCountBtn("increment");
          }}
          class="button2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>

        {/* <div
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
        </div> */}
      </div>
    </>
  );
};

export default UseEffect;
