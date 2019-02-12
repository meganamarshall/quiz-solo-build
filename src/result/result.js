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

if(result === 'Sophia') {
    bioNode.textContent = 'You\'re old & sassy & everyone\'s mom';
    imageNode.src = 
}