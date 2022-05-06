/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-console */
/* eslint-disable no-undef */

import en from './data/en.js';
import ru from './data/ru.js';

console.log('App started...');

const btnRu = document.querySelector('.ru');
const btnEn = document.querySelector('.en');
const textarea = document.querySelector('.textarea');
console.log(textarea);
console.log(textarea.selectionStart);

let keyArr;
switch (localStorage.getItem('language')) {
  case 'en':
    keyArr = en;
    break;
  case 'ru':
    keyArr = ru;
    btnEn.classList.toggle('key__lang--active');
    btnRu.classList.toggle('key__lang--active');
    break;

  default:
    keyArr = en;
    localStorage.setItem('language', 'en');
}

console.log(en);
console.log(ru);

// const keyA = document.getElementById('KeyA');'
// keyA.children[0].classList.toggle('red');
// console.log(keyA.children[0].innerText);

const keyMap = new Map();
// eslint-disable-next-line no-restricted-syntax
for (const elem of keyArr) {
  keyMap.set(elem.keycode, document.querySelector(`[data-keycode='${elem.keycode}']`));
  // console.log(document.querySelector(`[data-keycode='${code}']`));
}
console.log(keyMap);

// console.log(document.querySelector(`[data-keycode="${keyCodesArr[0]}"]`));

// const keyMap = new Map();
// keyMap.set('KeyA', KeyA);
// keyMap.set('KeyB', KeyB);
// keyMap.set('Backspace', Backspace);

btnEn.addEventListener('click', () => {
  if (localStorage.getItem('language') !== 'en') {
    localStorage.setItem('language', 'en');
    btnEn.classList.toggle('key__lang--active');
    btnRu.classList.toggle('key__lang--active');
  }
});

btnRu.addEventListener('click', () => {
  if (localStorage.getItem('language') !== 'ru') {
    localStorage.setItem('language', 'ru');
    btnEn.classList.toggle('key__lang--active');
    btnRu.classList.toggle('key__lang--active');
  }
});

let textPosition = 0;
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const currentKey = keyMap.get(event.code);

  // console.log(event.code, 'keydown-->', event.key);
  console.log(event);
  // console.log(currentKey);
  // console.log(keyArr[currentKey.dataset.index]);
  // console.log(keyArr[currentKey.dataset.index].value);
  // console.log(keyArr[currentKey.dataset.index].shift);
  // console.log(keyArr[currentKey.dataset.index].caps);
  // console.log(textarea.selectionStart);

  switch (event.key) {
    case 'Tab':
      textarea.innerHTML += '&nbsp;&nbsp;&nbsp;&nbsp;';
      break;

    case 'Backspace':
      textPosition = textarea.selectionStart;
      if (textPosition > 0) {
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition - 1)}${textarea.innerHTML.slice(textPosition)}`;
        textPosition -= 1;
        textarea.selectionStart = textPosition;
      }
      break;

    case 'Delete':
      textPosition = textarea.selectionStart;
      if (textPosition < textarea.textLength) {
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${textarea.innerHTML.slice(textPosition + 1)}`;
        // textPosition -= 1;
        textarea.selectionStart = textPosition;
      }
      break;

    case 'Enter':
      textarea.innerHTML += '\n';
      textPosition += 1;
      textarea.selectionStart = textPosition;
      break;

    case 'ArrowLeft':
      if (textPosition > 0) {
        textPosition -= 1;
        textarea.selectionStart = textPosition;
        textarea.selectionEnd = textPosition;
      }
      console.dir(textarea);
      break;

    case 'ArrowRight':
      if (textPosition < textarea.textLength) {
        textPosition += 1;
        textarea.selectionStart = textPosition;
        textarea.selectionEnd = textPosition;
      }
      console.dir(textarea);
      break;

    case 'ArrowUp':
      textarea.innerHTML += '&uarr;';
      textPosition += 1;
      textarea.selectionStart = textPosition;
      break;

    case 'ArrowDown':
      textarea.innerHTML += '&darr;';
      textPosition += 1;
      textarea.selectionStart = textPosition;
      break;

    case 'CapsLock':
      currentKey.classList.toggle('key--press');
      break;

    case 'Control':
    case 'Alt':
    case 'Meta':
      break;

    default:
      textPosition = textarea.selectionStart;
      textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].value}${textarea.innerHTML.slice(textPosition)}`;
      textPosition += 1;
      textarea.selectionStart = textPosition;
  }

  // currentKey.classList.toggle('key--press');
  if (event.key !== 'CapsLock') {
    currentKey.classList.add('key--press');
  }

  if (event.altKey && event.ctrlKey) {
    if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
    } else {
      localStorage.setItem('language', 'ru');
    }
    btnEn.classList.toggle('key__lang--active');
    btnRu.classList.toggle('key__lang--active');
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();

  console.log(event.code, 'keyup-->', event.key);

  // if (event.code === 'KeyA') {
  //   console.dir(event);
  //   KeyA.classList.remove('char--press');
  //   // console.dir(this);
  // }
  const currentKey = keyMap.get(event.code);
  // currentKey.classList.toggle('key--press');
  if (event.key !== 'CapsLock') {
    currentKey.classList.remove('key--press');
  }
});

// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     console.dir(event);
//     console.dir(this);
//   }
// });
