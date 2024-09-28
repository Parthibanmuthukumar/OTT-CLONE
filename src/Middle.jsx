import "./Netflix-style.css"
import { useNavigate } from "react-router-dom"
function Middle(){

  const navigate =useNavigate()
  function handleClick(){
        navigate("/Signup")
    }
    return(
       <>
          <div class="faq">
        <h1>Frequently Asked Questions</h1>
        <ul class="faq-list">
           <li>
               <input type="radio" name="faq-list" id="one"/>
               <label htmlFor="one" id="label-1">What is Netflix?</label>
   
               <div class="ans-faq" id="ans-faq-1">
                   <p >Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
                   </p><br/><p>
                       You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
               </div>
           </li>
           <li>
               <input type="radio" name="faq-list" id="two"/>
               <label htmlFor="two" id="label-2">How much does Netflix cost?</label>
               <div class="ans-faq" id="ans-faq-2">
                   <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                   </p>
               </div>
           </li>
           <li>
               <input type="radio" name="faq-list" id="three"/>
               <label htmlFor="three" id="label-3">Where can I watch?</label>
               <div class="ans-faq" id="ans-faq-3">
                   <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                   </p><br/><p>
                       You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                   </p>
               </div>
           </li>
           <li>
               <input type="radio" name="faq-list" id="four"/>
               <label htmlFor="four" id="label-4" >How do I cancel?</label>
               <div class="ans-faq" id="ans-faq-4">
                   <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime
                   </p>
               </div>
           </li>
           <li>
               <input type="radio" name="faq-list" id="five"/>
               <label htmlFor="five" id="label-5">What can I watch on Netflix?</label>
               <div class="ans-faq" id="ans-faq-5">
                   <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                   </p>
               </div>
           </li>
           <li>
               <input type="radio" name="faq-list" id="six"/>
               <label htmlFor="six" id="label-6">Is Netflix good for kids?</label>
               <div class="ans-faq" id="ans-faq-6">
                   <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                   </p><br/>
                   <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
               </div>
           </li>
        </ul>
        <p class="para">Ready to watch? Enter your email to create or restart your membership.</p>
        <form class="email-input" id="email-input-2">
           <input type="email" placeholder="Email address"/>
           <button onClick={handleClick}>Get Started </button>
       </form>
      </div>
       </>

    )
}
export default Middle