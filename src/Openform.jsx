import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Openregister from "./Openregister";
import { useNavigate } from "react-router-dom";
import user from "./images/person.png";
import email from "./images/email.png";
import password from "./images/password.png";
import "./makeupsheet.css"
import auth from "./config";

function Openform(){
   const[passType,setpassType]=useState(false);

     const navigate=useNavigate()

    function handleCheckone(){
           setpassType(!passType);
        };

           
    const [suser,setSuser]=useState()
    const [spass,setSpass]=useState()     
     
    function handleNavigate(){
      navigate("/Login")
      
    } 

    function handleSignup(){
         createUserWithEmailAndPassword(auth,suser,spass)
         .then(()=>{
          navigate("/Login")
          alert("SIGNUP SUCCESSFULL")
        }).catch(()=>{
          alert("SIGNUP FAILED, SIGNUP AGAIN !")
        })
}
  
return(

<div class="container_one">
    <div class="header_one"> 
      <div class="text_one">Signup</div>
      <div class="underline_one"></div>
    </div>
    <div class="inputs_one">

      <div class="input_one">
        <img src={user} alt="" />
        <input type="text" placeholder="Enter your Name"/>
      </div>

      <div class="input_one">
        <img src={email} alt="" />
        <input type="email" onChange={(e)=>setSuser(e.target.value)} placeholder="Enter your E-mail" required/>
      </div>

      <div class="input_one">
        <img src={password} alt="" />
        <input type={passType?"text":"password"} minLength={7} onChange={(e)=>setSpass(e.target.value)} placeholder="Enter your Password" required/>
      </div>
    </div>
    <div class="pass_one"><input type="checkbox" onChange={handleCheckone}/> Show Password</div>
    <div class="submit_con">
    <div class="submit_one" onClick={handleSignup}><button onClick={handleSignup}>SignUp</button>SignUp</div>
      <div class="submit_one" style={{backgroundColor:"#808080"}} onClick={handleNavigate}>Login ➡</div>
    </div>
</div>

)};

export default Openform