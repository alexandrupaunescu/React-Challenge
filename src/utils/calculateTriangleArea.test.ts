import { calculateTriangleArea } from './calculateTriangleArea';

test('calculates the area of a triangle correctly', () => {
  expect(calculateTriangleArea(10, 5)).toBe(25);
  expect(calculateTriangleArea(0, 5)).toBe(0);
  expect(calculateTriangleArea(10, 0)).toBe(0);
  expect(calculateTriangleArea(-10, 5)).toBe(-25);
  expect(calculateTriangleArea(10, -5)).toBe(-25);
});
