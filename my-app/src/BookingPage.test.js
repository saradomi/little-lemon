import  {initializeTimes, updateTimes} from './BookingPage'; 

describe('initializeTimes', () => {
  test('returns the correct expected value', () => {

    const newState = initializeTimes();

    const expectedState = {
      times: [
        '17:00', '18:00', '19:00', '20:00', '21:00'
      ],
      selectedDate: '2024-03-04'
    };

    expect(newState).toEqual(expectedState);
  });
});

describe('updateTimes', () => {
  test('returns the same value that is provided in the state', () => {
    const state = {
      times: [
        '17:00', '18:00', '19:00', '20:00', '21:00'
      ],
      selectedDate: '2024-03-04'
    };

    const newState = updateTimes(state);

    expect(newState).toEqual(state);
  });
});
