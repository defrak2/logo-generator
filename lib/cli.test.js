const CLI = require('./cli');

describe('tooMuchText', () => {
  describe('tooMuchText', () => {
    it('returns error message when input length is greater than 3', () => {
      expect(CLI.tooMuchText('abcd')).toBe('Error: Input is too long (maximum characters is 3)');
    });
  })
  describe('tooMuchText', () => {
    it('returns true when input length is 3 or less', () => {
      expect(CLI.tooMuchText('abc')).toBe(true);
    });
  });


});  

describe('isColor', () => {
  describe('isColor', () => {
    it('returns true when input is a valid color keyword', () => {
      expect(CLI.isColor('red')).toBe(true);
    })
    it('returns true when input is a valid hex color code', () => {
      expect(CLI.isColor('#FF0000')).toBe(true);
    })
    it('returns error message when input is an invalid color', () => {
      expect(CLI.isColor(' invalid')).toBe('Error: Invalid color typed.');
    });
  })


})
 