console.log("start");
setTimeout(() => {console.log("Timer");
}, 3000);
console.log("end");
//promises, data, & shows data
function greet(name){
    const greetPromise = new Promise (function(resolve, reject){
        resolve (`Hello ${name}`);
});