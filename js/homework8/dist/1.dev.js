"use strict";

var ladder = {
  step: 0,
  up: function up() {
    this.step++;
    return this;
  },
  down: function down() {
    this.step--;
    return this;
  },
  showStep: function showStep() {
    console.log(this.step);
    return this;
  }
};