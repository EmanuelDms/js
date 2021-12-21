const SHOW = 1;
const HIDE = 0;

const generateRandomColor = () => {
  let maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`
};

function generateSquares(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement("div");
    square.className = 'square';
    square.style.backgroundColor = generateRandomColor();
    document.getElementById('squares').append(square);
  }
};

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
  let handleVisibilityButton = document.getElementById('handleVisibilityButton');
  let quantityOfSelectedSquares = document.getElementById('quantityOfSelectedSquares');

  let squares = document.getElementsByClassName('square');
  if (squares.length > 0) {
    Object.entries(squares).forEach(([, square], index) => {
      square.style.border = 'none';
      square.style.opacity = 1;
      square.innerHTML = 0;
      square.style.cursor = 'pointer';
    });

    handleVisibilityButton.innerHTML = 'Ocultar quadrado(s)';
    handleVisibilityButton.value = SHOW;
    quantityOfSelectedSquares.value = 0;
  } else {
    const main = document.body.children[1];
    document.body.removeChild(main);
    alert('Não há quadrados em tela!');
  };
};

generateSquares(2);
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