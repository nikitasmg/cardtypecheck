// export const luhnCheck = (num) => {
//   let arr = (num + '')
//     .split('')
//     .reverse()
//     .map(x => parseInt(x));
//   let lastDigit = arr.splice(0, 1)[0];
//   let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
//   sum += lastDigit;
//   return sum % 10 === 0;
// };
export const luhnCheck = (imei) => {
  return !/^\d+$/.test(imei) || (imei.split('').reduce(function(sum, d, n){
    return sum + parseInt(((n + imei.length) %2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
  }, 0)) % 10 === 0;
};

export const checkInputValidation = (value, target) => {
  const validWrapper = document.querySelector('.valid-wrapper')
  if (luhnCheck(value)) {
    target.classList.remove('invalid')
    target.classList.add('valid')
    validWrapper.innerHTML = 'valid'
  } else {
    target.classList.remove('valid')
    target.classList.add('invalid')
    validWrapper.innerHTML = 'invalid'

  }
}
