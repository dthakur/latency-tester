const qrcode = require('qrcode');
const leftPad = require('left-pad');

const FPS = 30;
const SECONDS = 60;
const PADDING_FOR_NAME = 6;

let i = 0;

while (i < FPS * SECONDS) {
  const name = leftPad(i, PADDING_FOR_NAME, 0);
  qrcode.toFile(`output/${name}.png`, name, {scale: 8});

  i = i + 1;
}
