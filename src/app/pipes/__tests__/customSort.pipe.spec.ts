import { CustomSortPipe } from '../customSort.pipe';

const sortPipe = new CustomSortPipe();

describe('CustomSortPipe', () => {
  it('create an instance', () => {
    expect(sortPipe).toBeTruthy();
  });

  it('should sort an array of objects by a single property', () => {
    const listOfNames = [
      { name: 'John', age: 20, price: 100 },
      { name: 'Mary', age: 30, price: 200 },
      { name: 'Mike', age: 40, price: 300 },
      { name: 'Adam', age: 50, price: 400 },
      { name: 'Peter', age: 60, price: 500 },
      { name: 'Paul', age: 70, price: 600 },
    ];
    const sortedList = sortPipe.transform(listOfNames, 'name');
    expect(sortedList[0].name).toEqual('Adam');
    expect(sortedList[1].name).toEqual('John');
    expect(sortedList[2].name).toEqual('Mary');
    expect(sortedList[3].name).toEqual('Mike');
    expect(sortedList[4].name).toEqual('Paul');
    expect(sortedList[5].name).toEqual('Peter');

    const sortedList2 = sortPipe.transform(listOfNames, '-name');
    expect(sortedList2[0].name).toEqual('Peter');
    expect(sortedList2[1].name).toEqual('Paul');
    expect(sortedList2[2].name).toEqual('Mike');
    expect(sortedList2[3].name).toEqual('Mary');
    expect(sortedList2[4].name).toEqual('John');
    expect(sortedList2[5].name).toEqual('Adam');

    const sortedList3 = sortPipe.transform(listOfNames, 'age');
    expect(sortedList3[0].age).toEqual(20);
    expect(sortedList3[1].age).toEqual(30);
    expect(sortedList3[2].age).toEqual(40);
    expect(sortedList3[3].age).toEqual(50);
    expect(sortedList3[4].age).toEqual(60);
    expect(sortedList3[5].age).toEqual(70);

    const sortedList4 = sortPipe.transform(listOfNames, '-age');
    expect(sortedList4[0].age).toEqual(70);
    expect(sortedList4[1].age).toEqual(60);
    expect(sortedList4[2].age).toEqual(50);
    expect(sortedList4[3].age).toEqual(40);
    expect(sortedList4[4].age).toEqual(30);
    expect(sortedList4[5].age).toEqual(20);

    const sortedList5 = sortPipe.transform(listOfNames, 'price');
    expect(sortedList5[0].price).toEqual(100);
    expect(sortedList5[1].price).toEqual(200);
    expect(sortedList5[2].price).toEqual(300);
    expect(sortedList5[3].price).toEqual(400);
    expect(sortedList5[4].price).toEqual(500);
    expect(sortedList5[5].price).toEqual(600);

    const sortedList6 = sortPipe.transform(listOfNames, '-price');
    expect(sortedList6[0].price).toEqual(600);
    expect(sortedList6[1].price).toEqual(500);
    expect(sortedList6[2].price).toEqual(400);
    expect(sortedList6[3].price).toEqual(300);
    expect(sortedList6[4].price).toEqual(200);
    expect(sortedList6[5].price).toEqual(100);
  });

  it('should sort an array of objects by multiple properties', () => {
    const listOfNames = [
      { name: 'John', age: 20, price: 100 },
      { name: 'Mary', age: 30, price: 200 },
      { name: 'Mike', age: 40, price: 300 },
      { name: 'Adam', age: 50, price: 400 },
      { name: 'Peter', age: 60, price: 500 },
      { name: 'Paul', age: 70, price: 600 },
    ];
    const sortedList = sortPipe.transform(listOfNames, ['name', 'age']);
    expect(sortedList[0].name).toEqual('Adam');
    expect(sortedList[0].age).toEqual(50);
    expect(sortedList[1].name).toEqual('John');
    expect(sortedList[1].age).toEqual(20);
    expect(sortedList[2].name).toEqual('Mary');
    expect(sortedList[2].age).toEqual(30);
    expect(sortedList[3].name).toEqual('Mike');
    expect(sortedList[3].age).toEqual(40);
    expect(sortedList[4].name).toEqual('Paul');
    expect(sortedList[4].age).toEqual(70);
    expect(sortedList[5].name).toEqual('Peter');
    expect(sortedList[5].age).toEqual(60);
  });
});
