var obj = [
    {
        firstName: "Aimal", 
        lastName: "Khan",
        email: "aimal@mum.edu",
        password: "123"
    }, 
    {
        firstName: "Abdel", 
        lastName: "Rehman",
        email: "ar@mum.edu",
        password: "456"
    }
];

module.exports.getUsers = function(){
    return obj;
};