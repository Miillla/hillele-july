let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumFunctionUser(obj) {
  let resultSalary = 0;

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        resultSalary += obj[key][i].salary;
      }
    } else if (typeof obj[key] === "object") {
      resultSalary += sumFunctionUser(obj[key]);
    }
  }

  return resultSalary;
}

let result = sumFunctionUser(company);
console.log(result);
