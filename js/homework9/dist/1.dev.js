"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var company = {
  sales: [{
    name: "John",
    salary: 1000
  }, {
    name: "Alice",
    salary: 600
  }],
  development: {
    sites: [{
      name: "Peter",
      salary: 2000
    }, {
      name: "Alex",
      salary: 1800
    }],
    internals: [{
      name: "Jack",
      salary: 1300
    }]
  }
};

function sumFunctionUser(obj) {
  var resultSalary = 0;

  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      for (var i = 0; i < obj[key].length; i++) {
        resultSalary += obj[key][i].salary;
      }
    } else if (_typeof(obj[key]) === "object") {
      resultSalary += sumFunctionUser(obj[key]);
    }
  }

  return resultSalary;
}

var result = sumFunctionUser(company);
console.log(result);