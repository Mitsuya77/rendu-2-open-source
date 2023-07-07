const fs = require('fs');


function addRandomNotesToCSV(students, minNote, maxNote) {
  fs.readFile(students, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
      return;
    }
    const lines = data.split('\n');
    let sum = 0;
    let studentCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.length === 0) {
        continue; 
      }

      const randomNote = Math.floor(Math.random() * (maxNote - minNote + 1)) + minNote;
      const updatedLine = line + ';' + randomNote;

      lines[i] = updatedLine;
      sum += randomNote;
      studentCount++;
    }

    const average = sum / studentCount;
    const averageLine = 'Moyenne;;;;;' + average.toFixed(2);
    lines.push(averageLine);

    const updatedData = lines.join('\n');
    fs.writeFile(students, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Erreur lors de l\'écriture dans le fichier :', err);
        return;
      }
      console.log('Les notes ont été ajoutées avec succès.');
    });
  });
}

// Utilisation de la fonction
addRandomNotesToCSV('students.csv', 0, 20);
module.exports = addRandomNotesToCSV;
