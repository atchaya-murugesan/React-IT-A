import{useState} from "react";
function Ques()
{
    const[name,setName]=useState("Kaioken");
    const[count,setCount]=useState(0);
    const nameHandler =()=>{
        let value=count;
        setCount(++value);
        if(count===3)
        {
            if(name==="Kaioken")
            setName("SuperSaiyen");
            else
            setName("Kaioken");
            setCount(0);
        }
    };
    return(
        <div>
            <h1>{name}</h1>
            <hr></hr>
        <button onClick={nameHandler}>change</button>
        </div>
    )
}
export default Ques;