import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuestionSection from '../components/QuestionSection';

describe('QuestionSection Component', () => {
  beforeEach(() => {
    render(<QuestionSection />);
  });

  test('renders all questions', () => {
    const questions = [
      "Is my place right for Airbnb?",
      "Do I have to host all the time?",
      "How much should I interact with guests?",
      "Any tips on being a great Airbnb Host?",
      "What are Airbnbs fees?"
    ];

    questions.forEach(question => {
      expect(screen.getByText(question)).toBeInTheDocument();
    });
  });

  test('toggles answer display when question is clicked', () => {
    const firstQuestion = screen.getByText("Is my place right for Airbnb?");
    
    // Adjusting the answer text for flexibility
    const firstAnswerText = "Airbnb guests are interested in all kinds of places.";

    // Initially, the answer should not be visible
    expect(screen.queryByText(firstAnswerText)).not.toBeInTheDocument();

    // Click the first question to open the answer
    fireEvent.click(firstQuestion);

    // Debugging to see rendered output
    screen.debug();  

    // Check if the answer is now visible
    expect(screen.getByText(firstAnswerText)).toBeVisible();

    // Click the question again to close the answer
    fireEvent.click(firstQuestion);

    // The answer should be hidden again
    expect(screen.queryByText(firstAnswerText)).not.toBeInTheDocument();
  });
});