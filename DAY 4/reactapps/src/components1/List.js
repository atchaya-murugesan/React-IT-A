import React,{useState} from "react";
function List(){
    const[student]=useState(
        [
            {
                id: 1,
                name: "Atchaya",
                age: 19,
            },
            {
                id: 2,
                name: "Divi",
                age: 20,
            },
            {
                id: 3,
                name: "Ashmi",
                age: 18,
            },
        ]
    );
    return(
        <div>
            <h1>List Items</h1>
            <hr></hr>
            <ul style={{ listStyleType: "none"}}>
                {student.map((student)=>(
               <li>
                    <p>ID: {student.id}</p>
                    <p>NAME: {student.name}</p>
                    <p>AGE: {student.age}</p>
               </li> 
                ))}
            </ul>
        </div>
    )
}
    export default List;