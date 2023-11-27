import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const Cart = () => {
  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#e1bee7', minheight: '100vh'}}>
      <Typography variant="h4" gutterBottom style={{ marginTop: '50px', width: '100%',backgroundColor:'#ab47bc',color:'white',textAlign:'center' }}>
        <b>My Cart</b>
      </Typography>
      <Card style={{ maxWidth: 400, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-photo/makeup-lipstick_23-2148109477.jpg?w=360&t=st=1701056135~exp=1701056735~hmac=da550f0967be5a4e1d8662484224027f1630db725c52198903f0c166e195f4d6"
          alt="Cosmetics" 
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Lipstick
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/o">
            Remove from the Cart
          </Button>
        </CardActions>
      </Card>
    </Container>
    
  );
};

export default Cart;