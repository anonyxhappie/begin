var theApp = angular.module('app', ['ionic','app.controller'])
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
    })
    .state('uilist', {
      url: "/ui/list",
      templateUrl: "/templates/cmp/infinite_list.html"
    });

  $urlRouterProvider.otherwise('/dispatch');
});
