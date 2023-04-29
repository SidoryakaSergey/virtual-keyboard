import {
  keyboardKeysArr, createKeyboard, getLangKeyboard, setLangKeyboard,
  toggleCase,
} from './variables.js';

let lang = getLangKeyboard();
let langChanged = false;
let caps = false;
let shift = '';

const keyboardKeys = keyboardKeysArr.reduce((acc, row) => {
  row.forEach((keyObj) => {
    acc[keyObj.key] = keyObj;
  });
  return acc;
}, {});

function changeKey() {
  const all = document.querySelectorAll('.key');
  all.forEach((elelment) => {
    const el = elelment;
    el.innerText = keyboardKeys[el.dataset.code][shift + lang];
    if (caps && el.dataset.letter) {
      el.innerText = toggleCase(el.innerText);
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && !langChanged) {
    lang = lang === 'ru' ? 'en' : 'ru';
    setLangKeyboard(lang);
    changeKey();
    langChanged = true;
  }
});

document.addEventListener('keyup', (event) => {
  langChanged = false; // сбрасываем флаг, когда пользователь отпускает клавиши Ctrl и Alt
  if (event.ctrlKey && event.altKey) {
    console.log('keyup');
  }
});

// const keyButton = document.querySelector(`[data-key="${keyCode}"]`);

document.addEventListener('click', (event) => {
  const { target } = event;

  if (target.classList.contains('key')) {
    const key = target.dataset.code;
    if (key === 'CapsLock') {
      caps = !caps;
      target.classList.toggle('func--active');
      const keysLetter = document.querySelectorAll('[data-letter="true"]');
      keysLetter.forEach((element) => {
        const el = element;
        el.innerText = toggleCase(el.innerText);
      });
    }
  }
});

document.addEventListener('mousedown', (event) => {
  const { target } = event;
  const key = target.dataset.code;
  if (target.classList.contains('key')) {
    if (key === 'ShiftLeft' || key === 'ShiftRight') {
      shift = shift ? '' : 'up_';
      changeKey();
    }
  }
});

document.addEventListener('mouseup', (event) => {
  const { target } = event;
  const key = target.dataset.code;
  if (target.classList.contains('key')) {
    if (key === 'ShiftLeft' || key === 'ShiftRight') {
      shift = shift ? '' : '';
      changeKey();
    }
  }
});

createKeyboard(lang);
