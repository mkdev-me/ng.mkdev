angular.module('ngmkdev').controller('TransactionsCtrl', function($scope, TransactionsStore) {
  this.transactions = TransactionsStore.transactions

  this.addTransaction = function() {
    this.transactions.push(this.newTransaction);
    this.resetTransaction();
  }

  this.resetTransaction = function() {
    this.newTransaction = {
      amount: 0.0,
      date: "01/02/1993",
      description: null
    }
  }
  this.resetTransaction();

});
