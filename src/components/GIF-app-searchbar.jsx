import React, { useState } from "react";
import  {BiSearchAlt} from "react-icons/bi";
import axios from "axios";

const Write = () =>{
    const[search, setSearch] = useState("");
    const[info, setInfo] = useState([]);
    const changeQuest = (e)=>{
        setSearch(e.target.value)
    };

const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async() => {
        const catchData = await axios("https://api.giphy.com/v1/gifs/search",{
            params:{
                api_key:"ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6",
                q:search,
                limit:10
            }
        });
        console.log(catchData)
        setInfo(catchData.data.data)
    };
    fetchData();
}

const giveSearch = () => {
    return info.map(el=>{
        return(
            <div key={el.id} className="search-fetch">
                <img alt="foto" src={el.images.fixed_height.url}/>
            </div>
        )
    })
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
            <div className="hello">{giveSearch()}</div>
        </form> 
      </div>
    );
}
export default Write;