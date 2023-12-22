'use strict';

const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

const workingHours = {
  [weekdays[2]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 10,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [weekdays[6]]: {
    open: 12,
    close: 23,
  },
};

const props = Object.keys(workingHours);
console.log(props);
console.log(`"Banzai" opens ${props.length} days in a week`);

/* for (const day of Object.keys(workingHours)) {
  console.log(day);
} */

for (const day of props) {
  console.log(day);
}

// Property values

const values = Object.values(workingHours);
console.log(values[0]);

const entries = Object.entries(workingHours);
console.log(entries);

for (const entry of entries) {
  console.log(entry);
}

for (const [day, { open, close }] of entries) {
  console.log(
    `Restaurant "Banzai" on ${day} opens at ${open} and closes at ${close}`
  );
}
