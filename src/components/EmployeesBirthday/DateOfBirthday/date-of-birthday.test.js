import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { DateOfBirthday } from "./date-of-birthday";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Date of birthday", () => {
  it("should format date", () => {
    act(() => {
      render(<DateOfBirthday date="1995-12-23T15:00:00.000Z" />, container);
    });
    expect(container.textContent).toBe("23 December, 1995 year");
  });
});
