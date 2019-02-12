const test = QUnit.test;
let scorecard = null;
QUnit.testStart(function() {
    scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
});

function rateScorecard(answers, scorecard) {
    const sophia = scorecard.sophia;
    const dorothy = scorecard.dorothy;
    const rose = scorecard.rose;
    const blanche = scorecard.blanche;
    
    if(sophia > dorothy && sophia > rose && sophia > blanche) {
        return "Sophia";
    }
}

test('return "Sophia" if sophia has highest total', function(assert) {
    const scorecard = { sophia: 1, dorothy: 0, rose: 0, blanche: 0 };
    const result = rateScorecard(scorecard);
    const expected = "Sophia";

    assert.equal(result, expected);
});