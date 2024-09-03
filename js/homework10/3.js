const contacts = {
  data: [
    {
      name: "Kate",
      phoneNums: "+380123456789",
      email: "Kate@gmail.com",
    },
    {
      name: "Kolya",
      phoneNums: "+380987654321",
      email: "Kolya@gmail.com",
    },
    {
      name: "Helen",
      phoneNums: "+380111111111",
      email: "Helen@gmail.com",
    },
    {
      name: "Vlad",
      phoneNums: "+380111111117",
      email: "Vlad@gmail.com",
    },
  ],
  search: function (name) {
    return this.data.find((contact) => contact.name === name);
  },
  add: function (contact) {
    this.data.push(contact);
  },
};

// Example usage:
console.log(contacts.search("Kate"));

contacts.add({
  name: "John",
  phoneNums: "+380222222222",
  email: "John@gmail.com",
});
console.log(contacts.data);

// const data = {
//   friends: [
//     {
//       name: "Kate",
//       phoneNums: "+380123456789",
//       email: "Kate@gmail.com",
//     },
//     {
//       name: "Kolya",
//       phoneNums: "+380987654321",
//       email: "Kolya@gmail.com",
//     },
//     {
//       name: "Helen",
//       phoneNums: "+380111111111",
//       email: "Helen@gmail.com",
//     },
//     {
//       name: "Vlad",
//       phoneNums: "+380111111117",
//       email: "Vlad@gmail.com",
//     },
//   ],
// };
// const result = data.friends.find((friend) => friend.name === "Kate");
// console.log(result);

// const newFriend = {
//   name: "Anton",
//   phoneNums: "+380999999999",
//   email: "Anton@gmail.com",
// };

// const updatedArr = data.friends.map((friend) => {
//   return { ...friend, newFriend };
// });
// console.log(updatedArr);

// data.friends.push(newFriend);
// console.log(data.friends);
