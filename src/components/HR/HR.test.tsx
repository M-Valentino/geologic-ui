import React from "react";
import { render } from "@testing-library/react";

import HR from "./HR";

describe("HR", () => {
  test("renders the HR component", () => {
    render(<HR />);
  });
});