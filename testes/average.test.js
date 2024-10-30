// tests/average.test.js

const calculateAverage = require('../src');

test('calcula corretamente a média de três notas', () => {
    expect(calculateAverage(10, 20, 30)).toBe(20);
});

test('todas as notas são zero', () => {
    expect(calculateAverage(0, 0, 0)).toBe(0);
});

test('algumas ou todas as notas são valores máximos possíveis', () => {
    expect(calculateAverage(100, 100, 100)).toBe(100);
    expect(calculateAverage(0, 100, 50)).toBe(50);
});

test('notas com valores decimais', () => {
    expect(calculateAverage(10.5, 20.5, 30.5)).toBeCloseTo(20.5);
});
