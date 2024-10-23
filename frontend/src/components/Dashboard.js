import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div style={{ padding: 20 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <Link to="/bills">Bills</Link>
                            </Typography>
                            <Typography color="textSecondary">
                                Manage your bills
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <Link to="/transactions">Transactions</Link>
                            </Typography>
                            <Typography color="textSecondary">
                                View your transactions
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <Link to="/accounts">Accounts</Link>
                            </Typography>
                            <Typography color="textSecondary">
                                Manage your accounts
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                <Link to="/profile">User Profile</Link>
                            </Typography>
                            <Typography color="textSecondary">
                                View and edit your profile
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;