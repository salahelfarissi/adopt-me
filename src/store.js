import { configureStore } from '@reduxjs/toolkit';
import adoptedPet from './components/Details/adoptedPetSlice';

const store = configureStore({
  reducer: {
    adoptedPet,
  },
});

export default store;
