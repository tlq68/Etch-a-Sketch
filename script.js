window.onload = function() {
    const inputField = document.querySelector('#number-input');
    inputField.value = '';
}


const h1Select = document.querySelector('h1');
h1Select.style.color = 'red';

const container = document.querySelector('.container')

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let gridCell = document.createElement("div");
    container.appendChild(gridCell).className = "grid-item";
    
  };
  
};

makeGrid(16, 16);

function clearGrid() {
    const cells = document.querySelectorAll('.grid-item');

    cells.forEach((item) => {
        
           item.style.backgroundColor = 'rgb(238, 237, 237)' 
        
    });
    
}

function clearButton() {
    const reset = document.querySelector('#clear-button');
    reset.addEventListener('click', () => {
        clearGrid();
    });
}

function drawNormal() {
    const change = document.querySelectorAll('.grid-item');
    change.forEach((item) => {
        item.addEventListener('mouseover', () => {
          item.style.backgroundColor = '#333';   
        });
    }); 
}

function getGrid() {
    let button = document.querySelector('#get-grid');
    let input = document.querySelector('#number-input')
    button.addEventListener('click', () => {

        if(typeof input.value === 'number' && input.value >= 16 && input.value <= 64) {
           console.log(input.value)
        input.value = null; 
        } else {
            warning();
        }
        
    });
}

function warning() {
    const inputSpan = document.querySelector('#get-grid');

    inputSpan.addEventListener('click', () => {
        if (!inputSpan) return; 
            inputSpan.currentTime = 0;
            warningTransition();
    });
    
}

function warningTransition() {
    const change = document.querySelector('#input-span');
    change.classList.add('warning');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if itś not a transform.
    this.classList.remove('warning');
}

const input = document.querySelector('#input-span');
input.addEventListener('transitionend', removeTransition);


getGrid();
clearButton();
drawNormal();


