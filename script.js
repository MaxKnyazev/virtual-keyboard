import en from './data/en.js';
import ru from './data/ru.js';

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
}

const render = () => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  main.classList.add('main');

  const sectionTitle = document.createElement('section');
  sectionTitle.classList.add('title');
  const titleSchool = document.createElement('div');
  titleSchool.classList.add('title__school');
  titleSchool.innerHTML = 'RSSchool';
  const titleTask = document.createElement('h1');
  titleTask.classList.add('title__task');
  titleTask.innerHTML = 'Виртуальная клавиатура';
  sectionTitle.appendChild(titleSchool);
  sectionTitle.appendChild(titleTask);
  const sectionTextArea = document.createElement('section');
  sectionTextArea.classList.add('textarea__wrapper');
  sectionTextArea.innerHTML = '<textarea autofocus class="textarea" rows="7" cols="50"></textarea>';

  const sectionKeyboard = document.createElement('section');
  sectionKeyboard.classList.add('keyboard');
  for (let i = 0; i < keyArr.length; i += 1) {
    const key = document.createElement('div');
    key.className = keyArr[i].classes.join(' ');
    key.dataset.keycode = keyArr[i].keycode;
    key.dataset.index = i;
    const keySpan = document.createElement('span');
    keySpan.innerHTML = keyArr[i].title;
    key.appendChild(keySpan);
    sectionKeyboard.appendChild(key);
  }

  const sectionDescription = document.createElement('section');
  sectionDescription.classList.add('description');
  const descriptionInfo = document.createElement('div');
  descriptionInfo.classList.add('description__info');
  const descriptionTitle = document.createElement('h2');
  descriptionTitle.classList.add('description__title');
  descriptionTitle.innerHTML = 'Описание :';
  descriptionInfo.appendChild(descriptionTitle);
  descriptionInfo.innerHTML += `
    <div class="description__text">Создана в ОС <b>Windows</b></div>
    <div class="description__text">Переключение языка : <b>Ctrl + Alt</b></div>
  `;
  const descriptionLang = document.createElement('div');
  descriptionLang.classList.add('description__lang');
  const btnLangEn = document.createElement('div');
  btnLangEn.className = 'btn btn__lang en';
  if (localStorage.getItem('language') === 'en') {
    btnLangEn.classList.add('btn__lang--active');
  }
  btnLangEn.dataset.keycode = '';
  const spanEn = document.createElement('span');
  spanEn.innerHTML = 'En';
  btnLangEn.appendChild(spanEn);
  const btnLangRu = document.createElement('div');
  btnLangRu.className = 'btn btn__lang ru';
  if (localStorage.getItem('language') === 'ru') {
    btnLangRu.classList.add('btn__lang--active');
  }
  btnLangRu.dataset.keycode = '';
  const spanRu = document.createElement('span');
  spanRu.innerHTML = 'Ru';
  btnLangRu.appendChild(spanRu);
  descriptionLang.appendChild(btnLangEn);
  descriptionLang.appendChild(btnLangRu);
  sectionDescription.appendChild(descriptionInfo);
  sectionDescription.appendChild(descriptionLang);
  main.appendChild(sectionTitle);
  main.appendChild(sectionTextArea);
  main.appendChild(sectionKeyboard);
  main.appendChild(sectionDescription);
  body.appendChild(main);
};

render();

let isCaps = false;
let isShift = false;
const keyboardButtons = document.querySelectorAll('.key');
const btnRu = document.querySelector('.ru');
const btnEn = document.querySelector('.en');
const textarea = document.querySelector('.textarea');

const keyMap = new Map();
for (const elem of keyArr) {
  keyMap.set(elem.keycode, document.querySelector(`[data-keycode='${elem.keycode}']`));
}

textarea.addEventListener('blur', () => {
  textarea.focus();
});

btnEn.addEventListener('click', () => {
  if (localStorage.getItem('language') !== 'en') {
    localStorage.setItem('language', 'en');
    btnEn.classList.toggle('btn__lang--active');
    btnRu.classList.toggle('btn__lang--active');
    keyArr = en;

    keyboardButtons.forEach((elem) => {
      const keyboardBtn = elem;
      if (keyArr[keyboardBtn.dataset.index].caps) {
        if (!isCaps && !isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
        } else if (isCaps && isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
        } else if (isCaps && !isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
        } else if (!isCaps && isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
        }
      }
    });
  }
});

btnRu.addEventListener('click', () => {
  if (localStorage.getItem('language') !== 'ru') {
    localStorage.setItem('language', 'ru');
    btnEn.classList.toggle('btn__lang--active');
    btnRu.classList.toggle('btn__lang--active');
    keyArr = ru;

    keyboardButtons.forEach((elem) => {
      const keyboardBtn = elem;
      if (keyArr[keyboardBtn.dataset.index].caps) {
        if (!isCaps && !isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
        } else if (isCaps && isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
        } else if (isCaps && !isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
        } else if (!isCaps && isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
        }
      }
    });
  }
});

let textPosition = 0;
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const currentKey = keyMap.get(event.code);

  switch (event.key) {
    case 'Tab':
      textPosition = textarea.selectionStart;
      textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}    ${textarea.innerHTML.slice(textPosition)}`;
      textPosition += 4;
      textarea.selectionStart = textPosition;
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
        textarea.selectionStart = textPosition;
      }
      break;

    case 'Enter':
      textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}\n${textarea.innerHTML.slice(textPosition)}`;
      textPosition += 1;
      textarea.selectionStart = textPosition;
      break;

    case 'ArrowLeft':
      if (textPosition > 0) {
        textPosition -= 1;
        textarea.selectionStart = textPosition;
        textarea.selectionEnd = textPosition;
      }
      break;

    case 'ArrowRight':
      if (textPosition < textarea.textLength) {
        textPosition += 1;
        textarea.selectionStart = textPosition;
        textarea.selectionEnd = textPosition;
      }
      break;

    case 'ArrowUp':
      textPosition = textarea.selectionStart;
      textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}&uarr;${textarea.innerHTML.slice(textPosition)}`;
      textPosition += 1;
      textarea.selectionStart = textPosition;
      break;

    case 'ArrowDown':
      textPosition = textarea.selectionStart;
      textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}&darr;${textarea.innerHTML.slice(textPosition)}`;
      textPosition += 1;
      textarea.selectionStart = textPosition;
      break;

    case 'CapsLock':
      currentKey.classList.toggle('key--press');
      keyboardButtons.forEach((elem) => {
        const keyboardBtn = elem;
        if (keyArr[keyboardBtn.dataset.index].caps) {
          if (!isCaps) {
            if (!isShift) {
              keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
            } else {
              keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
            }
          } else if (!isShift) {
            keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
          } else {
            keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
          }
        }
      });
      isCaps = !isCaps;
      break;

    case 'Shift':
      keyboardButtons.forEach((elem) => {
        const keyboardBtn = elem;
        if (keyArr[keyboardBtn.dataset.index].shift) {
          if (!isCaps) {
            keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
          } else {
            keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
          }
        }
      });
      isShift = true;
      break;

    case 'F5':
      window.location.reload();
      break;

    case 'F1':
    case 'F2':
    case 'F3':
    case 'F4':
    case 'F6':
    case 'F7':
    case 'F8':
    case 'F9':
    case 'F10':
    case 'F11':
    case 'F12':
    case 'Control':
    case 'Alt':
    case 'Meta':
      break;

    default:
      textPosition = textarea.selectionStart;
      if (isShift && isCaps) {
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].shiftCaps}${textarea.innerHTML.slice(textPosition)}`;
      } else if (isShift) {
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].shift}${textarea.innerHTML.slice(textPosition)}`;
      } else if (isCaps) {
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].caps}${textarea.innerHTML.slice(textPosition)}`;
      } else {
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].value}${textarea.innerHTML.slice(textPosition)}`;
      }

      textPosition += 1;
      textarea.selectionStart = textPosition;
  }

  if (currentKey) {
    if (event.key !== 'CapsLock') {
      currentKey.classList.add('key--press');
    }
  }

  if (event.altKey && event.ctrlKey) {
    if (localStorage.getItem('language') === 'ru') {
      localStorage.setItem('language', 'en');
      keyArr = en;
    } else {
      localStorage.setItem('language', 'ru');
      keyArr = ru;
    }
    keyboardButtons.forEach((elem) => {
      const keyboardBtn = elem;
      if (keyArr[keyboardBtn.dataset.index].caps) {
        if (!isCaps && !isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
        } else if (isCaps && isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
        } else if (isCaps && !isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
        } else if (!isCaps && isShift) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
        }
      }
    });
    btnEn.classList.toggle('btn__lang--active');
    btnRu.classList.toggle('btn__lang--active');
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  const currentKey = keyMap.get(event.code);

  if (event.key === 'Shift') {
    keyboardButtons.forEach((elem) => {
      const keyboardBtn = elem;
      if (keyArr[keyboardBtn.dataset.index].shift) {
        if (!isCaps) {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
        } else {
          keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
        }
      }
    });
    isShift = false;
  }
  if (currentKey) {
    if (event.key !== 'CapsLock') {
      currentKey.classList.remove('key--press');
    }
  }
});

document.addEventListener('mousedown', (event) => {
  const { keycode } = event.target.parentNode.dataset;
  const currentKey = keyMap.get(keycode);
  if (event.target.tagName === 'SPAN' && keycode) {
    if (keycode !== 'CapsLock') {
      currentKey.classList.add('key--press');
    }

    switch (keycode) {
      case 'Tab':
        textPosition = textarea.selectionStart;
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}    ${textarea.innerHTML.slice(textPosition)}`;
        textPosition += 4;
        textarea.selectionStart = textPosition;
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
          textarea.selectionStart = textPosition;
        }
        break;

      case 'Enter':
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}\n${textarea.innerHTML.slice(textPosition)}`;
        textPosition += 1;
        textarea.selectionStart = textPosition;
        break;

      case 'ArrowLeft':
        if (textPosition > 0) {
          textPosition -= 1;
          textarea.selectionStart = textPosition;
          textarea.selectionEnd = textPosition;
        }
        break;

      case 'ArrowRight':
        if (textPosition < textarea.textLength) {
          textPosition += 1;
          textarea.selectionStart = textPosition;
          textarea.selectionEnd = textPosition;
        }
        break;

      case 'ArrowUp':
        textPosition = textarea.selectionStart;
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}&uarr;${textarea.innerHTML.slice(textPosition)}`;
        textPosition += 1;
        textarea.selectionStart = textPosition;
        break;

      case 'ArrowDown':
        textPosition = textarea.selectionStart;
        textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}&darr;${textarea.innerHTML.slice(textPosition)}`;
        textPosition += 1;
        textarea.selectionStart = textPosition;
        break;

      case 'CapsLock':
        currentKey.classList.toggle('key--press');
        keyboardButtons.forEach((elem) => {
          const keyboardBtn = elem;
          if (keyArr[keyboardBtn.dataset.index].caps) {
            if (!isCaps) {
              if (!isShift) {
                keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
              } else {
                keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
              }
            } else if (!isShift) {
              keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
            } else {
              keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
            }
          }
        });
        isCaps = !isCaps;
        break;

      case 'ShiftLeft':
      case 'ShiftRight':
        keyboardButtons.forEach((elem) => {
          const keyboardBtn = elem;
          if (keyArr[keyboardBtn.dataset.index].shift) {
            if (!isCaps) {
              keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shift;
            } else {
              keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].shiftCaps;
            }
          }
        });
        isShift = true;
        break;

      case 'ControlLeft':
      case 'ControlRight':
      case 'AltLeft':
      case 'AltRight':
      case 'MetaLeft':
      case 'MetaRight':
        break;

      default:
        textPosition = textarea.selectionStart;
        if (isShift && isCaps) {
          textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].shiftCaps}${textarea.innerHTML.slice(textPosition)}`;
        } else if (isShift) {
          textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].shift}${textarea.innerHTML.slice(textPosition)}`;
        } else if (isCaps) {
          textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].caps}${textarea.innerHTML.slice(textPosition)}`;
        } else {
          textarea.innerHTML = `${textarea.innerHTML.slice(0, textPosition)}${keyArr[currentKey.dataset.index].value}${textarea.innerHTML.slice(textPosition)}`;
        }

        textPosition += 1;
        textarea.selectionStart = textPosition;
    }
  }
});

document.addEventListener('mouseup', (event) => {
  const { keycode } = event.target.parentNode.dataset;
  const currentKey = keyMap.get(keycode);

  if (keycode) {
    if ((keycode === 'ShiftLeft') || (keycode === 'ShiftRight')) {
      keyboardButtons.forEach((elem) => {
        const keyboardBtn = elem;
        if (keyArr[keyboardBtn.dataset.index].shift) {
          if (!isCaps) {
            keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].value;
          } else {
            keyboardBtn.children[0].innerHTML = keyArr[keyboardBtn.dataset.index].caps;
          }
        }
      });
      isShift = false;
    }

    if (keycode !== 'CapsLock') {
      currentKey.classList.remove('key--press');
    }
  }
});
