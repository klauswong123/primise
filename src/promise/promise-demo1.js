import { useState } from "react";

function PromiseExample1(){
    const [result, setResult] = useState("");
    var promise = new Promise( (resolve, reject) => {
        let name = 'Paul'
        if (name === 'Paul') {
           resolve("Promise resolved successfully");
        }
        else {
           reject(Error("Promise rejected"));
        }
     });
     let obj = {newName: ''};
     promise.then( result => {
        obj["newName"] = result
        console.log(obj.newName)
        setResult(obj.newName)
     }).catch(
         error=>{
            setResult("");
             window.alert("OOOPS!! Wrong Name"+error)
         }
     );
   return (
     <div>
        <h2>Promise 2</h2>
        <h4>{result}</h4>
     </div>
   );
}

export default PromiseExample1;