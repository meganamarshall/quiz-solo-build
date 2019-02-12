const resultNode = document.getElementById('girl');
let result = null;
const json = window.localStorage.getItem('result');

if(json) {
    result = JSON.parse(json);
}
else {
    window.location = '/';
}

resultNode.textContent = 