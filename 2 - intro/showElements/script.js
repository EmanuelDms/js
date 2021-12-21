const SHOW = 1;
const HIDE = 0;

function handleSquaresClick(e) {
  const [selectedSquare] = e.path;

  const isParentElement = selectedSquare.childElementCount > 0;
  if (isParentElement) return;

  const isSquareClicked = selectedSquare.style.border === 'none';
  let newStatus = 0;
  let newBorder = 'none';

  if (isSquareClicked) {
    newStatus = 1;
    newBorder = '1px solid black';
  };

  selectedSquare.innerHTML = newStatus;
  selectedSquare.style.border = newBorder;
};

function defaultSettings() {
  let squares = document.getElementsByClassName('square');
  Object.entries(squares).forEach(([, square], index) => {
    square.style.border = 'none';
    square.style.opacity = 1;
    square.innerHTML = 0;
    square.style.cursor = 'pointer';
  });
  let handleVisibilityButton = document.getElementById('handleVisibilityButton');
  handleVisibilityButton.innerHTML = 'Ocultar quadrado(s)';
  handleVisibilityButton.value = SHOW;
  let quantityOfSelectedSquares = document.getElementById('quantityOfSelectedSquares');
  quantityOfSelectedSquares.value = 0;
};

defaultSettings();

let handleVisibilityButton = document.getElementById('handleVisibilityButton');
handleVisibilityButton.onclick = () => {
  let squares = document.getElementsByClassName('square');
  let handleVisibilityButtonStatus = Boolean(Number(handleVisibilityButton.value));
  let hasSelectedSquares = false;

  if (handleVisibilityButtonStatus) {
    Object.entries(squares).forEach(([, square], index) => {
      const squareStatus = Boolean(Number(square.innerHTML));
      square.style.cursor = 'default';
            
      if (squareStatus) {
        let quantityOfSelectedSquares = document.getElementById('quantityOfSelectedSquares');
        quantityOfSelectedSquares.value = Number(quantityOfSelectedSquares.value) + 1;
        square.style.border = 'none';
        square.style.opacity = 0.5;
        hasSelectedSquares = true;
      };
    });

    if (!hasSelectedSquares) {
      Object.entries(squares).forEach(([, square], index) => {
        square.style.opacity = 0.5;
      });
    };

    handleVisibilityButton.value = HIDE;
    handleVisibilityButton.innerHTML = 'Mostrar quadrado(s)';
  } else defaultSettings();
};

let squaresContainer = document.getElementById('squares');
squaresContainer.onclick = (e) => {
  let handleVisibilityButtonStatus = Boolean(Number(handleVisibilityButton.value));
  if (handleVisibilityButtonStatus) handleSquaresClick(e);  
}; 