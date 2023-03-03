import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const MovieItem = () => {
  return (
      <Card sx={{
          margin:5,
          width: 250,
          height: 400,
          borderRadius: 5, ":hover": {
        boxShadow: '10px 10px 20px #ccc'
    } }}>
          <img
              height={'50%'}
              width="100%"
              src="" alt='' />
   
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
     
    </CardActions>
  </Card>
  )
}

export default MovieItem