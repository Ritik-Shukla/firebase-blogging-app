import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
  return(
    <div className="">
  <ul>
   <li><a href='/'>Home</a></li>
   <li><a href='/create-post'>CreatePost</a></li>
  </ul>
    </div>
  );
}
export default Navbar;
