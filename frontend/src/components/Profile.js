import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        bio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save user profile logic here
        console.log('User profile saved:', user);
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Edit Profile
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            variant="outlined"
                            type="email"
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            fullWidth
                            label="Bio"
                            name="bio"
                            value={user.bio}
                            onChange={handleChange}
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                    </Box>
                    <Button type="submit" variant="contained" color="primary">
                        Save
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Profile;
