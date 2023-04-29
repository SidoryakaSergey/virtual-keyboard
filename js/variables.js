const keyboardKeysArr = [
  [
    {
      key: 'Backquote',
      en: '`',
      ru: 'ё',
      up_en: '~',
      up_ru: 'Ё',
      letter: 'true',
    },
    {
      key: 'Digit1',
      en: '1',
      ru: '1',
      up_en: '!',
      up_ru: '!',
    },
    {
      key: 'Digit2',
      en: '2',
      ru: '2',
      up_en: '@',
      up_ru: '"',
    },
    {
      key: 'Digit3',
      en: '3',
      ru: '3',
      up_en: '#',
      up_ru: '№',
    },
    {
      key: 'Digit4',
      en: '4',
      ru: '4',
      up_en: '$',
      up_ru: ';',
    },
    {
      key: 'Digit5',
      en: '5',
      ru: '5',
      up_en: '%',
      up_ru: '%',
    },
    {
      key: 'Digit6',
      en: '6',
      ru: '6',
      up_en: '^',
      up_ru: ':',
    },
    {
      key: 'Digit7',
      en: '7',
      ru: '7',
      up_en: '&',
      up_ru: '?',
    },
    {
      key: 'Digit8',
      en: '8',
      ru: '8',
      up_en: '*',
      up_ru: '*',
    },
    {
      key: 'Digit9',
      en: '9',
      ru: '9',
      up_en: '(',
      up_ru: '(',
    },
    {
      key: 'Digit0',
      en: '0',
      ru: '0',
      up_en: ')',
      up_ru: ')',
    },
    {
      key: 'Minus',
      en: '-',
      ru: '-',
      up_en: '_',
      up_ru: '_',
    },
    {
      key: 'Equal',
      en: '=',
      ru: '=',
      up_en: '+',
      up_ru: '+',
    },
    {
      key: 'Backspace',
      en: 'Backspace',
      ru: 'Backspace',
      up_en: 'Backspace',
      up_ru: 'Backspace',
    },
  ],
  [
    {
      key: 'Tab',
      en: 'Tab',
      ru: 'Tab',
      up_en: 'Tab',
      up_ru: 'Tab',
    },
    {
      key: 'KeyQ',
      en: 'q',
      ru: 'й',
      up_en: 'Q',
      up_ru: 'Й',
      letter: 'true',
    },
    {
      key: 'KeyW',
      en: 'w',
      ru: 'ц',
      up_en: 'W',
      up_ru: 'Ц',
      letter: 'true',
    },
    {
      key: 'KeyE',
      en: 'e',
      ru: 'у',
      up_en: 'E',
      up_ru: 'У',
      letter: 'true',
    },
    {
      key: 'KeyR',
      en: 'r',
      ru: 'к',
      up_en: 'R',
      up_ru: 'К',
      letter: 'true',
    },
    {
      key: 'KeyT',
      en: 't',
      ru: 'е',
      up_en: 'T',
      up_ru: 'Е',
      letter: 'true',
    },
    {
      key: 'KeyY',
      en: 'y',
      ru: 'н',
      up_en: 'Y',
      up_ru: 'Н',
      letter: 'true',
    },
    {
      key: 'KeyU',
      en: 'u',
      ru: 'г',
      up_en: 'U',
      up_ru: 'Г',
      letter: 'true',
    },
    {
      key: 'KeyI',
      en: 'i',
      ru: 'ш',
      up_en: 'I',
      up_ru: 'Ш',
      letter: 'true',
    },
    {
      key: 'KeyO',
      en: 'o',
      ru: 'щ',
      up_en: 'O',
      up_ru: 'Щ',
      letter: 'true',
    },
    {
      key: 'KeyP',
      en: 'p',
      ru: 'з',
      up_en: 'P',
      up_ru: 'З',
      letter: 'true',
    },
    {
      key: 'BracketLeft',
      en: '[',
      ru: 'х',
      up_en: '{',
      up_ru: 'Х',
      letter: 'true',
    },
    {
      key: 'BracketRight',
      en: ']',
      ru: 'ъ',
      up_en: '}',
      up_ru: 'Ъ',
      letter: 'true',
    },
    {
      key: 'Backslash',
      en: '\\',
      ru: '\\',
      up_en: '|',
      up_ru: '/',
    },
    {
      key: 'Delete',
      en: 'Del',
      ru: 'Del',
      up_en: 'Del',
      up_ru: 'Del',
    },
  ],
  [
    {
      key: 'CapsLock',
      en: 'Caps Lock',
      ru: 'Caps Lock',
      up_en: 'Caps Lock',
      up_ru: 'Caps Lock',
    },
    {
      key: 'KeyA',
      en: 'a',
      ru: 'ф',
      up_en: 'A',
      up_ru: 'Ф',
      letter: 'true',
    },
    {
      key: 'KeyS',
      en: 's',
      ru: 'ы',
      up_en: 'S',
      up_ru: 'Ы',
      letter: 'true',
    },
    {
      key: 'KeyD',
      en: 'd',
      ru: 'в',
      up_en: 'D',
      up_ru: 'В',
      letter: 'true',
    },
    {
      key: 'KeyF',
      en: 'f',
      ru: 'а',
      up_en: 'F',
      up_ru: 'А',
      letter: 'true',
    },
    {
      key: 'KeyG',
      en: 'g',
      ru: 'п',
      up_en: 'G',
      up_ru: 'П',
      letter: 'true',
    },
    {
      key: 'KeyH',
      en: 'h',
      ru: 'р',
      up_en: 'H',
      up_ru: 'Р',
      letter: 'true',
    },
    {
      key: 'KeyJ',
      en: 'j',
      ru: 'о',
      up_en: 'J',
      up_ru: 'О',
      letter: 'true',
    },
    {
      key: 'KeyK',
      en: 'k',
      ru: 'л',
      up_en: 'K',
      up_ru: 'Л',
      letter: 'true',
    },
    {
      key: 'KeyL',
      en: 'l',
      ru: 'д',
      up_en: 'L',
      up_ru: 'Д',
      letter: 'true',
    },
    {
      key: 'Semicolon',
      en: ';',
      ru: 'ж',
      up_en: ':',
      up_ru: 'Ж',
      letter: 'true',
    },
    {
      key: 'Quote',
      en: "'",
      ru: 'э',
      up_en: '"',
      up_ru: 'Э',
      letter: 'true',
    },
    {
      key: 'Enter',
      en: 'Enter',
      ru: 'Enter',
      up_en: 'Enter',
      up_ru: 'Enter',
    },
  ],
  [
    {
      key: 'ShiftLeft',
      en: 'Shift',
      ru: 'Shift',
      up_en: 'Shift',
      up_ru: 'Shift',
    },
    {
      key: 'KeyZ',
      en: 'z',
      ru: 'я',
      up_en: 'Z',
      up_ru: 'Я',
      letter: 'true',
    },
    {
      key: 'KeyX',
      en: 'x',
      ru: 'ч',
      up_en: 'X',
      up_ru: 'Ч',
      letter: 'true',
    },
    {
      key: 'KeyC',
      en: 'c',
      ru: 'с',
      up_en: 'C',
      up_ru: 'С',
      letter: 'true',
    },
    {
      key: 'KeyV',
      en: 'v',
      ru: 'м',
      up_en: 'V',
      up_ru: 'М',
      letter: 'true',
    },
    {
      key: 'KeyB',
      en: 'b',
      ru: 'и',
      up_en: 'B',
      up_ru: 'И',
      letter: 'true',
    },
    {
      key: 'KeyN',
      en: 'n',
      ru: 'т',
      up_en: 'N',
      up_ru: 'Т',
      letter: 'true',
    },
    {
      key: 'KeyM',
      en: 'm',
      ru: 'ь',
      up_en: 'M',
      up_ru: 'Ь',
      letter: 'true',
    },
    {
      key: 'Comma',
      en: ',',
      ru: 'б',
      up_en: '<',
      up_ru: 'Б',
      letter: 'true',
    },
    {
      key: 'Period',
      en: '.',
      ru: 'ю',
      up_en: '>',
      up_ru: 'Ю',
      letter: 'true',
    },
    {
      key: 'Slash',
      en: '/',
      ru: '.',
      up_en: '?',
      up_ru: ',',
    },
    {
      key: 'ArrowUp',
      en: '↑',
      ru: '↑',
      up_en: '↑',
      up_ru: '↑',
    },
    {
      key: 'ShiftRight',
      en: 'Shift',
      ru: 'Shift',
      up_en: 'Shift',
      up_ru: 'Shift',
    },
  ],
  [
    {
      key: 'ControlLeft',
      en: 'Ctrl',
      ru: 'Ctrl',
      up_en: 'Ctrl',
      up_ru: 'Ctrl',
    },
    {
      key: 'MetaLeft',
      en: 'Win',
      ru: 'Win',
      up_en: 'Win',
      up_ru: 'Win',
    },
    {
      key: 'AltLeft',
      en: 'Alt',
      ru: 'Alt',
      up_en: 'Alt',
      up_ru: 'Alt',
    },
    {
      key: 'Space',
      en: ' ',
      ru: ' ',
      up_en: ' ',
      up_ru: ' ',
    },
    {
      key: 'AltRight',
      en: 'Alt',
      ru: 'Alt',
      up_en: 'Alt',
      up_ru: 'Alt',
    },
    {
      key: 'ArrowLeft',
      en: '←',
      ru: '←',
      up_en: '←',
      up_ru: '←',
    },
    {
      key: 'ArrowDown',
      en: '↓',
      ru: '↓',
      up_en: '↓',
      up_ru: '↓',
    },
    {
      key: 'ArrowRight',
      en: '→',
      ru: '→',
      up_en: '→',
      up_ru: '→',
    },
    {
      key: 'ControlRight',
      en: 'Ctrl',
      ru: 'Ctrl',
      up_en: 'Ctrl',
      up_ru: 'Ctrl',
    },
  ],
];

function createKeyboard(lang) {
  const body = document.querySelector('body');
  const wrapper = document.createElement('div');
  const wrapperKeyboard = document.createElement('div');
  const h1 = document.createElement('h1');
  const h4 = document.createElement('h4');
  const keyboardDisplay = document.createElement('textarea');
  const helpInfo = document.createElement('div');
  const keyboardKeys = document.createElement('keyboard__keys');

  body.innerHTML = '';
  keyboardDisplay.name = 'text';
  keyboardDisplay.id = 'keyboard__display';
  keyboardDisplay.cols = 50;
  keyboardDisplay.rows = 5;

  helpInfo.className = 'help-info';
  wrapper.className = 'wrapper';
  wrapperKeyboard.className = 'wrapper__keyboard';
  h1.innerText = 'RSS Виртуальная клавиатура';
  h4.innerHTML = `Клавиатура создана в операционной системе Windows
                  <br>
                  Для переключения языка комбинация: левыe ctrl + alt`;
  helpInfo.append(h4);
  wrapperKeyboard.append(h1);
  wrapperKeyboard.append(keyboardDisplay);
  wrapper.append(wrapperKeyboard);
  body.append(wrapper);
  keyboardKeys.className = 'keyboard__keys';

  for (let i = 0; i < keyboardKeysArr.length; i += 1) {
    const rowKeys = document.createElement('div');
    rowKeys.className = 'row-keys';
    keyboardKeysArr[i].forEach((el) => {
      const key = document.createElement('div');
      if (el.key === 'Backspace') {
        key.className = 'functional backspace';
      }
      if (el.key === 'Tab') {
        key.className = 'functional tab';
      }
      if (el.key === 'Delete') {
        key.className = 'functional del';
      }
      if (el.key === 'Enter') {
        key.className = 'functional enter';
      }
      if (el.key === 'CapsLock') {
        key.className = 'functional capslock';
      }
      if (el.key === 'ShiftLeft') {
        key.className = 'functional left-shift';
      }
      if (el.key === 'ShiftRight') {
        key.className = 'functional right-shift';
      }
      if (el.key === 'MetaLeft') {
        key.className = 'functional win';
      }
      if (el.key === 'AltLeft' || el.key === 'AltRight') {
        key.className = 'functional win';
      }
      if (el.key === 'ControlLeft' || el.key === 'ControlRight') {
        key.className = 'functional ctrl';
      }
      if (el.key === 'ArrowUp' || el.key === 'ArrowDown' || el.key === 'ArrowLeft' || el.key === 'ArrowRight') {
        key.className = 'functional arrow';
      }
      if (el.key === 'Space') {
        key.className = 'space';
      }
      key.classList.add('key');
      key.innerText = el[lang];
      key.dataset.code = el.key;
      if (el.letter) {
        key.dataset.letter = el.letter;
      }
      rowKeys.append(key);
    });
    keyboardKeys.append(rowKeys);
  }
  wrapperKeyboard.append(keyboardKeys);
  wrapperKeyboard.append(helpInfo);
}

function getLangKeyboard() {
  let langKeyboard = localStorage.getItem('langKeyboard');
  if (!langKeyboard) {
    langKeyboard = 'ru';
    localStorage.setItem('langKeyboard', langKeyboard);
  }
  return langKeyboard;
}

function setLangKeyboard(langKeyboard) {
  localStorage.setItem('langKeyboard', langKeyboard);
}

function toggleCase(key) {
  return key === key.toUpperCase()
    ? key.toLowerCase()
    : key.toUpperCase();
}

export {
  keyboardKeysArr, createKeyboard, getLangKeyboard, setLangKeyboard,
  toggleCase,
};
