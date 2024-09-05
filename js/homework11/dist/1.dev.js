"use strict";

var main = document.getElementById("main");
var table = document.createElement("table");

for (var i = 1; i < 10; i++) {
  var tr = document.createElement("tr");

  for (var j = 1; j < 10; j++) {
    var td = document.createElement("td");
    td.textContent = i * j;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

main.appendChild(table);