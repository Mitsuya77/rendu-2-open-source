const fs = require('fs');
const addRandomGradeToCSV = require('./index.js');

jest.mock('fs');

describe('addRandomGradeToCSV', () => {
  beforeEach(() => {
    fs.createReadStream.mockClear();
    fs.createWriteStream.mockClear();
  });

  it('ajoute des notes aléatoires et calcule la moyenne', () => {
    // Mock du contenu du fichier CSV
    const csvData = 
    `12312321312;DOE;John;;
    12312321313;DOE;Maria;;
    12312321314;DOE;Jane;;
    12312321315;DOE;John 2;;
    12312321316;DOE;Mariasse;;`;

    // Mock de la lecture du fichier CSV
    const mockReadStream = fs.createReadStream('students.csv');
    fs.createReadStream.mockReturnValueOnce(mockReadStream);

    // Mock de l'écriture dans le fichier CSV
    const mockWriteStream = fs.createWriteStream('students.csv', { flags: 'a' });
    fs.createWriteStream.mockReturnValueOnce(mockWriteStream);

    // Exécution de la fonction
    addRandomGradeToCSV('students.csv', 0, 20);

    // Vérification des appels de fonctions
    expect(fs.createReadStream).toHaveBeenCalledTimes(1);
    expect(fs.createReadStream).toHaveBeenCalledWith('students.csv');

    expect(fs.createWriteStream).toHaveBeenCalledTimes(1);
    expect(fs.createWriteStream).toHaveBeenCalledWith('students.csv', { flags: 'a' });

    expect(mockReadStream.pipe).toHaveBeenCalledTimes(1);
    expect(mockWriteStream.write).toHaveBeenCalledTimes(5);
    expect(mockWriteStream.end).toHaveBeenCalledTimes(1);
  });
});
