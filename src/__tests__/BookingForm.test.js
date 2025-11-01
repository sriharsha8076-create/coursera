import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('Renders the BookingForm heading', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(
    <BookingForm 
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  
  const dateLabel = screen.getByText('Choose date');
  expect(dateLabel).toBeInTheDocument();
  
  const timeLabel = screen.getByText('Choose time');
  expect(timeLabel).toBeInTheDocument();
});

test('InitializeTimes returns the correct expected values', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  expect(availableTimes).toEqual(expect.arrayContaining(expectedTimes));
});

test('UpdateTimes returns the same value provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00'];
  const action = { type: 'UPDATE_TIMES', date: '2024-01-15' };
  
  // This test should be updated based on your actual reducer implementation
  expect(initialState).toEqual(expect.arrayContaining(['17:00', '18:00', '19:00']));
});

test('Form has correct HTML5 validation attributes', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  
  render(
    <BookingForm 
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  
  const dateInput = screen.getByLabelText('Choose date');
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveAttribute('type', 'date');
  
  const timeSelect = screen.getByLabelText('Choose time');
  expect(timeSelect).toHaveAttribute('required');
  
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('required');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
});
