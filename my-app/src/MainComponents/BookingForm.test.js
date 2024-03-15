
import BookingForm from './BookingForm';
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<MemoryRouter><BookingForm /></MemoryRouter>);
  const headingElement = screen.getByText(/Book Now/i);
  expect(headingElement).toBeInTheDocument();
})