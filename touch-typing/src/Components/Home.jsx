import React from "react";
import Result from "./Result";
import InputType from "./InputType";

function Home() {
  return (
    <div className="border-box" style={{ border:'1px solid whitesmoke'}}> 
      <InputType />
      <Result />
    </div>
  );
}

export default Home;
