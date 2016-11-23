movieApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/views/home.html',
    controller: 'SearchController'
  })

  .state('movie.detail', {
    url: '/movie/:movie-title',
    templateUrl: 'views/movie-details.html',
    controller: 'MovieDetailsController'
  });

  $locationProvider.html5Mode(true);
});
