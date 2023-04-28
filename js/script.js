import {
  keyboardKeysArr, createKeyboard, getLangKeyboard, setLangKeyboard,
} from './variables.js';

let lang = getLangKeyboard();

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey) {
    lang = lang === 'ru' ? 'en' : 'ru';
    setLangKeyboard(lang);
    createKeyboard(lang);
  }
});

console.log(keyboardKeysArr);

createKeyboard(lang);
