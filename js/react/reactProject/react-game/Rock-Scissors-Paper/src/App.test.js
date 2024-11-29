import { render, screen } from "@testing-library/react";
import App from "./App";

test("rock button click show rock ", () => {
  render(<App />);
  screen
    .getByRole("button", {
      name: /가위/i,
    })
    .click();
  expect(screen.getAllByTestId("item-name")[0].textContent).toMatch(/Scissors/);
});

test("user choose rock, computer choose paper, user loose", async () => {
  render(<App />);
  screen
    .getByRole("button", {
      name: /바위/i,
    })
    .click();
});
