import React from "react";
import gif from "../components/giphy-logo-1.svg";

const Logo = () =>{
    return(
        <div className='logo'>
        <img src={gif} className="App-logo" alt='logo'/>
      </div>
    )
}
export default Logo;