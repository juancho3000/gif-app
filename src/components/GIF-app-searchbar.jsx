import React from "react";
import  {BiSearchAlt} from "react-icons/bi";

const Write = () =>{
    return(
        <div className='placeholder'>
      <form className='forms'> 
        <input type="text"
         autoCapitalize='off'
         autoCorrect='off' 
         autoComplete='off'
         placeholder='Search GIFs here'
         className='writting'>
         </input>
         <button type="submit" className="btn">
            <BiSearchAlt/>
            </button>
        </form> 
      </div>
    );
}
export default Write;