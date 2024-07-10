//Utilizes colors.js and shapes.js and text.js to create a svg file with user input on command line.
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const { join } = require("path");


class CLI {
  constructor() {
    this.shape = "";

    this.color = "";

    this.text = "";
  }
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
          name: "color",
          message: "Please type your preferred color keyword or hex:",
        },
        {
          type: "input",
          name: "text",
          message: "Please enter three letters for your logo:",
        },
      ])
      .then((answers) => {
        this.shape = answers.shape;
        this.color = answers.color;
        this.text = answers.text;

        const svgContent = createDocument(this.shape, this.color, this.text);
        return writeFile("logo.svg", svgContent);
      })

      .then(() => console.log("Created logo.svg"))
      .catch((err) => {
        console.log(err);
        console.log("Oops. Something went wrong.");
      });
  }
}

module.exports = CLI;