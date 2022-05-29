/**
 *
 * @param item The item to be copied
 * @returns a copy of the item which has a deep copy of the item and a different reference
 */
export function deepCopy(item: any) {
  //if object is undefined or null, return it
  if (item == null) return item;

  //define primitive types
  let types = [Number, String, Boolean],
    result: any;

  //if item is a primitive type, return it Ex - new String("item")
  types.forEach((type) => {
    if (item instanceof type) {
      result = type(item);
    }
  });

  //if item is an array, copy it and return a new array
  if (Array.isArray(item)) {
    result = [];
    item.forEach((item, index) => {
      result[index] = deepCopy(item);
    });
  }

  //check if item is a object
  else if (typeof item == 'object') {
    //check if the object is a Date then return a new Date
    if (item instanceof Date) {
      result = new Date(item);
    }
    //check if the object is a regular expression then return a new regular expression
    else if (item instanceof RegExp) {
      result = new RegExp(item);
    }

    //object is an object literal , copy it and return a new object
    else {
      result = {};
      for (var i in item) {
        result[i] = deepCopy(item[i]);
      }
    }
  } else {
    result = item;
  }

  return result;
}
