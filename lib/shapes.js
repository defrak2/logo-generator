// shapes class
class Shapes {

  constructor(shape) {    
    this.shapecolor = '';
    this.textcolor = '';
    this.text = '';
    this.shape = shape;
  }

  setShapeColor(shapecolor) {
    this.shapecolor = shapecolor;

  }

  setTextColor(textcolor) {
    this.textcolor = textcolor;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    throw new Error ('Must be implemeneted by subclass')
  }
}
//triangle class

class Triangle extends Shapes {
  constructor() {
    super();
    this.shape = 'triangle';
  }

  render() {
    return `<svg width="300" height="200" viewBox="0 0 300 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="${this.shapecolor}"/>
<text x="150" y="120" font-size="60" font-family="Arial" text-anchor="middle" dominant-baseline="middle" fill="${this.textcolor}">${this.text}</text></svg>`
  }
}
// circle class
class Circle extends Shapes {
  constructor() {
    super();
    this.shape = 'circle';
  }
  render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="150" cy="100" rx="140" ry="90" stroke="${this.shapecolor}" fill="${this.shapecolor}" stroke-width="5"/>
<text x="150" y="100" font-size="60" font-family="Arial" text-anchor="middle" dominant-baseline="middle" fill="${this.textcolor}">${this.text}</text></svg>`


  }
}


//square class

class Square extends Shapes {
  constructor() {
    super();
    this.shape = 'square';
  }
  
  render(){
  return  `<svg width="300" height="200" viewBox="0 0 300 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="280" height="180" stroke="${this.shapecolor}" fill="${this.shapecolor}" stroke-width="5"/>
<text x="140" y="110" font-size="60" font-family="Arial" text-anchor="middle" dominant-baseline="middle" fill="${this.textcolor}">${this.text}</text></svg>`;
   }
}


module.exports = { Shapes, Triangle, Circle, Square }