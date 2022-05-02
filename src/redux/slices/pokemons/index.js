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
    }
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
    }
  }
});

export const { setPokemonData, appendPokemonData } = pokemonSlice.actions;

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
      .then((response) => {
        dispatch(appendPokemonData({ results: response }));
      })
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
        .get(`pokemon/?${query}`)
        .then((response) => {
          dispatch(setPokemonData(response.data));
          dispatch(
            fetchManyPokemonsByNameOrId(response.data && response.data.results)
          );
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
