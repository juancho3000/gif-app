import React, { useState } from "react";
import  {BiSearchAlt} from "react-icons/bi";
//import axios from "axios";
import { GiphyFetch } from '@giphy/js-fetch-api';

const Searchbar = props =>{
    const[search, setSearch] = useState("");
    const[alerta, setAlerta] = useState(false);
    
    const changeQuest = event =>{
        setSearch(event.target.value)
    };
const myKey = new GiphyFetch("ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6")
const handleSubmit = async event => {
    event.preventDefault();
        setAlerta(false);
        try{
            const catchData = await myKey.search(search,{ limit:20 })

        if(catchData.data.length === 0)
            return setAlerta(true);
            else( props.setInfo(catchData.data))

        console.log(catchData);
        props.setInfo(catchData.data);
       
        }catch(err){
            setAlerta(true);
            setTimeout(()=> setAlerta(false), 4000);
            console.log(err);
        } 
    }; 

const renderError = () => {
    if(alerta){
        return (
            <div class="alert alert-danger" role="alert">
             It seems there was an error, try again
            </div>
        );
    };
}

return(
    <div className='placeholder'>
  <form className='forms' onSubmit={props.setInfo}> 
    <input type="text"
     autoCapitalize='off'
     autoCorrect='off' 
     autoComplete='off'
     placeholder='Search GIFs here'
     className='writting'
     id="setting"
     onChange={changeQuest}
     value={search}>
     </input>
     <button type="submit" onClick={handleSubmit} className="btn">
        <BiSearchAlt/>
        </button>
        <div className="hit-miss" id="error">
            {renderError()}
        </div>
    </form> 
  </div>
); 
  
}
export default Searchbar;