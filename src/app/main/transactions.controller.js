angular.module('ngmkdev').controller('TransactionsCtrl', function($scope, TransactionsStore) {

  TransactionsStore.loadTransactions();

  this.addTransaction = function() {
    TransactionsStore.addTransaction(this.newTransaction);
    this.resetTransaction();
  }

  this.resetTransaction = function() {
    this.newTransaction = {
      amount: 0.0,
      date: "01/02/1993",
      description: null
    }
  }
  this.transactions = TransactionsStore.transactions;
  this.resetTransaction();

});

