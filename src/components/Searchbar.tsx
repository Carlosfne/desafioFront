import { Box, TextField } from '@mui/material';
import React from 'react';

interface SearchbarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const Searchbar: React.FC<SearchbarProps> = ({ setSearchQuery }) => {
  return (
    <Box mb={3}>
      <TextField
        fullWidth
        label="Insira GitHub username"
        variant="outlined"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Box>
  );
};
