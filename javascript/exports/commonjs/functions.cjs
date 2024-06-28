// function add(){
//     console.log("add");
// };

// // this is named export
// exports.sub = function(){
//     console.log("Sub");
// };

// module.exports = add // this default export 
 
// Named export using exports
exports.sub = function() {
    console.log("Sub");
};

// Default export using module.exports
module.exports = function add() {
    console.log("add");
};
