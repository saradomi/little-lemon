import  {initializeTimes, updateTimes} from './BookingPage'; 
import { fetchAPI } from "./API";

test("initializeTimes validate that it returns expected value", () => {
  const expectedResult = { availableTimes: fetchAPI(new Date()) };
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

test("updateTimes", () => {
  const selectedDate = new Date("2022-06-01");
  const availableTimes = updateTimes(selectedDate);

  expect(Array.isArray(availableTimes)).toBe(true);
  expect(availableTimes).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "20:00",
    "21:00",
    "23:30",
  ]);
});