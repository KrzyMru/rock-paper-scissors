import { expect, test } from 'vitest';
import judgeResult from './judge-result';

test('judges ties correctly', () => {
    expect(judgeResult('rock', 'rock')).toBe('tie');
    expect(judgeResult('paper', 'paper')).toBe('tie');
    expect(judgeResult('scissors', 'scissors')).toBe('tie');
});

test('judges wins correctly', () => {
    expect(judgeResult('rock', 'scissors')).toBe('win');
    expect(judgeResult('paper', 'rock')).toBe('win');
    expect(judgeResult('scissors', 'paper')).toBe('win');
});

test('judges losses correctly', () => {
    expect(judgeResult('rock', 'paper')).toBe('loss');
    expect(judgeResult('paper', 'scissors')).toBe('loss');
    expect(judgeResult('scissors', 'rock')).toBe('loss');
});