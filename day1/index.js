const fs = require("fs");

fs.readFile('expense.txt', (err, data) => { 
	if (err) throw err; 
  var expenseArray = (data.toString());
  expenseArray.split("\n");
  
  console.log(expenseNum);
}) 



// fs.readFile("expense.txt", function(text){
//     var textByLine = text.split(",")
//     console.log(textByLine)
// });

