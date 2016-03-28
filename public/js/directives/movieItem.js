angular.module('movieApp')
.directive('movieItem', function() {
  return {
    restrict: 'E',
    scope: {
      movie: '='
    },
    templateUrl: '/views/directives/movie-item.html',
    controller: function($scope, $http) {
      $scope.getActors = function() {
        $http.get('http://www.omdbapi.com/?i=' + $scope.movie.imdbID + '&plot=short&r=json')
        .then(function(response) {
          $scope.actors = response.data.Actors.split(',');
        })
      }
    }
  }
});