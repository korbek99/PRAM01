var db;
var ionicApp = angular.module('starter.controllers', ['ngCordova', 'starter.services']);

//Controlador Login
ionicApp.controller('LoginCtrl', function($scope, $ionicPopup, $state, $http, $cordovaSQLite, MacAddress, CheckConnection, dataService, $interval) {

  $scope.data = {};
  $scope.contar = 0;
  $scope.satus = false;
  $scope.dataService = dataService;



  $scope.loginWS = function() {
    /* Se verifica la conexion */
    CheckConnection.isConnected();

    $scope.servicio = {};
    var passEncode = btoa($scope.dataService.user + ":" + $scope.dataService.pass);
    var admin = false;

      /* Conexión al Web Services */
    $http({
      method: 'POST',
      url: 'http://192.168.0.12:12001/DisplayUserLatamProfile-3.0.0-rest/api/v2/authenticationLdap',
      headers: {
        'Authorization': 'Basic ' + passEncode /* passEncode  Mzg1OTg4NDoyMTA4MTk4MQ== */
      }
    }).then(function(response) {
      if (response.data.serviceStatus.code == 0) {
        for (x = 0; x < response.data.userInformationType.groupUser.length; x++) {
          if (response.data.userInformationType.groupUser[x] == 'Administrators') {
            admin = true;
          }
        }
        if (admin) {
          $state.go('admin');
        } else {
          $state.go('aeropuerto');
        }
        response.data.ServiceStatus.code = undefined;
      } else {
        $state.go('admin');
      }
    })
      .catch(function(response) {
        if (response.status != undefined) {
          loginError();
        }
      });

     /* Pop up con mensaje de login fallido */
    var loginError = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: "<center>Usuario y/o contraseñas invalidos</center>",
        buttons: [{
          text: '<b>Aceptar</b>',
          type: "button-royal"
        }]
      });
    }

    return false;
  }

  $scope.Salir = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Confirmar',
      template: '<center>¿Desea salir?</center>',
      buttons: [{
        text: 'Si',
        onTap: function(e) {
          if (e) {
            return ionic.Platform.exitApp();
          } else {
            e.preventDefault();
          }
        }
      }, {
        text: 'No',
        onTap: function(e) {
          if (e) {
            return false;
          } else {
            e.preventDefault();
          }
        }
      }]
    });
    return false;
  }


  //Funcion logout
  $scope.logout = function() {

    var confirmPopup = $ionicPopup.confirm({
      title: 'Cerrar Sesion',
      template: '<center>¿Desea cerrar la sesion?</center>',
      buttons: [{
        text: 'Cancelar'
      }, {
        text: '<b>Salir</b>',
        type: 'button-royal',
        onTap: function(e) {
          if (e) {
            $scope.dataService.user = "";
            $scope.dataService.pass = "";
            return $state.go('login');

          } else {
            e.preventDefault();
          }
        }
      }]
    });
  };

});
