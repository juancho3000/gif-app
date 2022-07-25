import gif from './giphy-logo-1.svg';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <h1>GIF app</h1>
      <div className='logo'>
        <img src={gif} className="App-logo" alt='logo'/>
      </div>
      <div className='menu-choices'>
        <ul className='menu-containers'>
          <li className='menu-list1 YRN'>
            <a href='https://giphy.com/'>Reactions</a>
          </li>
          <li className='menu-list2 YRN'>
          <a href='https://giphy.com/'>Entertainment</a>
          </li>
          <li className='menu-list3 YRN'>
          <a href='https://giphy.com/'>Sports</a>
          </li>
          <li className='menu-list4 YRN'>
          <a href='https://giphy.com/'>Stickers</a>
          </li>
          <li className='menu-list5 YRN'>
          <a href='https://giphy.com/'>Artists</a>
          </li>
        </ul>
      </div>
      <div className='placeholder'>
      <form className='forms'> 
        <input type="text"
         autoCapitalize='off'
         autoCorrect='off' 
         autoComplete='off'
         placeholder='Search GIFs here'
         className='writting'>
         </input>
        </form> 
      </div>
    </div>
  );
}

export default App;
