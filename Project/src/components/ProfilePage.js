import React from 'react';
import { styled } from '@mui/system';
import { Container, Paper, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';


const ProfileContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

const ProfilePaper = styled(Paper)({
  padding: '20px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProfileAvatar = styled('div')({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: '#ccc', 
  marginBottom: '20px',
});

const LogoutButton = styled(Button)({
  marginTop: '20px',
});

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <ProfilePaper elevation={3}>
        <ProfileAvatar />
        <Typography variant="h6" gutterBottom>
          User Name
        </Typography>
        <Typography variant="body1" paragraph>
          Email: user@example.com
        </Typography>
        <Typography variant="body1" paragraph>
          Member Since: January 1, 2022
        </Typography>
        <LogoutButton variant="contained" color="secondary" component={RouterLink} to="/login">
          Logout
        </LogoutButton>
      </ProfilePaper>
    </ProfileContainer>
  );
};

export default ProfilePage;
