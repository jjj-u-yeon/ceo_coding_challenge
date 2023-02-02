import logo from './logo.svg';
import './App.css';
import React from "react";
import {useEffect} from "react";

const apiURL = "https://api.coindesk.com/v1/bpi/currentprice.json"

function App() {

    let data;
    const updateInfo = async () => {
      const response = await fetch(`${apiURL}`);
      data = await response.json();
      console.log(data);
      console.log(data.time)
    };
    useEffect(() => {
        updateInfo();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
          <button onClick={() => updateInfo()}> update </button>
          <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
