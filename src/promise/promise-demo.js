import { useState } from "react";

function PromiseExmaple(){
    const [result, setResult] = useState("");
    var p1 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 'P1');
    });
    var p2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 600, 'P2');
    });
    function runPromist(){
        Promise.all([p1, p2]).then(function (results) {
            console.log(results);
            setResult(results);
        });
    }

    function racePromist(){
        Promise.race([p1, p2]).then(function (results) {
            console.log(results); 
            setResult(results);
        });
    }

    return(
        <div><br />
        <h2>Promise 1</h2>
            <button onClick={runPromist}>Run All</button><br />
            <button onClick={racePromist}>Race</button>
            <h4>{result}</h4>
        </div>
    )
}

export default PromiseExmaple