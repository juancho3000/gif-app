import './App.css';
//import Gf from './components/API';
//import Logo from './components/GIF-app-logo';
import Tags from './components/GIF-app-choices';
import Write from './components/GIF-app-searchbar';

function App() {
  return (
    <div className="App-header">
      <h1>GIF app</h1>
      <div>
        
      </div>
      <div>
        <Tags/>
      </div>
      <div>
        <Write/>
      </div>
        
    </div>
  );
}
export default App;
