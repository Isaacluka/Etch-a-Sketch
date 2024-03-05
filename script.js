// Define Grid Size
const reset = document.getElementById('reset');
const size = document.getElementById('sizePrompt');
const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
var gridSize = 16;

//Get Grid Container Element
const gridDiv = document.getElementById("gridDiv");



window.addEventListener('load', createGrid);

//function reset() {
  //  box.style.background = '';
//};
//Create the grid dynamically
function createGrid() {
    for(let i = 0; i < gridSize; i++){
        const boxRow = document.createElement('div');
        boxRow.className = 'boxRow';
        
        for(let j = 0; j < gridSize; j++){
            const box = document.createElement('div');
            box.className = 'box';
            //box.textContent = `Cell ${i+1}-${j+1}`;
            boxRow.appendChild(box);
            box.onmouseover = function(){
               box.setAttribute('style', 'background-color : maroon;')
            };
        
            reset.addEventListener('click', () => {
                box.style.background = '';
            });
            /*eraser.addEventListener('click', () => {
              box.onmouseover = function(){
                box.setAttribute('style', 'background-color : #f5f5f5;')
             };


             /*eraser.addEventListener('click', () => {
              box.onclick = function(){
                box.setAttribute('style', 'background-color : maroon;')
             };
            });*/

            eraser.addEventListener('click', () => {
              console.log(eraser.classList);
              let isOff = eraser.classList.contains("off");
              let isOn = eraser.classList.contains("on");

              if (isOff){
                eraser.classList.add("on");
                box.onmouseover = function(){
                  box.style.background = '';
                  
                  eraser.classList.remove("off");
                };
              }else if (isOn){
                
                box.onmouseover = function(){
                  box.style.background = 'maroon';
                  eraser.classList.remove('on');
                  eraser.classList.add("off");
                  
                  
                };

              }
            });

            rainbow.addEventListener("click", () => {
              eraser.classList.add('off');
              console.log(rainbow.classList);
              let rainbowOn = rainbow.classList.contains('on');
              let rainbowOff = rainbow.classList.contains('off');
              let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

              if (rainbowOff){
                rainbow.classList.add('on');
                box.onmouseover = function(){
                  box.style.background = color;
                  rainbow.classList.remove('off');
                };
              }else if(rainbowOn){
                box.onmouseover = function(){
                  box.style.background = 'maroon';
                  rainbow.classList.remove('on');
                  rainbow.classList.add('off');
                };
              }
            });

            gridDiv.appendChild(boxRow);          
        };
    };    

}

function clearGrid(){
  const gridArray = Array.from(gridDiv.childNodes);
  gridArray.forEach((element) => {
    gridDiv.removeChild(element);
  });
}

size.onclick = function(){
  newGridSize = prompt('Enter Grid Size:');
  if (newGridSize <= 100 && newGridSize > 0){
    gridSize = newGridSize;
    clearGrid();
    createGrid();
  }else{
    alert('Enter a number within the range 1-100!');
  }
  
};
