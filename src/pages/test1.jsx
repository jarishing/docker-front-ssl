import React from 'react';
import axios from 'axios';

export default (props) => {
    async function test(){
        const response = await axios.get('http://localhost:8080');
        return document.getElementById('message').innerText = JSON.stringify(response.data, null, 4);
    }

    async function goto(){
        return props.history.push('/test2');
    }

    return (
        <div className="App">
        <header className="App-header">
        <button className="btn btn-default" onClick={() => test()}> api</button>
        <button className="btn btn-default" onClick={() => goto()}> page</button>
        <br/><br/> 
            <div style={{display:"inline-flex",width:"300px"}}>
            </div>
            <pre id="message"> </pre>
        </header>
        </div>
    )
}
