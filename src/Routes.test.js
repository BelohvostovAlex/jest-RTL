import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndStore } from "./test/helpers/renderWithRouterAndStore";
import { Navbar } from "./components/Navbar/Navbar";

describe("router test", () => {
  test("first test", () => {
    renderWithRouterAndStore(<Navbar />)
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
    renderWithRouterAndStore(null, '/sdasdasd');
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
