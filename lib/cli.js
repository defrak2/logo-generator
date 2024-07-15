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
        let shape;
        switch(answers.shape) {
          case "triangle":
            shape = new Triangle();
            break;
          case "square":
            shape = new Square();
            break;
          case "circle":
            shape = new Circle();
            break;
        }
        shape.setShapeColor(answers.shapecolor.toLowerCase());
        shape.setTextColor(answers.textcolor.toLowerCase());
        shape.setText(answers.text);
        const svgContent = shape.render();
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