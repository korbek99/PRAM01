var ActionCtrl = angular.module('ActionCtrl', []);

//Controlador Contingencia
ActionCtrl.controller('ActionCtrl', function($scope, $ionicPopup, $state, $http, $cordovaSQLite) {

  $scope.tipoEmbarques = [];

  var queryType = "Select TypeDescription from BoardingTypeTbl ";
  $cordovaSQLite.execute(db, queryType, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.tipoEmbarques.push(res.rows.item(i).TypeDescription);
      }
    }
  })

});
