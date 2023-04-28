/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import { keyboardKeysArr, createKeyboard, getLangKeyboard, setLangKeyboard } from './variables.js';

let lang = getLangKeyboard();

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey) {
    console.log("Ctrl+Alt были нажаты");
    lang = lang === 'ru' ? 'en' : 'ru';
    setLangKeyboard(lang);
    createKeyboard(lang);
  }
});

console.log(keyboardKeysArr);

createKeyboard(lang);
