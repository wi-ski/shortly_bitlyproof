angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // $scope.link;
  $scope.link = {};

  $scope.foozles = true;

  $scope.addLink = function (link) {

    $scope.link = Links.shortenLink(link)
      .then(function (res) {
        $scope.link = res.data;
        $scope.foozles = false;
        console.log($scope.link);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

});
