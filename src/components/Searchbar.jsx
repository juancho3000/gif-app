import React, { useState } from "react";
import  {BiSearchAlt} from "react-icons/bi";
//import ErrorShowing from "./GIF-app-alert";
import axios from "axios";

const Searchbar = props =>{
    const[search, setSearch] = useState("");
    const[info, setInfo] = useState([]);
    const[alerta, setAlerta] = useState(false);
    
    const changeQuest = event =>{
        setSearch(event.target.value)
    };

const handleSubmit = async event => {
    event.preventDefault();
    //const fetchData = async() => {
        setAlerta(false);
        try{
            const catchData = await axios("https://api.giphy.com/v1/gifs/search",{
            params:{
                api_key:"ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6",
                q:search,
                limit:20
            }
        });

        if(catchData.data.data.length === 0)
            return alerta(true);
            else( setInfo(catchData.data.data) )
            

        console.log(catchData)
        setInfo(catchData.data.data)

        }catch(err){
            setAlerta(true);
            setTimeout(()=> setAlerta(false), 4000);
            console.log(err);
        }
             
    };
    //fetchData();
//} 

const giveSearch = () => {
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
  <form className='forms' onSubmit={props.data}> 
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
        <div className="hello">{giveSearch()}</div>
        </div>
    </form> 
  </div>
); 
  
}
export default Searchbar;