function rateScorecard(scorecard) {
    const sophia = scorecard.sophia;
    const dorothy = scorecard.dorothy;
    const rose = scorecard.rose;
    const blanche = scorecard.blanche;

    if(sophia > dorothy && sophia > rose && sophia > blanche) {
        return 'Sophia';
    }
    if(dorothy > sophia && dorothy > rose && dorothy > blanche) {
        return 'Dorothy';
    }
    if(rose > dorothy && rose > sophia && rose > blanche) {
        return 'Rose';
    }
    if(blanche > dorothy && blanche > rose && blanche > sophia) {
        return 'Blanche';
    }
    else {
        return 'Stanley';
    }
}

export default rateScorecard;