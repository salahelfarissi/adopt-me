import { useState, useDeferredValue, useMemo, useTransition } from 'react';
import useBreedList from './useBreedList';
import Results from '../Results';
import { useSelector, useDispatch } from 'react-redux';
import { all } from './searchParamsSlice';
import { useSearchQuery } from '../Details/petApiService';

const SearchParams = () => {
  // Get breed list for the selected animal
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);

  // Get the value of the adoptedPet state and the searchParams state
  const adoptedPet = useSelector((state) => state.adoptedPet.value);
  const searchParams = useSelector((state) => state.searchParams.value);

  const dispatch = useDispatch();

  let { data: pets } = useSearchQuery(searchParams);
  pets = pets ?? [];

  // Low priority rendering
  const [isPending, startTransition] = useTransition();
  const deferredPets = useDeferredValue(pets);
  const renderedPets = useMemo(
    () => <Results pets={deferredPets} />,
    [deferredPets],
  );

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            location: formData.get('location')?.toString() ?? '',
            animal: formData.get('animal')?.toString() ?? '',
            breed: formData.get('breed')?.toString() ?? '',
          };
          startTransition(() => {
            dispatch(all(obj));
          });
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" disabled={breeds.length === 0}>
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        {isPending ? (
          <div className="mini loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        ) : (
          <button>Submit</button>
        )}
      </form>
      {/* Results component is expecting a pets prop { props } */}
      {renderedPets}
    </div>
  );
};

export default SearchParams;
