angular.module('ngmkdev').factory('TransactionsStore', function() {
  return {
    transactions: [],
    sum: function() {
      var sum = 0;
      this.transactions.forEach(function(el) {
        sum += parseFloat(el.amount);
      })
      return sum;
    }
  }
});
