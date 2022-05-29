import { Pipe, PipeTransform } from '@angular/core';
/**
 *
 * Usage when an array of properties are to be sorted by multiple properties in ascending or descending order.
 * @example  `let item of listOfNames | CustomSort: ['name', '-price']`
 * @example `let item of listOfNames | CustomSort: ['name', '-price', 'age'] `
 * @example `let item of listOfNames | CustomSort: ['name', '-price', 'age'] `
 * @param {string[]} args - Array of properties to be sorted by.
 * @returns {Array<any>} - Sorted array of objects.
 * @author - Gayan Rathnayaka
 */
@Pipe({ name: 'CustomSort' })
export class CustomSortPipe implements PipeTransform {
  transform(values: Array<any>, sortProperties: string | Array<string>) {
    if (
      !values ||
      !sortProperties ||
      !values.length ||
      !sortProperties.length ||
      !Array.isArray(values)
    ) {
      return values;
    }
    return values.sort(
      _sortByMultipleProperties(
        Array.isArray(sortProperties) ? sortProperties : [sortProperties]
      )
    );
  }
}

//sort the array by a property
const _sort = (property: string) => {
  var sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substring(1);
  }
  return (a: any, b: any) => {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

//sort the array by multiple properties
const _sortByMultipleProperties = (args: any) => {
  return (a: any, b: any) => {
    var i = 0,
      result = 0,
      numberOfProperties = args.length;
    while (result === 0 && i < numberOfProperties) {
      result = _sort(args[i])(a, b);
      i++;
    }
    return result;
  };
};
