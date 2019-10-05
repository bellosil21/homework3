
const sum = require('../public/javascripts/sum.js');

// Tests sum method to determine if it output is correct
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});