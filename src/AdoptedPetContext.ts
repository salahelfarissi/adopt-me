import { createContext } from 'react';
import { Pet } from './components/APIResponsesTypes';

// This is a context that will be used to store the pet that the user has
// adopted. It is initialized with a dummy value so that TypeScript does not
// complain about the value being null.
const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: 'Fido',
    animal: 'dog',
    description: 'Lorem ipsum',
    breed: 'Beagle',
    images: [],
    city: 'Seattle',
    state: 'WA',
  },
  () => {},
]);

export default AdoptedPetContext;
