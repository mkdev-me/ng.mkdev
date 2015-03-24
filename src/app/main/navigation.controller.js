angular.module('ngmkdev').controller('NavigationCtrl', function(TransactionsStore) {
  this.transactions = TransactionsStore.transactions;
});
