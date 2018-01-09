var db = null;

var _global = {
  cronometro: undefined
};

angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services', 'VueloCtrl', 'AeropuertoCtrl', 'LoginOff', 'BDservices', 'BDinsert', 'AdminCtrl', 'ContingencyCtrl','ActionCtrl'])

.run(function($ionicPlatform, MacAddress, CheckConnection, CreateTables, Insert) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    /* Se crea la BD y las tablas */
    CreateTables.create();

    /* Se insertan los registros en BD */
    Insert.create();

    /* Se obtiene la mac Address */
    MacAddress.getMacAddress();

    /* Se verifica la conexion */
    CheckConnection.isConnected();

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.index', {
    url: '/index',
    views: {
      'menuContent': {
        templateUrl: 'index.html'
      }
    }
  })

  .state('admin', {
    url: '/admin',
    templateUrl: 'templates/admin.html',
    controller: 'AdminCtrl'
  })

  .state('login_off', {
    url: '/login_off',
    templateUrl: 'templates/login_offline.html',
    controller: 'LoginOff'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('aeropuerto', {
    url: '/aeropuerto',
    templateUrl: 'templates/aeropuerto.html',
    controller: 'AeropuertoCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',

  })

  .state('app.configuracion', {
    url: '/configuracion',
    views: {
      'menuContent': {
        templateUrl: 'templates/configuracion.html'
      }
    }
  })

  .state('app.avisos', {
    url: '/avisos',
    views: {
      'menuContent': {
        templateUrl: 'templates/avisos.html'
      }
    }
  })



  //Ruta de redireccion obligatoria
  $urlRouterProvider.otherwise("/login");
});
