import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Autocomplete,
    Box,
    IconButton,
    Tab,
    Tabs,
    TextField,
    Toolbar
} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../Store';
//const dummyArray = ["Selfie", "Pathan", "Antman", "Aquaman", "Parasite"];
//const movies = ["Selfie", "Pathan", "Antman", "Aquaman", "Parasite"];

const Header = () => {
    const dispatch = useDispatch()
    const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [value, setValue] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies().then((data) => setMovies(data.movies)).catch((err) => console.log(err));
    }, []);
    const logout = (isAdmin) => {
        dispatch(isAdmin ? adminActions.logout() : userActions.logout())

    }

    return (
        <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
            <Toolbar>
                <Box width={"20%"}>
                    <IconButton LinkComponent={Link} to="/" >
                        <MovieIcon />
                        </IconButton>
                </Box>
                <Box width={"30%"} margin={"auto"}>
                    <Autocomplete
                        freeSolo
                        options={movies && movies.map((option) => option.title)}
                        renderInput={(params) => <TextField sx={{ input: { color: "white" } }} variant='standard' {...params} placeholder="Search Movies" />}
                    />
                </Box>
                <Box display={'flex'}>
                    <Tabs
                        textColor="inherit"
                        indicatorColor='secondary'
                        value={value}
                        onChange={(e, val) => setValue(val)}>


                        <Tab LinkComponent={Link} to='/movies' label="All Movies" />
                        {!isAdminLoggedIn && !isUserLoggedIn && (
                            <>
                                <Tab label="Auth" LinkComponent={Link} to='/auth' />
                                <Tab label="Admin" LinkComponent={Link} to='/admin' />
                            </>
                        )}
                        {
                            isUserLoggedIn && (
                                <>
                                    <Tab label="Profile" LinkComponent={Link} to='/user' />
                                    <Tab onClick={() => logout(false)} label="Logout" LinkComponent={Link} to='/' />
                                </>
                            )}
                        {
                            isAdminLoggedIn && (
                                <>
                                    <Tab label="Add Movie" LinkComponent={Link} to='/add' />
                                    <Tab label="Profile" LinkComponent={Link} to='/user-admin' />
                                    <Tab onClick={() => logout(true)} label="Logout" LinkComponent={Link} to='/' />

                                </>
                            )}
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header