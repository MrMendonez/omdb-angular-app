movieApp.controller('SearchController', function($scope, $http) {
  $scope.getMovies = function() {
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json')
    .then(function(response) {
      $scope.moviesRow1 = response.data.Search.slice(0, 0 + 6); // first 6 moviesRow1 from page 1 of json
      console.log('moviesRow1 = ', $scope.moviesRow1);
      $scope.moviesRow2 = response.data.Search.slice(6, 6 + 9); // last 3 movies from page 2 of json
      console.log('last 3 movies of page 1 = ', $scope.moviesRow2);
    });
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json&page=2')
    .then(function(response) {
      $scope.moviesPage2 = response.data.Search.slice(0, 0 + 2);
      console.log('moviesPage2 = ', $scope.moviesPage2);
      $scope.moviesRow2 = $scope.moviesRow2.concat($scope.moviesPage2);
      console.log('moviesRow2 = ', $scope.moviesRow2);
      $scope.moviesRow3 = response.data.Search.slice(2, 2 + 6);
      console.log('moviesRow3 = ', $scope.moviesRow3);
      $scope.moviesRow4 =  response.data.Search.slice(8, 8 + 9);
    });
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName + '&y=&plot=short&r=json&page=3')
    .then(function(response) {
      $scope.moviesPage3 = response.data.Search.slice(0, 0 + 4);
      console.log('moviesPage3 = ', $scope.moviesPage3);
      $scope.moviesRow4 = $scope.moviesRow4.concat($scope.moviesPage3);
      console.log('moviesRow4 = ', $scope.moviesRow4);
      $scope.moviesRow5 = response.data.Search.slice(4, 4 + 9);
    });
  };
});

/*
Results for "star":

page 1
0. a new hope - row 1 ends
1. empire strikes back
2. return of the jedi
3. the force awakens
4. the phantom menace
5. revenge of the sith - row 1 ends
6. star trek (2009) - row 2 begins
7. attack of the clones
8. star trek into darkness
9. star trek beyond

page 2
0. first contact
1. wrath of khan - row 2 ends
2. the next generation - row 3 begins
3. the motion picture
4. the voyage home
5. generations
6. the search for spock
7. nemesis - row 3 ends
8. insurrection - row 4 begins
9. the undiscovered country

page 3
0. star trek (1960's)
1. the final frontier
2. the clone wars
3. voyager - row 4 ends
4. rock star - row 5 begins
5. deep space nine
6. enterprise
7. the clone wars
8. lone star
9. bright star

*/
