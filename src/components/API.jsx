//import { GiphyFetch } from '@giphy/js-fetch-api'

import axios from "axios";
import { useEffect, useState } from "react";

const Gf = () => {
    const[data, setData] = useState([]);
    useEffect(()=> {
        const fetchingData = async () =>{
            const result = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key:"ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6"
                }
            });
            console.log(result);
            setData(result.data.data)
        };
        fetchingData();
    },[]);
    return( 
        <div className="resource">fetch outcome</div>
    );
}

export default Gf;