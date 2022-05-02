import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Box, Grid, Card, Typography } from '@mui/material';

const PokemonEvolution = ({ pokemon = {} }) => (
  <Box>
    <Box
      mb={3}
      maxWidth={70}
      component="img"
      margin="auto"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
    />
    <Typography
      variant="body1"
      fontWeight={700}
      textAlign="center"
      textTransform="capitalize"
      sx={{
        color: (theme) => theme.palette.primary.main
      }}
    >
      {pokemon.name}
    </Typography>
  </Box>
);

PokemonEvolution.propTypes = {
  pokemon: PropTypes.object
};

const EvolutionChainPanel = ({ pokemon = {}, evolutionChainData = [] }) => {
  const getNextAndPreviousEvolution = () => {
    const index = evolutionChainData.findIndex(
      (evolution) => evolution.species.name === pokemon.name
    );
    if (index === -1) return [];
    const nextEvolution = evolutionChainData[index + 1];
    const previousEvolution = evolutionChainData[index - 1];
    return [previousEvolution, nextEvolution];
  };
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={6} md={6} display="flex" justifyContent="center">
        <Card sx={{ width: '120px', maxWidth: '120px', p: 1 }}>
          {getNextAndPreviousEvolution()[0] ? (
            <PokemonEvolution pokemon={getNextAndPreviousEvolution()[0]} />
          ) : (
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                color: (theme) => theme.palette.primary.main
              }}
            >
              No previous evolution
            </Typography>
          )}
          <Typography variant="caption" textAlign="center" component="p">
            Previous
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={6} md={6} display="flex" justifyContent="center">
        <Card sx={{ width: '120px', maxWidth: '120px', p: 1 }}>
          {getNextAndPreviousEvolution()[1] ? (
            <PokemonEvolution pokemon={getNextAndPreviousEvolution()[1]} />
          ) : (
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                color: (theme) => theme.palette.primary.main
              }}
            >
              No next evolution
            </Typography>
          )}
          <Typography variant="caption" textAlign="center" component="p">
            Next
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} display={{ md: 'flex' }} flexWrap="wrap">
        {evolutionChainData &&
          evolutionChainData.map((evolution, index) => (
            <React.Fragment key={index}>
              <PokemonEvolution pokemon={evolution} />
              {index !== evolutionChainData.length - 1 && (
                <Box
                  flex={1}
                  borderBottom="dotted #ccc"
                  display={{ xs: 'none', md: 'flex' }}
                />
              )}
            </React.Fragment>
          ))}
      </Grid>
    </Grid>
  );
};

EvolutionChainPanel.propTypes = {
  pokemon: PropTypes.object,
  evolutionChainData: PropTypes.array
};

export default EvolutionChainPanel;
