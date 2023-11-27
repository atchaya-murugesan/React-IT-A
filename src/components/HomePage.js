import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import AppNavBar from './AppNavBar';
import Grid from '@mui/material/Grid';
import Footer from './Footer';

const Home = () => {
  const images = [
    {
      url: 'https://img.freepik.com/premium-photo/beautiful-woman-is-washing-her-face-white-background_33799-2410.jpg?w=1060',
      title: 'SKIN CARE',
      width: '35%',
    },
    {
      url: 'https://st4.depositphotos.com/13193658/30864/i/600/depositphotos_308641124-stock-photo-happy-brunette-beautiful-woman-long.jpg://img.freepik.com/free-photo/rear-view-combing-healthy-long-straight-female-hair-isolated-gray_231208-1619.jpg?w=1060&t=st=1700547872~exp=1700548472~hmac=1cb49f52ab2197c8fc160e64518bfb3093ef75e8882e98ede11a990c6c60ed76',
      title: 'HAIR CARE',
      width: '32%',
    },
    {
      url: 'https://img.freepik.com/free-photo/foot-washing-spa-before-treatment-spa-treatment-product-female-feet-hand-spa_1150-37703.jpg?w=996&t=st=1701016240~exp=1701016840~hmac=ee8ef5de19cc805eda47dcd45b66fd14ffd3250f66cdf572b859fb7c27e59edb',
      title: 'PERSONAL CARE',
      width: '32%',
    },
  ];
  
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {

      
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));

  const image = [
    {
      url: 'https://as1.ftcdn.net/v2/jpg/06/35/02/40/1000_F_635024092_0MjUSGTc2tMj0j9pBQo413MoF7igmsUV.jpg',
      title: 'FRAGRANCE',
      width: '35%',
    },
    {
      url: 'https://img.freepik.com/free-photo/beautiful-woman-with-makeup-cosmetic-tools-near-her-face_186202-7265.jpg?w=740&t=st=1701015459~exp=1701016059~hmac=68284c1ea036a12efe9ecf34555e0bd63d922215299be837c8bc8d78c3a6634e',
      title: 'MAKEUP',
      width: '32%',
    },
    {
      url: 'https://img.freepik.com/free-photo/lady-wears-beautiful-black-dress-looking-into-mirror_158595-5867.jpg?w=996&t=st=1701015865~exp=1701016465~hmac=4d4698956acf357d78d78255e56ff212e67c9a6744d1cbe7f7c63dd8a45fd1ff',
      title: 'ACCESSORIES',
      width: '32%',
    },
  ];
  
  const Imagebutton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));
  
  const Imagesrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });
  
  const ImageP = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }));
  
  const Imagebackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }));
  
  const Imagemarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }));
  return (
    <div style={{backgroundColor:'#e1bee7'}}>
      <AppNavBar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h4" style={{color:"rgb(165, 21, 187)"}} textAlign={'center'}><b>GLOW & GLAM</b></Typography><br></br>
       <br></br>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' ,color:'secondary'}}>
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 150, width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            
          </Grid>
          <Grid item>
            
          </Grid>
        </Grid>
        {image.map((image) => (
          <Imagebutton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Imagesrc style={{ backgroundImage: `url(${image.url})` }} />
            <Imagebackdrop className="MuiImageBackdrop-root" />
            <ImageP>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <Imagemarked className="MuiImageMarked-root" />
              </Typography>
            </ImageP>
          </Imagebutton>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
