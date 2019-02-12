const test = QUnit.test;
import rateScorecard from '../src/result/calculation/rate-scorecard.js';

let scorecard = null;
QUnit.testStart(function() {
    scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
});



test('return "Sophia" if sophia has highest total', function(assert) {
    const scorecard = { sophia: 1, dorothy: 0, rose: 0, blanche: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Sophia';

    assert.equal(result, expected);
});
test('return "Dorothy" if dorothy has highest total', function(assert) {
    const scorecard = { sophia: 0, dorothy: 1, rose: 0, blanche: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Dorothy';

    assert.equal(result, expected);
});
test('return "Rose" if rose has highest total', function(assert) {
    const scorecard = { sophia: 0, dorothy: 0, rose: 1, blanche: 0 };
    const result = rateScorecard(scorecard);
    const expected = 'Rose';

    assert.equal(result, expected);
});
test('return "Blanche" if blanche has highest total', function(assert) {
    const scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 1 };
    const result = rateScorecard(scorecard);
    const expected = 'Blanche';

    assert.equal(result, expected);
});