import {
  keyboardKeysArr, createKeyboard, getLangKeyboard, setLangKeyboard,
  toggleCase,
} from './variables.js';

let lang = getLangKeyboard();
let langChanged = false;
let pressShift = false;
let pressCaps = false;
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
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
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
const allKey = document.querySelectorAll('.key');

function addLetter(letter) {
  const cursorPos = keyboardDisplay.selectionStart;
  const textBeforeCursor = keyboardDisplay.value.substring(0, cursorPos);
  const textAfterCursor = keyboardDisplay.value.substring(cursorPos, letter.lenth);
  keyboardDisplay.value = textBeforeCursor + letter + textAfterCursor;
  keyboardDisplay.selectionStart = cursorPos + 1;
  keyboardDisplay.selectionEnd = keyboardDisplay.selectionStart;
}

function backspaceLetter() {
  const cursorPos = keyboardDisplay.selectionStart;
  if (cursorPos > 0) {
    const textBeforeCursor = keyboardDisplay.value.substring(0, cursorPos - 1);
    const textAfterCursor = keyboardDisplay.value.substring(cursorPos);
    keyboardDisplay.value = textBeforeCursor + textAfterCursor;
    keyboardDisplay.selectionStart = cursorPos - 1;
    keyboardDisplay.selectionEnd = keyboardDisplay.selectionStart;
  }
}

function deleteLetter() {
  const cursorPos = keyboardDisplay.selectionStart;
  const textBeforeCursor = keyboardDisplay.value.substring(0, cursorPos);
  const textAfterCursor = keyboardDisplay.value.substring(cursorPos + 1);
  keyboardDisplay.value = textBeforeCursor + textAfterCursor;
  keyboardDisplay.selectionStart = cursorPos;
  keyboardDisplay.selectionEnd = keyboardDisplay.selectionStart;
}

allKey.forEach((key) => {
  key.addEventListener('click', (e) => {
    const { target } = e;
    const { code } = target.dataset;

    const isLetter = target.classList.contains('key');
    const isFunctional = target.classList.contains('functional');
    if (isLetter && !isFunctional && code !== 'Space') {
      addLetter(target.innerText);
    }
    if (code === 'Space') {
      addLetter(' ');
    }
    if (code === 'Tab') {
      addLetter(' ');
      addLetter(' ');
      addLetter(' ');
      addLetter(' ');
    }
    if (code === 'Enter') {
      addLetter('\n');
    }
    if (code === 'ArrowUp') {
      addLetter('↑');
    }
    if (code === 'ArrowDown') {
      addLetter('↓');
    }
    if (code === 'ArrowRight') {
      addLetter('→');
    }
    if (code === 'ArrowLeft') {
      addLetter('←');
    }
    if (code === 'Backspace') {
      backspaceLetter();
    }
    if (code === 'Delete') {
      deleteLetter();
    }
  });
});

keyboardDisplay.addEventListener('keydown', (event) => {
  event.preventDefault();
  const { code } = event;
  const key = document.querySelector(`[data-code="${code}"]`);
  if (key) {
    const isLetter = key.classList.contains('key');
    const isFunctional = key.classList.contains('functional');
    if (isLetter && !isFunctional && code !== 'Space') {
      addLetter(key.innerText);
    }
    if (code === 'Space') {
      addLetter(' ');
    }
    if (code === 'Tab') {
      addLetter(' ');
      addLetter(' ');
      addLetter(' ');
      addLetter(' ');
    }
    if (code === 'Enter') {
      addLetter('\n');
    }
    if (code === 'ArrowUp') {
      addLetter('↑');
    }
    if (code === 'ArrowDown') {
      addLetter('↓');
    }
    if (code === 'ArrowRight') {
      addLetter('→');
    }
    if (code === 'ArrowLeft') {
      addLetter('←');
    }
    if (code === 'Backspace') {
      backspaceLetter();
    }
    if (code === 'Delete') {
      deleteLetter();
    }
  }
});

document.addEventListener('keydown', (event) => {
  const e = event;
  const { code } = e;
  if (event.key === 'Tab') {
    event.preventDefault();
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
  if (key && !key.classList.contains('functional')) {
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
  if (key && !key.classList.contains('functional')) {
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
  keyboardDisplay.focus();
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
