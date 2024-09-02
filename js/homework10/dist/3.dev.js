"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = {
  friends: [{
    name: "Kate",
    phoneNums: "+380123456789",
    email: "Kate@gmail.com"
  }, {
    name: "Kolya",
    phoneNums: "+380987654321",
    email: "Kolya@gmail.com"
  }, {
    name: "Helen",
    phoneNums: "+380111111111",
    email: "Helen@gmail.com"
  }, {
    name: "Vlad",
    phoneNums: "+380111111117",
    email: "Vlad@gmail.com"
  }]
};
var result = data.friends.find(function (friend) {
  return friend.name === "Kate";
});
console.log(result);
var newFriend = {
  name: "Anton",
  phoneNums: "+380999999999",
  email: "Anton@gmail.com"
};
var updatedArr = data.friends.map(function (friend) {
  return _objectSpread({}, friend, {
    newFriend: newFriend
  });
});
console.log(updatedArr);
data.friends.push(newFriend);
console.log(data.friends);