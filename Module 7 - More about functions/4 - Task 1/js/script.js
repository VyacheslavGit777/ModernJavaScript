'use strict';

const mySolutionButton = document.getElementById('myS');
const lectorSolutionButton = document.getElementById('lectS');

const survey = {
  question: 'What programming language would you like to learn?',
  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
  answers: new Array(5).fill(0),
  logNewAnswer() {
    console.clear();
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Enter option number)`
      )
    );

    // Update answers
    if (
      typeof answer === 'number' &&
      answer >= 0 &&
      answer < this.answers.length
    ) {
      this.answers[answer]++;
    }
    this.printResults();
    this.printResults('string');
  },
  printResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Survey results: ${this.answers.join(', ')}.`);
    }
  },
};

function mySolution() {
  console.clear();

  const printResults = function (type = 'array') {
    if (type === 'array') {
      console.log(survey.answers);
    } else if (type === 'string') {
      console.log(`Survey results: ${survey.answers.join(', ')}`);
    } else if (Array.isArray(type)) {
      console.log(type);
      console.log(`Survey results: ${type.join(', ')}`);
    }
  };

  const logNewAnswer = function () {
    const answer = prompt(`What programming language would you like to learn?
    0: JavaScript
    1: Python
    2: Ruby
    3: Java
    4: C#
    (Enter option number)
    `);
    typeof Number(answer) === 'number' && (answer === 0 || answer < 5)
      ? survey.answers[answer]++
      : console.log('Error');
    printResults('string');
  };
  logNewAnswer();
  printResults([7, 1, 4]);
  printResults([3, 6, 9, 2, 5, 4, 4]);
}

mySolutionButton.addEventListener('click', mySolution);
document
  .querySelector('#survey')
  .addEventListener('click', survey.logNewAnswer.bind(survey));

survey.printResults.call({ answers: [7, 1, 4] }, 'string');
survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'string');
