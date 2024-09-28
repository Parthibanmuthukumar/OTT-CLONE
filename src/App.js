import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Openform from "./Openform";
import Openregister from "./Openregister";
// import { useEffect, useState } from "react";
import MainHeader from "./Disney Full Page/MainHeader";
function App() {

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/Signup" element={<Openform/>}></Route>
        <Route path="/Login" element={<Openregister/>}></Route>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/Movies" element={<MainHeader/>}></Route>
       </Routes>
    </BrowserRouter>
   </>
  )
}

export default App;
