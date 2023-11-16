import './App.css';
import Props from './components/Props';
import {useState} from"react";

function App() {
  const [name,setName]=useState("Atchu");
  return (
    <div className="App">
        <Props username={name} />
    </div>
  );
}
export default App;
