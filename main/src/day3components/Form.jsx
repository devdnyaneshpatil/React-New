import React, { useState } from "react";

function Form() {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter Your Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
