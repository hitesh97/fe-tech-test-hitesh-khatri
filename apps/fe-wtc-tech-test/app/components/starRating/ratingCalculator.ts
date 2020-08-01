const applyOperatorFunction = {
  '/': (num1, num2) => num1 / num2,
  '%': (num1) => num1 / 100,
};

const findOperator = (ratingValue: string) => {
  const [operator] = ratingValue
    .split('')
    .filter((ch) => ['/', '%'].includes(ch));
  return operator;
};

const evaluateRatingByExpression = (ratingValue: string) => {
  const operationStr = ratingValue.replace(/[ ]/g, '');
  const operator = findOperator(operationStr);
  const [num1, num2] = operationStr.split(operator);
  return applyOperatorFunction[operator](num1, num2);
};

export default evaluateRatingByExpression;
