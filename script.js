/* eslint-disable import/extensions */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-console */
/* eslint-disable no-undef */

import en from './data/en.js';
import ru from './data/ru.js';

console.log('App started...');

let keyArr;
switch (localStorage.getItem('language')) {
  case 'en':
    keyArr = en;
    break;
  case 'ru':
    keyArr = ru;
    break;

  default:
    keyArr = en;
    localStorage.setItem('language', 'en');
    break;
}

const btnRu = document.querySelector('.ru');
const btnEn = document.querySelector('.en');
const textarea = document.querySelector('.textarea');
console.log(textarea);
console.log(textarea.selectionStart);


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

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const currentKey = keyMap.get(event.code);

  console.log(event.code, 'keydown-->', event.key);
  console.log(event);
  console.log(currentKey);
  console.log(keyArr[currentKey.dataset.index]);
  console.log(keyArr[currentKey.dataset.index].value);
  console.log(keyArr[currentKey.dataset.index].shift);
  console.log(keyArr[currentKey.dataset.index].caps);
  console.log(textarea.selectionStart);

 
  textarea.innerHTML += keyArr[currentKey.dataset.index].value;

  // currentKey.classList.toggle('key--press');
  currentKey.classList.add('key--press');


 
 
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
  currentKey.classList.remove('key--press');
});

// document.addEventListener('keydown', function(event) {
//   if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//     console.dir(event);
//     console.dir(this);
//   }
// });
