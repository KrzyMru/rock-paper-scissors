import { expect, test, vi } from 'vitest';
import getRandomShape from './get-random-shape';
import { shapes } from '../../../../types';

test('returns valid random values', () => {
    vi.spyOn(Math, 'random')
        .mockReturnValueOnce(0)     // 0
        .mockReturnValueOnce(0.5)   // 1
        .mockReturnValueOnce(0.9);  // 2
    expect(getRandomShape()).toBe(shapes[0]);
    expect(getRandomShape()).toBe(shapes[1]);
    expect(getRandomShape()).toBe(shapes[2]);
    vi.restoreAllMocks();
});