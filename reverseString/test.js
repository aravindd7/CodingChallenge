const reverse = require('./index');
const reverse2 = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
  expect(reverse2).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
  expect(reverse2('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
  expect(reverse2('  abcd')).toEqual('dcba  ');
});
