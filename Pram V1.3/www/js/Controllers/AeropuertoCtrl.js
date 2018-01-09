var AeropuertoCtrl = angular.module('AeropuertoCtrl', []);

//Controlador Aeropuerto
AeropuertoCtrl.controller('AeropuertoCtrl', function($scope, $ionicPopup, $state, $http, $cordovaSQLite, dataService) {

  $scope.dataService = dataService;
  $scope.aeropuertosList = [ /*'SCL', 'JFK', 'MIA', 'CCS'*/ ]; /**/

  $scope.IngresoSuccess = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Bienvenido',
      template: '<center>PRAM Embarque Desarrollo</center>',
      buttons: [{
        text: '<b>Aceptar</b>',
        type: "button-royal"
      }]
    });
    $state.go("app.index");
  }

  var query = "Select distinct CodAirport from Airport ";
  $cordovaSQLite.execute(db, query, []).then(function(res) {
    if (res.rows.length > 0) {
      for (var i = 0; i < res.rows.length; i++) {
        $scope.aeropuertosList.push(res.rows.item(i).CodAirport);

      }
    }
  })




});
