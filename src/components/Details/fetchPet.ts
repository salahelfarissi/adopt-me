import { QueryFunction } from '@tanstack/react-query';
import { PetAPIResponse } from '../APIResponsesTypes';

const fetchPet: QueryFunction<PetAPIResponse, ['details', string]> = async ({
  queryKey,
}) => {
  const id = queryKey[1];

  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} failed with status ${apiRes.status}`);
  }

  // Do not need to use await here because we are returning the promise
  return apiRes.json();
};

export default fetchPet;
