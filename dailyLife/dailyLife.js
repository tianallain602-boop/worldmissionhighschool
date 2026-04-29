// Part 1: Variables and Data Types
const name = "Thierry";
const age = 18;
const favoriteFood = "rice and chicken";
const studyHoursPerDay = 3;
const isStudent = true;

// Extra variables
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

// Part 2: Calculations
const studyHoursPerWeek = studyHoursPerDay * 7;
const ageInMonths = age * 12;
const ageInDogYears = age * 7;

// Extra calculations
const studyHoursPerYear = studyHoursPerWeek * 52;

// Function to describe study level
function getStudyLevel(hours) {
  if (hours >= 5) {
    return "very hardworking 💪";
  } else if (hours >= 3) {
    return "consistent 👍";
  } else {
    return "needs improvement 📚";
  }
}

// Function to format message
function introducePerson() {
  return `Hello, my name is ${name}.
I am ${age} years old (born in ${birthYear}).
I love eating ${favoriteFood}.
I study ${studyHoursPerDay} hours per day, which is ${studyHoursPerWeek} hours per week and ${studyHoursPerYear} hours per year.
That means I am ${getStudyLevel(studyHoursPerDay)}.
I am ${ageInMonths} months old.
In dog years, I am ${ageInDogYears}.
Am I a student? ${isStudent}.`;
}

// Part 3: Output
console.log(introducePerson());