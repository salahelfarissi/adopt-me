import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './components/Details/adoptedPetSlice';
import searchParams from './components/SearchParams/searchParamsSlice';

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
  },
});

export default store;
