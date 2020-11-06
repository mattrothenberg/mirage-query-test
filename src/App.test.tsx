import React from "react";
import { render, screen, waitFor } from "./test-util";
import App from "./App";
import { startMirage } from "./mirage";
import { Server, Response } from "miragejs";

describe("App", () => {
  let server: Server;

  beforeEach(() => {
    server = startMirage("test");
  });

  afterEach(() => {
    server.shutdown();
  });

  it("shows a todo list if todo fetch succeeds", async () => {
    server.createList("todo", 10);

    render(<App />);

    await screen.findByText("Todo: 1");

    const todoListItems = await screen.findAllByRole("listitem");
    expect(todoListItems.length).toEqual(10);
  });

  it("shows an error message if todo fetch fails", async () => {
    server.get("/todos", () => {
      return new Response(500, {});
    });

    render(<App />);

    await waitFor(() => {
      screen.getByText(/Error message goes here/);
    });
  });
});
