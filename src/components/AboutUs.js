import React from 'react';
import { Container, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const AboutUs = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ bgcolor: 'secondary.main', color: 'white', mt: 10, p: 5 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" component="h1" color="violet" gutterBottom>
        <b>About Us</b>
        </Typography>
      
        <Typography
        paragraph>
        About Glow&Glam Beauty App

Welcome to Glow&Glam, where beauty meets innovation! We are more than just a beauty app; we are your dedicated companion on the journey to radiant self-expression and confidence.
<br></br>
<br></br>
<br></br>
<b>Our Mission:</b>
<br></br>
At Glow&Glam, our mission is to empower individuals to discover and embrace their unique beauty. We believe that everyone deserves to feel confident and glamorous in their own skin. With our innovative beauty app, we strive to make beauty accessible, personalized, and enjoyable for all.
<br></br>
<br></br>
<br></br>
<b>Why Glow&Glam?</b>
<br></br>
<br></br>
<b>Personalized Beauty Experience:</b>
Glow&Glam goes beyond one-size-fits-all beauty solutions. Our app is designed to understand and celebrate your individual beauty preferences. From skincare routines to makeup looks, we tailor recommendations to suit your unique style and needs.
<br></br>
<br></br>
<b>Expert Guidance:</b>
Get expert advice at your fingertips! Glow&Glam collaborates with top beauty professionals to bring you tips, tutorials, and product recommendations. Whether you're a beauty novice or an experienced enthusiast, our app is your go-to source for beauty wisdom.
<br></br>
<br></br>
<b>Innovative Technology:</b>
We embrace cutting-edge technology to enhance your beauty experience. Our augmented reality features allow you to virtually try on different makeup looks, experiment with hairstyles, and visualize skincare results before making any decisions.
<br></br>
<br></br>
<b>Community of Empowerment:</b>
Join our vibrant community of beauty enthusiasts! Share your beauty journey, connect with like-minded individuals, and celebrate the diversity of beauty. Glow&Glam is more than an app; it's a supportive community that encourages self-expression and confidence.
<br></br>
<br></br>
<b>Inclusivity:</b>
We celebrate beauty in all its forms. Our app is inclusive and welcoming to individuals of every age, gender, and background.
<br></br>
<br></br>
<b>Empowerment:</b>
We believe that beauty is a source of empowerment. Glow&Glam is here to boost your confidence and help you embrace your unique beauty.
<br></br>
<br></br>
<b>Innovation:</b>
We stay ahead of the curve with innovative features and technology. Glow&Glam is your beauty trendsetter, always evolving to meet your needs.
<br></br>
<br></br>
<b>Thank you for choosing Glow&Glam as your beauty companion. Join us on this exciting beauty journey, and let your inner glow shine!</b>
<br></br>
<br></br>
Feel free to customize this text to better fit the specific goals and features of your Glow&Glam Beauty App.
<br></br>
<br></br>
        </Typography>
        <Typography paragraph>
        <b> Contact us through email:</b>
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Email</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><b>Customer Support</b></TableCell>
                <TableCell><b>support@glow&glam.com</b></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><b>General Inquiries</b></TableCell>
                <TableCell><b>info@glow&glam.com</b></TableCell>
              </TableRow>
              {/* Add more contacts as needed */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default AboutUs;