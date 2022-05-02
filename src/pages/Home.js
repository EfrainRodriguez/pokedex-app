import React, { useEffect } from 'react';
// material ui
import { Grid, Container } from '@mui/material';
// motion
import { motion } from 'framer-motion';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../redux/slices/pokemons';
// components
import { PokemonCard } from '../components';
import { varFadeInUp, varWrapEnter } from '../components/animation';

const Home = () => {
  const dispatch = useDispatch();
  const { pokemonData } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <Container>
      <motion.div initial="initial" animate="animate" variants={varWrapEnter}>
        <motion.div variants={varFadeInUp}>
          {pokemonData.results && (
            <Grid container spacing={3}>
              {pokemonData.results.map((pokemon, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <PokemonCard pokemon={pokemon} />
                </Grid>
              ))}
            </Grid>
          )}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Home;
