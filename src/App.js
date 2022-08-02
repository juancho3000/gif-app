import './App.css';
import Logo from './components/Logo';
import Tags from './components/Tags';
import Searchbar from './components/Searchbar';
import { useState, useEffect } from 'react';
//import axios from "axios";
import { GiphyFetch } from '@giphy/js-fetch-api';

function App() {
  //start where using useEffect
    const [data, setData] = useState([]);
    useEffect(()=>{
      const gifKey = new GiphyFetch("ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6")
      //fetchData beggining
      const fetchData = async () => {
        const outcome = await gifKey.trending({ limit:20 })
        //fetchData ending 
      console.log(outcome)
      setData(outcome.data)
    }
      fetchData();   
    },[]);

    const renderGifs = () => {
      return(
        data.map(el =>{
          return(
            <div key={el.id} className="render-pics">
              <img alt="pic" src={el.images.fixed_height.url} />
            </div>
          )
        })
      )
      };
  //end where using useEffect

  return (
    <div className="App-header">
      <div className='title'>
      <h1>GIF app</h1>
      </div>
  <div className='fotografia'>
        <Logo/>
      </div>
      <div className='etiquetas'>
        <Tags/>
      </div>
      <section className='subject-1'> 
      <div>
        <Searchbar/>
      </div>
      </section>
    <span className='divider'></span>
      <section className='subject-2'>
        <div className="resource">{renderGifs()}
        </div>
        </section>
    </div>
  );
}
export default App;

//changing component names, same title same export, pass the render of gifs to App and send the Render to what will be 
//trending.jsx using props
//SearchBar.jsx
//Treding.jsx