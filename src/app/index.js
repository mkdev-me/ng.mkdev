'use strict';

angular.module('ngmkdev', ['restangular', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl("http://localhost:4567");

    $stateProvider
    .state('transactions', {
      url: "/",
      templateUrl: "app/main/transactions.html"
    })
    .state('settings', {
      url: "/settings",
      templateUrl: "app/settings/settings.html"
    });
    $urlRouterProvider.otherwise('/');
  });
;
