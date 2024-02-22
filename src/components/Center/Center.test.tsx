import React from "react";
import { render } from "@testing-library/react";

import Center from "./Center";

describe("Center", () => {
  test("renders the Center component", () => {
    render(<Center>Centered text!</Center>);
  });
});