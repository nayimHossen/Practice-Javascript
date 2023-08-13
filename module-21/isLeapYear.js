function isLeapYear(year) {
  if (year % 4 === 0) {
    return `${year} is leap year`;
  } else {
    return `${year} is not leap year`;
  }
}

const result = isLeapYear(1933);
console.log(result);
