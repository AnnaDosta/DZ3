//задание 1
let i = 1;
while (i <= 50) {
  console.log(i);
  i++;
}

i = 38;
while (i >= 8) {
  console.log(i);
  i--;
}
//задание 2
i = 89;
while (i >= 11) {
  document.write(i + "<br/>");
  i--;
}
//задание 3
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
//задание 4
sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = 0;
  for (let j = 1; j <= i; j++) {
    sum += j;
  }
  console.log(" Sum " + i + " = " + sum);
}
//задание 5
for (let i = 8; i <= 56; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}
i = 8;
while (i <= 56) {
  if (i % 2 != 0) {
    i++;
  } else {
    console.log(i);
    i++;
  }
}
//задание 6
for (let i = 2; i <= 10; i++) {
  sum = 0;
  for (let j = 1; j <= 10; j++) {
    sum = i * j;
    console.log(i + " * " + j + " = " + sum);
  }
}
//задание 7
let n = 1000;
let j = 1;
let res = n / 2;
while (res > 50) {
  res = res / 2;
  j++;
}
console.log("result=" + res + ", iterations=" + j);

//задание 8

sum = 0;
j = 0;
while (true) {
  let h = prompt("Введите число");
  if (h == "" || h == "0") {
    break;
  } else {
    let number = parseInt(h);
    if (!isNaN(number)) {
      sum += number;
      j++;
    }
  }
}
console.log("Сумма = " + sum + " Среднее арифметическое = " + sum / j);

//задание 9
let numstr = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let num = "";
let maxnum = 0;
let minnum = Number.MAX_VALUE;
for (let i = 0; i < numstr.length; i++) {
  if (numstr[i] != " ") {
    num += numstr[i];
  } else {
    console.log(num);
    if (parseInt(num) > maxnum) {
      maxnum = parseInt(num);
    }
    if (parseInt(num) < minnum) {
      minnum = parseInt(num);
    }
    num = "";
  }
}
console.log("Наименьшае число = " + minnum + " Наибольшае число = " + maxnum);
