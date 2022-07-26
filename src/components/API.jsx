import { GiphyFetch } from '@giphy/js-fetch-api'

const Gf = new GiphyFetch('ESXpJv9GdToCoypY0MQTzMNJ56DLaKu6')

const categories = async () => {
    try{
        const result = await Gf.categories();
        console.log(`categories`, result)
    }catch (error){
        console.error(`categories`, error)
    }
};
const trending = async () => {
    try{
        const result = await Gf.trending();
        console.log(`trending`, result);
    }catch(error) {
        console.error(`trending`, error);
    }
};
categories();
trending();

export default Gf;