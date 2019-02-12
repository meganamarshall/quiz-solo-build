const test = QUnit.test;

import calculateResult from '../src/result/calculation/calculate-result.js';

test('return "Sophia" if sophia has the highest score', function(assert) {
    const answers = { season: 'winter', description: 'old', friday: 'date' };
    const result = calculateResult(answers);
    const expected = 'Sophia';

    assert.equal(result, expected);
});

test('return "Dorothy" if dorothy has the highest score', function(assert) {
    const answers = { season: 'autumn', description: 'masculine', friday: 'date' };
    const result = calculateResult(answers);
    const expected = 'Dorothy';

    assert.equal(result, expected);
});

test('return "Rose" if rose has the highest score', function(assert) {
    const answers = { season: 'winter', description: 'dumb', friday: 'lanai' };
    const result = calculateResult(answers);
    const expected = 'Rose';

    assert.equal(result, expected);
});

test('return "Blanche" if blanche has the highest score', function(assert) {
    const answers = { season: 'summer', description: 'old', friday: 'date' };
    const result = calculateResult(answers);
    const expected = 'Blanche';

    assert.equal(result, expected);
});

