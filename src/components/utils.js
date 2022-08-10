import { GiphyFetch } from '@giphy/js-fetch-api';
//import { useState } from 'react';

const myKey = new GiphyFetch("ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6")

async function searchGif(search, setInfo, callbackError) {
     try{
         const results = await myKey.search (search,{ limit:20 })
    if(results.data.length > 0)
    setInfo(results.data);
    console.log(results)
    return(results.data);
     }catch {callbackError()}
  };

 async function trendingGif(setData,callbackError) {
     try{
      const answer = await myKey.trending({limit:20})
      console.log(answer)
      setData(answer.data)
     }catch {callbackError()}
     };    

export {searchGif, trendingGif};