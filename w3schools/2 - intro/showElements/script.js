const SHOW = 1;
const HIDE = 0;

function defaultSettings() {
  let squares = document.getElementsByClassName('square');
  Object.entries(squares).forEach(([, square], index) => {
    return square.style.display = 'inline-block';
  });
  let handleVisibilityButton = document.getElementById('handleVisibilityButton');
  handleVisibilityButton.innerHTML = 'Ocultar quadrado';
  handleVisibilityButton.value = SHOW;
};

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