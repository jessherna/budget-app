import React, { useState } from 'react';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const { enqueueSnackbar } = useSnackbar();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', formData);
            enqueueSnackbar('Login successful', { variant: 'success' });
            console.log(res.data);
        } catch (err) {
            enqueueSnackbar('Failed to login', { variant: 'error' });
            console.error(err.response.data);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={onSubmit}>
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
                            autoComplete="current-password"
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Login
                        </Button>
                    </form>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Not a member?{' '}
                        <Link component={RouterLink} to="/signup">
                            Sign up now
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;