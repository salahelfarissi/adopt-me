import { QueryFunction } from '@tanstack/react-query';
import { BreedListAPIResponse, Animal } from '../Details/APIResponsesTypes';

const fetchBreedList: QueryFunction<
  BreedListAPIResponse,
  ['breeds', Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} failed with status ${apiRes.status}`);
  }

  // Do not need to use await here because we are returning the promise
  return apiRes.json();
};

export default fetchBreedList;
