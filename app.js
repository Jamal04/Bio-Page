function viral(n) {
  let shared = 5;
  let likers;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    likers = Math.floor(shared / 2);
    total += likers;
    shared = likers * 2;
  }
  return likers;
}

function countDigits(number) {
  let i;
  for (i = 1; number >= 10; i++) {
    number = number / 10;
  }
  return i;
}

function divide() {
  const result = [];
  for (i = 1; i <= 100; i++) {
    if (i % 9 == 0) {
      result.push(i);
    }
  }
  return result;
}

function noVowelsDetector(words) {
  const result = [];
  for (i = 0; i < words.length; i++) {
    if (
      !words[i].includes("a") &&
      !words[i].includes("e") &&
      !words[i].includes("o") &&
      !words[i].includes("u") &&
      !words[i].includes("i")
    ) {
      result.push(words[i]);
    }
  }
  return result;
}
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

function power(base, pow) {
  result = 1;
  for (let i = 1; i <= pow; i++) {
    result = result * base;
  }
  return result;
}

function repeatedNumber(x) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (x[i] == x[j] && i != j) {
        return x[i];
      }
    }
  }
}

function sort(x) {
  let i;
  for (i = 0; i < x.length; i++) {
    let max = Math.min(...x);
    let max_index = i;
    for (let j = i; j < x.length; j++) {
      if (max < x[j]) {
        max = x[j];
        max_index = j;
      }
    }

    let temp = x[i];
    x[i] = max;
    x[max_index] = temp;
  }
  x.reverse();
  return x;
}

function twoLetters(stringA, stringB) {
  let result = [];
  result.push(stringA[0]);
  result.push(stringB[0]);
  return result;
}
