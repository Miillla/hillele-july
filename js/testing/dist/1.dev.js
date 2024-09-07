"use strict";

function showCategories() {
  var parent = document.querySelector("#categories");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var category = _step.value;
      var element = document.createElement("p");
      element.textContent = category.name;
      element.setAttribute("data-category", category.id);
      element.addEventListener("click", function () {
        showProducts(category.products);
      });
      parent.appendChild(element);
    };

    for (var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function showProducts(products) {
  var parent = document.querySelector("#products");
  parent.innerHTML = "";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop2 = function _loop2() {
      var product = _step2.value;
      var element = document.createElement("p");
      element.textContent = product.name;
      element.setAttribute("data-product", product.id);
      element.addEventListener("click", function () {
        console.log(product);
      });
      parent.appendChild(element);
    };

    for (var _iterator2 = products[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function showProductInfo(product) {
  var parent = document.querySelector("#product-info");
  parent.innerHTML = "";
  var name = document.createElement("p");
  parent.appendChild(name);
  description.textContent = product.description;
  parent.appendChild(description);
}

showCategories(); // function showCategories(categories) {
//   const parent = document.querySelector("#categories");
//   for (let category of categories) {
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <h2>${category.name}</h2>
//     <ul>
//       ${category.products
//         .map(
//           (product) => `
//         <li>
//           <h3>${product.name}</h3>
//           <p>${product.description}</p>
//           <p>Price: $${product.price}</p>
//         </li>
//       `
//         )
//         .join("")}
//     </ul>
//   `;
//   }
//   parent.appendChild(div);
// }
// showCategories();