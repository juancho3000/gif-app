import React, { useState } from "react";
import  {BiSearchAlt} from "react-icons/bi";
//import axios from "axios";
import { GiphyFetch } from '@giphy/js-fetch-api';

const Searchbar = () =>{
    const[search, setSearch] = useState("");
    const[info, setInfo] = useState([]);
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
            else( setInfo(catchData.data))

        console.log(catchData);
        setInfo(catchData.data);
       
        }catch(err){
            setAlerta(true);
            setTimeout(()=> setAlerta(false), 4000);
            console.log(err);
        } 
    }; 

const renderSearch = () => {
    return info.map(el=>{
        return(
            <div key={el.id} className="search-fetch">
                <img alt="foto" src={el.images.fixed_height.url}/>
            </div>
        );
    });
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
  <form className='forms'> 
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
        <div className="hello">{renderSearch()}</div>
        </div>
    </form> 
  </div>
); 
  
}
export default Searchbar;