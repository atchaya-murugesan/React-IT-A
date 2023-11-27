import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const Orders = () => {
  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#e1bee7', minheight: '100vh'}}>
      <Typography variant="h4" gutterBottom style={{ marginTop: '50px', width: '100%',backgroundColor:'#ab47bc',color:'white',textAlign:'center'}}>
        <b>My Orders</b>
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
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/natural-anti-arthritis-cream-tube-realistic-vector_81522-421.jpg?w=360&t=st=1701056261~exp=1701056861~hmac=2df66c0e74f41f76c1a574fa80da8212f38db5e7c2760145832a2e7661e20ff9"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div" >
          Face Wash
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 300, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-photo/female-hand-with-pink-nail-design-holding-nail-polish-bottle_127675-2650.jpg?w=1060&t=st=1701056371~exp=1701056971~hmac=cdf404b86be6842d05cc77ffe837bc390ddf0fa9b7a9598a61edfcff7b2389e1"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Nailpolish
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/realistic-vector-brush-cosmetic-accessories-set_1284-81188.jpg?w=900&t=st=1701056567~exp=1701057167~hmac=bd99949b7006fe30da7ea4d1328b18187072691b3f93a4ffd98eb4d108d0d7c9"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          MakeupBrush
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 300, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/shampoo-soap-bottles-vector-realistic-product-placement-label-designs_1268-18676.jpg?w=900&t=st=1701059388~exp=1701059988~hmac=1403538aee9c545493f24d4b3c9f419d258751a0c92d8fedb4c8b12c9906ac27"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Shampoo
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 300, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/cosmetics-makeup-realistic-advertisement_1284-23482.jpg?w=900&t=st=1701059088~exp=1701059688~hmac=71ef96781f9c35f9e72c1eefca7373a3e81a02acd6e93a93e4942a979be434aa"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            EyeShadow Palette
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 300, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/yellow-cosmetics-sunscreen-lotion-vector-realistic-product-placement-mock-ups_1268-18095.jpg?w=740&t=st=1701060312~exp=1701060912~hmac=b067538317ae476baaadffc6fa1ccf55b4a6c1a7f71022c91ed71932a5a14c54"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            SunScreen
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary"component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 300, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/new-perfume-with-sakura-fragrance-realistic-illustration_1284-31303.jpg?w=740&t=st=1701060497~exp=1701061097~hmac=f01a4c37a9c6126cb50d30589485bbf6acfeef6a2bc0072fee923a82c17fc86d"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
           Fragrance
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 300, margin: '30px auto' }}>
        <img
          src="https://img.freepik.com/free-vector/foundation-isolated-cosmetics-vector-realistic-skin-care-bottles-label-design-product-placement_1268-18108.jpg?w=740&t=st=1701056764~exp=1701057364~hmac=a47dfea28b264950854d057db93ea474e1daf2f7859616305d643341564790d9"
          alt="Cosmetics"
          style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Foundation
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary" component={RouterLink} to="/c">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Container>
    
  );
};

export default Orders;