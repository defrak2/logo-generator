const svgTemplate = (shape, color, text) => {
  return `${Shapes} `
}

const createDocument = (shape, color, text) => {
  const svgContent = svgTemplate (shape, color, text);
  return svgContent;

}

module.exports = { createDocument };