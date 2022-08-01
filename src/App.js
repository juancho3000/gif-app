import './App.css';
import Rendering from './components/Rendering';
import Logo from './components/Logo';
import Tags from './components/Tags';
import Searchbar from './components/Searchbar';
//import { SearchBar } from '@giphy/react-components';

function App() {
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
        <div>
        <Rendering/>
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