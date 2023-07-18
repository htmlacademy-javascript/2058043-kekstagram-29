const controlRandomString = (string, length) =>
  string.length <= length;

controlRandomString ('fdhshsdsjkfhkjsh', 2);


const palindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  const lastIndex = string.length - 1;
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[lastIndex - i]) {
      return false;
    }
  }
  return true;
};
palindrome ('Лёша на полке клопа нашёл ');

const createNumber = (string) => {
  if (string && string.lenght === 0) {
    return NaN;
  }

  return parseInt (string.replace (/\D+/g, ''), 10);
};

createNumber ('агент 007');

//const workday = (daybeggin, dayend, meetbeggin, meetlate) => {};
