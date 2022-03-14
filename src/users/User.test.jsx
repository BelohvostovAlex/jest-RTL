import { render, screen, fireEvent } from "@testing-library/react";
import { Users } from "./Users";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../test/helpers/renderWithRouter";

jest.mock("axios");

describe("testing Users", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("users", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(axios.get).toBeCalledTimes(1);
    expect(users.length).toBe(3);
    screen.debug();
  });
  test("test redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    render(
      renderWithRouter(<Users />, '/users')
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-details-page")).toBeInTheDocument();
  });
});
