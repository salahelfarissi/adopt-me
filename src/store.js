import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './components/Details/adoptedPetSlice';
import searchParams from './components/SearchParams/searchParamsSlice';
import { petApiService } from './components/Details/petApiService';

const store = configureStore({
  reducer: {
    adoptedPet,
    searchParams,
    [petApiService.reducerPath]: petApiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApiService.middleware),
});

export default store;
