import React, { useState } from "react";
import  {BiSearchAlt} from "react-icons/bi";
import axios from "axios";

const Write = () =>{
    const[search, setSearch] = useState("");
    const[info, setInfo] = useState();
    const changeQuest = (e)=>{
        setSearch(e.target.value)
    };

const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async() => {
        const catchData = await axios("https://api.giphy.com/v1/gifs/search",{
            params:{
                api_key:"ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6",
                q:search
            }
        });
        console.log(catchData)
        setInfo(catchData.data.data)
    };
    fetchData();
}

    return(
        <div className='placeholder'>
      <form className='forms'> 
        <input type="text"
         autoCapitalize='off'
         autoCorrect='off' 
         autoComplete='off'
         placeholder='Search GIFs here'
         className='writting'
         onChange={changeQuest}
         value={search}>
         </input>
         <button type="submit" onClick={handleSubmit} className="btn">
            <BiSearchAlt/>
            </button>
        </form> 
      </div>
    );
}
export default Write;