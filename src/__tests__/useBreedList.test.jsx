import { expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
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

test("returns an empty array when no animal is passed", async () => {
  const { result } = renderHook(() => useBreedList(""), {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    ),
  });

  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("loaded");
});
