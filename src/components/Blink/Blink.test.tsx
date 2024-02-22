import React from "react";
import { render } from "@testing-library/react";

import Blink from "./Blink";

describe("Center", () => {
  test("renders the Center component", () => {
    render(<Blink>Blinking text!</Blink>);
  });
});