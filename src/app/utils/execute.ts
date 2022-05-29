/**
 * @param code: string - The expression to be executed
 * @param inputs: object - The inputs to be used in the expression
 * @returns number - The result of the expression
 * @description - This function will execute the expression and return the result
 * @example - execute('$logger("Sum:", $math.sum(a, b))', { a: 1, b: 2 })
 * @example - execute('$logger("Multiplication:", $math.mul(a, b))', { a: 1, b: 2 })
 * @example - execute('$logger("Subtraction:", $math.sub(a, b))', { a: 2, b: 1 })
 * @example - execute('$logger("Division:", $math.div(a, b))', { a: 2, b: 2 })
 */
export function execute(code: string, inputs: Object) {
  try {
    let regex = new RegExp(
      /^\$logger\("[\w:-=>]*",\$math.[A-z]{3}\([\w]*,[\w]*\)\)$/
    );

    if (!regex.test(code.replace(/\s/g, '')) || !validObject(inputs)) {
      return null;
    }

    let expressionArray = generateExpressionArray(code, inputs);
    if (expressionArray === null) {
      return null;
    }

    let expression = expressionParser(expressionArray);
    let transpiledExpression = executeExpression(expression);
    let evaluatedValue = `${getConsoleMessage(code)} ${eval(
      transpiledExpression
    )}`;
    console.log(evaluatedValue);
    return evaluatedValue;
  } catch (_e) {
    return null;
  }
}

//check if the object is a valid object with two numbers
const validObject = (object: any) => {
  return (
    typeof object === 'object' &&
    !Array.isArray(object) &&
    object !== null &&
    Object.keys(object).length &&
    Object.keys(object).length === 2 &&
    validInputs(object)
  );
};

//check if the object has only two numbers
const validInputs = (inputs: any) => {
  for (const key in inputs) {
    if (typeof inputs[key] !== 'number') {
      return false;
    }
  }
  return true;
};

//generate an array of tokens from the expression string
const generateExpressionArray = (code: string, inputs: any) => {
  try {
    let operator = code.split('.')[1].trim().substring(0, 3);
    let operand1 = inputs[Object.keys(inputs)[0]];
    let operand2 = inputs[Object.keys(inputs)[1]];
    return [operator, operand1, 'with', operand2];
  } catch (_e) {
    return null;
  }
};

//get the console message from the expression
const getConsoleMessage = (code: string) => {
  let message = code.match(/\(([^)]+)\)/);
  return message ? message[1].trim().split(',')[0].replace(/['"]+/g, '') : '';
};

//parse the expression and return the expression tree
const expressionParser = (expressionArray: Array<string>) => {
  let current_token_index = 0;

  const parseNumber = () => ({
    value: parseInt(expressionArray[current_token_index++]),
    type: 'number',
  });

  const parseOperator = () => {
    const node = {
      value: expressionArray[current_token_index++],
      type: 'operator',
      expression: [] as any,
    };
    while (expressionArray[current_token_index]) {
      node.expression.push(parseExpression());
    }
    return node;
  };

  const parseExpression = (): any =>
    /\d/.test(expressionArray[current_token_index])
      ? parseNumber()
      : parseOperator();

  return parseExpression();
};

//execute the expression tree and return the result
const executeExpression = (expression: any) => {
  const mapOperator = { sum: '+', sub: '-', mul: '*', div: '/' } as any;
  const validateOperands = (expression: any) =>
    expression.type === 'number'
      ? transpileNumber(expression)
      : generateExpression(expression);
  const transpileNumber = (expression: any) => expression.value;
  const generateExpression = (expression: any) =>
    `${expression.expression
      .map(validateOperands)
      .join(' ' + mapOperator[expression.value] + ' ')}`;
  return generateExpression(expression);
};
