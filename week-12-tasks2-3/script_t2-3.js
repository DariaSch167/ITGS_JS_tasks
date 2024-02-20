let text =
  "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.";

let result = text.replace(/;/g, "\n");
let substring = result.replace(/\s/g, "");
let newText = substring.substring(28, 50);
let replacedText = newText.replace("клён", "дуб");
let replacedText2 = result.toUpperCase();
let replacedText3 = result.replace(/клён/g, "дуб");
let index = result.indexOf("моря");
let modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);

//   Задание 2: вывести на экран, всё что ниже:
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

// Задание 3: Создать программу, которая генерирует случайное слово из четырёх букв

let alphabet = [
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];

let letterIndexOne = Math.floor(Math.random() * alphabet.length);
let letterIndexTwo = Math.floor(Math.random() * alphabet.length);
let letterIndexThree = Math.floor(Math.random() * alphabet.length);
let letterIndexFour = Math.floor(Math.random() * alphabet.length);

console.log(
  "Случайное слово из 4х букв: " +
    alphabet[letterIndexOne] +
    alphabet[letterIndexTwo] +
    alphabet[letterIndexThree] +
    alphabet[letterIndexFour]
);
