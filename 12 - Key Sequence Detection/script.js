const pressed = [];
const secretcode = 'salman';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length);

  if (pressed.join('').includes(secretcode)) {
    console.log('easter egg!');
    cornify_add();
  }
})