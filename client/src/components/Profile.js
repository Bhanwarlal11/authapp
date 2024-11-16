import React from "react";
import { Box, Typography, Paper, Button, Divider } from "@mui/material";

const Profile = () => {
  const userProfile = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    nickname: "Johnny",
  };

  const handleEditProfile = () => {
    console.log("Edit Profile button clicked");
    // Add navigation to edit profile page or modal logic
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        margin: "2rem auto",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Divider sx={{ marginY: "1rem" }} />
      <Box sx={{ textAlign: "left", marginBottom: "1rem" }}>
        <Typography variant="h6">Name:</Typography>
        <Typography variant="body1" gutterBottom>
          {userProfile.name}
        </Typography>

        <Typography variant="h6">Username:</Typography>
        <Typography variant="body1" gutterBottom>
          {userProfile.username}
        </Typography>

        <Typography variant="h6">Email:</Typography>
        <Typography variant="body1" gutterBottom>
          {userProfile.email}
        </Typography>

        <Typography variant="h6">Nickname:</Typography>
        <Typography variant="body1">{userProfile.nickname}</Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleEditProfile}
        fullWidth
      >
        Edit Profile
      </Button>
    </Paper>
  );
};

export default Profile;
