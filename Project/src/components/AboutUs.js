import React from 'react';
import { Container, Typography, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const AboutUs = () => {
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h5" component="h1" color="violet" gutterBottom>
        About Us
        </Typography>
        <Typography paragraph>
        About Glow&Glam Beauty App

Welcome to Glow&Glam, where beauty meets innovation! We are more than just a beauty app; we are your dedicated companion on the journey to radiant self-expression and confidence.
<br></br>
<br></br>
<br></br>
Our Mission:
<br></br>
At Glow&Glam, our mission is to empower individuals to discover and embrace their unique beauty. We believe that everyone deserves to feel confident and glamorous in their own skin. With our innovative beauty app, we strive to make beauty accessible, personalized, and enjoyable for all.
<br></br>
<br></br>
<br></br>
Why Glow&Glam?
<br></br>
<br></br>
Personalized Beauty Experience:
Glow&Glam goes beyond one-size-fits-all beauty solutions. Our app is designed to understand and celebrate your individual beauty preferences. From skincare routines to makeup looks, we tailor recommendations to suit your unique style and needs.
<br></br>
<br></br>
Expert Guidance:
Get expert advice at your fingertips! Glow&Glam collaborates with top beauty professionals to bring you tips, tutorials, and product recommendations. Whether you're a beauty novice or an experienced enthusiast, our app is your go-to source for beauty wisdom.
<br></br>
<br></br>
Innovative Technology:
We embrace cutting-edge technology to enhance your beauty experience. Our augmented reality features allow you to virtually try on different makeup looks, experiment with hairstyles, and visualize skincare results before making any decisions.
<br></br>
<br></br>
Community of Empowerment:
Join our vibrant community of beauty enthusiasts! Share your beauty journey, connect with like-minded individuals, and celebrate the diversity of beauty. Glow&Glam is more than an app; it's a supportive community that encourages self-expression and confidence.
<br></br>
<br></br>
Our Values:
<br></br>
<br></br>
Inclusivity:
We celebrate beauty in all its forms. Our app is inclusive and welcoming to individuals of every age, gender, and background.
<br></br>
<br></br>
Empowerment:
We believe that beauty is a source of empowerment. Glow&Glam is here to boost your confidence and help you embrace your unique beauty.
<br></br>
<br></br>
Innovation:
We stay ahead of the curve with innovative features and technology. Glow&Glam is your beauty trendsetter, always evolving to meet your needs.
<br></br>
<br></br>
Thank you for choosing Glow&Glam as your beauty companion. Join us on this exciting beauty journey, and let your inner glow shine!
<br></br>
<br></br>
Feel free to customize this text to better fit the specific goals and features of your Glow&Glam Beauty App.
<br></br>
<br></br>
        </Typography>
        <Typography paragraph>
          Please use the following table to contact us through email:
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Customer Support</TableCell>
                <TableCell>support@glow&glam.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>General Inquiries</TableCell>
                <TableCell>info@glow&glam.com</TableCell>
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