const {v4 : uuidv4} = require("uuid");

const users =[
    {
        id : uuidv4(),
        userName : "Rezaul Karim",
        email : "mrk99rk@gmail.com",
    },
    {
        id : uuidv4(),
        userName : "Rezaul Karim RK",
        email : "rkstylemrk@gmail.com",
    },
];

module.exports = users;