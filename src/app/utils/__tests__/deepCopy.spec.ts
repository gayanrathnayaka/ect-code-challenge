import { deepCopy } from '../deepCopy';

let test1Object = {
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
};

describe('deepCopy', () => {
  it('deepCopy should be a function', () => {
    expect(typeof deepCopy).toEqual('function');
  });
  it('deepCopy_WhenNullValuePassed_ReturnNull', () => {
    expect(deepCopy(null)).toEqual(null);
  });
  it('deepCopy_WhenUndefinedValuePassed_ReturnUndefined', () => {
    expect(deepCopy(undefined)).toEqual(undefined);
  });
  it('deepCopy_WhenNumberValuePassed_ReturnNumber', () => {
    expect(deepCopy(1)).toEqual(1);
  });
  it('deepCopy_WhenStringValuePassed_ReturnString', () => {
    expect(deepCopy('test')).toEqual('test');
  });
  it('deepCopy_WhenBooleanValuePassed_ReturnBoolean', () => {
    expect(deepCopy(true)).toEqual(true);
  });
  it('deepCopy_WhenArrayValuePassed_ReturnArray', () => {
    expect(deepCopy([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('deepCopy_WhenObjectValuePassed_ReturnObject', () => {
    expect(deepCopy({ a: 1, b: { name: 'ffff' }, c: 3 })).toEqual({
      a: 1,
      b: { name: 'ffff' },
      c: 3,
    });
  });
  it('deepCopy_WhenDateValuePassed_ReturnDate', () => {
    expect(deepCopy(new Date())).toEqual(new Date());
  });
  it('deepCopy_WhenRegExpValuePassed_ReturnRegExp', () => {
    expect(deepCopy(new RegExp('ddddddddd'))).toEqual(new RegExp('ddddddddd'));
  });
  it('deepCopy_WhenFunctionValuePassed_ReturnExecutedFunction', () => {
    let res = deepCopy(() => {
      return 10 + 5;
    });
    expect(res()).toEqual(15);
  });
  it('deepCopy_WhenTest1ObjectValuePassed_ReturnSameObject', () => {
    expect(deepCopy(test1Object)).toEqual(test1Object);
  });
});
