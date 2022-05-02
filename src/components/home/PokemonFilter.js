import React, { useState } from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Box, Button, TextField } from '@mui/material';
import { SettingsBackupRestore, Search } from '@mui/icons-material';

const PokemonFilter = ({ onSearch, onClear }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => onSearch && onSearch(value);
  const handleChange = (e) => setValue(e.target.value);
  const handleClear = () => {
    setValue('');
    return onClear && onClear();
  };

  return (
    <Box px={{ xs: 0, md: 10 }}>
      <TextField
        fullWidth
        value={value || ''}
        label="Search pokemon by id or name"
        sx={{ m: 1 }}
        onChange={handleChange}
      />
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{ m: 1 }}
          size="large"
          onClick={handleSearch}
        >
          <Search />
          &nbsp; Search
        </Button>
        <Button
          variant="outlined"
          sx={{ m: 1 }}
          size="large"
          onClick={handleClear}
        >
          <SettingsBackupRestore color="primary" />
          &nbsp; Clear
        </Button>
      </Box>
    </Box>
  );
};

PokemonFilter.propTypes = {
  onSearch: PropTypes.func,
  onClear: PropTypes.func
};

export default PokemonFilter;
