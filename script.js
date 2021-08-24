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

function draw() {
    const change = document.querySelectorAll('.grid-item');
    change.forEach((item) => {
        item.addEventListener('mouseover', () => {
          item.style.backgroundColor = '#333';   
        })
    }); 
}

draw();