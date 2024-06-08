const getFullName = (fName, lName)=>{
    console.log(fName);
    console.log(lName);
    return fName +" "+ lName;
}

const printGreeting = (fName, lName) => {
    console.log("Hello", fName +" "+lName);
} 

const USER_NAME = "Hello World";
module.exports.username = USER_NAME;
module.exports.myName = getFullName;
module.exports.greeting = printGreeting;