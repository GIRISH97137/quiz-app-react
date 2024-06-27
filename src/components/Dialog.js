// src/components/Dialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ResultDialog = ({ open, score, passFail, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Quiz Result</DialogTitle>
      <DialogContent>
        <p>Your Score: {score}</p>
        <p>Status: {passFail ? 'Pass' : 'Fail'}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResultDialog;
