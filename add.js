function power(a, b) {
  var result = 1;
  for (var i = 0; i < b; i++) {
    result = result * a;
  }
  return result;
}
console.log("Power:", power(2, 3));


// ===================== 2) Leap Year =====================
function isLeapYear(year) {
  if (year % 4 === 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
}
console.log("2020:", isLeapYear(2020));


function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
  var S = calculateS(a, b, c);
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
console.log("Triangle Area:", triangleArea(5, 6, 7));


function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
  return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction(m1, m2, m3) {
  console.log("Average:", average(m1, m2, m3));
  console.log("Percentage:", percentage(m1, m2, m3) + "%");
}
mainFunction(70, 80, 90);


// ===================== 5) Custom indexOf =====================
function myIndexOf(str, char) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}
console.log("Index:", myIndexOf("Pakistan", "s"));


function removeVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, "");
}
console.log("No vowels:", removeVowels("This is a test sentence"));


function countDoubleVowels(text) {
  var count = 0;

  for (var i = 0; i < text.length - 1; i++) {
    var pair = text[i] + text[i + 1];

    switch (pair) {
      case "aa":
      case "ae":
      case "ai":
      case "ea":
      case "ee":
      case "ei":
      case "ia":
      case "ie":
      case "io":
      case "ou":
      case "ui":
        count++;
        break;
    }
  }
  return count;
}
console.log("Double Vowels:",
countDoubleVowels("Pleases read this application and give me gratuity"));


function meters(km) {
  console.log("Meters:", km * 1000);
}

function feet(km) {
  console.log("Feet:", km * 3280.84);
}

function inches(km) {
  console.log("Inches:", km * 39370);
}

function centimeters(km) {
  console.log("Centimeters:", km * 100000);
}

meters(5);
feet(5);
inches(5);
centimeters(5);


function overtimePay(hours) {
  if (hours > 40) {
    return (hours - 40) * 12;
  } else {
    return 0;
  }
}
console.log("Overtime Pay Rs:", overtimePay(45));


function currencyNotes(amount) {
  var hundreds = Math.floor(amount / 100);
  var remainder = amount % 100;

  var fifties = Math.floor(remainder / 50);
  remainder = remainder % 50;

  var tens = Math.floor(remainder / 10);

  console.log("100 notes:", hundreds);
  console.log("50 notes:", fifties);
  console.log("10 notes:", tens);
}

currencyNotes(880);
