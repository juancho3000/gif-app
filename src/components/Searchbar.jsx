import  { useState } from "react";
import  {BiSearchAlt} from "react-icons/bi";
//import { GiphyFetch } from '@giphy/js-fetch-api';
import { searchGif } from "./utils";

const Searchbar = props =>{
    const[searchText, setSearchText] = useState("");
    const[alerta, setAlerta] = useState(false);
    
    const changeQuest = event =>{
        setSearchText(event.target.value)
    };

//const myKey = new GiphyFetch("ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6")

const handleSubmit = async event => {
    event.preventDefault(); 
    setAlerta(true);
        const inform = searchGif(searchText,props.setInfo, ()=> {
               {setAlerta(true); 
                setTimeout(()=>setAlerta(false),4000); 
                console.log('sorry, there was an error');
                }
        });
        if(inform.data.length === 0 )
        return setAlerta(true);
        else(setSearchText(inform.data))
        props.searchText(inform.data.data);
    }; 

const renderError = () => {
    if(alerta){
        return (
            <div class="alert alert-danger" role="alert">
             It seems there was an error, try again
            </div>
        )
   }};

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
     value={searchText}>
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

//error test no definitive yet
//catch{callbackError()
   // setAlerta(true);
   // setTimeout(()=>setAlerta(false),4000);
//} 