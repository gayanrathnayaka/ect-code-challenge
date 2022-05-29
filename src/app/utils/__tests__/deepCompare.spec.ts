import { deepCompare } from '../deepCompare';

describe('deepCompare test suite', () => {
  it('deep compare should be a function', () => {
    expect(typeof deepCompare).toEqual('function');
  });

  it('deepCompare_WhenTwoNullValuePassed_ReturnTrue', () => {
    expect(deepCompare(null, null)).toEqual(true);
  });

  it('deepCompare_WhenTwoUndefinedValuePassed_ReturnTrue', () => {
    expect(deepCompare(undefined, undefined)).toEqual(true);
  });

  it('deepCompare_WhenNullAndUndefinedArePassed_ReturnTrue', () => {
    expect(deepCompare(null, undefined)).toEqual(true);
  });

  it('deepCompare_WhenUndefinedAndNullArePassed_ReturnTrue', () => {
    expect(deepCompare(undefined, null)).toEqual(true);
  });
  it('deepCompare_WhenBothNumbersAreEqual_ReturnTrue', () => {
    expect(deepCompare(10, 10)).toEqual(true);
  });

  it('deepCompare_WhenBothNumbersAreNotEqual_ReturnFalse', () => {
    expect(deepCompare(10, 20)).toEqual(false);
  });

  it('deepCompare_WhenBothStringsAreEqual_ReturnTrue', () => {
    expect(deepCompare('test', 'test')).toEqual(true);
  });

  it('deepCompare_WhenBothStringsAreNotEqual_ReturnFalse', () => {
    expect(deepCompare('test', 'test1')).toEqual(false);
  });

  it('deepCompare_WhenBothBooleansAreEqual_ReturnTrue', () => {
    expect(deepCompare(true, true)).toEqual(true);
  });

  it('deepCompare_WhenBothBooleansAreNotEqual_ReturnFalse', () => {
    expect(deepCompare(true, false)).toEqual(false);
  });

  it('deepCompare_WhenBothArraysAreEqual_ReturnTrue', () => {
    expect(deepCompare([1, 2, 3], [1, 2, 3])).toEqual(true);
    expect(deepCompare([], [])).toEqual(true);
  });

  it('deepCompare_WhenBothArraysAreNotEqual_ReturnFalse', () => {
    expect(deepCompare([1, 2, 3], [1, 2, 4])).toEqual(false);
  });

  it('deepCompare_WhenBothObjectsAreEqual_ReturnTrue', () => {
    expect(
      deepCompare(
        { a: 1, b: { name: 'ffff' }, c: 3 },
        { a: 1, b: { name: 'ffff' }, c: 3 }
      )
    ).toEqual(true);
    expect(deepCompare({}, {})).toEqual(true);
  });

  it('deepCompare_WhenBothObjectsAreNotEqual_ReturnFalse', () => {
    expect(
      deepCompare(
        { a: 1, b: { name: 'ffff' }, c: 3 },
        { a: 1, b: { name: 'ffff' }, c: 4 }
      )
    ).toEqual(false);
  });

  it('deepCompare_WhenBothDatesAreEqual_ReturnTrue', () => {
    expect(deepCompare(new Date(), new Date())).toEqual(true);
  });

  it('deepCompare_WhenBothDatesAreNotEqual_ReturnFalse', () => {
    expect(deepCompare(new Date(), new Date(2020, 1, 1))).toEqual(false);
  });

  it('deepCompare_WhenBothFunctionsAreEqual_ReturnTrue', () => {
    expect(
      deepCompare(
        () => {},
        () => {}
      )
    ).toEqual(true);
    expect(
      deepCompare(
        () => {
          return true;
        },
        () => {
          return true;
        }
      )
    ).toEqual(true);
  });

  it('deepCompare_whenTwoEqualNestedObjectsArePassed_ReturnTrue', () => {
    expect(
      deepCompare(
        {
          name: 'Gayan Rathnayaka',
          age: 25,
          address: {
            city: 'Kandy',
            state: 'Central',
            country: 'Sri Lanka',
            pincode: 411038,
          },
          hobbies: ['cooking', 'playing guitar', 'reading'],
          isMarried: false,
          isActive: true,
          isDeleted: false,
          isVerified: true,
          isBlocked: false,
          authenticationRoles: ['admin', 'user'],
        },
        {
          name: 'Gayan Rathnayaka',
          age: 25,
          address: {
            city: 'Kandy',
            state: 'Central',
            country: 'Sri Lanka',
            pincode: 411038,
          },
          hobbies: ['cooking', 'playing guitar', 'reading'],
          isMarried: false,
          isActive: true,
          isDeleted: false,
          isVerified: true,
          isBlocked: false,
          authenticationRoles: ['admin', 'user'],
        }
      )
    ).toEqual(true);
  });

  it('deepCompare_whenTwoNotEqualNestedObjectsArePassed_ReturnFalse', () => {
    expect(
      deepCompare(
        {
          name: 'Gayan Rathnayaka',
          age: 25,
          address: {
            city: 'Kandy',
            state: 'Central',
            country: 'Sri Lanka',
            pincode: 411038,
          },
          hobbies: ['cooking', 'playing guitar', 'reading'],
          isMarried: false,
          isActive: true,
          isDeleted: false,
          isVerified: true,
          isBlocked: false,
          authenticationRoles: ['admin', 'user'],
        },
        {
          name: 'Gayan Rathnayaka',
          age: 25,
          address: {
            city: 'Kandy',
            state: 'Central',
            country: '_Sri Lanka',
            pincode: 411038,
          },
          hobbies: ['cooking', 'playing guitar', '_reading'],
          isMarried: false,
          isActive: true,
          isDeleted: false,
          isVerified: true,
          isBlocked: false,
          authenticationRoles: ['admin', '_user'],
          extra: 'extra',
        }
      )
    ).toEqual(false);
  });
});
