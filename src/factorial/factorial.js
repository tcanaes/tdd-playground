import { typeErrorMessage, rangeErrorMessage } from './utils.js';

const getFactorial = (value) => {
  const isNotNumber = typeof value !== 'number';
  const isOutOfRange = value < 0 || value > 20;
  const isNumberOneOrZero = value === 1 || value === 0;
  if (isNotNumber) { 
    throw new TypeError(typeErrorMessage); 
  }
  if (isOutOfRange) { 
    throw new RangeError(rangeErrorMessage);
  }
  return isNumberOneOrZero ? 1 : value * getFactorial(value - 1);
};

export default getFactorial;