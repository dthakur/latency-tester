const qrcode = require('qrcode');
const leftPad = require('left-pad');
const logger = require('winston');
const Jimp = require('jimp');

const FPS = 60;
const SECONDS = 60;
const PADDING_FOR_NAME = 7;

async function addCaption(font, fileName, name) {
  const image = await Jimp.read(fileName);

  const frame = parseInt(name, 10);
  const time = (frame / (FPS * 1.0)).toFixed(3);

  await image.print(font, 10, 2, `${name}         ${time}`);
  await image.write(fileName);

  logger.info(`added caption to ${fileName}`);
}

async function main() {
  let i = 0;

  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

  while (i < FPS * SECONDS) {
    const name = leftPad(i, PADDING_FOR_NAME, 0);
    const fileName = `output/${name}.png`;
    qrcode.toFile(fileName, name, {scale: 16}, err => {
      if (err) {
        throw Error(err);
      }

      logger.info(`wrote ${fileName}`);
      addCaption(font, fileName, name);
    });

    i = i + 1;
  }
}

main();
