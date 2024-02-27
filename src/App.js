import logo from './img/logo.svg'
import './styles/App.css';
import Editor from './components/Editor.js'
import Preview from './components/Preview.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' width={200}/>
      </header>
      <main>
        <Editor />
        <Preview />
      </main>
    </div>
  );
}

export default App;
