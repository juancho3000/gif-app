import React, {useEffect, useState} from "react";
import axios from "axios";

const GifFetch= () => {

    useEffect(()=> {
        const fetchingData = async () => {
            const result = await axios('https//:api.giphy.com/v1/gifs/trending', {
                params:{
                    api_key: "ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6"
                }
            });
            console.log(result);
        };
        fetchingData();
    });

    return <div className="giphy">gifs around this place</div>
}

export default GifFetch;