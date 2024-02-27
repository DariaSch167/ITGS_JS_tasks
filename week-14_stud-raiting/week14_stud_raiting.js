const gradesBlock = document.getElementById("grades_info");
const averageGrade = document.getElementById("grades_average");
const maxGrade = document.getElementById("grades_max");
const minGrade = document.getElementById("grades_min");
const positiveGradesNumber = document.getElementById("grades_positive");
const negativeGradesNumber = document.getElementById("grades_negative");

// 1 Генерация элементов массива
let generateArray = [...new Array(12)];
const studentsGrades = generateArray.map(function (element) {
  return (element = Math.round(Math.random() * 101));
});
console.log(studentsGrades);

// Считывание перенесла в конец, вместе с выводом буквенной оценки
// studentsGrades.forEach(function (grade) {
//   const gradeNumber = document.createElement("p");
//   gradeNumber.textContent = `Оценка студента ${
//     studentsGrades.indexOf(grade) + 1
//   }: ${grade}`;
//   gradesBlock.append(gradeNumber);
// });

// 2 Подсчёт среднего балла
let sumGrade = studentsGrades.reduce(function (sum, grade) {
  return sum + grade;
});
averageGrade.textContent = (sumGrade / studentsGrades.length).toFixed(2);

// 3, 4 Максимальный и минимальный балл среди студентов
maxGrade.textContent = Math.max(...studentsGrades);
minGrade.textContent = Math.min(...studentsGrades);

// 5 Количество студентов, получивших положительную оценку (балл выше или равен 60)
const positiveGrades = studentsGrades.filter(function (grade) {
  if (grade >= 60) {
    return grade;
  }
});
console.log(positiveGrades);
positiveGradesNumber.textContent = positiveGrades.length;

// 6  Количество студентов, получивших отрицательную оценку (балл ниже 60)
const negativeGrades = studentsGrades.filter(function (grade) {
  if (grade < 60) {
    return grade;
  }
});
console.log(negativeGrades);
negativeGradesNumber.textContent = negativeGrades.length;

// 7 Числовые оценки в формате буквенных оценок A/B/C/D/E
// § Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// § Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// § Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// § Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// Если оценка ниже 20, преобразуйте её в "E"

studentsGrades.forEach(function (grade, index) {
  let alphabetGrades =
    grade >= 80
      ? "A"
      : grade >= 60 && grade < 79
      ? "B"
      : grade >= 40 && grade < 59
      ? "C"
      : grade >= 20 && grade < 39
      ? "D"
      : "E";
  const studentNumber = document.createElement("p");
  const gradeNumber = document.createElement("span");

  studentNumber.textContent = `Оценка студента ${
    index + 1
  }: `;
  gradesBlock.append(studentNumber);

  gradeNumber.textContent = grade + " " + alphabetGrades;
  studentNumber.append(gradeNumber);

  if (grade >= 60) {
    gradeNumber.classList.add("positive_grade_styling");
  } else {
    gradeNumber.classList.add("negative_grade_styling");
  }
});
