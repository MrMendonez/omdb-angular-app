angular.module('movieApp')
.controller('MovieController', function($scope, $http) {
  $scope.getMovies = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json')
    .then(function(response) {
      $scope.movies = response.data.Search
    });
  }
});