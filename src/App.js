import logo from './logo.svg';
import './App.css';

function App() {
  function setText(){
    const button_0 = document.getElementById("button_0");
    console.log(process.env.REACT_APP_SECRET_1);
    console.log(process.env.REACT_APP_SECRET_2);
    button_0.innerText=process.env.REACT_APP_SECRET_1;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>こんにちは</p>
        <p>SECRET_1</p>
        <p id="secret_1"></p>
        <button id="button_0" onClick={()=>setText()}>あああ</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
