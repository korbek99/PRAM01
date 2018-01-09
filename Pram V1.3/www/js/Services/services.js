angular.module('starter.services', ['ngCordova'])
//Services

.service('LoginService', function($q) {
  return {
    loginUser: function(name, pw) {
      var deferred = $q.defer();
      var promise = deferred.promise;

      if (name == 'user' && pw == 'secret' || true) {
        deferred.resolve('Bienvenido ' + name + '!');
      } else {
        deferred.reject('Credencial incorrecta');
      }
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }
})

/* Obtiene la Mac Address */
.service('MacAddress', function($q) {
  return {
    getMacAddress: function(macAddress) {
      window.MacAddress.getMacAddress(
        function(macAddress) {
          var uid = macAddress;
          return macAddress;
        },
        function(fail) {
          alert(fail);
        }
      );
    }
  }
})

.service('dataService', function() {
  this.user = "";
  this.pass = "";
  this.airport = "";
})


/* Verifica si existe conexión */
.service('CheckConnection', function($q, $ionicPopup, $location) {
  return {
    isConnected: function() {
      if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
          var confirmPopup = $ionicPopup.confirm({
            title: 'Sesion Offline',
            template: '<center>¿Desea continuar sin internet?</center>',
            buttons: [{
              text: 'Salir',
              onTap: function(e) {
                if (e) {
                  return ionic.Platform.exitApp();
                } else {
                  e.preventDefault();
                }
              }
            }, {
              text: '<b>Continuar Offline</b>',
              type: 'button-royal',
              onTap: function(e) {
                if (e) {
                  return $location.path("login_off");
                } else {
                  e.preventDefault();
                }
              }
            }]
          });

        }
        /*else {
          return  $location.path("login");
        }*/
      }
    }
  }
});



/* $q.data = {};

   $scope.submit = function(){
       var link = 'http://192.168.156.1:12001/AutoembarqueLatam-2.0-rest/api/v2/restDelegate/authentication';

       $http.post(link, {username : $scope.data.username}).then(function (res){
           $scope.response = res.data;
       });
   };*/
