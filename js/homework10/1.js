const data = {
  name: "Emily",
  age: 30,
  city: "Paris",
  showData: function () {
    console.log(
      `${this.name} is ${this.age} years old and lives in ${this.city}`
    );
  },
};
data.showData();
