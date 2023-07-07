const fs = require('fs');
const addRandomNotesToCSV = require('./index.js');
jest.mock('fs', () => ({
  readFile: jest.fn((path, encoding, callback) => {
    const data = 'John Doe\nJane Smith\n';
    callback(null, data);
  }),
  writeFile: jest.fn((path, data, encoding, callback) => {
    callback(null);
  }),
}));

describe('addRandomNotesToCSV', () => {
  it('should add random notes to the CSV file', () => {
    const students = 'students.csv';
    const minNote = 0;
    const maxNote = 20;

    addRandomNotesToCSV(students, minNote, maxNote);

    expect(fs.readFile).toHaveBeenCalledWith(students, 'utf8', expect.any(Function));
    expect(fs.writeFile).toHaveBeenCalledWith(students, expect.any(String), 'utf8', expect.any(Function));
    expect(fs.writeFile.mock.calls[0][1]).toContain(';');
    expect(fs.writeFile.mock.calls[0][1]).toContain('Moyenne;;;;;'); 
  });
});
