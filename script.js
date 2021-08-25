// Start page setup //

window.onload = function() {
    const inputField = document.querySelector('#number-input');
    inputField.value = '';
}


const h1Select = document.querySelector('h1');
h1Select.style.color = 'red';

const container = document.querySelector('.container')

function makeGrid(rows, cols) {
    if (rows >= 1 && rows <= 64) {
       container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let gridCell = document.createElement("div");
    container.appendChild(gridCell).className = "grid-item";
    
  }; 
    }
  
  
};

makeGrid(16, 16);

function clearGrid() {
    const gridCells = document.querySelectorAll('.grid-item');

    gridCells.forEach((item) => {
        item.style.backgroundColor = 'var(--grid-color)' 
    });
    
}

// End page setup //

// Start button logic // 

function drawNormal() {
    const gridCells = document.querySelectorAll('.grid-item');
    gridCells.forEach((item) => {
        item.addEventListener('mouseover', () => {
          item.style.backgroundColor = '#333';   
        });
    }); 
}


function newGrid() {
    const selectGetGridButton = document.querySelector('#get-grid');
 
    selectGetGridButton.addEventListener('click', () => {
        let inputValue = document.querySelector('#number-input').value;
        console.log("input value is: " + inputValue)

        if (inputValue >= 1 && inputValue <= 64) {
         removeGrid();
        makeGrid(inputValue, inputValue);

        // This will need to be changed once Rainbow and Gradient are implemented.
        drawNormal();   
        }
        
    }); 
}

function removeGrid() {
    const container = document.querySelector('.container')

    
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
      }; 




function clearButton() {
    const selectClearButton = document.querySelector('#clear-button');
    selectClearButton.addEventListener('click', () => {
        clearGrid();
    });
}

// End button logic //

// Start input field and message //

function spanColor() {
    const inputField = document.querySelector('#number-input');
    const textSpan = document.querySelector('#input-span')

    if (inputField.value >= 1 && inputField.value <= 64) {
        textSpan.style.color = 'green';
        textSpan.style.scale = '1'
        inputField.value = Math.floor(inputField.value);
    }  else {
        inputField.value = null;
        textSpan.style.color = 'red';
        textSpan.style.scale = '1.2'
    } 
}

function pressGetGridButton() {
    
    const selectGridButton = document.querySelector('#get-grid');
    

    selectGridButton.addEventListener('click', () => {
        spanColor();
    });
}

function textEnter() {
    const inputField = document.querySelector('#number-input');

    inputField.addEventListener('keypress', function(event) {
        if (event.code === 'Enter') {
            spanColor();
        }
    });
}

// End input field and message //

newGrid();
//removeGrid();
clearButton();
drawNormal();

pressGetGridButton();
textEnter();
