import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MUEICard = () => {
  return (
    <Card className='education__card'>
      <CardContent>
        <Typography variant="h5">Master en Ingeniería Informática</Typography>
        <Typography variant="body2">UDC (A Coruña, España)</Typography>
        <Typography variant="body2">2019 - 2021</Typography>
      </CardContent>
    </Card>
  );
}

export default MUEICard;