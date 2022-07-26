//import { GiphyFetch } from '@giphy/js-fetch-api'

import axios from "axios";
import { useEffect, useState } from "react";

const Gf = () => {
    const[data, setData] = useState([]);
    useEffect(()=> {
        const fetchingData = async () =>{
            const result = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key:"ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6",
                    limit:20
                }
            });
            console.log(result);
            setData(result.data.data)
        };
        fetchingData();
    },[]);

const renderGifs= () =>{
    return data.map(el => {
        return( 
        <div key={el.id} className="render-pics">
            <img alt="pic" src={el.images.fixed_height.url} />
        </div>
        )
    })
}

    return( 
        <div className="resource">{renderGifs()}</div>
    );
}

export default Gf;