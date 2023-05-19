import { QueryFunction } from '@tanstack/react-query';
import { PetAPIResponse } from '../APIResponsesTypes';

const fetchSearch: QueryFunction<
  PetAPIResponse,
  [
    'search',
    {
      location: string;
      animal: string;
      breed: string;
    },
  ]
> = async function ({ queryKey }) {
  const { animal, location, breed } = queryKey[1];

  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
  );

  if (!res.ok) {
    throw new Error(`pets/${animal} failed with status ${res.status}`);
  }

  return res.json();
};

export default fetchSearch;
