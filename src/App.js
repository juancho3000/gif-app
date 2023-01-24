import './App.css';
import Logo from './components/Logo';
import Tags from './components/Tags';
import Searchbar from './components/Searchbar';
import { useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { trendingGif } from './components/utils';

function App() {
  //start where using useEffect
    const [data, setData] = useState([]);
    const [info, setInfo] = useState([]);
    useEffect(()=>{
      const gifKey = new GiphyFetch("ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6")
      //fetchData beggining
      const fetchData = async () => {
        const outcome = await gifKey.trending({ limit:20 })
        //fetchData ending 
      console.log(outcome)
      setData(outcome.data)
      console.log(trendingGif);
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

      const renderSearch = () => {
        return info.map(el=>{
            return(
                <div key={el.id} className="search-fetch">
                    <img alt="foto" src={el.images.fixed_height.url}/>
                </div>
            );
        });
    };

  //end where using useEffect

  return (
    <div className="App-header">
      <div className='title'>
        <h1>GIF APP</h1>
      </div>
  <div className='logo-container'>
        <Logo/>
      </div>
      <div className='tags'>
        <Tags/>
      </div>
      <section className='subject-1'> 
      <div>
        <Searchbar setInfo={setInfo}/>
      </div>
      </section>
      <span className='divider-2'></span>
      <section className='subject-2'>
      <div className="subject-2-render">{renderSearch()}</div>
      
      <span className='divider'></span>
        <div className="resource">{renderGifs()}</div>
        </section>
    </div>
  );
}
export default App;

//passing SearchBar.jsx as props to App.js
