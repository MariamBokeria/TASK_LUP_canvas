let start = document.querySelector('.start');
let inputWidth = document.querySelector('#width');
let inputHeight = document.querySelector('#height');

let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

let imgX = document.getElementById('x');
let imgO = document.getElementById('o');

let lineColor = '#000';
let board = [];

start.addEventListener('click', () => {
    canvas.width = inputWidth.value;
    canvas.height = inputHeight.value;
    let HsectionSize = canvas.width / 3; // Horizontal section size
    let VsectionSize = canvas.height / 3; // Vertical section size

    function drawLines (lineWidth, strokeStyle) {
        let lineStart = 0;
        let HlineLength = canvas.width; // Horizontal line length
        let VlineLength = canvas.height; // Vertical line length
        context.lineWidth = lineWidth;
        context.strokeStyle = strokeStyle;
        context.beginPath();
      
        /*
         * Horizontal lines 
         */
        for (let y = 1; y <= 2; y++) {  
          context.moveTo(lineStart, y * HsectionSize);
          context.lineTo(HlineLength, y * HsectionSize);
        }
      
        /*
         * Vertical lines 
         */
        for (let x = 1; x <= 2; x++) {
          context.moveTo(x * VsectionSize, lineStart);
          context.lineTo(x * VsectionSize, VlineLength);
        }
      
        context.stroke();
    }
      
    drawLines(1, lineColor);

    function drawX () {
        for(let square = 0; square < 9; square++){
            context.drawImage(imgX, square * HsectionSize, square * VsectionSize);
        }
    }

    function drawO() {
        context.drawImage(imgO, HsectionSize, VsectionSize);
    }

    canvas.addEventListener('click', () => {
        drawX();
    })
});

