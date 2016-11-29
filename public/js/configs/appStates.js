movieApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'SearchController'
  })

  .state('movie.details', {
    url: '/movie-details',
    templateUrl: 'views/movie-details.html',
    controller: 'MovieDetailsController'
  });

  $locationProvider.html5Mode(true);
});
