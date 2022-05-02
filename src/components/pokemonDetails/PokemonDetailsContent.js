import React, { useState } from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Box, Tab, Grid, Tabs, Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
// components
import InfoPanel from './InfoPanel';
import StatsPanel from './StatsPanel';
import EvolutionChainPanel from './EvolutionChainPanel';

const PokemonImgContainerStyle = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const PokemonImgStyle = styled('img')({
  width: '80%',
  height: '80%'
});

const PokemonDetails = ({
  pokemon = {},
  speciesData = {},
  evolutionChainData = []
}) => {
  const [currentTab, setCurrentTab] = useState('info');

  const getTabContent = (tab) => {
    if (tab === 'info')
      return <InfoPanel pokemon={pokemon} speciesData={speciesData} />;
    if (tab === 'evolutions')
      return (
        <EvolutionChainPanel
          pokemon={pokemon}
          evolutionChainData={evolutionChainData}
        />
      );
    if (tab === 'stats') return <StatsPanel pokemon={pokemon} />;
    return null;
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <PokemonImgContainerStyle>
          <PokemonImgStyle
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
            alt={pokemon.name}
          />
        </PokemonImgContainerStyle>
        <Typography
          variant="h3"
          letterSpacing={2}
          textTransform="capitalize"
          textAlign="center"
        >
          {pokemon.name}
        </Typography>
        <Typography
          variant="h5"
          textAlign="center"
          textTransform="capitalize"
          mb={4}
          sx={{
            color: (theme) => theme.palette.primary.main
          }}
        >
          {pokemon.id}
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={currentTab}
              scrollButtons="auto"
              variant="scrollable"
              allowScrollButtonsMobile
              onChange={(event, tab) => setCurrentTab(tab)}
            >
              <Tab disableRipple value="info" label="Info" />
              <Tab disableRipple value="evolutions" label="Evolutions" />
              <Tab disableRipple value="stats" label="Stats" />
            </Tabs>
          </Box>
          <Box mt={3}>{getTabContent(currentTab)}</Box>
        </Box>
      </Grid>
    </Grid>
  );
};

PokemonDetails.propTypes = {
  pokemon: PropTypes.object,
  speciesData: PropTypes.object,
  evolutionChainData: PropTypes.array
};

export default PokemonDetails;
