import React from "react";

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
        </form> 
      </div>
    );
}
export default Write;