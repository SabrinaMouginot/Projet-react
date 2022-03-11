import Headerperso from './components/headerperso.js';
import Footer from './components/footer.js';
import logo from './logo.svg';
import './App.css';
import TableObjet from './components/tableObject.js';
// import ColorPickerMenu from './components/color-picker-menu.js';

function App() {
  return (
    <div className="App">
      < Headerperso />
      <TableObjet/>
      {/* < ColorPickerMenu /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        //</a> */}
      </header>
      < Footer />

    </div>
  );
}

export default App;
