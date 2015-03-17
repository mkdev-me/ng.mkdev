angular.module('ngmkdev').controller('TransactionsCtrl', function($scope) {
  this.transactions = [
    { amount: 500.00, date: "08/08/2014", description: "Подписка на журнал" },
    { amount: 150.00, date: "07/08/2015", description: "Кокаин"              }
  ]

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
