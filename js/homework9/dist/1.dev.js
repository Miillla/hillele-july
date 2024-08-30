// let company = {
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };
// function sumFunctionUser(obj) {
//   let resultSalary = 0;
//   for (let key in obj) {
//     if (typeof obj[key] !== "object" && !Array.isArray(obj[key])) {
//       console.log(Array.isArray(obj[key]), typeof obj[key]);
//       resultSalary += obj[key];
//     } else {
//       if (Array.isArray(obj[key])) {
//         for (let i = 0; i < obj[key].length; i++) {
//           resultSalary += sumFunctionUser(obj[key][i]);
//         }
//       }
//     }
//   }
//   return resultSalary;
// }
// let result = sumFunctionUser(company);
// // function sumFunctionUser(obj) {
// //   let result = {};
// //   for (let key of Object.values(obj)) {
// //     console.log(key, obj[key], Array.isArray(obj[key]));
// //     if (typeof obj[key] !== "object" && !Array.isArray(obj[key])) {
// //       // result[key] = obj[key];
// //       result[key] = obj[key];
// //     } else {
// //       if (Array.isArray(obj[key])) {
// //         result[key] = [];
// //         for (let i = 0; i < obj[key].length; i++) {
// //           result[key].push(sumFunctionUser(obj[key][i]));
// //         }
// //       }
// //     }
// //   }
// //   return result;
// // }
// // console.log(sumFunctionUser(company));
"use strict";