const { commission, MILLISECONDS_IN_DAY } = require('./commission');

const ONE_MINUTE = 60 * 1000;

/**
 * @param flyDate -- время вылета\
 */
function test(text, flyDate, res) {
  if (commission(flyDate) == res) {
    console.log(text, 'Успех');
  } else {
    console.log(text, 'Ошибка');
  }
};

test('После вылета:          ', Date.now() - ONE_MINUTE, 100);
test('Во время вылета:       ', Date.now(), 75);
test('За секунду до вылета:  ', Date.now() + ONE_MINUTE, 75);

test('За день:               ', Date.now() + MILLISECONDS_IN_DAY, 50);
test('За день и 1 минуту:    ', Date.now() + MILLISECONDS_IN_DAY + ONE_MINUTE, 50);

test('За 5 дней:             ', Date.now() + 5 * MILLISECONDS_IN_DAY, 20);
test('За 5 дней и 1 минуту:  ', Date.now() + MILLISECONDS_IN_DAY * 5 + ONE_MINUTE, 20);

test('За 10 дней:            ', Date.now() + 10 * MILLISECONDS_IN_DAY, 0);
test('За 10 дней и 1 минуту: ', Date.now() + MILLISECONDS_IN_DAY * 10 + ONE_MINUTE, 0);
