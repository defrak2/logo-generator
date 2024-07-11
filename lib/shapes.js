// shapes class
class Shapes {
  constructor() {
    this.shapes = []
  }
}
//triangle class

class Triangle extends Shapes {
  constructor() {
    super();
    this.type = 'triangle';
  }
  createTriangle(shapecolor, text, textcolor) {
    return `  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="100" height="100" stroke="${shapecolor}" fill="${shapecolor}" stroke-width="5"/>
  <text x="25" y="70" font-size="30" font-family="Arial" fill="${textcolor}">${text}</text></svg> `
  }
}
// circle class
class Circle extends Shapes {
  constructor() {
    super();
    this.type = 'circle';
  }
  createCircle(shapecolor, text, textcolor){
    return `   <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="125" cy="175" r="20" stroke="${shapecolor}" fill="${shapecolor}" stroke-width="5"/>
    <text x="20" y="125" font-size="18" font-family="Arial" fill="${textcolor}">${text}</text></svg> 
    `


  }
}


//square class

class Square extends Shapes {
  constructor() {
    super();
    this.type = 'square';
  }
  
  createSquare(shapecolor, text, textcolor){
  return  `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100" stroke="${shapecolor}" fill="${shapecolor}" stroke-width="5"/>
  <text x="25" y="70" font-size="30" font-family="Arial" fill="${textcolor}">${text}</text></svg> `;
   }
}


module.exports = { Triangle, Circle, Square }