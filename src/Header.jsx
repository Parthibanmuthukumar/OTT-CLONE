import "./Netflix-style.css"
import netflixlogo from "./images/netflix-name.png"
import Middle from "./Middle"
import Footer from "./Footer"
import sec1 from "./images/sec-1-tv-netflix.jpeg"
import sec2 from "./images/sec-2-tv-netflix.jpeg"
import download from "./images/downloadimg-netflix.jpeg"
import kids from "./images/children-netflix.jpeg"
import { useNavigate } from "react-router-dom"
//import Openform from "./Openform"
//import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Header(){
    const navigate=useNavigate();

    function handleClick(){
        navigate("/Signup")

    }
 return(
   <> 
   <div class="body">
          <nav class="header">
        <div class="header-s1">
          <img src={netflixlogo} alt="netflix-name" class="netflix-logo"/>
            <div class="header-s1-p1">
                <tr><td><select>
                    <option>English</option>
                    <option>
                        <a>தமிழ்</a></option>
                    </select></td></tr>
                <button><a id="Sign-In" onClick={handleClick} >Sign In</a></button>
            </div>
        </div>
      <div class="context">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>Ready to watch? Enter your email to create or restart your membership </p>
        <form class="email-input">
            <input type="email" placeholder="Email address" />
            <button><a onClick={handleClick} >Get Started </a></button>
        </form>
    </div>
    </nav>
    <section class="row-txt">
        <div class="row-txt-1">
            <div class="col-txt-1">
                <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div class="col-img-1">
               <img src={sec1} alt="" style={{position: "relative;"}}/>
    
            </div>
        </div>
        <div class="row-txt-1">
            <div class="col-img-1">
                <img src={download} alt=""/>
    
                
             </div>
            <div class="col-txt-1">
                <h1>Download your shows to watch offline</h1>
                <p>Save your favourites easily and always have something to watch.</p>
            </div>
            
        </div>
        <div class="row-txt-1">
            <div class="col-txt-1">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div class="col-img-1">
               <img src={sec2} alt="" id="img-vid-3-rel"/>
            </div>
        </div>
        <div class="row-txt-1">
            <div class="col-img-1">
                <img src={kids} alt=""/>
     
             </div>
            <div class="col-txt-1">
                <h1>Create profiles for Kids</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>

    </section>
      <Middle/>
      <Footer/>
  
      </div></>
 );  
}
export default Header;