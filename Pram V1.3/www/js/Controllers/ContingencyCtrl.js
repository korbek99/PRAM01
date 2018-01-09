var ContingencyCtrl = angular.module('ContingencyCtrl', []);

//Controlador Contingencia
ContingencyCtrl.controller('ContingencyCtrl', function($scope, $ionicPopup, $state, $http, $cordovaSQLite) {

  $scope.motivos = [];

  var queryMot = "select  distinct ContingencyMotive  from ContingencySubMotiveTbl ";
  $cordovaSQLite.execute(db, queryMot, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.motivos.push(res.rows.item(i).ContingencyMotive);
      }
    }
  })

  $scope.subMotivos = [];

  var queryMot = "select  CodContingencySubMotive  from ContingencySubMotiveTbl where ContingencyMotive = 'Cancelación del vuelo' ";
  $cordovaSQLite.execute(db, queryMot, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.subMotivos.push(res.rows.item(i).CodContingencySubMotive);
      }
    }
  })


});
