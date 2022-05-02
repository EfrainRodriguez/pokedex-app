import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import {
  Card,
  Box,
  Chip,
  Divider,
  CardContent,
  Typography
} from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
// utils
import {
  getBackGroundColorByPokemon,
  getPokemonColorByType
} from '../../utils/pokemonColor';

// ----------------------------------------------------------------------

const PokemonImgContainerStyle = styled(Box)({
  paddingBottom: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const PokemonImgStyle = styled('img')({
  width: '80%',
  height: '80%'
});

// ----------------------------------------------------------------------

const PokemonCard = ({ pokemon = {} }) => (
  <Card>
    <PokemonImgContainerStyle sx={{ ...getBackGroundColorByPokemon(pokemon) }}>
      <PokemonImgStyle
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt={pokemon.name}
      />
    </PokemonImgContainerStyle>
    <CardContent>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="h5" textTransform="capitalize">
          {pokemon.name}
        </Typography>
        <Typography variant="h5" textTransform="capitalize">
          {pokemon.id}
        </Typography>
      </Box>
      <Divider />
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={2}>
        {pokemon.types &&
          pokemon.types.map((type, index) => (
            <Chip
              key={index}
              size="small"
              variant="contained"
              label={
                <Typography variant="body1" textTransform="capitalize">
                  {type.type.name}
                </Typography>
              }
              sx={{
                margin: '0px 5px',
                color: '#fff',
                backgroundColor: getPokemonColorByType(type.type.name)
              }}
            />
          ))}
      </Box>
      <Typography
        component="div"
        variant="caption"
        textAlign="center"
        sx={{
          color: (theme) => theme.palette.primary.main
        }}
      >
        {pokemon.types && pokemon.types.length > 1 ? 'Types' : 'Type'}
      </Typography>
      <Box display="flex" flexWrap="wrap" mt={2}>
        <Typography width="50%" variant="body1" textAlign="center">
          {pokemon.height * 10} cm
        </Typography>
        <Typography width="50%" variant="body1" textAlign="center">
          {pokemon.weight / 10} Kg
        </Typography>
        <Typography
          width="50%"
          variant="caption"
          textAlign="center"
          sx={{
            color: (theme) => theme.palette.primary.main
          }}
        >
          Height
        </Typography>
        <Typography
          width="50%"
          variant="caption"
          textAlign="center"
          sx={{
            color: (theme) => theme.palette.primary.main
          }}
        >
          Weight
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

PokemonCard.propTypes = {
  pokemon: PropTypes.object
};

export default PokemonCard;
