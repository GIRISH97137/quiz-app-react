// src/components/CustomButton.js
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, onClick, style }) => {
  return (
    <Button variant="contained" style={style} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
