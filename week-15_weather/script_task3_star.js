// 1. Создала массив и заполнила циклом от -10 до 10:

let numbers = new Array();
let num = -10;
i = 0;

while (num <= 10) {
  numbers[i] = num;
  num++;
  i++;
}
console.log(numbers);

// 2.1 Убрала отрицательные методом filter:

let positiveNumbers = numbers.filter((num) => {
  if (num >= 0) {
    return true;
  } else {
    return false;
  }
});
console.log(positiveNumbers);

// 2.2 Убрала отрицательные циклом и методом splice:

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
  }
}
console.log(numbers);

// 3. Возвела числа в квадрат:

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}
console.log(numbers);

// 4.1 Отсортировала по убыванию методом sort:

sortNumbers = numbers.map(function (num) {
  return num;
});
sortNumbers.sort(function (a, b) {
  return b - a;
});
console.log(sortNumbers);

// 4.2 Отсортировала "пузырьковой сортировкой" (эксперимент):

for (let j = numbers.length - 1; j > 0; j--) {
  for (let i = 0; i < j; i++) {
    if (numbers[i] < numbers[i + 1]) {
      let numberSwitcher = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = numberSwitcher;
    }
  }
}
console.log(numbers);
