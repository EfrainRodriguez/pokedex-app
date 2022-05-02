import { configureStore } from '@reduxjs/toolkit';
// redux persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import settings from './slices/settings';
import common from './slices/common';
import pokemons from './slices/pokemons';

// persist config -------------------------------------------

const settingsPersistConfig = {
  key: 'settings',
  storage
};

// ----------------------------------------------------------

const store = configureStore({
  reducer: {
    settings: persistReducer(settingsPersistConfig, settings),
    common,
    pokemons
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
});

const persistor = persistStore(store);

export { store, persistor };
