import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const LISCard = () => {
  return (
    <Card className='education__card'>
      <CardContent>
        <Typography variant="h5">Licenciatura Ingeniería Informática (Grado)</Typography>
        <Typography variant="body2">UV (Veracruz, México)</Typography>
        <Typography variant="body2">2014 - 2018</Typography>
      </CardContent>
    </Card>
  );
}

export default LISCard;