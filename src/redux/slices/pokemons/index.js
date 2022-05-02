import { createSlice } from '@reduxjs/toolkit';
// axios client
import axios from '../../../utils/axios';
// common slice
import { setLoading } from '../common';

// ----------------------------------------------------------------------

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: {
    pokemonData: {
      results: [],
      count: 0,
      previous: null,
      next: null
    },
    speciesData: {},
    evolutionChainData: {}
  },
  reducers: {
    setPokemonData(state, action) {
      state.pokemonData = action.payload;
    },
    appendPokemonData(state, action) {
      state.pokemonData = {
        ...state.pokemonData,
        ...action.payload
      };
    },
    setPokemonSpeciesData(state, action) {
      state.speciesData = action.payload;
    },
    setPokemonEvolutionChainData(state, action) {
      state.evolutionChainData = action.payload;
    }
  }
});

export const {
  setPokemonData,
  appendPokemonData,
  setPokemonSpeciesData,
  setPokemonEvolutionChainData
} = pokemonSlice.actions;

export default pokemonSlice.reducer;

// ----------------------------------------------------------------------

export const fetchPokemonByNameOrId = (nameOrId) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    axios
      .get(`/pokemon/${nameOrId}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  });
};

export const fetchManyPokemonsByNameOrId =
  (pokemons = []) =>
  (dispatch) => {
    dispatch(setLoading(true));
    return Promise.all(
      pokemons.map((pokemon) => dispatch(fetchPokemonByNameOrId(pokemon.name)))
    )
      .then((response) => response)
      .catch((error) => error)
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

export const fetchPokemons =
  (query = '') =>
  (dispatch) => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      axios
        .get(`/pokemon/?${query}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    });
  };

export const fetchPokemonSpeciesData = (pokemonId) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    axios
      .get(`/pokemon-species/${pokemonId}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  });
};

export const fetchPokemonEvolutionChain = (chainUrl) => (dispatch) => {
  dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    axios
      .get(`${chainUrl}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  });
};
