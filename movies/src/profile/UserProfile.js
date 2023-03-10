import { Box, Typography } from '@mui/material'

import React, { Fragment, useEffect, useState } from 'react'
import { getUserBooking } from '../api-helpers/api-helpers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const UserProfile = () => {
  const [bookings, setBookings] = useState()
  useEffect(() => {
    getUserBooking().then((res) => setBookings(res.bookings)).catch(err => console.log(err));
  }, []);
  console.log(bookings);
  return <Box width={"100%"} display="flex" >
    {bookings && bookings.lenght > 0 && (
      <Fragment>
        { " "}
   <Box
      flexDirection={'column'}
      width={"30"}
      justifyContent="center"
          alignItems={"center"}
          padding={3}
    >
      <AccountCircleIcon sx={{ fontSize: "10rem", textAlign:'center', ml:2 }} />
          <Typography
            mt={1}
            padding={1}
            width={"auto"}
            textAlign={'center'}
            border={'1px solid #ccc'}
            borderRadius={6}
          >Name:{bookings[0].user.name}
          </Typography>
          <Typography
            padding={1}
            width={"auto"}
            textAlign={'center'}
            border={'1px solid #ccc'}
            borderRadius={6}
          >Email:{bookings[0].user.email}
          </Typography>
          
    </Box>
        <Box width={"70"}
          display="flex"
          flex-direction={"column"} 
        >
          <Typography variant='h3' fontFamily={'verdana'} textAlign="center"
          padding={2}
          >
            Bookings 
          </Typography>
          
        </Box>
    </Fragment>
    )}
  </Box>

}

export default UserProfile