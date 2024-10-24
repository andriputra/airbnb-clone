import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainFeature from "../components/MainFeature";

describe("MainFeature Component", () => {
  beforeEach(() => {
    render(<MainFeature />);
  });

  test("renders the component correctly", () => {
    expect(screen.getByText(/Airbnb it/i)).toBeInTheDocument();
    expect(screen.getByText(/You could earn/i)).toBeInTheDocument();
    expect(
      screen.getByText(/7 nights at an estimated Rp820,198 a night/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  test("opens and closes the modal when button is clicked", () => {
    const button = screen.getByRole("button", { name: /search for more/i });

    // Click to open modal
    fireEvent.click(button);
    expect(screen.getByText(/Tell us about your place/i)).toBeInTheDocument();

    // Click to close modal
    const closeButton = screen.getByRole("button", { name: /✕/i });
    fireEvent.click(closeButton);
    expect(
      screen.queryByText(/Tell us about your place/i)
    ).not.toBeInTheDocument();
  });
});
