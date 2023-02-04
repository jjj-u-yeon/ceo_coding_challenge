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

    // const mapData = () => {
    //     const keys = Object.keys(datas.bpi);
    //     for (let key in keys){
    //         return <th>{JSON.stringify(datas.bpi.key)}</th>
    //     }
    // }
    return (
    <div className="App">
      <header className="App-header">
        <p>BITCOIN</p>
      </header>
        {JSON.stringify(datas) !== '{}'
            ?(
                <div className="innerDiv">
                    <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>EUR</th>
                            <th>GBP</th>
                            <th>USD</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="fields">Code</td>
                        <td>{datas.bpi.EUR.code}</td>
                        <td>{datas.bpi.GBP.code}</td>
                        <td>{datas.bpi.USD.code}</td>
                    </tr>
                    <tr>
                        <td className="fields">Symbol</td>
                        <td>{datas.bpi.EUR.symbol}</td>
                        <td>{datas.bpi.GBP.symbol}</td>
                        <td>{datas.bpi.USD.symbol}</td>
                    </tr>
                    <tr>
                        <td className="fields">Rate</td>
                        <td>{datas.bpi.EUR.rate}</td>
                        <td>{datas.bpi.GBP.rate}</td>
                        <td>{datas.bpi.USD.rate}</td>
                    </tr>
                    <tr>
                        <td className="fields">Rate (Float)</td>
                        <td>{datas.bpi.EUR.rate_float}</td>
                        <td>{datas.bpi.GBP.rate_float}</td>
                        <td>{datas.bpi.USD.rate_float}</td>
                    </tr>
                    <tr>
                        <td className="fields">Description</td>
                        <td>{datas.bpi.EUR.description}</td>
                        <td>{datas.bpi.GBP.description}</td>
                        <td>{datas.bpi.USD.description}</td>
                    </tr>
                    </tbody>
                </Table>
                    <div className="last-update"><span className="fields"><b>Last Updated: </b></span>{datas.time.updated}</div>
                </div>
             ):(
                <div>
                    <p>no datas</p>
                </div>
        )}
        <div className="update">
            <button className="updateButton" onClick={() => updateInfo()}> update </button>
        </div>
    </div>
    );
}

export default App;
