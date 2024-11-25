import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Contact from "./Contact";
import Nopage from "./Nopage";
import Blogs from "./Blogs";
import Layout from "./Layoot";
import Home from "./Home";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<Nopage/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;