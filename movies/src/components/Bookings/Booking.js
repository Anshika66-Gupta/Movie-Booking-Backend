import { Box, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api-helpers/api-helpers';

const Bookings = () => {
    const [movie, setMovie] = useState();
    const id = useParams().id;
    console.log(id);
    useEffect(() => {
        getMovieDetails(id).then((res) => setMovie(res.movie)).catch((err) => console.log(err));
    }, [id]);
    console.log(movie);
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
                                  {movie.actors.map((actor)=>" " + actor + "")}
                              </Typography>
                              <Typography fontWeight={'bold'} marginTop={1} >
                                  Release Date: {new Date( movie.releaseDate).toDateString()}
                              </Typography>
                          </Box>
                          
                      </Box>
                      
                  </Box>
          </Fragment>
          }
    </div>
  )
}

export default Bookings