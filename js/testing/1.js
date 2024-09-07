function showCategories() {
  const parent = document.querySelector("#categories");

  for (let category of categories) {
    const element = document.createElement("p");
    element.textContent = category.name;
    element.setAttribute("data-category", category.id);
    element.addEventListener("click", () => {
      showProducts(category.products);
    });

    parent.appendChild(element);
  }
}
function showProducts(products) {
  const parent = document.querySelector("#products");
  parent.innerHTML = "";

  for (let product of products) {
    const element = document.createElement("p");
    element.textContent = product.name;
    element.setAttribute("data-product", product.id);
    element.addEventListener("click", () => {
      console.log(product);
    });

    parent.appendChild(element);
  }
}

function showProductInfo(product) {
  const parent = document.querySelector("#product-info");
  parent.innerHTML = "";

  const name = document.createElement("p");
  parent.appendChild(name);
  description.textContent = product.description;
  parent.appendChild(description);
}

showCategories();

// function showCategories(categories) {
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
