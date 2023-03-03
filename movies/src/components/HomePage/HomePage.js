import { Box, Typography } from '@mui/material'
import React from 'react'
import MovieItem from '../Movies/MovieItem'

const HomePage = () => {
    return (
        
      <Box width={'100%'} height="100%" margin="auto" marginTop={2}>
          <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
              <img src='https://i0.wp.com/www.technicalsanatan.com/wp-content/uploads/2023/02/Brahmastra-full-movie-download.webp?fit=1280%2C720&ssl=1' alt='Brahmastra'
              
                  width={"100%"}
                  height={"100%"}
              />
          </Box>
          <Box padding={5} margin="auto">
              <Typography variant='h4' textAlign={'center'}>
                  Latest Releases
                  
          </Typography>
          </Box>
          <Box display="flex" width="80%" justifyContent={"center"} flexWrap="wrap">
              {[1, 2, 3, 4].map((item) => <MovieItem key={item} />)}
              
          </Box>
          
    </Box>
  )
}

export default HomePage