import { execute } from '../execute';

describe('Execute', () => {
  it('execute_WhenSumExpressionPassed_ReturnTheSumOfTwoValues', () => {
    expect(execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 })).toBe(
      'Sum: 20'
    );
  });

  it('execute_WhenMultiplicationExpressionPassed_ReturnTheMultiplicationOfTwoValues', () => {
    expect(execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 })).toBe(
      'Mul: 51'
    );
  });

  it('execute_WhenSubtractionExpressionPassed_ReturnTheSubtractionOfTwoValues', () => {
    expect(
      execute('$logger("Subtraction:", $math.sub(a, b))', { a: 2, b: 1 })
    ).toBe('Subtraction: 1');
  });

  it('execute_WhenDivisionExpressionPassed_ReturnTheDivisionOfTwoValues', () => {
    expect(
      execute('$logger("Division:", $math.div(a, b))', { a: 2, b: 1 })
    ).toBe('Division: 2');
  });

  it('execute_ShouldReturnNull_WhenInvalidExpressionIsPassed', () => {
    expect(execute('InvalidExpression', { a: 2, b: 1 })).toBe(null);
    expect(
      execute('$Notlogger("Division:", $math.div(a, b))', { a: 2, b: 1 })
    ).toBe(null);
  });

  it('execute_ShouldReturnNull_WhenInvalidObjectIsPassed', () => {
    expect(execute('$logger("Division:", $math.div(a, b))', {})).toBe(null);
  });

  it('execute_ShouldReturnNull_WhenInvalidOperatorIsPassed', () => {
    expect(
      execute('$logger("Division:", $math.invalidOperator(a, b))', {
        a: 2,
        b: 1,
      })
    ).toBe(null);
  });
});
