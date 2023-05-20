import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useBreedList from "../useBreedList";
import store from "../store";
import { Provider } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
      retry: false,
    },
  },
});

const getBreedList = (animal) => {
  let list;

  const TestComponent = () => {
    list = useBreedList(animal);
    return null;
  };

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    </Provider>
  );

  return list;
};

test("returns an empty array when no animal is passed", async () => {
  const [breedList, status] = getBreedList();
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loaded");
});
