import './App.css';
import React from "react";
import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table'

const apiURL = "https://api.coindesk.com/v1/bpi/currentprice.json"

function App() {
    const updateInfo = async () => {
      const response = await fetch(`${apiURL}`);
      const data = await response.json();
      setDatas(data);
      console.log(datas);
    };
    const initializeInfo = async () => {
        const response = await fetch(`${apiURL}`);
        const data = await response.json();
        return data;
    };

    const [datas, setDatas] = useState(() => initializeInfo());

    useEffect(() => {
        updateInfo();
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <p>BITCOIN</p>
      </header>
        {JSON.stringify(datas) !== '{}'
            ?(
                <div>
                    <div><span>LAST UPDATED: </span>{datas.time.updated}</div>
                <Table striped bordered hover>
                    <thead>
                    <tr>

                        <th>HERE</th>
                    </tr>
                    </thead>
                </Table>
                </div>
             ):(
                <div>
                    <p>no datas</p>
                </div>
        )}
            <button className="updateButton" onClick={() => updateInfo()}> update </button>
    </div>
    );
}

export default App;
