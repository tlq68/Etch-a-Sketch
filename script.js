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


clearButton();
drawNormal();