import React from 'react';
// prop types
import PropTypes from 'prop-types';
// material ui
import { Grid, Typography } from '@mui/material';

const ContentInfoItem = ({ label, value }) => (
  <>
    <Typography
      variant="body1"
      textAlign="center"
      textTransform="capitalize"
      sx={{
        color: (theme) => theme.palette.primary.main
      }}
    >
      {value}
    </Typography>
    <Typography variant="caption" textAlign="center" component="p" mb={4}>
      {label}
    </Typography>
  </>
);

ContentInfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

const InfoPanel = ({ pokemon = {}, speciesData = {} }) => (
  <Grid container spacing={{ xs: 1, md: 3 }}>
    <Grid item xs={12} md={4}>
      <ContentInfoItem
        value={
          pokemon.abilities &&
          pokemon.abilities.map((ability, i) =>
            i === 0 ? ability.ability.name : ` / ${ability.ability.name}`
          )
        }
        label="Abilities"
      />
      <ContentInfoItem value={`${pokemon.height * 10} cm`} label="Height" />
      <ContentInfoItem value={`${pokemon.weight / 10} Kg`} label="Weight" />
    </Grid>
    <Grid item xs={12} md={4}>
      <ContentInfoItem
        value={
          pokemon.types &&
          pokemon.types.map((type, i) =>
            i === 0 ? type.type.name : ` / ${type.type.name}`
          )
        }
        label={pokemon.types && pokemon.types.length > 1 ? 'Types' : 'Type'}
      />
      <ContentInfoItem
        value={
          speciesData.egg_groups &&
          speciesData.egg_groups.map((egg, i) =>
            i === 0 ? egg.name : ` / ${egg.name}`
          )
        }
        label={
          speciesData.egg_groups && speciesData.egg_groups.length > 1
            ? 'Egg groups'
            : 'Egg group'
        }
      />
      <ContentInfoItem
        value={speciesData.habitat && speciesData.habitat.name}
        label="Habitat"
      />
    </Grid>
    <Grid item xs={12} md={4}>
      <ContentInfoItem
        value={
          speciesData.genera &&
          speciesData.genera.map((gen) =>
            gen.language.name === 'en'
              ? gen.genus.replace(' Pokémon', '')
              : null
          )
        }
        label="Genus"
      />
      <ContentInfoItem
        value={speciesData.shape && speciesData.shape.name}
        label="Shape"
      />
      <ContentInfoItem
        value={speciesData.growth_rate && speciesData.growth_rate.name}
        label="Growth rate"
      />
    </Grid>
  </Grid>
);

InfoPanel.propTypes = {
  pokemon: PropTypes.object,
  speciesData: PropTypes.object
};

export default InfoPanel;
