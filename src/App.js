import './App.css';
import Gf from './components/API';
import Logo from './components/GIF-app-logo';
import Tags from './components/GIF-app-choices';
import Write from './components/GIF-app-searchbar';

function App() {
  return (
    <div className="App-header">
      <h1>GIF app</h1>
      <div>
        <Logo/>
      </div>
      <div>
        <Tags/>
      </div>
      <section className='subject-1'> 
      <div>
        <Write/>
      </div>
      </section>
    <span className='divider'></span>
      <section className='subject-2'>
        <div>
        <Gf/>
        </div>
        </section>
    </div>
  );
}
export default App;
