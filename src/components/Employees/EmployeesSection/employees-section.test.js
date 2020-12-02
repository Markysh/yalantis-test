import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { EmployeesSection } from "../EmployeesSection/employees-section";
import withStore from "../../../utils/test/store";

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

describe("Employees section", () => {
  it("should render 'b' char", () => {
    act(() => {
      const state = {
        users: [],
      };
      const Component = withStore(EmployeesSection, state);
      render(<Component char="b" />, container);
    });
    expect(document.querySelector('[data-testid="char"]').textContent).toBe(
      "B"
    );
  });

  it("Should render empty when no users", () => {
    act(() => {
      const state = {
        users: [],
      };
      const Component = withStore(EmployeesSection, state);
      render(<Component char="a" />, container);
    });

    expect(document.querySelector('[data-testid="empty"]').textContent).toBe(
      "---"
    );
  });
});
