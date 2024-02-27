import logo from './img/logo.svg'
import './styles/App.css';
import Preview from './components/Preview.js';
import { Provider } from 'react-redux';
import { store, EditorContainer, PreviewContainer } from './redux/AppWrapper.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main className='d-flex flex-column justify-content-center align-items-center'>
          <EditorContainer />
          <PreviewContainer />
        </main>
      </div>
    </Provider>
  );
}

export default App;