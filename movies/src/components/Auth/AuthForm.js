import { Dialog, Typography } from '@mui/material'
import React from 'react'

const AuthForm = () => {
    return (<Dialog open={true}>
        <Typography variant='h4' textAlign={'center'}>
            Login
        </Typography>
    </Dialog>
    );
};
export default AuthForm 