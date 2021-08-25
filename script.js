// Start page setup //

window.onload = function() {
    const inputField = document.querySelector('#number-input');
    inputField.value = '';
}


const h1Select = document.querySelector('h1');
h1Select.style.color = 'red';

const container = document.querySelector('.container');

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
        item.style.backgroundColor = 'var(--grid-color)'; 
    });
    
}

// End page setup //

// Start draw functions // 

function drawNormal() {
    const gridCells = document.querySelectorAll('.grid-item');
    gridCells.forEach((item) => {
        item.addEventListener('mouseover', () => {
          item.style.backgroundColor = '#333';   
        });
    }); 
}

function drawRainbow() {
    const gridCells = document.querySelectorAll('.grid-item');
    gridCells.forEach((item) => {
        item.addEventListener('mouseover', () => {
        let random1 = Math.floor(Math.random() * 256);
        let random2 = Math.floor(Math.random() * 256);
        let random3 = Math.floor(Math.random() * 256);
        item.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;   
        });
    }); 
}

function drawGradient() {
    const gridCells = document.querySelectorAll('.grid-item');

    gridCells.forEach((item) => {
        item.addEventListener('mouseover', () => {
        let random = Math.floor(Math.random() * 10) + 1;
        item.style.backgroundColor = `var(--opacity-level-${random})`; 
        console.log(random)  
        });
    }); 
}


function chooseDraw(normal, rainbow, gradient) {
    if (normal) { drawNormal(); }
    if (rainbow) { drawRainbow(); }
    if (gradient) { drawGradient(); }
}

function pressNormalDraw() {
    const normalButton = document.querySelector('#normal-draw');
    normalButton.addEventListener('click', () => {
        let normalToggle = true; 
        let rainbowToggle = false;
        let gradientToggle = false;
        chooseDraw(normalToggle, rainbowToggle, gradientToggle);
    });
}

function pressRainbowDraw() {
    const rainbowButton = document.querySelector('#rainbow-draw');
    rainbowButton.addEventListener('click', () => {
        let normalToggle = false; 
        let rainbowToggle = true;
        let gradientToggle = false;
        chooseDraw(normalToggle, rainbowToggle, gradientToggle);
    });
}
//set up for gradient

function pressGradientDraw() {
    const rainbowButton = document.querySelector('#gradient-draw');
    rainbowButton.addEventListener('click', () => {
        let normalToggle = false; 
        let rainbowToggle = false;
        let gradientToggle = true;
        chooseDraw(normalToggle, rainbowToggle, gradientToggle);
    });
}


function clearButton() {
    const selectClearButton = document.querySelector('#clear-button');
    selectClearButton.addEventListener('click', () => {
        clearGrid();
    });
}

// End draw functions //

// Start grid logic //

function removeGrid() {
    const container = document.querySelector('.container')

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}; 

// Does not work for mobile. Probably because of page reloading.
function newGrid() {   
    let inputValue = document.querySelector('#number-input').value;
    console.log("input value is: " + inputValue)

    if (inputValue >= 1 && inputValue <= 64) {
        removeGrid();
        makeGrid(inputValue, inputValue);

        // This will need to be changed once Rainbow and Gradient are implemented.
        chooseDraw();   
    }
}

function newGridClick() {
    const selectGetGridButton = document.querySelector('#get-grid');
    selectGetGridButton.addEventListener('click', () => {
        newGrid();
    });
}

function newGridPressedEnter() {
    const inputField = document.querySelector('#number-input');

    inputField.addEventListener('keypress', function(event) {
        if (event.code === 'Enter') {
            newGrid();
        }
    });    
}

// End grid logic //

// Start input field and message //

function spanColor() {
    const inputField = document.querySelector('#number-input');
    const textSpan = document.querySelector('#input-span');

    // Right input
    if (inputField.value >= 1 && inputField.value <= 64) {
        textSpan.style.color = 'green';
        textSpan.style.scale = '1';
        inputField.value = Math.floor(inputField.value);
        gridButtonColorGreen();
    // Wrong input    
    }  else {
        inputField.value = null;
        textSpan.style.color = 'red';
        textSpan.style.scale = '1.2';
        gridButtonColorRed();
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

function gridButtonColorGreen() {
    const selectGetGridButton = document.querySelector('#get-grid');
    selectGetGridButton.style.backgroundColor = 'green';
    selectGetGridButton.style.color = 'lightgreen';
}

function gridButtonColorRed() {
    const selectGetGridButton = document.querySelector('#get-grid');
    selectGetGridButton.style.backgroundColor = 'red';
    selectGetGridButton.style.color = 'white'
}

// End input field and message //


newGrid();
newGridClick();
drawNormal();
pressNormalDraw();
pressRainbowDraw();
pressGradientDraw()

clearButton();


pressGetGridButton();
textEnter();
newGridPressedEnter();
