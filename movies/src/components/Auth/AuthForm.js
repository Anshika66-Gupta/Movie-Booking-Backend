import { Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import React, { useState } from 'react';
const labelStyle = {mt:1 ,mb:2}

const AuthForm = ({onSubmit, isAdmin}) => {
    const [inputs, setInputs] = useState({
        name: " ",
        email: " ",
        password: " ",
     });
    const [isSignup, setisSignup] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);  
        onSubmit({ inputs, signup: isAdmin?false:isSignup });
    };

    return (
        <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
            <Box sx={{ ml: "auto", padding: 1 }} >
                <IconButton>
                    <CloseRoundedIcon />
                </IconButton>
            </Box> 
            
        <Typography variant='h4' textAlign={'center'}>
        {isSignup ? "Signup" : "Login"}
            </Typography>
            <form onSubmit={handleSubmit} >
                <Box
                    display={'flex'}
                    padding={6}
                    justifyContent={'center'}
                    flexDirection="column"
                    width={400}
                    margin="auto"
                    alignContent={"center"}
                >
                    {!isAdmin && isSignup && <> <FormLabel
                    sx={labelStyle}
                    >Name</FormLabel>
                        <TextField
                     value={inputs.name}
                     onChange={handleChange}
                            margin='normal' variant='standard' type={"text"} name="name" />
                    </> }
                    <FormLabel
                    sx={labelStyle}
                    >Email</FormLabel>
                    <TextField
                        value={inputs.email}
                        onChange={handleChange}
                        
                        margin='normal' variant='standard' type={"email"} name="email" />   
                    
                    
                    <FormLabel
                    sx={labelStyle}
                    >Password</FormLabel>
                    <TextField
                        value={inputs.password}
                    onChange={handleChange}
                        margin='normal' variant='standard' type={"password"} name="password" /> 
                    
                    <Button sx={{ mt: 2, borderRadius: 10, bgcolor: '#2b2d42' }} type='submit' fullWidth
                    variant='contained'
                    >{isSignup ? "Signup" : "Login"}</Button>
                    
                    
                    {( !isAdmin && 
                        
                        <Button onClick={() => setisSignup(!isSignup)} sx={{ mt: 2, borderRadius: 10 }} fullWidth
                    >Switch To {isSignup ? "Login" : "Signup"}  </Button>
                    )}
                </Box>
            </form>
    </Dialog>
    );
};
export default AuthForm 