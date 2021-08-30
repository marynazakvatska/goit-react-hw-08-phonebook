import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
/* import contactsSlice from './contacts/contactsSlice'; */
import authReducer from '../auth/authSlice';
import contactsSlice from './slice';
import {
  persistStore, persistReducer,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  thunk,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

 const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
   phoneBook: contactsSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'production',
})

export const persistor = persistStore(store);
export default store;

/* 
import contactsSlice from './slice';

const store = configureStore({
  reducer: {
    phoneBook: contactsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default { store } */