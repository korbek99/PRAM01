var LoginOff = angular.module('LoginOff', []);

//Controlador Login Offline
LoginOff.controller('LoginOff', function($scope, $ionicPopup, $state, $cordovaSQLite, $timeout, dataService) {

  //timeOut
  /*$timeout(function() {
  alert("Sesion Finalizada!!");  }, 30000);*/

  $scope.user = "offline";
  $scope.dataService = dataService;
  $scope.dataService.user = $scope.user;
 /* $scope.dataService.pass = $scope.data.password;*/

  //contador intentos fallidos
  $scope.contar = 0;
  $scope.loginOfflineStatus = false;

  $scope.data = {};
  $scope.loginOffline = function() {

    var query = "SELECT id, user, password, mac_uid, strftime('%Y%m%d', date('now'))-strftime('%Y%m%d', date) date FROM ADMIN WHERE password = ? LIMIT 1;";
    $cordovaSQLite.execute(db, query, [$scope.dataService.pass]).then(function(res) {
      if (res.rows.length > 0) {
        if (res.rows.item(0).date >= 7) {
          passwordExpired();
        } else {
          console.log("Login correcto");
          loginSuccess();
          $state.go('aeropuerto');
        }
      } else {
        loginFailed();
      }
    })

    /* Pop up con mensaje de login correcto */
    var loginSuccess = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Bienvenido',
        template: "<center>Usuario " + $scope.user + "</center>",
        buttons: [{
          text: '<b>Aceptar</b>',
          type: "button-royal"
        }]
      });
    }

    /* Pop up con mensaje de login correcto */
    var passwordExpired = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: "<center>La contraseña ha caducado</center>",
        buttons: [{
          text: '<b>Aceptar</b>',
          type: "button-royal"
        }]
      });
      $scope.loginOfflineStatus = true;
      $scope.data.password = "";
    }

    /* Pop up con mensaje de login incorrecto */
    var loginFailed = function() {
      $scope.contar += 1;
      $scope.data.password = "";

      /* Bloqueo de usuario por intentos fallidos */
      if ($scope.contar == 3) {
        $scope.loginOfflineStatus = true;

        var alertPopup = $ionicPopup.alert({
          title: 'Error',
          template: "<center>Usuario bloqueado tras " + $scope.contar + " intentos fallidos! </center>",
          buttons: [{
            text: '<b>Aceptar</b>',
            type: "button-royal"
          }]
        });
      } else if ($scope.contar < 3) {
        var alertPopup = $ionicPopup.alert({
          title: 'Error',
          template: "<center>Password incorrecto </center>",
          buttons: [{
            text: '<b>Aceptar</b>',
            type: "button-royal"
          }]
        });
      }
    }

    /*  //Inserto password de admin offline
  if ($scope.satus==true)
  {

    $cordovaSQLite.execute(db,'INSERT INTO admin (password,user,mac_uid) VALUES (?,"admin",?)',[$scope.data.password, ""]).then(function(res) {
      var alertPopup = $ionicPopup.alert({
        title: 'Bienvenido',
        template: "Usuario Offline",
        buttons:[{text: '<b>Aceptar</b>',type:"button-royal"}]
      });
      $state.go('aeropuerto');
    }, function(error) {
      alert('SELECT error: ' + error.message);
    });
  }
  else{

    alert('error');

  }*/
  }

});
