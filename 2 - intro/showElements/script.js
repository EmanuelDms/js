const SHOW = 1;
const HIDE = 0;

/**
 * * Ao clicar em um quadrado, o mesmo fica selecionado
 */
function handleSquaresClick(e) {
  const [selectedSquare] = e.path;
  const isSquareClicked = selectedSquare.style.border !== 'none';
  if (!isSquareClicked) {
    selectedSquare.style.border = '1px solid black';    
  };

  return selectedSquare;
}

function defaultSettings() {
  let squares = document.getElementsByClassName('square');
  Object.entries(squares).forEach(([, square], index) => {
    square.style.border = 'none';
    return square.style.display = 'inline-block';
  });
  let handleVisibilityButton = document.getElementById('handleVisibilityButton');
  handleVisibilityButton.innerHTML = 'Ocultar quadrado';
  handleVisibilityButton.value = SHOW;
};

/**
 * * Ao clicar em ocultar, somente ele ser afetado.
 * * Após isso, ser criado botão de mostrar todos
 */

defaultSettings();

let handleVisibilityButton = document.getElementById('handleVisibilityButton');
handleVisibilityButton.onclick = () => {
  let squares = document.getElementsByClassName('square');
  let handleVisibilityButton = document.getElementById('handleVisibilityButton');
  let handleVisibilityButtonStatus = Boolean(Number(handleVisibilityButton.value));

  if (handleVisibilityButtonStatus) {
    Object.entries(squares).forEach(([, square], index) => {
      return square.style.display = 'none';
    });
    handleVisibilityButton.value = HIDE;
    handleVisibilityButton.innerHTML = 'Mostrar quadrado';
  } else defaultSettings();
};

let squaresContainer = document.getElementById('squares');
squaresContainer.onclick = (e) => {
  handleSquaresClick(e);
  let showAllButton = document.createElement('button');
  showAllButton.innerHTML = 'Mostrar todos';
  document.body.append(showAllButton);
};