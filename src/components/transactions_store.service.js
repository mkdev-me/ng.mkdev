angular.module('ngmkdev').factory('TransactionsStore', function(Restangular) {
  return {
    transactions: [],
    loadTransactions: function() {
      this.transactions = Restangular.all('transactions').getList().$object;
    },
    addTransaction: function(transaction) {
      var that = this;
      return Restangular.all('transactions').post({transaction: transaction}).then(function()  {
        that.transactions.push(transaction);
      })
    },
    sum: function() {
      var sum = 0;
      this.transactions.forEach(function(el) {
        sum += parseFloat(el.amount);
      })
      return sum;
    }
  }
});
