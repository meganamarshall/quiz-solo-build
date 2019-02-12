import calculateResult from './calculation/calculate-result.js';

const resultNode = document.getElementById('girl');
let result = null;
const json = window.localStorage.getItem('answers');
const bioNode = document.getElementById('bio');
const imageNode = document.getElementById('image');

if(json) {
    result = JSON.parse(json);
}
else {
    window.location = './';
}

resultNode.textContent = calculateResult(result);

if(resultNode.textContent === 'Sophia') {
    bioNode.textContent = 'You\'re old & sassy & everyone\'s mom';
    imageNode.src = '../src/assets/sophia.jpeg';
}
else if(resultNode.textContent === 'Dorothy') {
    bioNode.textContent = 'You\'re tall & no-nonsense';
    imageNode.src = '../src/assets/dorothy.jpeg';
}
else if(resultNode.textContent === 'Rose') {
    bioNode.textContent = 'You\'re dim but cute & kind';
    imageNode.src = '../src/assets/rose.jpeg';
}
else if(resultNode.textContent === 'Blanche') {
    bioNode.textContent = 'You\'re sexy';
    imageNode.src = '../src/assets/blanche.jpeg';
}
else if(resultNode.textContent === 'Blanche') {
    bioNode.textContent = 'You\'re sexy';
    imageNode.src = '../src/assets/blanche.jpeg';
}
else {
    bioNode.textContent = 'People tolerate you';
    imageNode.src = '../src/assets/stan.jpeg';
}