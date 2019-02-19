const inputHeight = document.querySelector('#gridHeight');
const inputWidth = document.querySelector('#gridWidth');
const inputColor = document.querySelector('#colorPicker');
const submit = document.querySelector('#submitDetails');
const canvasTable = document.querySelector('#canvasTable');

let height = 1;
let width = 1;
let color = '#02b3e4';

submit.addEventListener('click', () => {
    height = inputHeight.value;
    width = inputWidth.value;
    color = inputColor.value;

    console.log(height, width, color);
    
    for(let i = 0; i < height; i++) {
        const row = document.createElement('tr');
        for(let j = 0; j < width; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
        canvasTable.appendChild(row);
    }

    canvasTable.addEventListener('click', (e) => {
        if(e.target.nodeName === 'TD'){
            e.target.style.backgroundColor = color;
        }
    });
});