angular.module('movieApp')
.controller('MovieController', function($scope, $http) {
  $scope.getMovies = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json')
    .then(function(response) {
      // $scope.movies = response.data.Search;
      // console.log('movies = ', $scope.movies);
      $scope.movies = response.data.Search.slice(0, 0 + 6); // first 6 movies from page 1 of json
      console.log('movies = ', $scope.movies);
      $scope.moviesRow2 = response.data.Search.slice(7, 7 + 9); // last 3 movies from page 2 of json
      console.log('last 3 movies of page 1 = ', $scope.moviesRow2);
    });
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json&page=2')
    .then(function(response) {
      $scope.moviesPage2 = response.data.Search.slice(0, 0 + 3);
      console.log('moviesPage2 = ', $scope.moviesPage2);
      $scope.moviesRow2 = $scope.moviesRow2.concat($scope.moviesPage2);
      console.log('moviesRow2 = ', $scope.moviesRow2);
      $scope.moviesRow3 = response.data.Search.slice(3, 3 + 9);
      console.log('moviesRow3 = ', $scope.moviesRow3);
    });
  };
});
