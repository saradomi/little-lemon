
import BookingForm from './BookingForm';
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const headingElement = screen.getByText(/Book Now/i);
  expect(headingElement).toBeInTheDocument();
})

test("Input GUESTS should have input-error class if > 10 or < 0", () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const guestsInput = screen.getByPlaceholderText("1");
  fireEvent.change(guestsInput, { target: { value: 5 } });
  expect(guestsInput).toHaveClass("form-item");
});

test("Occasion must have been chosen", () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const occasionInput = screen.getByLabelText("Occasion");
  fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  expect(occasionInput).toHaveClass("form-item");
});

test("Renders GUESTS input with correct attributes", () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const guestsInput = screen.getByLabelText("Number of guests");
  expect(guestsInput).toBeInTheDocument();
  expect(guestsInput.getAttribute("type")).toBe("number");
  expect(guestsInput.getAttribute("min")).toBe("1");
  expect(guestsInput.getAttribute("max")).toBe("10");
});

test("Renders DATE input with correct attributes", () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toBeInTheDocument();
  expect(dateInput.getAttribute("type")).toBe("date");
});

test("Renders the OCCASION input field with correct attributes", () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const occasionInput = screen.getByLabelText("Occasion");
  expect(occasionInput).toBeInTheDocument();
  expect(occasionInput.getAttribute("id")).toBe("occasion");
});

test("Renders the TIME input field with correct attributes", () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const timeInput = screen.getByLabelText("Choose time");
  expect(timeInput).toBeInTheDocument();
  expect(timeInput.getAttribute("id")).toBe("res-time");
});