const { Triangle, Circle, Square } = require('./shapes');

const triangle = new Triangle();
const circle = new Circle();
const square = new Square();



describe('blue', () => {
  describe('blue', () => {
    it('creates a blue shape', () => {
      triangle.setShapeColor("blue");
      expect(triangle.render()).toEqual(`<svg width="300" height="200" viewBox="0 0 300 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
<polygon points="150, 18 244, 182 56, 182" fill="blue"/>
<text x="150" y="120" font-size="60" font-family="Arial" text-anchor="middle" dominant-baseline="middle" fill=""></text></svg>`);
    });

  });

});  

describe('triangle', () =>{
  describe('triangle', () =>
    shapes.type('triangle'))
  expect(shapes.toEqual('triangle'))
})
