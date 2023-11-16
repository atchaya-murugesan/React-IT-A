import{useState} from "react";
function Stateprops()
{
    const [name,setName]=useState("John");
    const [num,setNum]=useState(0);
    const [student,setStudent]=useState({ name:"Atchaya",age:19});
    const nameHandler = ()=>{
        setName("divshika");
    };
    const numHandler =()=>{
        let value=num;
        setNum(++value);
    };
    return(
        <div>
            <h1>Stateprops</h1>
            <hr></hr>
            <h2>Name:{name}</h2>
            <h2>Age:{num}</h2>
            <h2>Student name is {student.name} and Age is {student.age}</h2>
            <button onClick={nameHandler}>Change Name</button>
            <button onClick={numHandler}>Change Number</button>
        </div>
    );  
}
export default Stateprops;