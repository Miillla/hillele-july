"use strict";

var data = {
  name: "Emily",
  age: 30,
  city: "Paris",
  showData: function showData() {
    console.log("".concat(this.name, " is ").concat(this.age, " years old and lives in ").concat(this.city));
  }
};
data.showData();