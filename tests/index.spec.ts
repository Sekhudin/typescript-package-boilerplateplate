import { example } from '../src';
import ex from '../src';

describe('test', () => {
  test('true should be false ', () => {
    expect(example(true)).toBe(false);
  });

  test('true should be false ', () => {
    expect(example(true)).toBe(false);
  });

  test('false should be true ', () => {
    expect(ex.example(false)).toBe(true);
  });

  test('false should be true ', () => {
    expect(ex.example(false)).toBe(true);
  });
});
