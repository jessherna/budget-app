import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { TextField, Button, Container, Typography, Box, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;
    const { enqueueSnackbar } = useSnackbar();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users', formData);
            enqueueSnackbar('User registered successfully', { variant: 'success' });
            console.log(res.data);
        } catch (err) {
            enqueueSnackbar('Failed to register user', { variant: 'error' });
            console.error(err.response.data);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Box sx={{ mt: 4, width: '100%' }}>
                <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Sign Up
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Already a member?{' '}
                        <Link component={RouterLink} to="/login">
                            Login
                        </Link>
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <TextField
                            label="Username"
                            name="username"
                            value={username}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            required
                            autoComplete="username"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            required
                            autoComplete="email"
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            required
                            autoComplete="new-password"
                        />
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default Signup;