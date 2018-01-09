var AdminCtrl = angular.module('AdminCtrl', []);

//Controlador Admin
AdminCtrl.controller('AdminCtrl', function($scope, $ionicPopup, $state, $cordovaSQLite, $timeout) {

  $scope.user = "offline";

  $scope.data = {};
  $scope.updatePass = function() {

    /* Se verifica si los passwords coinciden */
    if ($scope.data.password != $scope.data.passwordCheck) {
      passNoMatch();
    } else {

      /* Se obtiene Mac address (Verificar con IOS) */
      window.MacAddress.getMacAddress(
        function(macAddress) {
          var uid = macAddress;

          /* Se inserta o actualiza el registro con fecha actual y Mac Address del dispositivo */
          $cordovaSQLite.execute(db, "INSERT OR REPLACE INTO admin (password,user,mac_uid,date) VALUES (?,'offline',?,date('now'));", [$scope.data.password, uid]).then(function(res) {
              
            /* Pop up con mensaje de login correcto */
            passUpdated();

            /* Si el resultado es satisfactorio, se redirige a la pantalla login */
            $state.go('login');
          }, function(error) {

            /* Mensaje con el error en la ejecución */
            console.log('SELECT error: ' + error.message);
          });
        });
    }
  }

  /* Pop up con mensaje de login correcto */
  var passNoMatch = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Error',
      template: "<center>Las contraseñas no coinciden</center>",
      buttons: [{
        text: '<b>Aceptar</b>',
        type: "button-royal"
      }]
    });
  }

  /* Pop up con mensaje de login correcto */
  var passUpdated = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Exitoso',
      template: "<center>El password fue actualizado correctamente</center>",
      buttons: [{
        text: '<b>Aceptar</b>',
        type: "button-royal"
      }]
    });
  }

  /*  var consultaRegistro = function() {
    var query = "SELECT * FROM admin";
    var value = "";
    $cordovaSQLite.execute(db, query, []).then(function(res) {

      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          value += res.rows.item(i).user + "  " + res.rows.item(i).password + "  " + res.rows.item(i).mac_uid;
        }
        alert(value);
        console.log(value);
      } else {
        console.log("No results found");
      }
    }, function(err) {
      console.error(err);
    });

  }*/

});
