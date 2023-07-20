import React, { useState } from "react";

const Test = (props) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  console.log("testzhixing");

  return (
    <div>
      <div>{count}</div>
      <input
        type="text"
        onChange={(e) => {
          setTimeout(() => {
            console.log(new Date().getTime());
            setText(e.target.value);
            setCount(e.target.value.length);
            console.log(new Date().getTime());
          }, 100);
        }}
      ></input>
      <div>{text}</div>
    </div>
  );
};
export default Test;
