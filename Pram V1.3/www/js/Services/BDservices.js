angular.module('BDservices', ['ngCordova'])

/* Servicio que crea la BD y sus tablas */
.service('CreateTables', function($q, $cordovaSQLite) {
  return {
    create: function() {
      if (window.cordova) {
        db = $cordovaSQLite.openDB({
          name: "pramdb.db",
          location: 1
        }); //device
        console.log("Android");
      } else {
        db = window.openDatabase("pramdb.db", '1', 'pramdb', 1024 * 1024 * 100); // browser
        console.log("browser");
      }

      var AdminTbl = "CREATE TABLE IF NOT EXISTS admin (id integer PRIMARY KEY AUTOINCREMENT, user text, password text, mac_uid text, date text, UNIQUE ('user') ON CONFLICT IGNORE);"

      var AirportTbl = "CREATE TABLE IF NOT EXISTS Airport (CodAirport TEXT NOT NULL, LanguagueUI TEXT NOT NULL, PRIMARY KEY (CodAirport), UNIQUE (CodAirport) ON CONFLICT IGNORE);";

      var DestinationAirportTbl = "CREATE TABLE IF NOT EXISTS DestinationAirportTbl (DestinationAirport TEXT NOT NULL,DepartureAirport TEXT NOT NULL,CONSTRAINT destAirportFK FOREIGN KEY (DestinationAirport) REFERENCES Airport (CodAirport), CONSTRAINT depAirportFK FOREIGN KEY (DepartureAirport) REFERENCES Airport (CodAirport), UNIQUE (DestinationAirport ASC, DepartureAirport ASC) ON CONFLICT IGNORE );";

      var MaterialTbl = "CREATE TABLE IF NOT EXISTS MaterialTbl (CodMaterial TEXT NOT NULL,CodRoute TEXT NOT NULL,UNIQUE (CodMaterial, CodRoute) ON CONFLICT IGNORE);";

      var CountryTbl = "CREATE TABLE IF NOT EXISTS CountryTbl (CodCountry TEXT NOT NULL,DepartureAirport TEXT NOT NULL,CONSTRAINT DepAirport_AirportFK FOREIGN KEY (DepartureAirport) REFERENCES Airport (CodAirport),UNIQUE (CodCountry, DepartureAirport) ON CONFLICT IGNORE);"

      var ConfigMaterialTbl = "CREATE TABLE IF NOT EXISTS MaterialConfigTbl (CodMaterialConfig TEXT NOT NULL,CodMaterial TEXT NOT NULL,CONSTRAINT CodMaterial_MaterialFK FOREIGN KEY (CodMaterial) REFERENCES MaterialTbl (CodMaterial),UNIQUE (CodMaterialConfig, CodMaterial) ON CONFLICT IGNORE);";

      var ContingencySubMotiveTbl = "CREATE TABLE IF NOT EXISTS ContingencySubMotiveTbl (CodContingencySubMotive TEXT NOT NULL,ContingencyMotive TEXT NOT NULL,UNIQUE (CodContingencySubMotive, ContingencyMotive) ON CONFLICT IGNORE);"

      var CodeshareTbl = "CREATE TABLE IF NOT EXISTS CodeshareTbl (CodeShare TEXT NOT NULL,CodeshareAirline TEXT NOT NULL,UNIQUE (CodeShare, CodeshareAirline) ON CONFLICT IGNORE);"

      var AudioLanguagueTbl = "CREATE TABLE IF NOT EXISTS AudioLanguagueTbl (DestinationAirport TEXT NOT NULL,DepartureAirport TEXT NOT NULL,Languague TEXT NOT NULL, CONSTRAINT DestAirport_AudioLanguagueFK FOREIGN KEY (DestinationAirport) REFERENCES Airport (CodAirport), CONSTRAINT DepAirport_AudioLanguagueFK FOREIGN KEY (DepartureAirport) REFERENCES Airport (CodAirport),UNIQUE (DestinationAirport, DepartureAirport, Languague) ON CONFLICT IGNORE);"

      var BoardingTypeTbl = "CREATE TABLE IF NOT EXISTS BoardingTypeTbl (CodBoardingType integer not null, TypeDescription Text Not null, Unique (TypeDescription) on Conflict Ignore);"

      

      $cordovaSQLite.execute(db, AdminTbl);
      $cordovaSQLite.execute(db, AirportTbl);
      $cordovaSQLite.execute(db, DestinationAirportTbl);
      $cordovaSQLite.execute(db, MaterialTbl);
      $cordovaSQLite.execute(db, CountryTbl);
      $cordovaSQLite.execute(db, ConfigMaterialTbl);
      $cordovaSQLite.execute(db, ContingencySubMotiveTbl);
      $cordovaSQLite.execute(db, CodeshareTbl);
      $cordovaSQLite.execute(db, AudioLanguagueTbl);
      $cordovaSQLite.execute(db, BoardingTypeTbl);

      /*      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS idioma(id_idioma INTEGER PRIMARY KEY AUTOINCREMENT not null, nombre text,UNIQUE ('nombre') ON CONFLICT IGNORE);");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS ruta(id_ruta INTEGER PRIMARY KEY AUTOINCREMENT, nombre_ruta text,UNIQUE ('nombre_ruta') ON CONFLICT IGNORE);");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS material(id_material INTEGER PRIMARY KEY AUTOINCREMENT, nombre_material text,UNIQUE ('nombre_material') ON CONFLICT IGNORE);");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS submocontingencia(id_submocontingencia INTEGER PRIMARY KEY AUTOINCREMENT, nombre_submocontingencia text,UNIQUE ('nombre_submocontingencia') ON CONFLICT IGNORE);");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS tipo_embarque(id_embarque INTEGER PRIMARY KEY AUTOINCREMENT, nombre_embarque text,UNIQUE ('nombre_embarque') ON CONFLICT IGNORE);");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS embarque_remoto(id_embarqueremoto INTEGER PRIMARY KEY AUTOINCREMENT, nombre_embarqueremoto text,UNIQUE ('nombre_embarqueremoto') ON CONFLICT IGNORE);");
      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS contingencia(id_contingencia INTEGER PRIMARY KEY AUTOINCREMENT, nombre_contingencia text,UNIQUE ('nombre_contingencia') ON CONFLICT IGNORE);");*/

    }
  }
});
