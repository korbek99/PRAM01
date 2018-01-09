var VueloCtrl = angular.module('VueloCtrl', []);

//Controlador Vuelos
VueloCtrl.controller('VueloCtrl', function($scope, $ionicPopup, $state, $http, $cordovaSQLite) {

  $scope.vuelos = [];

  var queryDest = "select  *  from DestinationAirportTbl where DepartureAirport='SCL' ";
  $cordovaSQLite.execute(db, queryDest, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.vuelos.push(res.rows.item(i).DestinationAirport);

      }
    }
  })

  $scope.materiales = [];

  var queryMat = "select * from MaterialTbl where CodRoute='DOM' ";
  $cordovaSQLite.execute(db, queryMat, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.materiales.push(res.rows.item(i).CodMaterial);
      }
    }
  })

  $scope.materialesConfig = [];

  var queryMatCg = "Select * from MaterialConfigTbl where CodMaterial = 'A320' ";
  $cordovaSQLite.execute(db, queryMatCg, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.materialesConfig.push(res.rows.item(i).CodMaterialConfig);
      }
    }
  })

  $scope.codeShares = [];

  var queryCS = "select CodeshareAirline from CodeshareTbl ";
  $cordovaSQLite.execute(db, queryCS, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.codeShares.push(res.rows.item(i).CodeshareAirline);
      }
    }
  })


});
