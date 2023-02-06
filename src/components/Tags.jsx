import React from "react";

const Tags = () =>{
    return(
        <div className='menu-choices'>
        <ul className='menu-containers'>
          <li className='menu-list1 TAG'>
            <a href='https://giphy.com/reactions'>Reactions</a>
          </li>
          <li className='menu-list2 TAG'>
          <a href='https://giphy.com/entertainment'>Entertainment</a>
          </li>
          <li className='menu-list3 TAG'>
          <a href='https://giphy.com/sports'>Sports</a>
          </li>
          <li className='menu-list4 TAG'>
          <a href='https://giphy.com/stickers'>Stickers</a>
          </li>
          <li className='menu-list5 TAG'>
          <a href='https://giphy.com/artists'>Artists</a>
          </li>
        </ul>
      </div>
    );
}
export default Tags;