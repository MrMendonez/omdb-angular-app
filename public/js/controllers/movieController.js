angular.module('movieApp')
.controller('MovieController', function($scope, $http) {
  $scope.getMovies = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json')
    .then(function(response) {
      // $scope.movies = response.data.Search;
      // console.log('movies = ', $scope.movies);
      $scope.movies = response.data.Search.slice(0, 0 + 6);
      console.log('movies = ', $scope.movies);
      $scope.moviesRow2 = response.data.Search.slice(7, 7 + 9);
    });
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json&page=2')
    .then(function(response) {
      $scope.moviesPage2 = response.data.Search.slice(0, 0 + 6);
      console.log('moviesPage2 = ', $scope.moviesPage2);
      $scope.moviesRow2.concat($scope.moviesPage2);
      console.log('moviesRow2 = ', $scope.moviesRow2);
    });
  };
});
