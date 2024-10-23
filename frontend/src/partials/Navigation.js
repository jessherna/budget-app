import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Budget App
                </Typography>
                
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;