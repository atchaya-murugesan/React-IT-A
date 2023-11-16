import React,{useState}from "react";
function Classwork()
{
    const[showMessage,setShowMessage]=useState(false);
    const toggleMessage=()=>{
        setShowMessage(!showMessage);
    };
    return(
        <div>
        <h1>TOGGLE MESSAGE</h1>
        <button onClick={toggleMessage}>
        {showMessage? "Hide Message" : "Show Message"}
        </button>
        {showMessage && <p> Hi! How are You!!</p>}
        </div>

    ); 
}
export default Classwork;