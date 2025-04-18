import React, { useState } from "react";

const Pr2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")

  const handleName = (e) => {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    setName(e.target.value);
  };

  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name is : ", name);
    console.log("Email is : ", email)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter your Name:</label>
        {/* <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> */}
        <input type="text" value={name} onChange={handleName} />

        <label htmlFor="">Enter your Email : </label>
        <input type="text" value={email} onChange={handleEmail}/>

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Pr2;
