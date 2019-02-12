const test = QUnit.test;
let scorecard = null;

import seasonCheck from '../src/result/calculation/season-check.js';

QUnit.testStart(function() {
    scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
});


test('add one to sophia if "winter" is checked', function(assert) {
    const expected = { sophia: 1, dorothy: 0, rose: 0, blanche: 0 };
    const result = seasonCheck('winter', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to dorothy if "autumn" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 1, rose: 0, blanche: 0 };
    const result = seasonCheck('autumn', scorecard);

    assert.deepEqual(result, expected);
});

test('add one to rose if "spring" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 0, rose: 1, blanche: 0 };
    const result = seasonCheck('spring', scorecard);

    assert.deepEqual(result, expected);
});


test('add one to blanche if "summer" is checked', function(assert) {
    const expected = { sophia: 0, dorothy: 0, rose: 0, blanche: 1 };
    const result = seasonCheck('summer', scorecard);

    assert.deepEqual(result, expected);
});