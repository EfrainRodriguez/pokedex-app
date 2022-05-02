import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Box, Grid, Card, Typography, ButtonBase } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const CardStyled = styled(Card)(() => ({
  transition: 'transform 0.15s ease-in-out',
  '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' }
}));

const PokemonEvolution = ({
  pokemon = {},
  emptyDataText,
  label,
  hasCard = true,
  maxWidthImage = 80,
  onSelectEvolution
}) => {
  const Wrapper = hasCard && pokemon.name ? CardStyled : Box;
  const ButtonWrapper = pokemon.name ? ButtonBase : Box;
  const handleSelectEvolution = () =>
    onSelectEvolution && onSelectEvolution(pokemon);
  return (
    <ButtonWrapper onClick={pokemon.name ? handleSelectEvolution : null}>
      <Wrapper
        sx={{
          width: '120px',
          maxWidth: '120px',
          p: 1
        }}
      >
        {pokemon && Object.keys(pokemon).length > 0 ? (
          <Box>
            <Box
              mb={3}
              maxWidth={maxWidthImage}
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
        ) : (
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              color: (theme) => theme.palette.primary.main
            }}
          >
            {emptyDataText}
          </Typography>
        )}
        <Typography variant="caption" textAlign="center" component="p">
          {label}
        </Typography>
      </Wrapper>
    </ButtonWrapper>
  );
};

PokemonEvolution.propTypes = {
  maxWidthImage: PropTypes.number,
  pokemon: PropTypes.object,
  hasCard: PropTypes.bool,
  emptyDataText: PropTypes.string,
  label: PropTypes.string,
  onSelectEvolution: PropTypes.func
};

const EvolutionChainPanel = ({
  pokemon = {},
  evolutionChainData = [],
  onSelectEvolution
}) => {
  const getNextAndPreviousEvolution = () => {
    const index = evolutionChainData.findIndex(
      (evolution) => evolution.species.name === pokemon.name
    );
    if (index === -1) return [];
    const nextEvolution = evolutionChainData[index + 1];
    const previousEvolution = evolutionChainData[index - 1];
    return [previousEvolution, nextEvolution];
  };
  const handleSelectEvolution = (evolution) =>
    onSelectEvolution && onSelectEvolution(evolution);
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={6} md={6} display="flex" justifyContent="center">
        <PokemonEvolution
          pokemon={getNextAndPreviousEvolution()[0]}
          emptyDataText="No previous evolution"
          label="Previous evolution"
          onSelectEvolution={handleSelectEvolution}
        />
      </Grid>
      <Grid item xs={6} md={6} display="flex" justifyContent="center">
        <PokemonEvolution
          pokemon={getNextAndPreviousEvolution()[1]}
          emptyDataText="No next evolution"
          label="Next evolution"
          onSelectEvolution={handleSelectEvolution}
        />
      </Grid>
      <Grid item xs={12} display={{ md: 'flex' }} flexWrap="wrap">
        {evolutionChainData &&
          evolutionChainData.map((evolution, index) => (
            <React.Fragment key={index}>
              <PokemonEvolution
                maxWidthImage={60}
                hasCard={false}
                pokemon={evolution}
                onSelectEvolution={handleSelectEvolution}
              />
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
  evolutionChainData: PropTypes.array,
  onSelectEvolution: PropTypes.func
};

export default EvolutionChainPanel;
