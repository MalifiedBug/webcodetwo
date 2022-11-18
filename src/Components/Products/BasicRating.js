import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export function BasicRating({ prod }) {

  return (
    <Box className='ratingbox'
      sx={{
        '& > legend': { mt: 0 },
      }}
    >
      <Rating name="read-only" value={prod.rating} readOnly />
      <span>{prod.peoplerated} ratings</span>
    </Box>
  );
}
