/* 
In this kata you will create a function that takes a list of non-negative
 integers and strings and returns a new list with the strings filtered out.

 Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

const filterList = function (list) {
  let arrFilter = [];

  list.filter((el, i, arr) => {
    typeof el === 'number' ? arrFilter.push(el) : arrFilter;
  });

  return arrFilter;
};

const test = filterList([1, 'a', 'b', 0, 15]);

console.log(test);
