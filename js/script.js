import {
  keyboardKeysArr, createKeyboard, getLangKeyboard, setLangKeyboard,
  toggleCase,
} from './variables.js';

let lang = getLangKeyboard();
let langChanged = false;
let pressShift = false;
let pressCaps = false;
let pressKey = false;
let caps = false;
const otherFuncKey = [
  'Backspace',
  'Tab',
  'Delete',
  'Enter',
  'ControlLeft',
  'ControlRight',
  'AltLeft',
  'AltRight',
  'MetaLeft',
  'ArrpwUp',
  'ArrpwDown',
  'ArrpwLeft',
  'ArrpwRight',
];
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

function pressCapsLock() {
  const keysLetter = document.querySelectorAll('[data-letter="true"]');
  keysLetter.forEach((element) => {
    const el = element;
    el.innerText = toggleCase(el.innerText);
  });
}

createKeyboard(lang);

const keyboardDisplay = document.querySelector('#keyboard__display');
keyboardDisplay.value = 'Eva';
console.log(keyboardDisplay);

document.addEventListener('keydown', (event) => {
  const e = event;
  const { code } = e;
  if (event.key === 'Tab') {
    event.preventDefault();
    // здесь можно добавить свой код обработки
  }
  if (e.ctrlKey && e.altKey && !langChanged) {
    if (code === 'ControlLeft' || code === 'AltLeft') {
      const leftCtrl = document.querySelector('[data-code="ControlLeft"]');
      const leftAlt = document.querySelector('[data-code="AltLeft"]');
      leftAlt.classList.add('func--active');
      leftCtrl.classList.add('func--active');
      lang = lang === 'ru' ? 'en' : 'ru';
      setLangKeyboard(lang);
      changeKey();
      langChanged = true;
    }
  }
  if (e.shiftKey) {
    if (code === 'ShiftLeft' && !pressShift) {
      pressShift = true;
      const leftShift = document.querySelector('[data-code="ShiftLeft"]');
      leftShift.classList.add('func--active');
      shift = shift ? '' : 'up_';
      changeKey();
    } else if (code === 'ShiftRight' && !pressShift) {
      pressShift = true;
      const rightShift = document.querySelector('[data-code="ShiftRight"]');
      rightShift.classList.add('func--active');
      shift = shift ? '' : 'up_';
      changeKey();
    }
  }
  if (code === 'CapsLock' && !pressCaps) {
    pressCaps = true;
    const capslock = document.querySelector('[data-code="CapsLock"]');
    capslock.classList.toggle('func--active');
    caps = !caps;
    pressCapsLock();
  }
  const key = document.querySelector(`[data-code="${code}"]`);
  if (!key.classList.contains('functional')) {
    key.classList.add('key--active');
  }
  if (otherFuncKey.includes(code)) {
    key.classList.add('func--active');
  }
});

document.addEventListener('keyup', (event) => {
  const e = event;
  const { code } = e;

  langChanged = false; // сбрасываем флаг, когда пользователь отпускает клавиши Ctrl и Alt
  const leftCtrl = document.querySelector('[data-code="ControlLeft"]');
  const leftAlt = document.querySelector('[data-code="AltLeft"]');
  if (leftAlt.classList.contains('func--active') && leftCtrl.classList.contains('func--active')) {
    leftAlt.classList.remove('func--active');
    leftCtrl.classList.remove('func--active');
  }

  if (code === 'ShiftLeft') {
    pressShift = false;
    const leftShift = document.querySelector('[data-code="ShiftLeft"]');
    leftShift.classList.remove('func--active');
    shift = shift ? '' : 'up_';
    changeKey();
  } else if (code === 'ShiftRight') {
    pressShift = false;
    const rightShift = document.querySelector('[data-code="ShiftRight"]');
    rightShift.classList.remove('func--active');
    shift = shift ? '' : 'up_';
    changeKey();
  }
  if (code === 'CapsLock') {
    pressCaps = false;
  }
  const key = document.querySelector(`[data-code="${code}"]`);
  if (!key.classList.contains('functional')) {
    key.classList.remove('key--active');
  }
  if (otherFuncKey.includes(code)) {
    key.classList.remove('func--active');
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
      pressCapsLock();
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
