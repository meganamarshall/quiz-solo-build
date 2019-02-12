import calculateResult from './calculation/calculate-result.js';

const resultNode = document.getElementById('girl');
let result = null;
const json = window.localStorage.getItem('answers');

if(json) {
    result = JSON.parse(json);
}
else {
    window.location = './';
}

resultNode.textContent = calculateResult(result);