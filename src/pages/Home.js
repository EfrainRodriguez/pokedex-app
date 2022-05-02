import React, { useEffect, useState, useCallback } from 'react';
// material ui
import {
  Box,
  IconButton,
  Grid,
  Container,
  Tooltip,
  Typography
} from '@mui/material';
import { Close } from '@mui/icons-material';
// motion
import { motion } from 'framer-motion';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokemons,
  setPokemonData,
  appendPokemonData,
  setPokemonSpeciesData,
  fetchPokemonByNameOrId,
  fetchPokemonSpeciesData,
  fetchPokemonEvolutionChain,
  fetchManyPokemonsByNameOrId,
  setPokemonEvolutionChainData
} from '../redux/slices/pokemons';
// components
import {
  PokemonCard,
  PokemonDetails,
  Modal,
  RangePagination,
  PokemonFilter
} from '../components';
import { varFadeInUp, varWrapEnter } from '../components/animation';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const { pokemonData, speciesData, evolutionChainData } = useSelector(
    (state) => state.pokemons
  );

  const dispatch = useDispatch();

  const getPokemonsFromChain = (chain = {}) => {
    if (chain.evolves_to.length === 0) return [chain.species];

    let pokemons = [];

    chain.evolves_to.map((item) => (pokemons = getPokemonsFromChain(item)));

    return [chain.species, ...pokemons];
  };

  const pokemonRequest = useCallback(
    (query) => {
      dispatch(fetchPokemons(query)).then((response) => {
        dispatch(setPokemonData(response.data));
        dispatch(
          fetchManyPokemonsByNameOrId(response.data && response.data.results)
        ).then((resultsResponse) => {
          dispatch(appendPokemonData({ results: resultsResponse }));
        });
      });
    },
    [dispatch]
  );

  const handleClickOnCard = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsOpen(true);
    dispatch(fetchPokemonSpeciesData(pokemon.id)).then((speciesResponse) => {
      dispatch(setPokemonSpeciesData(speciesResponse.data));
      dispatch(
        fetchPokemonEvolutionChain(speciesResponse.data.evolution_chain.url)
      ).then((evolutionResponse) => {
        dispatch(
          fetchManyPokemonsByNameOrId(
            getPokemonsFromChain(evolutionResponse.data.chain)
          )
        ).then((pokemonResponse) => {
          dispatch(setPokemonEvolutionChainData(pokemonResponse));
        });
      });
    });
  };

  const handleCloseModal = () => setIsOpen(false);

  const handlePageChange = (event, value) => {
    setPage(value);
    dispatch(appendPokemonData({ results: [] }));
    pokemonRequest(`offset=${(value - 1) * limit}&limit=${limit}`);
  };

  const handleChangeItemsPerPage = (event) => {
    const { value } = event.target;
    setLimit(value);
    dispatch(appendPokemonData({ results: [] }));
    pokemonRequest(`offset=${(page - 1) * value}&limit=${value}`);
  };

  const handleSearchPokemon = (query) => {
    const formattedQuery = query.toString().toLowerCase().trim();
    dispatch(fetchPokemonByNameOrId(formattedQuery))
      .then((response) => {
        dispatch(appendPokemonData({ results: [response] }));
      })
      .catch(() => {
        dispatch(appendPokemonData({ results: [] }));
      });
  };

  const handleClearFilter = () => {
    pokemonRequest();
  };

  useEffect(() => {
    pokemonRequest();
  }, [dispatch, pokemonRequest]);

  return (
    <Container>
      <PokemonFilter
        onSearch={handleSearchPokemon}
        onClear={handleClearFilter}
      />
      {pokemonData.results && pokemonData.results.length > 0 ? (
        <>
          <RangePagination
            page={page}
            pageSize={limit}
            count={pokemonData.count}
            onChangePage={handlePageChange}
            onChangeItemsPerPage={handleChangeItemsPerPage}
          />
          <motion.div
            initial="initial"
            animate="animate"
            variants={varWrapEnter}
          >
            <motion.div variants={varFadeInUp}>
              {pokemonData.results && (
                <Grid container spacing={3} justifyContent="center">
                  {pokemonData.results.map((pokemon, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                      <PokemonCard
                        pokemon={pokemon}
                        onClick={handleClickOnCard}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </motion.div>
          </motion.div>
          <Modal
            fullWidth
            maxWidth="lg"
            open={isOpen}
            onClose={handleCloseModal}
          >
            <Box display="flex" justifyContent="end" mt={-2} mr={-2}>
              <Tooltip title="Close" placement="top-end">
                <IconButton onClick={handleCloseModal}>
                  <Close color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
            <PokemonDetails
              pokemon={selectedPokemon}
              speciesData={speciesData}
              evolutionChainData={evolutionChainData}
            />
          </Modal>
          <RangePagination
            page={page}
            pageSize={limit}
            count={pokemonData.count}
            onChangePage={handlePageChange}
            onChangeItemsPerPage={handleChangeItemsPerPage}
          />
        </>
      ) : (
        <Typography variant="h5" align="center" mt={5}>
          No results found
        </Typography>
      )}
    </Container>
  );
};

export default Home;
