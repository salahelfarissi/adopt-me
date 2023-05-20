import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Pet from "../Pet";
import { StaticRouter } from "react-router-dom/server";

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
  pet.unmount();
});
