var theApp = angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('dispatch', {
      url: "/dispatch", 
      templateUrl:"/templates/nav.html"
    })
    .state('mod-auth', {
      url: "/authentication",
      templateUrl:"/templates/auth.html"
    })
    .state('mod-main', {
      url: "/main",
      templateUrl: "/templates/main.html"
  });

  $urlRouterProvider.otherwise('/dispatch');
});
