import React, { useState } from "react";
import ReactDOM from "react-dom";


const useInput = (initialValue, validator) =>{
    const [value, setValue] = useState(initialValue);
    const onChange = event =>{
        const{
            target : {value}
        } =event;
        let willUpdate = true;
        if (typeof(validator)==="function"){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return { value, onChange };
};

function App(){
    const maxLen = (value) => !value.includes("@"); //안가지도록
    const name = useInput("Mr.", maxLen);
    return(
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" value={name.value} onChange={name.onChange}  />
        </div>
    );
}

// class AppUgly extends React.Component{
//     state = {
//         item: 1
//     }
//     render(){
//         const { item } = this.state;
//         return(
//         <div className="App">
//             <h1>Hello {item}</h1>
//             <h2>Start Editing to see some magjic happen!</h2>
//             <button onClick={this.incrementItem}>Increment</button>
//             <button onClick={this.decrementItem}>Decrement</button>
//         </div>
//     );
//     }
//     incrementItem = () =>{
//         this.setState(state=>{
//             return {
//                 item:state.item +1
//             }
//         })
//     }
//     decrementItem =()=>{
//         this.setState(state=>{
//             return {
//                 item:state.item -1
//             }
//         })
//     }
// }

const rootElment = document.getElementById("root");
ReactDOM.render(<App />, rootElment);