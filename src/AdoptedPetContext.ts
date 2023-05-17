import { createContext } from 'react';
import { Pet } from './components/Details/APIResponsesTypes';

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 0,
    name: '',
    animal: 'bird',
    breed: '',
    images: [],
    description: '',
    city: '',
    state: '',
  },
  () => {},
]);

export default AdoptedPetContext;
