import { useState } from "react";
import {  signInWithEmailAndPassword } from "firebase/auth";
import "./makeupsheet.css"
import email from "./images/email.png";
import password from "./images/password.png";
import auth from "./config";
import { useNavigate } from "react-router-dom";

const Openregister=()=>{
const navigate=useNavigate()
   const [suser,setSuser]=useState()
const [spass,setSpass]=useState()  
const[passType,setpassType]=useState(false);
//const[showpass,setshowpass]=useState(false);  

function handleCheckone(){
  setpassType(!passType);
};
  
function handleLogin(){
        signInWithEmailAndPassword(auth,suser,spass).then(()=>{
        navigate("/Movies")}).catch(()=>{
            alert(" LOGIN AGAIN")
        })
  }

     function handlenavigate(){
       navigate("/Signup")
     }


    return(

    <div class="container_one">
    <div class="header_one"> 
      <div class="text_one">Login</div>
      <div class="underline_one"></div>
    </div>
    <div class="inputs_one">


      <div class="input_one">
        <img src={email} alt="" />
        <input type="email" onChange={(e)=>setSuser(e.target.value)} placeholder="Enter your E-mail"/>
      </div>

      <div class="input_one">
        <img src={password} alt="" />
        <input type={passType?"text":"password"} minLength={7} onChange={(e)=>setSpass(e.target.value)} placeholder="Enter your Password" required/>
      </div>
    </div>
    <div class="pass_one"><input type="checkbox" onChange={handleCheckone}/> Show Password</div>
    <div class="submit_con">
      <div className="submit_one" onClick={handleLogin}><button  onClick={handleLogin}>Login</button>Login</div>
      <div class="submit_one"  style={{backgroundColor:"#808080"}} onClick={handlenavigate}>SignUp ➡</div>
    </div>
</div>

    )
}
export default Openregister
