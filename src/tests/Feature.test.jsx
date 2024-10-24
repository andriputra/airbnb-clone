import React from "react";
import { render, screen } from "@testing-library/react";
import Feature from "../components/Feature";

describe("Feature Component", () => {
  beforeEach(() => {
    render(<Feature />);
  });

  test("renders the main heading", () => {
    const heading = screen.getByText(/airbnb it easily with airbnb setup/i);
    expect(heading).toBeInTheDocument();
  });

  test("renders the feature image", () => {
    const featureImage = screen.getByAltText(/feature image/i);
    expect(featureImage).toBeInTheDocument();
    expect(featureImage).toHaveAttribute("src", "/assets/img/bg-wide.webp");
  });

  test("renders the feature sections", () => {
    const features = [
      {
        title: "One-to-one guidance from a Superhost",
        description:
          "We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat.",
      },
      {
        title: "An experienced guest for your first booking",
        description:
          "For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.",
      },
      {
        title: "Specialized support from Airbnb",
        description:
          "New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.",
      },
    ];

    features.forEach(({ title, description }) => {
      const titleElement = screen.getByText(title);
      expect(titleElement).toBeInTheDocument();

      const descriptionElement = screen.getByText(description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });
});
