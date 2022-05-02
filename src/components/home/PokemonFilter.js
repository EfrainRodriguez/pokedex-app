import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Box, Button, TextField } from '@mui/material';
import { SettingsBackupRestore, Search } from '@mui/icons-material';

const PokemonFilter = ({ value, onSearch, onClear, onChange }) => {
  const handleSearch = () => onSearch && onSearch(value);
  const handleChange = (e) => onChange && onChange(e);
  const handleClear = () => onClear && onClear();

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
  value: PropTypes.string,
  onSearch: PropTypes.func,
  onClear: PropTypes.func,
  onChange: PropTypes.func
};

export default PokemonFilter;
