// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error as you cannot change the value of a constant variable.
}
