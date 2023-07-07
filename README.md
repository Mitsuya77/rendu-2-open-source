# rendu-2-open-source

# Random Notes Generator

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A simple JavaScript function to add random notes to a CSV file.

## Description

The Random Notes Generator is a JavaScript function that reads a CSV file containing a list of students and adds random notes to each student's record. The function calculates the average of the added notes and appends it to the end of the CSV file.

## Features

- Adds random notes to each student's record in a CSV file
- Calculates and appends the average of the added notes to the CSV file

## Requirements

- Node.js
- npm or Yarn

## Installation

1. Clone the repository:git@github.com:Mitsuya77/rendu-2-open-source.git

```bash
git clone 
Navigate to the project directory:
bash
Copy code
cd random-notes-generator
Install the dependencies:
bash
Copy code
npm install
or

bash
Copy code
yarn install
Usage
Ensure that you have a CSV file containing a list of students. The file should have one student per line.

Modify the students.csv file path and the desired range of random notes (minimum and maximum values) in the addRandomNotesToCSV function call.

Run the following command to add random notes to the CSV file:

bash
Copy code
npm run generate-notes
or

bash
Copy code
yarn generate-notes
The function will read the CSV file, add random notes to each student's record, calculate the average, and update the CSV file with the modified data.
License
This project is licensed under the MIT License. See the LICENSE file for more information.


Feel free to customize the content based on your specific project details.
