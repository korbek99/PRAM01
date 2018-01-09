angular.module('BDinsert', ['ngCordova'])

/* Servicio que inserta los registros en las tablas */
.service('Insert', function($q, $cordovaSQLite) {
  return {
    create: function() {

      var Airport = " Insert into Airport values " +
        "('ANF','Español'),     ('AJU','Portugués'),    ('AQP','Español'),  ('ARI','Español'),  ('AUA','Español'),	         " +
        "('ASU','Español'),     ('AKL','Español'),      ('AYP','Español'),  ('BHI','Español'),  ('BBA','Español'),	         " +
        "('GPS','Español'),     ('BCN','Español'),      ('BAQ','Español'),  ('BEL','Portugués'),('CNF','Portugués'),	     " +
        "('BVB','Portugués'),   ('BOG','Español'),      ('BSB','Portugués'),('BGA','Español'),  ('BUE','Español'),	         " +
        "('AEP','Español'),     ('EZE','Español'),      ('CJA','Español'),  ('CJC','Español'),  ('CLO','Español'),	         " +
        "('VCP','Portugués'),   ('CGR','Portugués'),    ('CUN','Español'),  ('CCS','Español'),  ('CTG','Español'),	         " +
        "('CIX','Español'),     ('AGT','Español'),      ('CRD','Español'),  ('CCP','Español'),  ('CPO','Español'),	         " +
        "('COR','Español'),     ('CUC','Español'),      ('CUE','Español'),  ('CGB','Portugués'),('CWB','Portugués'),         " +
        "('CUZ','Español'),     ('FTE','Español'),      ('FLN','Portugués'),('FOR','Portugués'),('IGU','Portugués'),	     " +
        "('FRA','Portugués'),   ('GYN','Portugués'),    ('GYE','Español'),  ('GYE Y GPS','Español'),('GYE Y UIO','Español'), " +
        "('GYE Y SCY','Español'),('HAV','Español'),     ('IGR','Español'),  ('IOS','Portugués'),('IMP','Portugués'),         " +
        "('IQQ','Español'),     ('IQT','Español'),      ('IPC','Español'),  ('JJG','Portugués'),('JPA','Portugués'),	     " +
        "('JNB','Portugués'),   ('JOI','Portugués'),    ('JUL','Español'),  ('LPB','Español'),  ('LSC','Español'),	         " +
        "('LET','Español'),     ('LIM','Español'),      ('LHR','Portugués'),('LDB','Portugués'),('LAX','Español'),		     " +
        "('MCP','Portugués'),   ('MCZ','Portugués'),    ('MAD','Español'),  ('MAO','Portugués'),('MAB','Portugués'),         " +
        "('MDE','Español'),     ('MDZ','Español'),      ('MEX','Español'),  ('MIA','Español'),  ('MXP','Portugués'), 		 " +
        "('MTR','Español'),     ('MVD','Español'),      ('MPN','Portugués'),('NAT','Portugués'),('NVT','Portugués'),	     " +
        "('NQN','Español'),     ('JFK','Español'),      ('MCO','Español'),  ('ZOS','Español'),  ('PMW','Portugués'),		 " +
        "('PPT','Portugués'),   ('CDG','Portugués'),    ('PEI','Español'),  ('PIU','Español'),  ('POA','Portugués'),	     " +
        "('BPS','Portugués'),   ('PVH','Portugués'),    ('PCL','Español'),  ('PEM','Español'),  ('PMC','Español'),	         " +
        "('PUQ','Español'),     ('PUJ','Español'),      ('PDP','Español'),  ('UIO','Español'),  ('REC','Portugués'),		 " +
        "('RAO','Portugués'),   ('RBR','Portugués'),    ('GIG','Portugués'),('SDU','Portugués'),('RGL','Español'),	         " +
        "('ROS','Español'),     ('SLA','Español'),      ('SSA','Portugués'),('ADZ','Español'),  ('BRC','Español'),		     " +
        "('SCY','Español'),     ('UAQ','Español'),      ('VVI','Español'),  ('SMR','Español'),  ('STM','Portugués'), 		 " +
        "('SCL','Español'),     ('SJP','Portugués'),    ('SLZ','Portugués'),('CGH','Portugués'),('GRU','Portugués'),	     " +
        "('SYD','Español'),     ('TCQ','Español'),      ('TYL','Español'),  ('TPP','Español'),  ('ZCO','Español'),		     " +
        "('THE','Portugués'),   ('YYZ','Español'),      ('TRU','Español'),  ('TUC','Español'),  ('TBP','Español'),('UDI','Portugués'), " +
        "('USH','Español'),     ('ZAL','Español'),      ('VUP','Español'),  ('IAD','Español'),  ('EYP','Español');			 "

      var DestinationAirport1 = "Insert into DestinationAirportTbl values " +
        "('MIA','EZE'),	('EZE','MIA'),	('MIA','PUJ'),	('PUJ','EZE'),	('EZE','PUJ'),	('PUJ','MIA'),	('CGH','CWB'),	('CWB','CGH'),	" +
        "('SJP','CGH'),	('CGH','SJP'),	('BSB','SDU'),	('SDU','BSB'),	('BSB','POA'),	('CGH','JOI'),	('JOI','CGH'),	('CGH','POA'),	" +
        "('CGH','NVT'),	('NVT','CGH'),	('CGH','AJU'),	('POA','CGH'),	('AJU','CGH'),	('GYN','BSB'),	('POA','GIG'),	('GIG','POA'),	" +
        "('POA','BSB'),	('BSB','VCP'),	('BSB','FOR'),	('FOR','BSB'),	('CGH','CNF'),	('CNF','CGH'),	('BSB','REC'),	('CGH','IGU'),	" +
        "('BPS','GRU'),	('CGB','GIG'),	('GIG','CGB'),	('BSB','SJP'),	('STM','BSB'),	('BSB','STM'),	('GIG','FOR'),	('CNF','GRU'),	" +
        "('FOR','GIG'),	('REC','FOR'),	('GIG','REC'),	('CWB','POA'),	('GIG','IGU'),	('IGU','GIG'),	('CGH','FLN'),	('CGH','BSB'),	" +
        "('FLN','CGH'),	('GRU','FLN'),	('FLN','GRU'),	('IGU','CGH'),	('NAT','GRU'),	('GRU','NAT'),	('CGR','CGH'),	('REC','GRU'),	" +
        "('BSB','CWB'),	('CWB','BSB'),	('GIG','CGH'),	('GRU','CWB'),	('CWB','GRU'),	('POA','CWB'),	('GRU','POA'),	('POA','GRU'),	" +
        "('CGH','GIG'),	('GRU','IGU'),	('IGU','GRU'),	('FOR','GRU'),	('GRU','FOR'),	('BEL','BSB'),	('CGH','SSA'),	('SSA','GRU'),	" +
        "('GRU','SSA'),	('BSB','GRU'),	('GRU','BSB'),	('SLZ','BSB'),	('BSB','GYN'),	('SSA','CGH'),	('GRU','BPS'),	('GIG','SSA'),	" +
        "('SSA','GIG'),	('NAT','FOR'),	('UDI','BSB'),	('CGH','UDI'),	('CGH','REC'),	('BSB','CGH'),	('BSB','UDI'),	('UDI','CGH'),	" +
        "('REC','CGH'),	('BSB','BEL'),	('BSB','THE'),	('REC','GIG'),	('REC','BSB'),	('IOS','CGH'),	('CGH','IOS'),	('CGH','GYN'),	" +
        "('MCZ','GRU'),	('GRU','MCZ'),	('RAO','CGH'),	('CGH','RAO'),	('SDU','CGH'),	('CGH','SDU'),	('CGB','CGH'),	('CGH','CGB'),	" +
        "('JPA','BSB'),	('BSB','JPA'),	('BSB','SSA'),	('BPS','BSB'),	('BSB','BPS'),	('SSA','BSB'),	('GRU','REC'),	('FOR','NAT'),	" +
        "('NAT','BSB'),	('BSB','NAT'),	('JJG','CGH'),	('CGH','JJG'),	('SLZ','GRU'),	('GRU','SLZ'),	('CNF','BPS'),	('BPS','CNF'),	" +
        "('GRU','CNF'),	('CNF','BSB'),	('VCP','BSB'),	('JPA','GRU'),	('GRU','JPA'),	('SSA','CNF'),	('CNF','REC'),	('GYN','GRU'),	" +
        "('CGB','BSB'),	('REC','CNF'),	('CNF','GIG'),	('GIG','CNF'),	('BEL','GRU'),	('GRU','BEL'),	('NAT','GIG'),	('GIG','NAT'),	" +
        "('JOI','GRU'),	('GRU','JOI'),	('LDB','GRU'),	('GRU','LDB'),	('MAO','GRU'),	('GRU','MAO'),	('GIG','FLN'),	('FLN','GIG'),	" +
        "('SLZ','FOR'),	('BSB','SLZ'),	('BEL','GIG'),	('GIG','BEL'),	('CGH','CGR'),	('MCP','BSB'),	('MAB','BSB'),	('MAO','BSB'),	" +
        "('BSB','MAO'),	('GRU','GIG'),	('GIG','GRU'),	('BSB','GIG'),	('GIG','BSB'),	('MCP','BEL'),	('BEL','MCP'),	('JPA','GIG'),	" +
        "('GIG','JPA'),	('GYN','CGH'),	('GRU','GYN'),	('BVB','MAO'),	('MAO','BVB'),	('GIG','MAO'),	('MCZ','BSB'),	('BSB','MCZ'),	" +
        "('MAO','GIG'),	('BSB','CNF'),	('IMP','BSB'),	('SLZ','IMP'),	('FOR','SLZ'),	('AJU','GRU'),	('GRU','AJU'),	('FOR','REC'),	" +
        "('PVH','BSB'),	('BSB','PVH'),	('BSB','MCP'),	('AJU','BSB'),	('BSB','AJU'),	('SLZ','GIG'),	('GIG','SLZ'),	('BSB','IMP'),	" +
        "('IMP','SLZ'),	('THE','GRU'),  ('GRU','THE'),	('RBR','BSB'),	('BSB','RBR'),	('BSB','CGR'),	('CGR','BSB'),	('CGR','GRU'),	" +
        "('RBR','PVH'),	('PVH','RBR'),	('BSB','CGB'),	('GRU','CGR'),	('CNF','SSA'),	('GIG','MCZ'),	('MCZ','GIG'),	('FLN','BSB'),	" +
        "('BSB','FLN'),	('IGU','BSB'),	('BSB','IGU'),	('MCZ','CGH'),	('PMW','CGH'),	('CGH','MCZ'),	('CGH','PMW'),	('LDB','CGH'),	" +
        "('CGH','LDB'),	('CNF','SDU'),	('SDU','CNF'),	('BPS','GYN'),	('GYN','BPS'),	('PMW','BSB'),	('BSB','PMW'),	('THE','BSB'),	" +
        "('MAO','BEL'),	('BEL','FOR'),	('FOR','BEL'),	('BEL','MAO'),	('FOR','THE'),	('THE','FOR'),	('GIG','CWB'),	('CWB','GIG'),	" +
        "('BVB','BSB'),	('BSB','BVB'),	('BSB','MAB'),	('FOR','SSA'),	('SJP','BSB'),	('SSA','FOR'),	('BOG','GRU'),	('GRU','BOG'),	" +
        "('GRU','SCL'),	('SCL','GRU'),	('GRU','AEP'),	('AEP','GRU'),	('ASU','GRU'),	('EZE','GRU'),	('BOG','EZE'),	('GRU','ASU'),	" +
        "('GRU','EZE'),	('EZE','BOG'),	('SCL','GIG'),	('GIG','SCL'),	('MVD','GRU'),	('GRU','MVD'),	('MVD','GIG'),	('GIG','MVD'),	" +
        "('MIA','BSB'),	('BSB','MIA'),	('MIA','GIG'),	('GIG','MIA'),	('MXP','GRU'),	('GRU','MXP'),	('MAD','GRU'),	('GRU','MAD'),	" +
        "('LIM','GRU'),	('GRU','LIM'),	('FRA','GRU'),	('GRU','FRA'),	('MIA','MAO'),	('MAO','MIA'),	('JFK','GIG'),	('GIG','JFK'),	" +
        "('JFK','GRU'),	('GRU','JFK'),	('LHR','GRU'),	('GRU','LHR'),	('MCO','GRU'),	('GRU','MCO'),	('MIA','GRU'),	('GRU','MIA'),	" +
        "('MIA','BEL'),	('BEL','MIA'),	('LIM','SCL'),	('SCL','LIM'),	('GRU','CDG'),	('YYZ','JFK'),	('JFK','YYZ'),	('PUJ','BSB'),	" +
        "('BSB','PUJ'),	('COR','GRU'),	('GRU','COR'),	('CDG','GRU'),	('MEX','GRU'),	('GRU','MEX'),	('BCN','GRU'),	('GRU','BCN'),	" +
        "('EZE','REC'),	('REC','EZE'),	('EZE','BSB'),	('BSB','EZE'),	('ROS','GRU'),	('GRU','ROS'),	('MIA','FOR'),	('FOR','MIA'),	" +
        "('PDP','GRU'),	('GRU','PDP'),	('JNB','GRU'),	('GRU','JNB'),	('MIA','REC'),	('REC','MIA'),	('NVT','GRU'),	('GRU','NVT'),	" +
        "('BPS','CGH'),	('CGH','BPS'),	('BPS','POA'),	('POA','BPS'),	('BPS','VCP'),	('VCP','BPS'),	('BPS','SJP'),	('SJP','BPS'),	" +
        "('BPS','FLN'),	('FLN','BPS'),	('BPS','GIG'),	('GIG','BPS'),	('BPS','CWB'),	('CWB','BPS'),	('FOR','POA'),	('POA','FOR'),	" +
        "('REC','POA'),	('POA','REC'),	('MCZ','CNF'),	('CNF','MCZ'),	('CUN','GRU'),	('GRU','CUN'),	('LHR','GIG'),	('SSA','MVD'),	" +
        "('MVD','SSA'),	('MVD','BSB'),	('MVD','CWB'),	('BPS','MVD'),	('MVD','BPS'),	('CWB','MVD'),	('MVD','SCL'),	('SCL','MVD');	"

      var DestinationAirport2 = "Insert into DestinationAirportTbl values " +
        "('SCL','PUQ'),	('ANF','SCL'),	('SCL','ANF'),	('SCL','ZCO'),	('ZCO','SCL'),	('SCL','PMC'),	('PMC','SCL'),	" +
        "('SCL','BBA'),	('BBA','SCL'),	('PUQ','SCL'),	('PMC','PUQ'),	('PUQ','PMC'),	('CPO','SCL'),	('SCL','CPO'),	('CJC','SCL'),	" +
        "('SCL','CJC'),	('CJC','LSC'),	('LSC','SCL'),	('LSC','CJC'),	('SCL','LSC'),	('IQQ','SCL'),	('SCL','IQQ'),	('IQQ','ANF'),	" +
        "('ANF','IQQ'),	('ARI','SCL'),	('SCL','ARI'),	('ARI','IQQ'),	('IQQ','ARI'),	('SCL','CCP'),	('CCP','SCL'),	('ZOS','SCL'),	" +
        "('SCL','ZAL'),	('ZAL','ZOS'),	('PMC','BBA'),	('BBA','PMC'),	('ANF','LSC'),	('LSC','ANF'),	('SCL','EZE'),	('EZE','SCL'),	" +
        "('SCL','AEP'),	('AEP','SCL'),	('MIA','SCL'),	('SCL','MIA'),	('MCO','SCL'),	('SCL','MCO'),	('JFK','LIM'),	('LIM','JFK'),	" +
        "('JFK','SCL'),	('SCL','JFK'),	('GYE','SCL'),	('SCL','GYE'),	('BOG','SCL'),	('SCL','BOG'),	('BOG','MIA'),	('MIA','BOG'),	" +
        "('MIA','CUN'),	('CUN','SCL'),	('SCL','CUN'),	('CUN','MIA'),	('MIA','HAV'),	('HAV','SCL'),	('SCL','HAV'),	('HAV','MIA'),	" +
        "('SCL','PUJ'),	('PUJ','SCL'),	('LAX','LIM'),	('LIM','LAX'),	('LAX','SCL'),	('SCL','LAX'),	('SCL','MEX'),	('MEX','SCL'),	" +
        "('FRA','MAD'),	('MAD','SCL'),	('MAD','FRA'),	('SCL','MAD'),	('FLN','SCL'),	('SCL','FLN'),	('SCL','AKL'),	('AKL','SYD'),	" +
        "('SYD','AKL'),	('AKL','SCL'),	('PPT','IPC'),	('IPC','SCL'),	('SCL','IPC'),	('IPC','PPT'),	('LPB','IQQ'),	('IQQ','LPB'),	" +
        "('VVI','IQQ'),	('IQQ','VVI'),	('UAQ','SCL'),	('SCL','UAQ'),	('MDZ','SCL'),	('SCL','MDZ'),	('COR','SCL'),	('SCL','COR'),	" +
        "('ASU','SCL'),	('SCL','ASU'),	('LPB','SCL'),	('SCL','LPB'),	('SLA','IQQ'),	('IQQ','SLA'),	('PUQ','MPN'),	('MPN','PUQ'),	" +
        "('RGL','MPN'),	('PUQ','RGL'),	('RGL','PUQ'),	('MPN','RGL'),	('IGU','SCL'),	('SCL','IGU'),	('FLN','CCP'),	('CCP','FLN'),	" +
        "('FLN','LSC'),	('LSC','FLN'),	('CJC','ANF'),	('UIO','LIM'),	('LIM','EZE'),	('LIM','UIO'),	('EZE','LIM'),	('GYE','LIM'),	" +
        "('LIM','GYE'),	('MAD','GYE'),	('GYE','MAD'),	('UIO','GYE'),	('LIM','CUZ'),	('CUZ','LIM'),	('CUZ','PEM'),	('PEM','CUZ'),	" +
        "('LIM','PEM'),	('PEM','LIM'),	('LIM','JUL'),	('JUL','LIM'),	('CUZ','AQP'),	('AQP','CUZ'),	('LIM','AQP'),	('AQP','LIM'),	" +
        "('JUL','CUZ'),	('CUZ','JUL'),	('LIM','TCQ'),	('TCQ','LIM'),	('LIM','AYP'),	('AYP','LIM'),	('TRU','LIM'),	('LIM','TRU'),	" +
        "('TYL','LIM'),	('LIM','TYL'),	('TPP','LIM'),	('LIM','TPP'),	('CIX','LIM'),	('LIM','CIX'),	('CJA','LIM'),	('LIM','CJA'),	" +
        "('PIU','LIM'),	('LIM','PIU'),	('TBP','LIM'),	('LIM','TBP'),	('PCL','LIM'),	('LIM','PCL'),	('IQT','LIM'),	('LIM','IQT'),	" +
        "('LIM','ROS'),	('ROS','LIM'),	('COR','LIM'),	('LIM','COR'),	('BCN','LIM'),	('LIM','BCN'),	('LIM','SLA'),	('SLA','LIM'),	" +
        "('LIM','IGU'),	('IGU','LIM'),	('MIA','LIM'),	('LIM','MIA'),	('LPB','LIM'),	('VVI','LPB'),	('LIM','VVI'),	('LIM','LPB'),	" +
        "('VVI','LIM'),	('LPB','VVI'),	('CUN','LIM'),	('LIM','CUN'),	('HAV','LIM'),	('LIM','HAV'),	('BOG','LIM'),	('LIM','BOG'),	" +
        "('CTG','LIM'),	('LIM','CTG'),	('PUJ','LIM'),	('LIM','PUJ'),	('MEX','LIM'),	('LIM','MEX'),	('LIM','MCO'),	('MCO','LIM'),	" +
        "('MAD','LIM'),	('LIM','MAD'),	('LIM','ANF'),	('ANF','LIM'),	('MVD','LIM'),	('LIM','MVD'),	('IAD','LIM'),	('LIM','IAD'),	" +
        "('LPB','CUZ'),	('MDE','BOG'),	('BOG','MDE'),	('ADZ','BOG'),	('BOG','ADZ'),	('BOG','CLO'),	('CLO','BOG'),	('CTG','BOG'),	" +
        "('BOG','CTG'),	('LET','BOG'),	('BOG','LET'),	('BAQ','BOG'),	('BOG','BAQ'),	('SMR','BOG'),	('BOG','SMR'),	('BGA','BOG'),	" +
        "('BOG','BGA'),	('CUC','BOG'),	('BOG','CUC'),	('MTR','BOG'),	('BOG','MTR'),	('EYP','BOG'),	('BOG','EYP'),	('PEI','BOG'),	" +
        "('BOG','PEI'),	('VUP','BOG'),	('BOG','VUP'),	('ADZ','CLO'),	('CLO','ADZ'),	('ADZ','MDE'),	('MDE','ADZ'),	('CTG','MDE'),	" +
        "('MDE','CTG'),	('CUN','BOG'),	('BOG','CUN'),	('BOG','AUA'),	('AUA','BOG'),	('PUJ','BOG'),	('BOG','PUJ'),	('AEP','IGR'),	" +
        "('IGR','AEP'),	('SLA','AEP'),	('AEP','SLA'),	('SLA','EZE'),	('TUC','AEP'),	('AEP','TUC'),	('COR','AEP'),	('AEP','COR'),	" +
        "('IGR','COR'),	('BHI','AEP'),	('AEP','BHI'),	('MDZ','AEP'),	('AEP','MDZ'),	('NQN','AEP'),	('AEP','NQN'),	('UAQ','AEP'),	" +
        "('AEP','UAQ'),	('MDZ','UAQ'),	('BRC','AEP'),	('BRC','EZE'),	('AEP','BRC'),	('EZE','BRC'),	('RGL','AEP'),	('AEP','RGL'),	" +
        "('CRD','AEP'),	('AEP','CRD'),	('FTE','AEP'),	('AEP','FTE'),	('FTE','USH'),	('USH','AEP'),	('USH','FTE'),	('AEP','USH'),	" +
        "('GIG','EZE'),	('EZE','GIG'),	('MDZ','LIM'),	('LIM','MDZ'),	('EZE','USH'),	('AGT','ASU'),	('GRU','AGT'),	('AGT','GRU'),	" +
        "('ASU','AGT'),	('LIM','ASU'),	('ASU','LIM'),	('ASU','EZE'),	('EZE','ASU'),	('MIA','UIO'),	('UIO','MIA'),	('JFK','GYE'),	" +
        "('GYE','JFK'),	('UIO','CUE'),	('CUE','UIO'),	('GYE','GPS'),	('GPS','GYE'),	('GYE','UIO'),	('UIO','GPS'),	('GPS','UIO'),	" +
        "('GYE','SCY'),	('SCY','GYE'),	('CCS','SCL'),	('SCL','CCS'),	('CCS','LIM'),	('LIM','CCS');	"

      var Material = "Insert into MaterialTbl values	" +
        "('A320','DOM'),	('A320','INT'),	('A319','DOM'),	('A319','INT'),	('A321','DOM'),	('A321','INT'),	('B767','DOM'),	('B767','INT'),	" +
        "('B787','DOM'),	('B787','INT'),	('A350','DOM'),	('A350','INT'),	('B777','DOM'),	('B777','INT'),	('A330','DOM'),	('A330','INT');	"

      var Country = " insert into CountryTbl values 	" +
        "('Chile','ANF'),		('Brasil','AJU'),	('Perú','AQP'),				('Chile','ARI'), 			" +
        "('Aruba','AUA'),		('Paraguay','ASU'),	('Nueva Zelanda','AKL'),	('Perú','AYP'),				" +
        "('Argentina','BHI'),	('Chile','BBA'),	('Ecuador','GPS'),			('España','BCN'),			" +
        "('Colombia','BAQ'),	('Brasil','BEL'),	('Brasil','CNF'),			('Brasil','BVB'),			" +
        "('Colombia','BOG'),	('Brasil','BSB'),	('Colombia','BGA'),			('Argentina','BUE'),		" +
        "('Argentina','AEP'),	('Argentina','EZE'),('Perú','CJA'),				('Chile','CJC'),			" +
        "('Colombia','CLO'),	('Brasil','VCP'),	('Brasil','CGR'),			('México','CUN'),			" +
        "('Venezuela','CCS'),	('Colombia','CTG'),	('Chile','WCA'),			('Perú','CIX'),				" +
        "('Paraguay','AGT'),	('Argentina','CRD'),('Chile','CCP'),			('Chile','CPO'),			" +
        "('Argentina','COR'),	('Colombia','CUC'),	('Ecuador','CUE'),			('Brasil','CGB'),			" +
        "('Brasil','CWB'),		('Perú','CUZ'),		('Argentina','FTE'),		('Brasil','FLN'),			" +
        "('Brasil','FOR'),		('Brasil','IGU'),	('Alemania','FRA'),			('Brasil','GYN'),			" +
        "('Ecuador','GYE'),		('Cuba','HAV'),		('Argentina','IGR'),		('Brasil','IOS'),			" +
        "('Brasil','IMP'),		('Chile','IQQ'),	('Perú','IQT'),				('Chile','IPC'),			" +
        "('Brasil','JJG'),		('Brasil','JPA'),	('Sudáfrica','JNB'),		('Brasil','JOI'),			" +
        "('Perú','JUL'),		('Bolivia','LPB'),	('Chile','LSC'),			('Colombia','LET'),			" +
        "('Perú','LIM'),		('Inglaterra','LHR'),('Brasil','LDB'),			('Estados Unidos','LAX'),	" +
        "('Brasil','MCP'),		('Brasil','MCZ'),	('España','MAD'),			('Brasil','MAO'),			" +
        "('Brasil','MAB'),		('Colombia','MDE'),	('Argentina','MDZ'),		('México','MEX'),			" +
        "('Estados Unidos','MIA'),('Italia','MXP'),	('Colombia','MTR'),			('Uruguay','MVD'),			" +
        "('Inglaterra','MPN'),	('Brasil','NAT'),	('Brasil','NVT'),			('Argentina','NQN'),		" +
        "('Estados Unidos','JFK'),('Estados Unidos','MCO'),('Chile','ZOS'),		('Brasil','PMW'),			" +
        "('Francia','PPT'),		('Francia','CDG'),	('Colombia','PEI'),			('Perú','PIU'),				" +
        "('Brasil','POA'),		('Brasil','BPS'),	('Brasil','PVH'),			('Perú','PCL'),				" +
        "('Perú','PEM'),		('Chile','PMC'),	('Chile','PUQ'),			('República Dominicana','PUJ')," +
        "('Uruguay','PDP'),		('Ecuador','UIO'),	('Brasil','REC'),			('Brasil','RAO'),			" +
        "('Brasil','RBR'),		('Brasil','GIG'),	('Brasil','SDU'),			('Argentina','RGL'),		" +
        "('Argentina','ROS'),	('Argentina','SLA'),('Brasil','SSA'),			('Colombia','ADZ'),			" +
        "('Argentina','BRC'),	('Ecuador','SCY'),	('Argentina','UAQ'),		('Bolivia','VVI'),			" +
        "('Colombia','SMR'),	('Brasil','STM'),	('Chile','SCL'),			('Brasil','SJP'),			" +
        "('Brasil','SLZ'),		('Brasil','CGH'),	('Brasil','GRU'),			('Australia','SYD'),		" +
        "('Perú','TCQ'),		('Perú','TYL'),		('Perú','TPP'),				('Chile','ZCO'),			" +
        "('Brasil','THE'),		('Canadá','YYZ'),	('Perú','TRU'),				('Argentina','TUC'),		" +
        "('Perú','TBP'),		('Brasil','UDI'),	('Argentina','USH'),		('Chile','ZAL'),			" +
        "('Colombia','VUP'),	('Estados Unidos','IAD'),	('Colombia','EYP'); "

      var MaterialConfig = "Insert into MaterialConfigTbl values " +
        "('J0Y168','A320'),	('J0Y174','A320'),	('J12Y156','A320'),	('J12Y150','A320'),	('J0Y174','A320'),	('J12Y144','A320'),	" +
        "('J0Y144','A319'),	('J12Y126','A319'),	('J0Y220','A321'),	('J30Y191','B767'),	('J18Y220','B767'),	('J30Y217','B767'),	" +
        "('J30Y217','B787'),('J30Y283','B787'),	('J30Y274','B787'),	('J30Y272','B787'),	('J30Y270','B787'),	('J30Y318','A350'),	" +
        "('J30Y309','A350'),('J56Y323','B777'),	('J36Y183','A330');	"

      var ContingencySubMotive = " Insert into ContingencySubMotiveTbl values 	     					" +
        "('Mantenimiento no programado','Cancelación del vuelo'),										" +
        "('Arrastre de avión por meteorología','Cancelación del vuelo'),								" +
        "('Arrastre de avión por demora aeropuerto origen','Cancelación del vuelo'),					" +
        "('Espera tripulación para el vuelo','Cancelación del vuelo'),									" +
        "('Espera tripulación por atraso de vuelo anterior','Cancelación del vuelo'),					" +
        "('Espera tripulación llegada al aeropuerto','Cancelación del vuelo'),							" +
        "('Espera pasajero en conexión','Cancelación del vuelo'),										" +
        "('Aeropuerto destino cerrado: Fuera horario operación','Cancelación del vuelo'),				" +
        "('Aeropuerto origen cerrado: Fuera horario operación','Cancelación del vuelo'),				" +
        "('Conflictos gremiales','Cancelación del vuelo'),												" +
        "('Meteorología aeropuerto destino','Cancelación del vuelo'),									" +
        "('Meterología aeropuerto origen','Cancelación del vuelo'),										" +
        "('Tránsito Aéreo aeropuerto destino','Cancelación del vuelo'),									" +
        "('Tránsito Aéreo aeropuerto origen','Cancelación del vuelo'),									" +
        "('Tránsito terrestre aeropuerto destino','Cancelación del vuelo'),								" +
        "('Tránsito terrestre aeropuerto origen','Cancelación del vuelo'),								" +
        "('Aeropuerto destino cerrado: Instalaciones fuera de funcionamiento','Cancelación del vuelo'),	" +
        "('Aeropuerto origen cerrado: Instalaciones fuera de funcionamiento','Cancelación del vuelo'),	" +
        "('Congestión migraciones','Cancelación del vuelo'),											" +
        "('Falla buses','Cancelación del vuelo'),														" +
        "('Falla mangas','Cancelación del vuelo'),														" +
        "('Falta de posiciones de estacionamiento','Cancelación del vuelo'),							" +
        "('Conflictos laborales externos en el aeropuerto','Cancelación del vuelo'),					" +
        "('Embarque pasajeros con necesidades especiales','Cancelación del vuelo'),						" +
        "('Desembarque pasajeros con necesidades especiales','Cancelación del vuelo'),					" +
        "('Vuelo seleccionado para revisión equipaje en bodega','Cancelación del vuelo'),				" +
        "('Mantenimiento no programado','Nueva Información (NI 1)'),									" +
        "('Arrastre de avión por meteorología','Nueva Información (NI 1)'),								" +
        "('Arrastre de avión por demora aeropuerto origen','Nueva Información (NI 1)'),					" +
        "('Espera tripulación para el vuelo','Nueva Información (NI 1)'),								" +
        "('Espera tripulación por atraso de vuelo anterior','Nueva Información (NI 1)'),				" +
        "('Espera tripulación llegada al aeropuerto','Nueva Información (NI 1)'),						" +
        "('Espera pasajero en conexión','Nueva Información (NI 1)'),									" +
        "('Aeropuerto destino cerrado: Fuera horario operación','Nueva Información (NI 1)'),			" +
        "('Aeropuerto origen cerrado: Fuera horario operación','Nueva Información (NI 1)'),				" +
        "('Conflictos gremiales','Nueva Información (NI 1)'),											" +
        "('Meteorología aeropuerto destino','Nueva Información (NI 1)'),								" +
        "('Meterología aeropuerto origen','Nueva Información (NI 1)'),									" +
        "('Tránsito Aéreo aeropuerto destino','Nueva Información (NI 1)'),								" +
        "('Tránsito Aéreo aeropuerto origen','Nueva Información (NI 1)'),								" +
        "('Tránsito terrestre aeropuerto destino','Nueva Información (NI 1)'),							" +
        "('Tránsito terrestre aeropuerto origen','Nueva Información (NI 1)'),							" +
        "('Aeropuerto destino cerrado: Instalaciones fuera de funcionamiento','Nueva Información (NI 1)')," +
        "('Aeropuerto origen cerrado: Instalaciones fuera de funcionamiento','Nueva Información (NI 1)')," +
        "('Congestión migraciones','Nueva Información (NI 1)'),											" +
        "('Falla buses','Nueva Información (NI 1)'),													" +
        "('Falla mangas','Nueva Información (NI 1)'),													" +
        "('Falta de posiciones de estacionamiento','Nueva Información (NI 1)'),							" +
        "('Conflictos laborales externos en el aeropuerto','Nueva Información (NI 1)'),					" +
        "('Embarque pasajeros con necesidades especiales','Nueva Información (NI 1)'),					" +
        "('Desembarque pasajeros con necesidades especiales','Nueva Información (NI 1)'),				" +
        "('Vuelo seleccionado para revisión equipaje en bodega','Nueva Información (NI 1)'),			" +
        "('Mantenimiento no programado','ETD'),															" +
        "('Arrastre de avión por meteorología','ETD'),													" +
        "('Arrastre de avión por demora aeropuerto origen','ETD'),										" +
        "('Espera tripulación para el vuelo','ETD'),													" +
        "('Espera tripulación por atraso de vuelo anterior','ETD'),										" +
        "('Espera tripulación llegada al aeropuerto','ETD'),											" +
        "('Espera pasajero en conexión','ETD'),															" +
        "('Aeropuerto destino cerrado: Fuera horario operación','ETD'),									" +
        "('Aeropuerto origen cerrado: Fuera horario operación','ETD'),									" +
        "('Conflictos gremiales','ETD'),																" +
        "('Meteorología aeropuerto destino','ETD'),														" +
        "('Meterología aeropuerto origen','ETD'),														" +
        "('Tránsito Aéreo aeropuerto destino','ETD'),													" +
        "('Tránsito Aéreo aeropuerto origen','ETD'),													" +
        "('Tránsito terrestre aeropuerto destino','ETD'),												" +
        "('Tránsito terrestre aeropuerto origen','ETD'),												" +
        "('Aeropuerto destino cerrado: Instalaciones fuera de funcionamiento','ETD'),					" +
        "('Aeropuerto origen cerrado: Instalaciones fuera de funcionamiento','ETD'),					" +
        "('Congestión migraciones','ETD'),																" +
        "('Falla buses','ETD'),																			" +
        "('Falla mangas','ETD'),																		" +
        "('Falta de posiciones de estacionamiento','ETD'),												" +
        "('Conflictos laborales externos en el aeropuerto','ETD'),										" +
        "('Embarque pasajeros con necesidades especiales','ETD'),										" +
        "('Desembarque pasajeros con necesidades especiales','ETD'),									" +
        "('Vuelo seleccionado para revisión equipaje en bodega','ETD'),									" +
        "('Mantenimiento no programado','Postergación de Vuelo'),										" +
        "('Arrastre de avión por meteorología','Postergación de Vuelo'),								" +
        "('Arrastre de avión por demora aeropuerto origen','Postergación de Vuelo'),					" +
        "('Espera tripulación para el vuelo','Postergación de Vuelo'),									" +
        "('Espera tripulación por atraso de vuelo anterior','Postergación de Vuelo'),					" +
        "('Espera tripulación llegada al aeropuerto','Postergación de Vuelo'),							" +
        "('Espera pasajero en conexión','Postergación de Vuelo'),										" +
        "('Aeropuerto destino cerrado: Fuera horario operación','Postergación de Vuelo'),				" +
        "('Aeropuerto origen cerrado: Fuera horario operación','Postergación de Vuelo'),				" +
        "('Conflictos gremiales','Postergación de Vuelo'),												" +
        "('Meteorología aeropuerto destino','Postergación de Vuelo'),									" +
        "('Meterología aeropuerto origen','Postergación de Vuelo'),										" +
        "('Tránsito Aéreo aeropuerto destino','Postergación de Vuelo'),									" +
        "('Tránsito Aéreo aeropuerto origen','Postergación de Vuelo'),									" +
        "('Tránsito terrestre aeropuerto destino','Postergación de Vuelo'),								" +
        "('Tránsito terrestre aeropuerto origen','Postergación de Vuelo'),								" +
        "('Aeropuerto destino cerrado: Instalaciones fuera de funcionamiento','Postergación de Vuelo'),	" +
        "('Aeropuerto origen cerrado: Instalaciones fuera de funcionamiento','Postergación de Vuelo'),	" +
        "('Congestión migraciones','Postergación de Vuelo'),											" +
        "('Falla buses','Postergación de Vuelo'),														" +
        "('Falla mangas','Postergación de Vuelo'),														" +
        "('Falta de posiciones de estacionamiento','Postergación de Vuelo'),							" +
        "('Conflictos laborales externos en el aeropuerto','Postergación de Vuelo'),					" +
        "('Embarque pasajeros con necesidades especiales','Postergación de Vuelo'),						" +
        "('Desembarque pasajeros con necesidades especiales','Postergación de Vuelo'),					" +
        "('Vuelo seleccionado para revisión equipaje en bodega','Postergación de Vuelo'),				" +
        "('Mantenimiento no programado','Nueva Información (NI 2)'),									" +
        "('Arrastre de avión por meteorología','Nueva Información (NI 2)'),								" +
        "('Arrastre de avión por demora aeropuerto origen','Nueva Información (NI 2)'),					" +
        "('Espera tripulación para el vuelo','Nueva Información (NI 2)'),								" +
        "('Espera tripulación por atraso de vuelo anterior','Nueva Información (NI 2)'),				" +
        "('Espera tripulación llegada al aeropuerto','Nueva Información (NI 2)'),						" +
        "('Espera pasajero en conexión','Nueva Información (NI 2)'),									" +
        "('Aeropuerto destino cerrado: Fuera horario operación','Nueva Información (NI 2)'),			" +
        "('Aeropuerto origen cerrado: Fuera horario operación','Nueva Información (NI 2)'),				" +
        "('Conflictos gremiales','Nueva Información (NI 2)'),											" +
        "('Meteorología aeropuerto destino','Nueva Información (NI 2)'),								" +
        "('Meterología aeropuerto origen','Nueva Información (NI 2)'),									" +
        "('Tránsito Aéreo aeropuerto destino','Nueva Información (NI 2)'),								" +
        "('Tránsito Aéreo aeropuerto origen','Nueva Información (NI 2)'),								" +
        "('Tránsito terrestre aeropuerto destino','Nueva Información (NI 2)'),							" +
        "('Tránsito terrestre aeropuerto origen','Nueva Información (NI 2)'),							" +
        "('Aeropuerto destino cerrado: Instalaciones fuera de funcionamiento','Nueva Información (NI 2)')," +
        "('Aeropuerto origen cerrado: Instalaciones fuera de funcionamiento','Nueva Información (NI 2)')," +
        "('Congestión migraciones','Nueva Información (NI 2)'),											" +
        "('Falla buses','Nueva Información (NI 2)'),													" +
        "('Falla mangas','Nueva Información (NI 2)'),													" +
        "('Falta de posiciones de estacionamiento','Nueva Información (NI 2)'),							" +
        "('Conflictos laborales externos en el aeropuerto','Nueva Información (NI 2)'),					" +
        "('Embarque pasajeros con necesidades especiales','Nueva Información (NI 2)'),					" +
        "('Desembarque pasajeros con necesidades especiales','Nueva Información (NI 2)'),				" +
        "('Vuelo seleccionado para revisión equipaje en bodega','Nueva Información (NI 2)');			"

      var CodeShare = "Insert into CodeShareTbl values " +
        "('1','Air Berlin'),	('2','American Arilines'),	('3','British Ariways'),	('4','Cathay Pacific'),		" +
        "('5','Finnair'),		('6','Iberia'),				('7','Japan Airlines'),		('8','Malasya Airlines'),	" +
        "('9','Qantas'),		('10','Qatar Airways'),		('11','Royal Jordanian'),	('12','Siberia Airlines'),	" +
        "('13','Srilankan Airlines');	"

      var AudioLanguague = "Insert into AudioLanguagueTbl +"
      "	('MIA','EZE','Español'),     ('MIA','EZE','Inglés'),     ('EZE','MIA','Español'),     ('EZE','MIA','Inglés'),     ('MIA','PUJ','Español'),	" +
        "	('MIA','PUJ','Inglés'),      ('PUJ','EZE','Español'),    ('PUJ','EZE','Inglés'),      ('EZE','PUJ','Español'),     ('EZE','PUJ','Inglés'),	" +
        "	('PUJ','MIA','Español'),     ('PUJ','MIA','Inglés'),     ('CGH','CWB','Portugués'),     ('CGH','CWB','Inglés'),     ('CWB','CGH','Portugués'),	" +
        "	('CWB','CGH','Inglés'),      ('SJP','CGH','Portugués'),    ('SJP','CGH','Inglés'),     ('CGH','SJP','Portugués'),     ('CGH','SJP','Inglés'),	" +
        "	('BSB','SDU','Portugués'),     ('BSB','SDU','Inglés'),     ('SDU','BSB','Portugués'),     ('SDU','BSB','Inglés'),     ('BSB','POA','Portugués'),	" +
        "	('BSB','POA','Inglés'),     ('CGH','JOI','Portugués'),     ('CGH','JOI','Inglés'),     ('JOI','CGH','Portugués'),     ('JOI','CGH','Inglés'),	" +
        "	('CGH','POA','Portugués'),     ('CGH','POA','Inglés'),     ('CGH','NVT','Portugués'),     ('CGH','NVT','Inglés'),     ('NVT','CGH','Portugués'),	" +
        "	('NVT','CGH','Inglés'),     ('CGH','AJU','Portugués'),     ('CGH','AJU','Inglés'),     ('POA','CGH','Portugués'),     ('POA','CGH','Inglés'),	" +
        "	('AJU','CGH','Portugués'),     ('AJU','CGH','Inglés'),     ('GYN','BSB','Portugués'),     ('GYN','BSB','Inglés'),     ('POA','GIG','Portugués'),	" +
        "	('POA','GIG','Inglés'),     ('GIG','POA','Portugués'),     ('GIG','POA','Inglés'),     ('POA','BSB','Portugués'),     ('POA','BSB','Inglés'),	" +
        "	('BSB','VCP','Portugués'),     ('BSB','VCP','Inglés'),     ('BSB','FOR','Portugués'),     ('BSB','FOR','Inglés'),     ('FOR','BSB','Portugués'),	" +
        "	('FOR','BSB','Inglés'),     ('CGH','CNF','Portugués'),     ('CGH','CNF','Inglés'),     ('CNF','CGH','Portugués'),     ('CNF','CGH','Inglés'),	" +
        "	('BSB','REC','Portugués'),     ('BSB','REC','Inglés'),     ('CGH','IGU','Portugués'),     ('CGH','IGU','Inglés'),     ('BPS','GRU','Portugués'),	" +
        "	('BPS','GRU','Inglés'),     ('CGB','GIG','Portugués'),     ('CGB','GIG','Inglés'),     ('GIG','CGB','Portugués'),     ('GIG','CGB','Inglés'),	" +
        "	('BSB','SJP','Portugués'),     ('BSB','SJP','Inglés'),     ('STM','BSB','Portugués'),     ('STM','BSB','Inglés'),     ('BSB','STM','Portugués'),	" +
        "	('BSB','STM','Inglés'),     ('GIG','FOR','Portugués'),     ('GIG','FOR','Inglés'),     ('CNF','GRU','Portugués'),     ('CNF','GRU','Inglés'),	" +
        "	('FOR','GIG','Portugués'),     ('FOR','GIG','Inglés'),     ('REC','FOR','Portugués'),     ('REC','FOR','Inglés'),     ('GIG','REC','Portugués'),	" +
        "	('GIG','REC','Inglés'),     ('CWB','POA','Portugués'),     ('CWB','POA','Inglés'),     ('GIG','IGU','Portugués'),     ('GIG','IGU','Inglés'),	" +
        "	('IGU','GIG','Portugués'),     ('IGU','GIG','Inglés'),     ('CGH','FLN','Portugués'),     ('CGH','FLN','Inglés'),     ('CGH','BSB','Portugués'),	" +
        "	('CGH','BSB','Inglés'),     ('FLN','CGH','Portugués'),     ('FLN','CGH','Inglés'),     ('GRU','FLN','Portugués'),     ('GRU','FLN','Inglés'),	" +
        "	('FLN','GRU','Portugués'),     ('FLN','GRU','Inglés'),     ('IGU','CGH','Portugués'),     ('IGU','CGH','Inglés'),     ('NAT','GRU','Portugués'),	" +
        "	('NAT','GRU','Inglés'),     ('GRU','NAT','Portugués'),     ('GRU','NAT','Inglés'),     ('CGR','CGH','Portugués'),     ('CGR','CGH','Inglés'),	" +
        "	('REC','GRU','Portugués'),     ('REC','GRU','Inglés'),     ('BSB','CWB','Portugués'),     ('BSB','CWB','Inglés'),     ('CWB','BSB','Portugués'),	" +
        "	('CWB','BSB','Inglés'),     ('GIG','CGH','Portugués'),     ('GIG','CGH','Inglés'),     ('GRU','CWB','Portugués'),     ('GRU','CWB','Inglés'),	" +
        "	('CWB','GRU','Portugués'),     ('CWB','GRU','Inglés'),     ('POA','CWB','Portugués'),     ('POA','CWB','Inglés'),     ('GRU','POA','Portugués'),	" +
        "	('GRU','POA','Inglés'),     ('POA','GRU','Portugués'),     ('POA','GRU','Inglés'),     ('CGH','GIG','Portugués'),     ('CGH','GIG','Inglés'),	" +
        "	('GRU','IGU','Portugués'),     ('GRU','IGU','Inglés'),     ('IGU','GRU','Portugués'),     ('IGU','GRU','Inglés'),     ('FOR','GRU','Portugués'),	" +
        "	('FOR','GRU','Inglés'),     ('GRU','FOR','Portugués'),     ('GRU','FOR','Inglés'),     ('BEL','BSB','Portugués'),     ('BEL','BSB','Inglés'),	" +
        "	('CGH','SSA','Portugués'),     ('CGH','SSA','Inglés'),     ('SSA','GRU','Portugués'),     ('SSA','GRU','Inglés'),     ('GRU','SSA','Portugués'),	" +
        "	('GRU','SSA','Inglés'),     ('BSB','GRU','Portugués'),     ('BSB','GRU','Inglés'),     ('GRU','BSB','Portugués'),     ('GRU','BSB','Inglés'),	" +
        "	('SLZ','BSB','Portugués'),     ('SLZ','BSB','Inglés'),     ('BSB','GYN','Portugués'),     ('BSB','GYN','Inglés'),     ('SSA','CGH','Portugués'),	" +
        "	('SSA','CGH','Inglés'),     ('GRU','BPS','Portugués'),     ('GRU','BPS','Inglés'),     ('GIG','SSA','Portugués'),     ('GIG','SSA','Inglés'),	" +
        "	('SSA','GIG','Portugués'),     ('SSA','GIG','Inglés'),     ('NAT','FOR','Portugués'),     ('NAT','FOR','Inglés'),     ('UDI','BSB','Portugués'),	" +
        "	('UDI','BSB','Inglés'),     ('CGH','UDI','Portugués'),     ('CGH','UDI','Inglés'),     ('CGH','REC','Portugués'),     ('CGH','REC','Inglés'),	" +
        "	('BSB','CGH','Portugués'),     ('BSB','CGH','Inglés'),     ('BSB','UDI','Portugués'),     ('BSB','UDI','Inglés'),     ('UDI','CGH','Portugués'),	" +
        "	('UDI','CGH','Inglés'),     ('REC','CGH','Portugués'),     ('REC','CGH','Inglés'),     ('BSB','BEL','Portugués'),     ('BSB','BEL','Inglés'),	" +
        "	('BSB','THE','Portugués'),     ('BSB','THE','Inglés'),     ('REC','GIG','Portugués'),     ('REC','GIG','Inglés'),     ('REC','BSB','Portugués'),	" +
        "	('REC','BSB','Inglés'),     ('IOS','CGH','Portugués'),     ('IOS','CGH','Inglés'),     ('CGH','IOS','Portugués'),     ('CGH','IOS','Inglés'),	" +
        "	('CGH','GYN','Portugués'),     ('CGH','GYN','Inglés'),     ('MCZ','GRU','Portugués'),     ('MCZ','GRU','Inglés'),     ('GRU','MCZ','Portugués'),	" +
        "	('GRU','MCZ','Inglés'),     ('RAO','CGH','Portugués'),     ('RAO','CGH','Inglés'),     ('CGH','RAO','Portugués'),     ('CGH','RAO','Inglés'),	" +
        "	('SDU','CGH','Portugués'),     ('SDU','CGH','Inglés'),     ('CGH','SDU','Portugués'),     ('CGH','SDU','Inglés'),     ('CGB','CGH','Portugués'),	" +
        "	('CGB','CGH','Inglés'),     ('CGH','CGB','Portugués'),     ('CGH','CGB','Inglés'),     ('JPA','BSB','Portugués'),     ('JPA','BSB','Inglés'),	" +
        "	('BSB','JPA','Portugués'),     ('BSB','JPA','Inglés'),     ('BSB','SSA','Portugués'),     ('BSB','SSA','Inglés'),     ('BPS','BSB','Portugués'),	" +
        "	('BPS','BSB','Inglés'),     ('BSB','BPS','Portugués'),     ('BSB','BPS','Inglés'),     ('SSA','BSB','Portugués'),     ('SSA','BSB','Inglés'),	" +
        "	('GRU','REC','Portugués'),     ('GRU','REC','Inglés'),     ('FOR','NAT','Portugués'),     ('FOR','NAT','Inglés'),     ('NAT','BSB','Portugués'),	" +
        "	('NAT','BSB','Inglés'),     ('BSB','NAT','Portugués'),     ('BSB','NAT','Inglés'),     ('JJG','CGH','Portugués'),     ('JJG','CGH','Inglés'),	" +
        "	('CGH','JJG','Portugués'),     ('CGH','JJG','Inglés'),     ('SLZ','GRU','Portugués'),     ('SLZ','GRU','Inglés'),     ('GRU','SLZ','Portugués'),	" +
        "	('GRU','SLZ','Inglés'),     ('CNF','BPS','Portugués'),     ('CNF','BPS','Inglés'),     ('BPS','CNF','Portugués'),     ('BPS','CNF','Inglés'),	" +
        "	('GRU','CNF','Portugués'),     ('GRU','CNF','Inglés'),     ('CNF','BSB','Portugués'),     ('CNF','BSB','Inglés'),     ('VCP','BSB','Portugués'),	" +
        "	('VCP','BSB','Inglés'),     ('JPA','GRU','Portugués'),     ('JPA','GRU','Inglés'),     ('GRU','JPA','Portugués'),     ('GRU','JPA','Inglés'),	" +
        "	('SSA','CNF','Portugués'),     ('SSA','CNF','Inglés'),     ('CNF','REC','Portugués'),     ('CNF','REC','Inglés'),     ('GYN','GRU','Portugués'),	" +
        "	('GYN','GRU','Inglés'),     ('CGB','BSB','Portugués'),     ('CGB','BSB','Inglés'),     ('REC','CNF','Portugués'),     ('REC','CNF','Inglés'),	" +
        "	('CNF','GIG','Portugués'),     ('CNF','GIG','Inglés'),     ('GIG','CNF','Portugués'),     ('GIG','CNF','Inglés'),     ('BEL','GRU','Portugués'),	" +
        "	('BEL','GRU','Inglés'),     ('GRU','BEL','Portugués'),     ('GRU','BEL','Inglés'),     ('NAT','GIG','Portugués'),     ('NAT','GIG','Inglés'),	" +
        "	('GIG','NAT','Portugués'),     ('GIG','NAT','Inglés'),     ('JOI','GRU','Portugués'),     ('JOI','GRU','Inglés'),     ('GRU','JOI','Portugués'),	" +
        "	('GRU','JOI','Inglés'),     ('LDB','GRU','Portugués'),     ('LDB','GRU','Inglés'),     ('GRU','LDB','Portugués'),     ('GRU','LDB','Inglés'),	" +
        "	('MAO','GRU','Portugués'),     ('MAO','GRU','Inglés'),     ('GRU','MAO','Portugués'),     ('GRU','MAO','Inglés'),     ('GIG','FLN','Portugués'),	" +
        "	('GIG','FLN','Inglés'),     ('FLN','GIG','Portugués'),     ('FLN','GIG','Inglés'),     ('SLZ','FOR','Portugués'),     ('SLZ','FOR','Inglés'),	" +
        "	('BSB','SLZ','Portugués'),     ('BSB','SLZ','Inglés'),     ('BEL','GIG','Portugués'),     ('BEL','GIG','Inglés'),     ('GIG','BEL','Portugués'),	" +
        "	('GIG','BEL','Inglés'),     ('CGH','CGR','Portugués'),     ('CGH','CGR','Inglés'),     ('MCP','BSB','Portugués'),     ('MCP','BSB','Inglés'),	" +
        "	('MAB','BSB','Portugués'),     ('MAB','BSB','Inglés'),     ('MAO','BSB','Portugués'),     ('MAO','BSB','Inglés'),     ('BSB','MAO','Portugués'),	" +
        "	('BSB','MAO','Inglés'),     ('GRU','GIG','Portugués'),     ('GRU','GIG','Inglés'),     ('GIG','GRU','Portugués'),     ('GIG','GRU','Inglés'),	" +
        "	('BSB','GIG','Portugués'),     ('BSB','GIG','Inglés'),     ('GIG','BSB','Portugués'),     ('GIG','BSB','Inglés'),     ('MCP','BEL','Portugués'),	" +
        "	('MCP','BEL','Inglés'),     ('BEL','MCP','Portugués'),     ('BEL','MCP','Inglés'),     ('JPA','GIG','Portugués'),     ('JPA','GIG','Inglés'),	" +
        "	('GIG','JPA','Portugués'),     ('GIG','JPA','Inglés'),     ('GYN','CGH','Portugués'),     ('GYN','CGH','Inglés'),     ('GRU','GYN','Portugués'),	" +
        "	('GRU','GYN','Inglés'),     ('BVB','MAO','Portugués'),     ('BVB','MAO','Inglés'),     ('MAO','BVB','Portugués'),     ('MAO','BVB','Inglés'),	" +
        "	('GIG','MAO','Portugués'),     ('GIG','MAO','Inglés'),     ('MCZ','BSB','Portugués'),     ('MCZ','BSB','Inglés'),     ('BSB','MCZ','Portugués'),	" +
        "	('BSB','MCZ','Inglés'),     ('MAO','GIG','Portugués'),     ('MAO','GIG','Inglés'),     ('BSB','CNF','Portugués'),     ('BSB','CNF','Inglés'),	" +
        "	('IMP','BSB','Portugués'),     ('IMP','BSB','Inglés'),     ('SLZ','IMP','Portugués'),     ('SLZ','IMP','Inglés'),     ('FOR','SLZ','Portugués'),	" +
        "	('FOR','SLZ','Inglés'),     ('AJU','GRU','Portugués'),     ('AJU','GRU','Inglés'),     ('GRU','AJU','Portugués'),     ('GRU','AJU','Inglés'),	" +
        "	('FOR','REC','Portugués'),     ('FOR','REC','Inglés'),     ('PVH','BSB','Portugués'),     ('PVH','BSB','Inglés'),     ('BSB','PVH','Portugués'),	" +
        "	('BSB','PVH','Inglés'),     ('BSB','MCP','Portugués'),     ('BSB','MCP','Inglés'),     ('AJU','BSB','Portugués'),     ('AJU','BSB','Inglés'),	" +
        "	('BSB','AJU','Portugués'),     ('BSB','AJU','Inglés'),     ('SLZ','GIG','Portugués'),     ('SLZ','GIG','Inglés'),     ('GIG','SLZ','Portugués'),	" +
        "	('GIG','SLZ','Inglés'),     ('BSB','IMP','Portugués'),     ('BSB','IMP','Inglés'),     ('IMP','SLZ','Portugués'),     ('IMP','SLZ','Inglés'),	" +
        "	('THE','GRU','Portugués'),     ('THE','GRU','Inglés'),     ('GRU','THE','Portugués'),     ('GRU','THE','Inglés'),     ('RBR','BSB','Portugués'),	" +
        "	('RBR','BSB','Inglés'),     ('BSB','RBR','Portugués'),     ('BSB','RBR','Inglés'),     ('BSB','CGR','Portugués'),     ('BSB','CGR','Inglés'),	" +
        "	('CGR','BSB','Portugués'),     ('CGR','BSB','Inglés'),     ('CGR','GRU','Portugués'),     ('CGR','GRU','Inglés'),     ('RBR','PVH','Portugués'),	" +
        "	('RBR','PVH','Inglés'),     ('PVH','RBR','Portugués'),     ('PVH','RBR','Inglés'),     ('BSB','CGB','Portugués'),     ('BSB','CGB','Inglés'),	" +
        "	('GRU','CGR','Portugués'),     ('GRU','CGR','Inglés'),     ('CNF','SSA','Portugués'),     ('CNF','SSA','Inglés'),     ('GIG','MCZ','Portugués'),	" +
        "	('GIG','MCZ','Inglés'),     ('MCZ','GIG','Portugués'),     ('MCZ','GIG','Inglés'),     ('FLN','BSB','Portugués'),     ('FLN','BSB','Inglés'),	" +
        "	('BSB','FLN','Portugués'),     ('BSB','FLN','Inglés'),     ('IGU','BSB','Portugués'),     ('IGU','BSB','Inglés'),     ('BSB','IGU','Portugués'),	" +
        "	('BSB','IGU','Inglés'),     ('MCZ','CGH','Portugués'),     ('MCZ','CGH','Inglés'),     ('PMW','CGH','Portugués'),     ('PMW','CGH','Inglés'),	" +
        "	('CGH','MCZ','Portugués'),     ('CGH','MCZ','Inglés'),     ('CGH','PMW','Portugués'),     ('CGH','PMW','Inglés'),     ('LDB','CGH','Portugués'),	" +
        "	('LDB','CGH','Inglés'),     ('CGH','LDB','Portugués'),     ('CGH','LDB','Inglés'),     ('CNF','SDU','Portugués'),     ('CNF','SDU','Inglés'),	" +
        "	('SDU','CNF','Portugués'),     ('SDU','CNF','Inglés'),     ('BPS','GYN','Portugués'),     ('BPS','GYN','Inglés'),     ('GYN','BPS','Portugués'),	" +
        "	('GYN','BPS','Inglés'),     ('PMW','BSB','Portugués'),     ('PMW','BSB','Inglés'),     ('BSB','PMW','Portugués'),     ('BSB','PMW','Inglés'),	" +
        "	('THE','BSB','Portugués'),     ('THE','BSB','Inglés'),     ('MAO','BEL','Portugués'),     ('MAO','BEL','Inglés'),     ('BEL','FOR','Portugués'),	" +
        "	('BEL','FOR','Inglés'),     ('FOR','BEL','Portugués'),     ('FOR','BEL','Inglés'),     ('BEL','MAO','Portugués'),     ('BEL','MAO','Inglés'),	" +
        "	('FOR','THE','Portugués'),     ('FOR','THE','Inglés'),     ('THE','FOR','Portugués'),     ('THE','FOR','Inglés'),     ('GIG','CWB','Portugués'),	" +
        "	('GIG','CWB','Inglés'),     ('CWB','GIG','Portugués'),     ('CWB','GIG','Inglés'),     ('BVB','BSB','Portugués'),     ('BVB','BSB','Inglés'),	" +
        "	('BSB','BVB','Portugués'),     ('BSB','BVB','Inglés'),     ('BSB','MAB','Portugués'),     ('BSB','MAB','Inglés'),     ('FOR','SSA','Portugués'),	" +
        "	('FOR','SSA','Inglés'),     ('SJP','BSB','Portugués'),     ('SJP','BSB','Inglés'),     ('SSA','FOR','Portugués'),     ('SSA','FOR','Inglés'),	" +
        "	('BOG','GRU','Portugués'),     ('BOG','GRU','Inglés'),     ('GRU','BOG','Español'),     ('GRU','BOG','Inglés'),     ('GRU','SCL','Español'),	" +
        "	('GRU','SCL','Inglés'),     ('SCL','GRU','Portugués'),     ('SCL','GRU','Inglés'),     ('GRU','AEP','Español'),     ('GRU','AEP','Inglés'),	" +
        "	('AEP','GRU','Portugués'),     ('AEP','GRU','Inglés'),     ('ASU','GRU','Portugués'),     ('ASU','GRU','Inglés'),     ('EZE','GRU','Portugués'),	" +
        "	('EZE','GRU','Inglés'),     ('BOG','EZE','Español'),     ('BOG','EZE','Inglés'),     ('GRU','ASU','Español'),     ('GRU','ASU','Inglés'),	" +
        "	('GRU','EZE','Español'),     ('GRU','EZE','Inglés'),     ('EZE','BOG','Español'),     ('EZE','BOG','Inglés'),     ('SCL','GIG','Portugués'),	" +
        "	('SCL','GIG','Inglés'),     ('GIG','SCL','Español'),     ('GIG','SCL','Inglés'),     ('MVD','GRU','Portugués'),     ('MVD','GRU','Inglés'),	" +
        "	('GRU','MVD','Español'),     ('GRU','MVD','Inglés'),     ('MVD','GIG','Portugués'),     ('MVD','GIG','Inglés'),     ('GIG','MVD','Español'),	" +
        "	('GIG','MVD','Inglés'),     ('MIA','BSB','Portugués'),     ('MIA','BSB','Inglés'),     ('BSB','MIA','Inglés'),     ('BSB','MIA','Portugués'),	" +
        "	('MIA','GIG','Portugués'),     ('MIA','GIG','Inglés'),     ('GIG','MIA','Inglés'),     ('GIG','MIA','Portugués'),     ('MXP','GRU','Portugués'),	" +
        "	('MXP','GRU','Inglés'),     ('GRU','MXP','Inglés'),     ('GRU','MXP','Portugués'),     ('MAD','GRU','Portugués'),     ('MAD','GRU','Inglés'),	" +
        "	('GRU','MAD','Inglés'),     ('GRU','MAD','Portugués'),     ('LIM','GRU','Portugués'),     ('LIM','GRU','Inglés'),     ('GRU','LIM','Español'),	" +
        "	('GRU','LIM','Inglés'),     ('FRA','GRU','Portugués'),     ('FRA','GRU','Inglés'),     ('GRU','FRA','Inglés'),     ('GRU','FRA','Portugués'),	" +
        "	('MIA','MAO','Portugués'),     ('MIA','MAO','Inglés'),     ('MAO','MIA','Inglés'),     ('MAO','MIA','Portugués'),     ('JFK','GIG','Portugués'),	" +
        "	('JFK','GIG','Inglés'),     ('GIG','JFK','Inglés'),     ('GIG','JFK','Portugués'),     ('JFK','GRU','Portugués'),     ('JFK','GRU','Inglés'),	" +
        "	('GRU','JFK','Inglés'),     ('GRU','JFK','Portugués'),     ('LHR','GRU','Portugués'),     ('LHR','GRU','Inglés'),     ('GRU','LHR','Inglés'),	" +
        "	('GRU','LHR','Portugués'),     ('MCO','GRU','Portugués'),     ('MCO','GRU','Inglés'),     ('GRU','MCO','Inglés'),     ('GRU','MCO','Portugués'),	" +
        "	('MIA','GRU','Portugués'),     ('MIA','GRU','Inglés'),     ('GRU','MIA','Inglés'),     ('GRU','MIA','Portugués'),     ('MIA','BEL','Portugués'),	" +
        "	('MIA','BEL','Inglés'),     ('BEL','MIA','Inglés'),     ('BEL','MIA','Portugués'),     ('LIM','SCL','Español'),     ('LIM','SCL','Inglés'),	" +
        "	('SCL','LIM','Español'),     ('SCL','LIM','Inglés'),     ('GRU','CDG','Inglés'),     ('GRU','CDG','Portugués'),     ('YYZ','JFK','Español'),	" +
        "	('YYZ','JFK','Inglés'),     ('JFK','YYZ','Español'),     ('JFK','YYZ','Inglés'),     ('PUJ','BSB','Portugués'),     ('PUJ','BSB','Inglés'),	" +
        "	('BSB','PUJ','Español'),     ('BSB','PUJ','Inglés'),     ('COR','GRU','Portugués'),     ('COR','GRU','Inglés'),     ('GRU','COR','Español'),	" +
        "	('GRU','COR','Inglés'),     ('CDG','GRU','Portugués'),     ('CDG','GRU','Inglés'),     ('MEX','GRU','Portugués'),     ('MEX','GRU','Inglés'),	" +
        "	('GRU','MEX','Español'),     ('GRU','MEX','Inglés'),     ('BCN','GRU','Portugués'),     ('BCN','GRU','Inglés'),     ('GRU','BCN','Inglés'),	" +
        "	('GRU','BCN','Portugués'),     ('EZE','REC','Portugués'),     ('EZE','REC','Inglés'),     ('REC','EZE','Español'),     ('REC','EZE','Inglés'),	" +
        "	('EZE','BSB','Portugués'),     ('EZE','BSB','Inglés'),     ('BSB','EZE','Español'),     ('BSB','EZE','Inglés'),     ('ROS','GRU','Portugués'),	" +
        "	('ROS','GRU','Inglés'),     ('GRU','ROS','Español'),     ('GRU','ROS','Inglés'),     ('MIA','FOR','Portugués'),     ('MIA','FOR','Inglés'),	" +
        "	('FOR','MIA','Inglés'),     ('FOR','MIA','Portugués'),     ('PDP','GRU','Portugués'),     ('PDP','GRU','Inglés'),     ('GRU','PDP','Español'),	" +
        "	('GRU','PDP','Inglés'),     ('JNB','GRU','Portugués'),     ('JNB','GRU','Inglés'),     ('GRU','JNB','Inglés'),     ('GRU','JNB','Portugués'),	" +
        "	('MIA','REC','Portugués'),     ('MIA','REC','Inglés'),     ('REC','MIA','Inglés'),     ('REC','MIA','Portugués'),     ('NVT','GRU','Portugués'),	" +
        "	('NVT','GRU','Inglés'),     ('GRU','NVT','Portugués'),     ('GRU','NVT','Inglés'),     ('BPS','CGH','Portugués'),     ('BPS','CGH','Inglés'),	" +
        "	('CGH','BPS','Portugués'),     ('CGH','BPS','Inglés'),     ('BPS','POA','Portugués'),     ('BPS','POA','Inglés'),     ('POA','BPS','Portugués'),	" +
        "	('POA','BPS','Inglés'),     ('BPS','VCP','Portugués'),     ('BPS','VCP','Inglés'),     ('VCP','BPS','Portugués'),     ('VCP','BPS','Inglés'),	" +
        "	('BPS','SJP','Portugués'),     ('BPS','SJP','Inglés'),     ('SJP','BPS','Portugués'),     ('SJP','BPS','Inglés'),     ('BPS','FLN','Portugués'),	" +
        "	('BPS','FLN','Inglés'),     ('FLN','BPS','Portugués'),     ('FLN','BPS','Inglés'),     ('BPS','GIG','Portugués'),     ('BPS','GIG','Inglés'),	" +
        "	('GIG','BPS','Portugués'),     ('GIG','BPS','Inglés'),     ('BPS','CWB','Portugués'),     ('BPS','CWB','Inglés'),     ('CWB','BPS','Portugués'),	" +
        "	('CWB','BPS','Inglés'),     ('FOR','POA','Portugués'),     ('FOR','POA','Inglés'),     ('POA','FOR','Portugués'),     ('POA','FOR','Inglés'),	" +
        "	('REC','POA','Portugués'),     ('REC','POA','Inglés'),     ('POA','REC','Portugués'),     ('POA','REC','Inglés'),     ('MCZ','CNF','Portugués'),	" +
        "	('MCZ','CNF','Inglés'),     ('CNF','MCZ','Portugués'),     ('CNF','MCZ','Inglés'),     ('CUN','GRU','Portugués'),     ('CUN','GRU','Inglés'),	" +
        "	('GRU','CUN','Español'),     ('GRU','CUN','Inglés'),     ('LHR','GIG','Portugués'),     ('LHR','GIG','Inglés'),     ('SSA','MVD','Español'),	" +
        "	('SSA','MVD','Inglés'),     ('MVD','SSA','Portugués'),     ('MVD','SSA','Inglés'),     ('MVD','BSB','Portugués'),     ('MVD','BSB','Inglés'),	" +
        "	('MVD','CWB','Portugués'),     ('MVD','CWB','Inglés'),     ('BPS','MVD','Español'),     ('BPS','MVD','Inglés'),     ('MVD','BPS','Portugués'),	" +
        "	('MVD','BPS','Inglés'),     ('CWB','MVD','Español'),     ('CWB','MVD','Inglés'),     ('MVD','SCL','Español'),     ('MVD','SCL','Inglés'),	" +
        "	('SCL','MVD','Español'),     ('SCL','MVD','Inglés'),     ('SCL','PUQ','Español'),     ('SCL','PUQ','Inglés'),     ('ANF','SCL','Español'),	" +
        "	('ANF','SCL','Inglés'),     ('SCL','ANF','Español'),     ('SCL','ANF','Inglés'),     ('SCL','ZCO','Español'),     ('SCL','ZCO','Inglés'),	" +
        "	('ZCO','SCL','Español'),     ('ZCO','SCL','Inglés'),     ('SCL','PMC','Español'),     ('SCL','PMC','Inglés'),     ('PMC','SCL','Español'),	" +
        "	('PMC','SCL','Inglés'),     ('SCL','BBA','Español'),     ('SCL','BBA','Inglés'),     ('BBA','SCL','Español'),     ('BBA','SCL','Inglés'),	" +
        "	('PUQ','SCL','Español'),     ('PUQ','SCL','Inglés'),     ('PMC','PUQ','Español'),     ('PMC','PUQ','Inglés'),     ('PUQ','PMC','Español'),	" +
        "	('PUQ','PMC','Inglés'),     ('CPO','SCL','Español'),     ('CPO','SCL','Inglés'),     ('SCL','CPO','Español'),     ('SCL','CPO','Inglés'),	" +
        "	('CJC','SCL','Español'),     ('CJC','SCL','Inglés'),     ('SCL','CJC','Español'),     ('SCL','CJC','Inglés'),     ('CJC','LSC','Español'),	" +
        "	('CJC','LSC','Inglés'),     ('LSC','SCL','Español'),     ('LSC','SCL','Inglés'),     ('LSC','CJC','Español'),     ('LSC','CJC','Inglés'),	" +
        "	('SCL','LSC','Español'),     ('SCL','LSC','Inglés'),     ('IQQ','SCL','Español'),     ('IQQ','SCL','Inglés'),     ('SCL','IQQ','Español'),	" +
        "	('SCL','IQQ','Inglés'),     ('IQQ','ANF','Español'),     ('IQQ','ANF','Inglés'),     ('ANF','IQQ','Español'),     ('ANF','IQQ','Inglés'),	" +
        "	('ARI','SCL','Español'),     ('ARI','SCL','Inglés'),     ('SCL','ARI','Español'),     ('SCL','ARI','Inglés'),     ('ARI','IQQ','Español'),	" +
        "	('ARI','IQQ','Inglés'),     ('IQQ','ARI','Español'),     ('IQQ','ARI','Inglés'),     ('SCL','CCP','Español'),     ('SCL','CCP','Inglés'),	" +
        "	('CCP','SCL','Español'),     ('CCP','SCL','Inglés'),     ('ZOS','SCL','Español'),     ('ZOS','SCL','Inglés'),     ('SCL','ZAL','Español'),	" +
        "	('SCL','ZAL','Inglés'),     ('ZAL','ZOS','Español'),     ('ZAL','ZOS','Inglés'),     ('PMC','BBA','Español'),     ('PMC','BBA','Inglés'),	" +
        "	('BBA','PMC','Español'),     ('BBA','PMC','Inglés'),     ('ANF','LSC','Español'),     ('ANF','LSC','Inglés'),     ('LSC','ANF','Español'),	" +
        "	('LSC','ANF','Inglés'),     ('SCL','EZE','Español'),     ('SCL','EZE','Inglés'),     ('EZE','SCL','Español'),     ('EZE','SCL','Inglés'),	" +
        "	('SCL','AEP','Español'),     ('SCL','AEP','Inglés'),     ('AEP','SCL','Español'),     ('AEP','SCL','Inglés'),     ('MIA','SCL','Español'),	" +
        "	('MIA','SCL','Inglés'),     ('SCL','MIA','Español'),     ('SCL','MIA','Inglés'),     ('MCO','SCL','Español'),     ('MCO','SCL','Inglés'),	" +
        "	('SCL','MCO','Español'),     ('SCL','MCO','Inglés'),     ('JFK','LIM','Español'),     ('JFK','LIM','Inglés'),     ('LIM','JFK','Español'),	" +
        "	('LIM','JFK','Inglés'),     ('JFK','SCL','Español'),     ('JFK','SCL','Inglés'),     ('SCL','JFK','Español'),     ('SCL','JFK','Inglés'),	" +
        "	('GYE','SCL','Español'),     ('GYE','SCL','Inglés'),     ('SCL','GYE','Español'),     ('SCL','GYE','Inglés'),     ('BOG','SCL','Español'),	" +
        "	('BOG','SCL','Inglés'),     ('SCL','BOG','Español'),     ('SCL','BOG','Inglés'),     ('BOG','MIA','Español'),     ('BOG','MIA','Inglés'),	" +
        "	('MIA','BOG','Español'),     ('MIA','BOG','Inglés'),     ('MIA','CUN','Español'),     ('MIA','CUN','Inglés'),     ('CUN','SCL','Español'),	" +
        "	('CUN','SCL','Inglés'),     ('SCL','CUN','Español'),     ('SCL','CUN','Inglés'),     ('CUN','MIA','Español'),     ('CUN','MIA','Inglés'),	" +
        "	('MIA','HAV','Español'),     ('MIA','HAV','Inglés'),     ('HAV','SCL','Español'),     ('HAV','SCL','Inglés'),     ('SCL','HAV','Español'),	" +
        "	('SCL','HAV','Inglés'),     ('HAV','MIA','Español'),     ('HAV','MIA','Inglés'),     ('SCL','PUJ','Español'),     ('SCL','PUJ','Inglés'),	" +
        "	('PUJ','SCL','Español'),     ('PUJ','SCL','Inglés'),     ('LAX','LIM','Español'),     ('LAX','LIM','Inglés'),     ('LIM','LAX','Español'),	" +
        "	('LIM','LAX','Inglés'),     ('LAX','SCL','Español'),     ('LAX','SCL','Inglés'),     ('SCL','LAX','Español'),     ('SCL','LAX','Inglés'),	" +
        "	('SCL','MEX','Español'),     ('SCL','MEX','Inglés'),     ('MEX','SCL','Español'),     ('MEX','SCL','Inglés'),     ('FRA','MAD','Español'),	" +
        "	('FRA','MAD','Inglés'),     ('MAD','SCL','Español'),     ('MAD','SCL','Inglés'),     ('MAD','FRA','Español'),     ('MAD','FRA','Inglés'),	" +
        "	('SCL','MAD','Español'),     ('SCL','MAD','Inglés'),     ('FLN','SCL','Español'),     ('FLN','SCL','Inglés'),     ('SCL','FLN','Portugués'),	" +
        "	('SCL','FLN','Inglés'),     ('SCL','AKL','Español'),     ('SCL','AKL','Inglés'),     ('AKL','SYD','Español'),     ('AKL','SYD','Inglés'),	" +
        "	('SYD','AKL','Español'),     ('SYD','AKL','Inglés'),     ('AKL','SCL','Español'),     ('AKL','SCL','Inglés'),     ('PPT','IPC','Español'),	" +
        "	('PPT','IPC','Inglés'),     ('IPC','SCL','Español'),     ('IPC','SCL','Inglés'),     ('SCL','IPC','Español'),     ('SCL','IPC','Inglés'),	" +
        "	('IPC','PPT','Español'),     ('IPC','PPT','Inglés'),     ('LPB','IQQ','Español'),     ('LPB','IQQ','Inglés'),     ('IQQ','LPB','Español'),	" +
        "	('IQQ','LPB','Inglés'),     ('VVI','IQQ','Español'),     ('VVI','IQQ','Inglés'),     ('IQQ','VVI','Español'),     ('IQQ','VVI','Inglés'),	" +
        "	('UAQ','SCL','Español'),     ('UAQ','SCL','Inglés'),     ('SCL','UAQ','Español'),     ('SCL','UAQ','Inglés'),     ('MDZ','SCL','Español'),	" +
        "	('MDZ','SCL','Inglés'),     ('SCL','MDZ','Español'),     ('SCL','MDZ','Inglés'),     ('COR','SCL','Español'),     ('COR','SCL','Inglés'),	" +
        "	('SCL','COR','Español'),     ('SCL','COR','Inglés'),     ('ASU','SCL','Español'),     ('ASU','SCL','Inglés'),     ('SCL','ASU','Español'),	" +
        "	('SCL','ASU','Inglés'),     ('LPB','SCL','Español'),     ('LPB','SCL','Inglés'),     ('SCL','LPB','Español'),     ('SCL','LPB','Inglés'),	" +
        "	('SLA','IQQ','Español'),     ('SLA','IQQ','Inglés'),     ('IQQ','SLA','Español'),     ('IQQ','SLA','Inglés'),     ('PUQ','MPN','Español'),	" +
        "	('PUQ','MPN','Inglés'),     ('MPN','PUQ','Español'),     ('MPN','PUQ','Inglés'),     ('RGL','MPN','Español'),     ('RGL','MPN','Inglés'),	" +
        "	('PUQ','RGL','Español'),     ('PUQ','RGL','Inglés'),     ('RGL','PUQ','Español'),     ('RGL','PUQ','Inglés'),     ('MPN','RGL','Español'),	" +
        "	('MPN','RGL','Inglés'),     ('IGU','SCL','Español'),     ('IGU','SCL','Inglés'),     ('SCL','IGU','Portugués'),     ('SCL','IGU','Inglés'),	" +
        "	('FLN','CCP','Español'),     ('FLN','CCP','Inglés'),     ('CCP','FLN','Portugués'),     ('CCP','FLN','Inglés'),     ('FLN','LSC','Español'),	" +
        "	('FLN','LSC','Inglés'),     ('LSC','FLN','Portugués'),     ('LSC','FLN','Inglés'),     ('CJC','ANF','Español'),     ('CJC','ANF','Inglés'),	" +
        "	('UIO','LIM','Español'),     ('UIO','LIM','Inglés'),     ('LIM','EZE','Español'),     ('LIM','EZE','Inglés'),     ('LIM','UIO','Español'),	" +
        "	('LIM','UIO','Inglés'),     ('EZE','LIM','Español'),     ('EZE','LIM','Inglés'),     ('GYE','LIM','Español'),     ('GYE','LIM','Inglés'),	" +
        "	('LIM','GYE','Español'),     ('LIM','GYE','Inglés'),     ('MAD','GYE','Español'),     ('MAD','GYE','Inglés'),     ('GYE','MAD','Español'),	" +
        "	('GYE','MAD','Inglés'),     ('UIO','GYE','Español'),     ('UIO','GYE','Inglés'),     ('LIM','CUZ','Español'),     ('LIM','CUZ','Inglés'),	" +
        "	('CUZ','LIM','Español'),     ('CUZ','LIM','Inglés'),     ('CUZ','PEM','Español'),     ('CUZ','PEM','Inglés'),     ('PEM','CUZ','Español'),	" +
        "	('PEM','CUZ','Inglés'),     ('LIM','PEM','Español'),     ('LIM','PEM','Inglés'),     ('PEM','LIM','Español'),     ('PEM','LIM','Inglés'),	" +
        "	('LIM','JUL','Español'),     ('LIM','JUL','Inglés'),     ('JUL','LIM','Español'),     ('JUL','LIM','Inglés'),     ('CUZ','AQP','Español'),	" +
        "	('CUZ','AQP','Inglés'),     ('AQP','CUZ','Español'),     ('AQP','CUZ','Inglés'),     ('LIM','AQP','Español'),     ('LIM','AQP','Inglés'),	" +
        "	('AQP','LIM','Español'),     ('AQP','LIM','Inglés'),     ('JUL','CUZ','Español'),     ('JUL','CUZ','Inglés'),     ('CUZ','JUL','Español'),	" +
        "	('CUZ','JUL','Inglés'),     ('LIM','TCQ','Español'),     ('LIM','TCQ','Inglés'),     ('TCQ','LIM','Español'),     ('TCQ','LIM','Inglés'),	" +
        "	('LIM','AYP','Español'),     ('LIM','AYP','Inglés'),     ('AYP','LIM','Español'),     ('AYP','LIM','Inglés'),     ('TRU','LIM','Español'),	" +
        "	('TRU','LIM','Inglés'),     ('LIM','TRU','Español'),     ('LIM','TRU','Inglés'),     ('TYL','LIM','Español'),     ('TYL','LIM','Inglés'),	" +
        "	('LIM','TYL','Español'),     ('LIM','TYL','Inglés'),     ('TPP','LIM','Español'),     ('TPP','LIM','Inglés'),     ('LIM','TPP','Español'),	" +
        "	('LIM','TPP','Inglés'),     ('CIX','LIM','Español'),     ('CIX','LIM','Inglés'),     ('LIM','CIX','Español'),     ('LIM','CIX','Inglés'),	" +
        "	('CJA','LIM','Español'),     ('CJA','LIM','Inglés'),     ('LIM','CJA','Español'),     ('LIM','CJA','Inglés'),     ('PIU','LIM','Español'),	" +
        "	('PIU','LIM','Inglés'),     ('LIM','PIU','Español'),     ('LIM','PIU','Inglés'),     ('TBP','LIM','Español'),     ('TBP','LIM','Inglés'),	" +
        "	('LIM','TBP','Español'),     ('LIM','TBP','Inglés'),     ('PCL','LIM','Español'),     ('PCL','LIM','Inglés'),     ('LIM','PCL','Español'),	" +
        "	('LIM','PCL','Inglés'),     ('IQT','LIM','Español'),     ('IQT','LIM','Inglés'),     ('LIM','IQT','Español'),     ('LIM','IQT','Inglés'),	" +
        "	('LIM','ROS','Español'),     ('LIM','ROS','Inglés'),     ('ROS','LIM','Español'),     ('ROS','LIM','Inglés'),     ('COR','LIM','Español'),	" +
        "	('COR','LIM','Inglés'),     ('LIM','COR','Español'),     ('LIM','COR','Inglés'),     ('BCN','LIM','Español'),     ('BCN','LIM','Inglés'),	" +
        "	('LIM','BCN','Español'),     ('LIM','BCN','Inglés'),     ('LIM','SLA','Español'),     ('LIM','SLA','Inglés'),     ('SLA','LIM','Español'),	" +
        "	('SLA','LIM','Inglés'),     ('LIM','IGU','Portugués'),     ('LIM','IGU','Inglés'),     ('IGU','LIM','Español'),     ('IGU','LIM','Inglés'),	" +
        "	('MIA','LIM','Español'),     ('MIA','LIM','Inglés'),     ('LIM','MIA','Español'),     ('LIM','MIA','Inglés'),     ('LPB','LIM','Español'),	" +
        "	('LPB','LIM','Inglés'),     ('VVI','LPB','Español'),     ('VVI','LPB','Inglés'),     ('LIM','VVI','Español'),     ('LIM','VVI','Inglés'),	" +
        "	('LIM','LPB','Español'),     ('LIM','LPB','Inglés'),     ('VVI','LIM','Español'),     ('VVI','LIM','Inglés'),     ('LPB','VVI','Español'),	" +
        "	('LPB','VVI','Inglés'),     ('CUN','LIM','Español'),     ('CUN','LIM','Inglés'),     ('LIM','CUN','Español'),     ('LIM','CUN','Inglés'),	" +
        "	('HAV','LIM','Español'),     ('HAV','LIM','Inglés'),     ('LIM','HAV','Español'),     ('LIM','HAV','Inglés'),     ('BOG','LIM','Español'),	" +
        "	('BOG','LIM','Inglés'),     ('LIM','BOG','Español'),     ('LIM','BOG','Inglés'),     ('CTG','LIM','Español'),     ('CTG','LIM','Inglés'),	" +
        "	('LIM','CTG','Español'),     ('LIM','CTG','Inglés'),     ('PUJ','LIM','Español'),     ('PUJ','LIM','Inglés'),     ('LIM','PUJ','Español'),	" +
        "	('LIM','PUJ','Inglés'),     ('MEX','LIM','Español'),     ('MEX','LIM','Inglés'),     ('LIM','MEX','Español'),     ('LIM','MEX','Inglés'),	" +
        "	('LIM','MCO','Español'),     ('LIM','MCO','Inglés'),     ('MCO','LIM','Español'),     ('MCO','LIM','Inglés'),     ('MAD','LIM','Español'),	" +
        "	('MAD','LIM','Inglés'),     ('LIM','MAD','Español'),     ('LIM','MAD','Inglés'),     ('LIM','ANF','Español'),     ('LIM','ANF','Inglés'),	" +
        "	('ANF','LIM','Español'),     ('ANF','LIM','Inglés'),     ('MVD','LIM','Español'),     ('MVD','LIM','Inglés'),     ('LIM','MVD','Español'),	" +
        "	('LIM','MVD','Inglés'),     ('IAD','LIM','Español'),     ('IAD','LIM','Inglés'),     ('LIM','IAD','Español'),     ('LIM','IAD','Inglés'),	" +
        "	('LPB','CUZ','Español'),     ('LPB','CUZ','Inglés'),     ('MDE','BOG','Español'),     ('MDE','BOG','Inglés'),     ('BOG','MDE','Español'),	" +
        "	('BOG','MDE','Inglés'),     ('ADZ','BOG','Español'),     ('ADZ','BOG','Inglés'),     ('BOG','ADZ','Español'),     ('BOG','ADZ','Inglés'),	" +
        "	('BOG','CLO','Español'),     ('BOG','CLO','Inglés'),     ('CLO','BOG','Español'),     ('CLO','BOG','Inglés'),     ('CTG','BOG','Español'),	" +
        "	('CTG','BOG','Inglés'),     ('BOG','CTG','Español'),     ('BOG','CTG','Inglés'),     ('LET','BOG','Español'),     ('LET','BOG','Inglés'),	" +
        "	('BOG','LET','Español'),     ('BOG','LET','Inglés'),     ('BAQ','BOG','Español'),     ('BAQ','BOG','Inglés'),     ('BOG','BAQ','Español'),	" +
        "	('BOG','BAQ','Inglés'),     ('SMR','BOG','Español'),     ('SMR','BOG','Inglés'),     ('BOG','SMR','Español'),     ('BOG','SMR','Inglés'),	" +
        "	('BGA','BOG','Español'),     ('BGA','BOG','Inglés'),     ('BOG','BGA','Español'),     ('BOG','BGA','Inglés'),     ('CUC','BOG','Español'),	" +
        "	('CUC','BOG','Inglés'),     ('BOG','CUC','Español'),     ('BOG','CUC','Inglés'),     ('MTR','BOG','Español'),     ('MTR','BOG','Inglés'),	" +
        "	('BOG','MTR','Español'),     ('BOG','MTR','Inglés'),     ('EYP','BOG','Español'),     ('EYP','BOG','Inglés'),     ('BOG','EYP','Español'),	" +
        "	('BOG','EYP','Inglés'),     ('PEI','BOG','Español'),     ('PEI','BOG','Inglés'),     ('BOG','PEI','Español'),     ('BOG','PEI','Inglés'),	" +
        "	('VUP','BOG','Español'),     ('VUP','BOG','Inglés'),     ('BOG','VUP','Español'),     ('BOG','VUP','Inglés'),     ('ADZ','CLO','Español'),	" +
        "	('ADZ','CLO','Inglés'),     ('CLO','ADZ','Español'),     ('CLO','ADZ','Inglés'),     ('ADZ','MDE','Español'),     ('ADZ','MDE','Inglés'),	" +
        "	('MDE','ADZ','Español'),     ('MDE','ADZ','Inglés'),     ('CTG','MDE','Español'),     ('CTG','MDE','Inglés'),     ('MDE','CTG','Español'),	" +
        "	('MDE','CTG','Inglés'),     ('CUN','BOG','Español'),     ('CUN','BOG','Inglés'),     ('BOG','CUN','Español'),     ('BOG','CUN','Inglés'),	" +
        "	('BOG','AUA','Español'),     ('BOG','AUA','Inglés'),     ('AUA','BOG','Español'),     ('AUA','BOG','Inglés'),     ('PUJ','BOG','Español'),	" +
        "	('PUJ','BOG','Inglés'),     ('BOG','PUJ','Español'),     ('BOG','PUJ','Inglés'),     ('AEP','IGR','Español'),     ('AEP','IGR','Inglés'),	" +
        "	('IGR','AEP','Español'),     ('IGR','AEP','Inglés'),     ('SLA','AEP','Español'),     ('SLA','AEP','Inglés'),     ('AEP','SLA','Español'),	" +
        "	('AEP','SLA','Inglés'),     ('SLA','EZE','Español'),     ('SLA','EZE','Inglés'),     ('TUC','AEP','Español'),     ('TUC','AEP','Inglés'),	" +
        "	('AEP','TUC','Español'),     ('AEP','TUC','Inglés'),     ('COR','AEP','Español'),     ('COR','AEP','Inglés'),     ('AEP','COR','Español'),	" +
        "	('AEP','COR','Inglés'),     ('IGR','COR','Español'),     ('IGR','COR','Inglés'),     ('BHI','AEP','Español'),     ('BHI','AEP','Inglés'),	" +
        "	('AEP','BHI','Español'),     ('AEP','BHI','Inglés'),     ('MDZ','AEP','Español'),     ('MDZ','AEP','Inglés'),     ('AEP','MDZ','Español'),	" +
        "	('AEP','MDZ','Inglés'),     ('NQN','AEP','Español'),     ('NQN','AEP','Inglés'),     ('AEP','NQN','Español'),     ('AEP','NQN','Inglés'),	" +
        "	('UAQ','AEP','Español'),     ('UAQ','AEP','Inglés'),     ('AEP','UAQ','Español'),     ('AEP','UAQ','Inglés'),     ('MDZ','UAQ','Español'),	" +
        "	('MDZ','UAQ','Inglés'),     ('BRC','AEP','Español'),     ('BRC','AEP','Inglés'),     ('BRC','EZE','Español'),     ('BRC','EZE','Inglés'),	" +
        "	('AEP','BRC','Español'),     ('AEP','BRC','Inglés'),     ('EZE','BRC','Español'),     ('EZE','BRC','Inglés'),     ('RGL','AEP','Español'),	" +
        "	('RGL','AEP','Inglés'),     ('AEP','RGL','Español'),     ('AEP','RGL','Inglés'),     ('CRD','AEP','Español'),     ('CRD','AEP','Inglés'),	" +
        "	('AEP','CRD','Español'),     ('AEP','CRD','Inglés'),     ('FTE','AEP','Español'),     ('FTE','AEP','Inglés'),     ('AEP','FTE','Español'),	" +
        "	('AEP','FTE','Inglés'),     ('FTE','USH','Español'),     ('FTE','USH','Inglés'),     ('USH','AEP','Español'),     ('USH','AEP','Inglés'),	" +
        "	('USH','FTE','Español'),     ('USH','FTE','Inglés'),     ('AEP','USH','Español'),     ('AEP','USH','Inglés'),     ('GIG','EZE','Español'),	" +
        "	('GIG','EZE','Inglés'),     ('EZE','GIG','Portugués'),     ('EZE','GIG','Inglés',('MDZ','LIM','Español'),     ('MDZ','LIM','Inglés'),	" +
        "	('LIM','MDZ','Español'),     ('LIM','MDZ','Inglés'),     ('EZE','USH','Español'),     ('EZE','USH','Inglés'),     ('AGT','ASU','Español'),	" +
        "	('AGT','ASU','Inglés'),     ('GRU','AGT','Español'),     ('GRU','AGT','Inglés'),     ('AGT','GRU','Portugués'),     ('AGT','GRU','Inglés'),	" +
        "	('ASU','AGT','Español'),     ('ASU','AGT','Inglés'),     ('LIM','ASU','Español'),     ('LIM','ASU','Inglés'),     ('ASU','LIM','Español'),	" +
        "	('ASU','LIM','Inglés'),     ('ASU','EZE','Español'),     ('ASU','EZE','Inglés'),     ('EZE','ASU','Español'),     ('EZE','ASU','Inglés'),	" +
        "	('MIA','UIO','Español'),     ('MIA','UIO','Inglés'),     ('UIO','MIA','Español'),     ('UIO','MIA','Inglés'),     ('JFK','GYE','Español'),	" +
        "	('JFK','GYE','Inglés'),     ('GYE','JFK','Español'),     ('GYE','JFK','Inglés'),     ('UIO','CUE','Español'),     ('UIO','CUE','Inglés'),	" +
        "	('CUE','UIO','Español'),     ('CUE','UIO','Inglés'),     ('GYE','GPS','Español'),     ('GYE','GPS','Inglés'),     ('GPS','GYE','Español'),	" +
        "	('GPS','GYE','Inglés'),     ('GYE','UIO','Español'),     ('GYE','UIO','Inglés'),     ('UIO','GPS','Español'),     ('UIO','GPS','Inglés'),	" +
        "	('GPS','UIO','Español'),     ('GPS','UIO','Inglés'),     ('GYE','SCY','Español'),     ('GYE','SCY','Inglés'),     ('SCY','GYE','Español'),	" +
        "	('SCY','GYE','Inglés'),     ('CCS','SCL','Español'),     ('CCS','SCL','Inglés'),     ('SCL','CCS','Español'),     ('SCL','CCS','Inglés'),	" +
        "	('CCS','LIM','Español'),     ('CCS','LIM','Inglés'),     ('LIM','CCS','Español'),     ('LIM','CCS','Inglés');	"

      var BoardingType = "Insert into BoardingTypeTbl values (1,'Bus'), (2,'Caminando');	"
      
      /*var user = "INSERT INTO ADMIN (user,password, date) VALUES ('user','123', date('now','-7 day'));"*/
      /*var user = "INSERT INTO ADMIN (user,password, date) VALUES ('offline','123', date('now'));"*/

      $cordovaSQLite.execute(db, Airport);
      $cordovaSQLite.execute(db, DestinationAirport1);
      $cordovaSQLite.execute(db, DestinationAirport2);
      $cordovaSQLite.execute(db, Material);
      $cordovaSQLite.execute(db, Country);
      $cordovaSQLite.execute(db, MaterialConfig);
      $cordovaSQLite.execute(db, ContingencySubMotive);
      $cordovaSQLite.execute(db, CodeShare);
      $cordovaSQLite.execute(db, AudioLanguague);
      $cordovaSQLite.execute(db, BoardingType);
      /*     $cordovaSQLite.execute(db, user);*/

      /**/

      /*      var embarque_remoto = "INSERT INTO embarque_remoto (nombre_embarqueremoto) VALUES ('remoto');";
      var idioma = "INSERT INTO idioma (nombre) VALUES ('Español'), ('Portugues'), ('Ingles');";
      var contingencia = "INSERT INTO contingencia (nombre_contingencia) VALUES ('Cancelación del vuelo'), ('ETD'),('Nueva Información (NI 1)'),('Nueva Información (NI 2)'),('Postergación de Vuelo')";
      var ruta = "INSERT INTO ruta (nombre) VALUES ('DOM'),('INT');";

      $cordovaSQLite.execute(db, embarque_remoto);
      $cordovaSQLite.execute(db, idioma);
      $cordovaSQLite.execute(db, contingencia);
      $cordovaSQLite.execute(db, ruta);
      $cordovaSQLite.execute(db, user);*/

      /* Select */
      //         var query = "SELECT * FROM admin";
      //         var value = "";
      //         $cordovaSQLite.execute(db, query, []).then(function(res){

      //             if(res.rows.length > 0){
      //                 for(var i = 0; i < res.rows.length; i++){
      //                    alert("SELECTED -> " + res.rows.item(i).user + "  " + res.rows.item(i).password + "  " +  res.rows.item(i).mac_uid);
      // /*                   value += res.rows.item(i).nom_aeropuerto+", ";*/
      //                 }
      // /*                alert(value);
      //                 console.log(value);*/
      //             }
      //             else{
      //                 console.log("No results found");
      //             }
      //         }, function(err){
      //           console.error(err);
      //        });

      /* Fin ejemplo*/


    }
  }
});
