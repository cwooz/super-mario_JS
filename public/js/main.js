import SpriteSheet from "./SpriteSheet.js";
import { loadImage, loadLevel } from "./loaders.js";


function drawBackgrond(background, context, sprites) {
  background.ranges.forEach(([x1, x2, y1, y2]) => {

    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.draw(background.tile, context, x, y);
      }
    }
  });
}

const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

// loadImage('./img/tiles.png')
//   .then(image => {
//     context.drawImage(image, 0, 0, 16, 16, 32, 32, 16, 16);
//   });

loadImage('./img/tiles.png')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);
    sprites.draw('ground', context, 45, 62);

    loadLevel('1-1')
      .then(level => {
        console.log(level);
        level.background.forEach(background => {
          drawBackgrond(background, context, sprites);
        })
      });
  });



  // -------------------------------
  // STOPED - @14:00 EP1
  // https://www.youtube.com/playlist?list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx
  // -------------------------------