function drawHollowRectangle(width, height) {
  for (let i = 0; i < height; i++) {
    let row = "";
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

const width = 15;
const height = 10;

drawHollowRectangle(width, height);
