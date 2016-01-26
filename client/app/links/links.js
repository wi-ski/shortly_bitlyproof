angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {
    links: []
  };

  $scope.getLinks = function () {

    $scope.data.links = Links.getLinks()
      .then(function (res) {
        $scope.data.links = res.data;
        console.log($scope.data.links);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  $scope.getLinks();

});
