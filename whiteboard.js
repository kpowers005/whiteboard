


const makeArt = () => {
  const tinyart = document.getElementById('tinyart')
  let context = tinyart.getContext('2d')

  for (let x = 0; x < 255; x++) {
    for (let y = 0; y < 255; y++) {
      if ((x ^ y) % 2) {
        context.fillRect(x * 4, y * 4, 10, 10);
        context.fillStyle = `rgb(${x}, ${y}, 100)`;
      }
    }
  }
}

makeArt()
