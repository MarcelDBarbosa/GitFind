import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./index";

describe("Home", () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) => {
      if (url.endsWith("/users/octocat/repos")) {
        return Promise.resolve({
          ok: true,
          json: async () => [{ id: 1, name: "hello-world", description: "Example repository" }],
        });
      }

      return Promise.resolve({
        ok: true,
        json: async () => ({
          login: "octocat",
          avatar_url: "https://example.com/avatar.png",
          name: "The Octocat",
          bio: "GitHub mascot",
        }),
      });
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("busca ao pressionar ENTER no campo de usuário", async () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("@username");
    await userEvent.type(input, "octocat{enter}");

    await waitFor(() => expect(screen.getByText("The Octocat")).toBeTruthy());
    expect(screen.getByText("hello-world")).toBeTruthy();
    expect(global.fetch).toHaveBeenCalledTimes(2);
  });
});
