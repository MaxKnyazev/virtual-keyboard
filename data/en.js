const en = [
  {
    keycode: 'Backquote', title: '`', value: '`', shift: '~', caps: '`', shiftCaps: '~', classes: ['key'],
  },
  {
    keycode: 'Digit1', title: '1', value: '1', shift: '!', caps: '1', shiftCaps: '!', classes: ['key'],
  },
  {
    keycode: 'Digit2', title: '2', value: '2', shift: '@', caps: '2', shiftCaps: '@', classes: ['key'],
  },
  {
    keycode: 'Digit3', title: '3', value: '3', shift: '#', caps: '3', shiftCaps: '#', classes: ['key'],
  },
  {
    keycode: 'Digit4', title: '4', value: '4', shift: '$', caps: '4', shiftCaps: '$', classes: ['key'],
  },
  {
    keycode: 'Digit5', title: '5', value: '5', shift: '%', caps: '5', shiftCaps: '%', classes: ['key'],
  },
  {
    keycode: 'Digit6', title: '6', value: '6', shift: '^', caps: '6', shiftCaps: '^', classes: ['key'],
  },
  {
    keycode: 'Digit7', title: '7', value: '7', shift: '&', caps: '7', shiftCaps: '&', classes: ['key'],
  },
  {
    keycode: 'Digit8', title: '8', value: '8', shift: '*', caps: '8', shiftCaps: '*', classes: ['key'],
  },
  {
    keycode: 'Digit9', title: '9', value: '9', shift: '(', caps: '9', shiftCaps: '(', classes: ['key'],
  },
  {
    keycode: 'Digit0', title: '0', value: '0', shift: ')', caps: '0', shiftCaps: ')', classes: ['key'],
  },
  {
    keycode: 'Minus', title: '-', value: '-', shift: '_', caps: '-', shiftCaps: '_', classes: ['key'],
  },
  {
    keycode: 'Equal', title: '=', value: '=', shift: '+', caps: '=', shiftCaps: '+', classes: ['key'],
  },
  {
    keycode: 'Backspace', title: 'Backspace', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__fn-big'],
  },

  {
    keycode: 'Tab', title: 'Tab', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'KeyQ', title: 'q', value: 'q', shift: 'Q', caps: 'Q', shiftCaps: 'q', classes: ['key'],
  },
  {
    keycode: 'KeyW', title: 'w', value: 'w', shift: 'W', caps: 'W', shiftCaps: 'w', classes: ['key'],
  },
  {
    keycode: 'KeyE', title: 'e', value: 'e', shift: 'E', caps: 'E', shiftCaps: 'e', classes: ['key'],
  },
  {
    keycode: 'KeyR', title: 'r', value: 'r', shift: 'R', caps: 'R', shiftCaps: 'r', classes: ['key'],
  },
  {
    keycode: 'KeyT', title: 't', value: 't', shift: 'T', caps: 'T', shiftCaps: 't', classes: ['key'],
  },
  {
    keycode: 'KeyY', title: 'y', value: 'y', shift: 'Y', caps: 'Y', shiftCaps: 'y', classes: ['key'],
  },
  {
    keycode: 'KeyU', title: 'u', value: 'u', shift: 'U', caps: 'U', shiftCaps: 'u', classes: ['key'],
  },
  {
    keycode: 'KeyI', title: 'i', value: 'i', shift: 'I', caps: 'I', shiftCaps: 'i', classes: ['key'],
  },
  {
    keycode: 'KeyO', title: 'o', value: 'o', shift: 'O', caps: 'O', shiftCaps: 'o', classes: ['key'],
  },
  {
    keycode: 'KeyP', title: 'p', value: 'p', shift: 'P', caps: 'P', shiftCaps: 'p', classes: ['key'],
  },
  {
    keycode: 'BracketLeft', title: '[', value: '[', shift: '{', caps: '[', shiftCaps: '{', classes: ['key'],
  },
  {
    keycode: 'BracketRight', title: ']', value: ']', shift: '}', caps: ']', shiftCaps: '}', classes: ['key'],
  },
  {
    keycode: 'Backslash', title: '\\', value: '\\', shift: '|', caps: '\\', shiftCaps: '|', classes: ['key'],
  },
  {
    keycode: 'Delete', title: 'Del', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'CapsLock', title: 'CapsLock', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__fn-big'],
  },
  {
    keycode: 'KeyA', title: 'a', value: 'a', shift: 'A', caps: 'A', shiftCaps: 'a', classes: ['key'],
  },
  {
    keycode: 'KeyS', title: 's', value: 's', shift: 'S', caps: 'S', shiftCaps: 's', classes: ['key'],
  },
  {
    keycode: 'KeyD', title: 'd', value: 'd', shift: 'D', caps: 'D', shiftCaps: 'd', classes: ['key'],
  },
  {
    keycode: 'KeyF', title: 'f', value: 'f', shift: 'F', caps: 'F', shiftCaps: 'f', classes: ['key'],
  },
  {
    keycode: 'KeyG', title: 'g', value: 'g', shift: 'G', caps: 'G', shiftCaps: 'g', classes: ['key'],
  },
  {
    keycode: 'KeyH', title: 'h', value: 'h', shift: 'H', caps: 'H', shiftCaps: 'h', classes: ['key'],
  },
  {
    keycode: 'KeyJ', title: 'j', value: 'j', shift: 'J', caps: 'J', shiftCaps: 'j', classes: ['key'],
  },
  {
    keycode: 'KeyK', title: 'k', value: 'k', shift: 'K', caps: 'K', shiftCaps: 'k', classes: ['key'],
  },
  {
    keycode: 'KeyL', title: 'l', value: 'l', shift: 'L', caps: 'L', shiftCaps: 'l', classes: ['key'],
  },
  {
    keycode: 'Semicolon', title: ';', value: ';', shift: ':', caps: ';', shiftCaps: ':', classes: ['key'],
  },
  {
    keycode: 'Quote', title: '\'', value: '\'', shift: '"', caps: '\'', shiftCaps: '"', classes: ['key'],
  },
  {
    keycode: 'Enter', title: 'Enter', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__fn-big'],
  },
  {
    keycode: 'ShiftLeft', title: 'Shift', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__fn-big'],
  },
  {
    keycode: 'KeyZ', title: 'z', value: 'z', shift: 'Z', caps: 'Z', shiftCaps: 'z', classes: ['key'],
  },
  {
    keycode: 'KeyX', title: 'x', value: 'x', shift: 'X', caps: 'X', shiftCaps: 'x', classes: ['key'],
  },
  {
    keycode: 'KeyC', title: 'c', value: 'c', shift: 'C', caps: 'C', shiftCaps: 'c', classes: ['key'],
  },
  {
    keycode: 'KeyV', title: 'v', value: 'v', shift: 'V', caps: 'V', shiftCaps: 'v', classes: ['key'],
  },
  {
    keycode: 'KeyB', title: 'b', value: 'b', shift: 'B', caps: 'B', shiftCaps: 'b', classes: ['key'],
  },
  {
    keycode: 'KeyN', title: 'n', value: 'n', shift: 'N', caps: 'N', shiftCaps: 'n', classes: ['key'],
  },
  {
    keycode: 'KeyM', title: 'm', value: 'm', shift: 'M', caps: 'M', shiftCaps: 'm', classes: ['key'],
  },
  {
    keycode: 'Comma', title: ',', value: ',', shift: '<', caps: ',', shiftCaps: '<', classes: ['key'],
  },
  {
    keycode: 'Period', title: '.', value: '.', shift: '>', caps: '.', shiftCaps: '>', classes: ['key'],
  },
  {
    keycode: 'Slash', title: '/', value: '/', shift: '?', caps: '/', shiftCaps: '?', classes: ['key'],
  },
  {
    keycode: 'ArrowUp', title: '&lt;', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__up'],
  },
  {
    keycode: 'ShiftRight', title: 'Shift', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__fn-big'],
  },
  {
    keycode: 'ControlLeft', title: 'Ctrl', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'MetaLeft', title: 'Win', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'AltLeft', title: 'Alt', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'Space', title: '', value: ' ', shift: ' ', caps: ' ', shiftCaps: ' ', classes: ['key', 'key__fn key__space'],
  },
  {
    keycode: 'AltRight', title: 'Alt', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'ArrowLeft', title: '&lt;', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'ArrowDown', title: '&gt;', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn', 'key__down'],
  },
  {
    keycode: 'ArrowRight', title: '&gt;', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
  {
    keycode: 'ControlRight', title: 'Ctrl', value: '', shift: '', caps: '', shiftCaps: '', classes: ['key', 'key__fn'],
  },
];

export default en;
