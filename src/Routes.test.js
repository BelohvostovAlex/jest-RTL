import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

describe("router test", () => {
  test("first test", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter> 
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    expect(mainLink).toBeInTheDocument();
    expect(aboutLink).toHaveTextContent("about");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toHaveTextContent("AboutPage");
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("error page", () => {
    render(
      <MemoryRouter initialEntries={["/assdadss"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
