import { Box, Button, FormLabel, TextField, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieDetails, newBooking } from '../../api-helpers/api-helpers';

const Bookings = () => {
    const [movie, setMovie] = useState();
    const [inputs, setInputs] = useState({ seatNumber: "", date: "" });

    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        getMovieDetails(id).then((res) => setMovie(res.movie)).catch((err) => console.log(err));
    }, [id]);
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        newBooking({ ...inputs, movie: movie._id }).then((res) => console.log(res)).catch((err) => console.log(err));

    }
    return (
        <div>
            {movie &&
                <Fragment>
                    <Typography padding={3}
                        fontFamily="fantasy"
                        variant='h4'
                        textAlign={'center'}
                    >Book Tickets of movie:
                        {movie.title}
                    </Typography>


                    <Box display={'flex'} justifyContent={"center"} >
                        <Box display={'flex'} justifyContent={"column"}
                            flexDirection="column"
                            paddingTop={3}
                            width="50%"
                            marginRight={"auto"}
                        >
                            <img width="80%"
                                height={"300px"}
                                src={movie.posterUrl}
                                alt={movie.title}
                            />

                            <Box width={"80%"}
                                marginTop={3}
                                padding={2} >
                                <Typography
                                    paddingTop={2}> {movie.description}
                                </Typography>
                                <Typography fontWeight={'bold'} marginTop={1}>
                                    starrer:
                                    {movie.actors.map((actor) => " " + actor + "")}
                                </Typography>
                                <Typography fontWeight={'bold'} marginTop={1} >
                                    Release Date: {new Date(movie.releaseDate).toDateString()}
                                </Typography>
                                <Box width={"50%"} paddingTop={3}>
                                    <form onSubmit={handleSubmit}>
                                        <Box
                                            padding={"50%"}
                                            margin={'auto'}
                                            display="flex"
                                            flexDirection={'column'}
                                        >
                                            <FormLabel>
                                                seat Number
                                            </FormLabel>
                                            <TextField
                                                value={inputs.seatNumber}
                                                onChange={handleChange}
                                                name='setNumber'
                                                type={'number'}
                                                margin="normal"
                                                variant='standard'
                                            />
                                            <FormLabel>
                                                Booking Date
                                            </FormLabel>
                                            <TextField
                                                value={inputs.date}
                                                onChange={handleChange}
                                                name='date'
                                                type={"date"}
                                                margin="normal"
                                                variant='standard'
                                            />
                                            <Button type='submit' sx={{ mt: 3 }}>
                                                Book Now
                                            </Button>
                                        </Box>
                                    </form>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fragment>
            }
        </div>
    )
}

export default Bookings