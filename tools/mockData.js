const profile = [
  {
    id: 1,
    abOriginal: "female",
    address: "dfdsdwd",
    city: "Melbourne",
    date: "1999-12-21",
    email: "bhate.rahul@gmail.com",
    firstName: "Rahul",
    gender: "Male",
    hobby: ["React", "HTML5"],
    lastName: "Bhate",
    phone: "112112122111",
    uploadFile: "C:\fakepathIMG_0673 2.jpg",
    userRoles: ["user1", "user2"]
  }
];
const newProfile = [
  {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    date: "",
    city: "",
    phone: "",
    address: "",
    userRoles: [],
    abOriginal: false,
    uploadFile: "",
    hobby: []
  }
];
// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newProfile,
  profile
};
