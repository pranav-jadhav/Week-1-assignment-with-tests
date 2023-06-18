/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function objtoArray(spendEstimates){
  var keys = Object.keys(spendEstimates);
  var ans = [];
  for(var i = 0; i < keys.length; i++){
    ans.push({
      category: keys[i],
      totalSpent: spendEstimates[keys[i]]
    });
  }
  console.log(ans);
  return ans;
}

function calculateTotalSpentByCategory(transactions) {
  
  var spendEstimates = {};

  for(var i = 0; i < transactions.length; i++){
    if(spendEstimates[transactions[i].category]){
      spendEstimates[transactions[i].category] += transactions[i].price;
    } else {
      spendEstimates[transactions[i].category] = transactions[i].price;
    }
  }

  return objtoArray(spendEstimates);
}

module.exports = calculateTotalSpentByCategory;
