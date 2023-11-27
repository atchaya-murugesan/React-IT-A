import * as React from 'react';
import Box from '@mui/material/Box';
import './design.css'
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
  export default function  FormPropsTextFields() {
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [pass,setpass]=useState();
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
  
      try {
        const response = await axios.get('http://localhost:3001/users');
        const user = response.data.find((user) => user.name === name);
      console.log("user",user);
        if (user) {
          if (user.pass === pass) {
           alert("login success")
            navigate('/HomePage'); 
            setError(false)
          } else {
            setSuccess(false);
            setError(true);
          }
        } else {
          setSuccess(false);
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      console.log("hi");
    };
  return (
    <body>
      <div className='login'>

    
    <Box className='aa'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className='icon'>
        <AccountCircleIcon sx={{fontSize:"80px",color:"secondary"}} />
        <h3>LOG IN</h3>
        </div>
      <div id="a">
      <form onSubmit={handleSubmit}>
        <TextField
        required
        id="outlined-required"
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
        color="secondary"
        label="Username or Email Id" 
        />
        <br/>
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          value={pass}
         onChange={(e)=>{setpass(e.target.value)}}
         color="secondary"
          type="password"
          autoComplete="current-password"
          />
          <br/>
   
          {error&&<p>Invalid UserName or Password</p>}
          <Button variant="contained" color='secondary' className='abc' type='submit'>Log In</Button>
          <br></br><br></br>
            <h4>Dont have an Account ? 
            <Link to='/register'>Create New Account</Link>  
            </h4>
    </form>
      </div>
    </Box>
    </div>
          </body>
  );
}