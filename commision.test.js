const { commission, MILLISECONDS_IN_DAY } = require('./commission');

const ONE_MINUTE = 60 * 1000;

test('После вылета', () => { expect(commission(Date.now() - ONE_MINUTE)).toBe(100); });
test('Во время вылета', () => { expect(commission(Date.now())).toBe(75); });
test('За минуту до вылета', () => { expect(commission(Date.now() + ONE_MINUTE)).toBe(75); });

test('За день', () => { expect(commission(Date.now() + MILLISECONDS_IN_DAY)).toBe(50); });
test('За день и 1 минуту', () => { expect(commission(Date.now() + MILLISECONDS_IN_DAY + ONE_MINUTE)).toBe(50); });

test('За 5 дней', () => { expect(commission(Date.now() + 5 * MILLISECONDS_IN_DAY)).toBe(20); });
test('За 5 дней и 1 минуту', () => { expect(commission(Date.now() + MILLISECONDS_IN_DAY * 5 + ONE_MINUTE)).toBe(20); });

test('За 10 дней', () => { expect(commission(Date.now() + 10 * MILLISECONDS_IN_DAY)).toBe(0); });
test('За 10 дней и 1 минуту', () => { expect(commission(Date.now() + MILLISECONDS_IN_DAY * 10 + ONE_MINUTE)).toBe(0); });
