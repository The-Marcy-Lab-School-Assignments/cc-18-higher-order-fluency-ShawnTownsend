// 1.
function shortWords(array) {
  return array.filter((words) => words.length < 5);
}

// 2.
function noVowel(words) {
  return words.map((word) => word.replace(/[aeiou]/ig, 'x'));
}


// 3.
function longToShort(array) {
  return array.sort((a, b) => b.length - a.length);
}

// 4.
function onlyVowelA(words) {
  return words.filter((word) => word.includes('a'));
}

// 5.
function pluralize(array) {
  return array.map((el) => `${el}s`);
}

// 6.
function longerThanSeven(array) {
  return array.some((e) => e.length > 7);
}


// 7.
function oddLength(array) {
  return array.filter((word) => word.length % 2);
}

// 8.
function allFour(array) {
  return array.every((e) => e.length === 4);
}

// 9.
function sum(nums) {
    return nums.reduce((a, b) => a + b, 0);
}

// 10.
function longWords(array) {
  return array.filter((longWord) => longWord.length > 3);
}

// 11.
function uppercase(array) {
  return array.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
}

// 12.
function concatStrings(words) {
  return words.join(' ');
}

