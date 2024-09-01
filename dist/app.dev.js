"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var company = {
  id: 1,
  name: "Boss",
  employees: [{
    id: 2,
    name: "CEO",
    employees: [{
      id: 3,
      name: "Director1"
    }, {
      id: 4,
      name: "Director2",
      employees: []
    }]
  }, {
    id: 5,
    name: "CTO",
    employees: [{
      id: 6,
      name: "Architect1"
    }, {
      id: 7,
      name: "Architect2",
      employees: [{
        id: 10,
        name: "Senior Software engineer"
      }]
    }, {
      id: 8,
      name: "Architect3"
    }, {
      id: 9,
      name: "Architect4"
    }]
  }]
};

function deepClone(obj) {
  var result = {};

  for (var key in obj) {
    if (_typeof(obj[key]) !== "object") {
      result[key] = obj[key];
    } else {
      if (Array.isArray(obj[key])) {
        result[key] = [];

        for (var i = 0; i < obj[key].length; i++) {
          result[key].push(deepClone(obj[key][i]));
        }
      }
    }
  }

  return result;
}

var company2 = deepClone(company);
console.log(company2);
console.log(company2.employees[0].employees[1] === company.employees[0].employees[1]); // const arr = [11, 98, 4, 33, 58];
// arr.forEach(function (value) {
//   console.log(value);
// });
// // --------
// const updatedArr = arr.map(function (value) {
//   return value + 1;
// });
// console.log(updatedArr);
// // --------
// const filteredArr = arr.filter(function (value) {
//   return value % 2 === 0;
// });
// console.log(filteredArr);