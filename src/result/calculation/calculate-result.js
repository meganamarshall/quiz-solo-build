import seasonCheck from './season-check.js';
import fridayCheck from './friday-check.js';
import descriptorCheck from './descriptor-check.js';
import rateScorecard from './rate-scorecard.js';

function calculateResult(answers) {
    let scorecard = { sophia: 0, dorothy: 0, rose: 0, blanche: 0 };
    seasonCheck(answers.season, scorecard);
    descriptorCheck(answers.description, scorecard);
    fridayCheck(answers.friday, scorecard);

    const result = rateScorecard(scorecard);

    return result;
}

export default calculateResult;