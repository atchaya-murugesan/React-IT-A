import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Container, Paper, Typography, Button, TextField, FormControlLabel, Checkbox } from '@mui/material';

const ProfileSettingsContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

const ProfileSettingsPaper = styled(Paper)({
  padding: '20px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProfileSettingsForm = styled('form')({
  width: '100%',
  marginTop: '20px',
});

const ProfileSettings = () => {
  const [userName, setUserName] = useState('samantha');
  const [email, setEmail] = useState('samantha@gmail.com');
  const [password, setPassword] = useState('');
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const handleUpdateProfile = () => {
    alert('Profile updated successfully!');
  };

  const handlePasswordChange = () => {
    alert('Password changed successfully!');
  };

  return (
    <ProfileSettingsContainer>
      <Typography variant="h4" gutterBottom color="purple">
        <b>YOUR PROFILE</b>
      </Typography>
      <ProfileSettingsPaper elevation={3}>
        <ProfileSettingsForm>
          <TextField
            label="User Name"
            variant="outlined"
            color="secondary"
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        <br></br>
        <br></br>
        <br></br>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            color="secondary"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <br></br>
          <TextField
            label="New Password"
            type="password"
            variant="outlined"
            color="secondary"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={receiveNotifications}
                color="secondary"
                onChange={() => setReceiveNotifications((prev) => !prev)}
              />
            }
            label="Receive Notifications"
          />
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ marginTop: '10px' }}
            onClick={handleUpdateProfile}
          >
            Update Profile
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            style={{ marginTop: '10px' }}
            onClick={handlePasswordChange}
          >
            Change Password
          </Button>
        </ProfileSettingsForm>
      </ProfileSettingsPaper>
    </ProfileSettingsContainer>
  );
};

export default ProfileSettings;
