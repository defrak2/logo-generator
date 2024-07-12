//Utilizes colors.js and shapes.js and text.js to create a svg file with user input on command line.
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { join } = require("path");
const {Triangle, Circle, Square} = require("./shapes");

function tooMuchText (input) {
    if (input.length >3) {
      return 'Error: Input is too long (maximum characters is 3)';
    } else {
          return true
    }

  }

  function isColor(input) {
    const colorKeywords = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'black', 'white'];
    const hexPattern = /^#[0-9A-F]{6}$/i;
  
    if (colorKeywords.includes(input.toLowerCase())) {
      return true;
    } else if (hexPattern.test(input)) {
      return true;
    } else {
      return 'Error: Invalid color typed.';
    }
  }


class CLI {
  constructor() {
    this.shape = "";

    this.color = "";

    this.text = "";
  };



  run() {
    return inquirer
      .prompt([
        {
          type: "list",
          name: "shape",
          choices: ["triangle", "square", "circle"],
          message: "Please choose from the three shapes:",
        },
        {
          type: "input",
          name: "shapecolor",
          message: "Please type your preferred color keyword or hex for the shape:",
          validate: isColor,

      },
        {
          type: "input",
          name: "text",
          message: "Please enter three characters for your logo:",          
          validate: tooMuchText,

        },
        {
          type: "input",
          name: "textcolor",
          message: "Please type your preferred color keyword or hex for the text:",
          validate: isColor,
        },
      ])
      .then((answers) => {
        this.shape = answers.shape;
        this.shapecolor = answers.shapecolor.toLowerCase();
        this.text = answers.text;
        this.textcolor = answers.textcolor.toLowerCase();

        console.log("Shape:", this.shape);
        console.log("Shape Color:", this.shapecolor);
        console.log("Text:", this.text);
        console.log("Text Color:", this.textcolor);

        let svgContent; 
        switch (this.shape) {
          case "triangle":
            svgContent = new Triangle().createTriangle(this.shapecolor, this.text, this.textcolor);
            break;
          case "square":
            svgContent = new Square().createSquare(this.shapecolor, this.text, this.textcolor);
            break;
          case "circle":
            svgContent = new Circle().createCircle(this.shapecolor, this.text, this.textcolor);
            break;
        }
        return writeFile("logo.svg", svgContent);
      })

      .then(() => console.log("Created logo.svg"))
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }
}

module.exports = {CLI, tooMuchText, isColor,};