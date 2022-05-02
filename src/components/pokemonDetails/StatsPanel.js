import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Box, Grid, Typography, CircularProgress } from '@mui/material';

const CircularProgressWithLabel = ({ value }) => (
  <Box sx={{ position: 'relative', display: 'inline-flex' }} mb={1}>
    <CircularProgress variant="determinate" value={value} size={80} />
    <Box
      sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant="caption" component="div" color="text.secondary">
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
};

const StatsPanel = ({ pokemon }) => (
  <Grid container spacing={3}>
    {pokemon.stats &&
      pokemon.stats.map((stat, i) => (
        <Grid item xs={6} sm={4} md={4} key={i}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <CircularProgressWithLabel value={stat.base_stat} />
          </Box>
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            textAlign="center"
          >
            {stat.stat.name}
          </Typography>
        </Grid>
      ))}
  </Grid>
);

StatsPanel.propTypes = {
  pokemon: PropTypes.object
};

export default StatsPanel;
