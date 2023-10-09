// Write your solution in this file!
var customerName = "bob";
var upperCaseCustomerName = function(){
    customerName=customerName.toUpperCase();
}

var setBestCustomer = function(){
    bestCustomer = "not bob";
}

var overwriteBestCustomer = function(newBestCustomer) {
    bestCustomer = newBestCustomer
}

const leastFavoriteCustomer = "someone";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "new least favorite";
  }