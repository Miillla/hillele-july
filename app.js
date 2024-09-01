const company = {
  id: 1,
  name: "Boss",
  employees: [
    {
      id: 2,
      name: "CEO",
      employees: [
        {
          id: 3,
          name: "Director1",
        },
        {
          id: 4,
          name: "Director2",
          employees: [],
        },
      ],
    },
    {
      id: 5,
      name: "CTO",
      employees: [
        {
          id: 6,
          name: "Architect1",
        },
        {
          id: 7,
          name: "Architect2",
          employees: [
            {
              id: 10,
              name: "Senior Software engineer",
            },
          ],
        },
        {
          id: 8,
          name: "Architect3",
        },
        {
          id: 9,
          name: "Architect4",
        },
      ],
    },
  ],
};

function deepClone(obj) {
  let result = {};

  for (let key in obj) {
    if (typeof obj[key] !== "object") {
      result[key] = obj[key];
    } else {
      if (Array.isArray(obj[key])) {
        result[key] = [];
        for (let i = 0; i < obj[key].length; i++) {
          result[key].push(deepClone(obj[key][i]));
        }
      }
    }
  }

  return result;
}

const company2 = deepClone(company);
console.log(company2);
console.log(
  company2.employees[0].employees[1] === company.employees[0].employees[1]
);
