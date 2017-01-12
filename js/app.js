app = angular.module('ucalApp',[]);

/** app.constant('form_instance','http://form.ucal.edu.pe/webservice'); */
app.constant('form_instance','SERVICE');


app.controller("ucalCtrl", function ($scope, $http, Contact) {
    $scope.sending = true;
    console.log(Drupal.settings);
	var contextTitle = (Drupal.settings.contexto.indexOf("_") >= 0) ? Drupal.settings.contexto.split("_") : Drupal.settings.contexto.split("-");
	jQuery(contextTitle).each(function(k,v){ return this.charAt(0).toUpperCase() + this.substr(1);});
    var availableOptions = [
      { nid: "5", name: "Admisión Extraordinaria" },
      { nid: "4", name: "Admisión General" },
      { nid: "21", name: "ARQ 1/2/3" },
      { nid: "16", name: "Arquitectura" },
      { nid: "17", name: "Arquitectura de interiores" },
      { nid: "7", name: "Beca Creativa" },
      { nid: "14", name: "Café Creativo" },
      { nid: "20", name: "co-creando" },
      { nid: "25", name: "Comunica 1/2/3" },
      { nid: "18", name: "Comunicación" },
      { nid: "955", name: "Continuidad UCAL – TLS" },
      { nid: "24", name: "Creative minds" },
      { nid: "22", name: "Creative UP" },
      { nid: "23", name: "DESIGN 1/2/3" },
      { nid: "19", name: "Diseño gráfico Publicitario" },
      { nid: "26", name: "Educación Continua" }, 
      { nid: "2", name: "Evaluación de Alto Rendimiento" },
      { nid: "1", name: "Examen de admisión" },
      { nid: "9", name: "INaction Arquitectura" },
      { nid: "10", name: "INaction Arquitectura de Interiores" },
      { nid: "11", name: "INaction Comunicación" },
      { nid: "12", name: "INaction Diseño Gráfico Publicitario" },
      { nid: "27", name: "INaction Marketing e Innovación" },
      { nid: "441", name: "INaction" },      
      { nid: "125", name: "Cómo postular" }, 
      { nid: "440", name: "Participa de nuestros eventos" }, 
      { nid: "8", name: "Open Day" },
      { nid: "3", name: "Pre UCAL" },
      { nid: "15", name: "Ruta Creativa" },
      { nid: "6", name: "Traslado Externo" },
      { nid: "30", name: "Facultad de Arquitectura" },
      { nid: "31", name: "Facultad de Comunicación" },
      { nid: "32", name: "Facultad de Diseño Gráfico" },
      { nid: "33", name: "Facultad de Negocios e Innovación" },
      { nid: "13", name: "Visita Guiada a UCAL" },
      { nid: "41", name: "Noticias y Eventos" },

    ];
    if (parseInt(contextTitle)) {
      $scope.availableOptions = availableOptions;
    }
    else {
       /*var otroElemento = { nid: Drupal.settings.contexto, name: contextTitle.join(' ')};
       availableOptions.push(otroElemento);
       $scope.availableOptions = otroElemento;*/
      $scope.availableOptions = availableOptions = [
      {nid: Drupal.settings.contexto, name: contextTitle.join(' ')},
      { nid: "5", name: "Admisión Extraordinaria" },
      { nid: "4", name: "Admisión General" },
      { nid: "21", name: "ARQ 1/2/3" },
      { nid: "16", name: "Arquitectura" },
      { nid: "17", name: "Arquitectura de interiores" },
      { nid: "7", name: "Beca Creativa" },
      { nid: "14", name: "Café Creativo" },
      { nid: "20", name: "co-creando" },
      { nid: "25", name: "Comunica 1/2/3" },
      { nid: "18", name: "Comunicación" },
      { nid: "955", name: "Continuidad UCAL – TLS" },
      { nid: "24", name: "Creative minds" },
      { nid: "22", name: "Creative UP" },
      { nid: "23", name: "DESIGN 1/2/3" },
      { nid: "19", name: "Diseño gráfico Publicitario" },
      { nid: "26", name: "Educación Continua" }, 
      { nid: "2", name: "Evaluación de Alto Rendimiento" },
      { nid: "1", name: "Examen de admisión" },
      { nid: "9", name: "INaction Arquitectura" },
      { nid: "10", name: "INaction Arquitectura de Interiores" },
      { nid: "11", name: "INaction Comunicación" },
      { nid: "12", name: "INaction Diseño Gráfico Publicitario" },
      { nid: "27", name: "INaction Marketing e Innovación" },
      { nid: "441", name: "INaction" },      
      { nid: "125", name: "Cómo postular" }, 
      { nid: "440", name: "Participa de nuestros eventos" }, 
      { nid: "8", name: "Open Day" },
      { nid: "3", name: "Pre UCAL" },
      { nid: "15", name: "Ruta Creativa" },
      { nid: "6", name: "Traslado Externo" },
      { nid: "30", name: "Facultad de Arquitectura" },
      { nid: "31", name: "Facultad de Comunicación" },
      { nid: "32", name: "Facultad de Diseño Gráfico" },
      { nid: "33", name: "Facultad de Negocios e Innovación" },
      { nid: "13", name: "Visita Guiada a UCAL" },
      { nid: "13", name: "Visita Guiada a UCAL" }
      ];
    }

	if (Drupal.settings.section == "educacion-continua")
	{
   		$scope.carrera = "26";
	} else {
		$scope.carrera = Drupal.settings.contexto;
	}

  if (Drupal.settings.section == "calendario-eventos")
    {
      $scope.carrera = "41";
    } 
  
	
    $scope.availableCarrers = [
      { nid: "0", name: "Elegir una carrera" },
      { nid: "5", name: "Arquitectura" },
      { nid: "4", name: "Arquitectura de Interiores" },
      { nid: "21", name: "Comunicación" },
      { nid: "16", name: "Diseño Gráfico Publicitario" },   
      { nid: "35", name: "Comunicación e Imagen Corporativa" },
      { nid: "36", name: "Diseño Gráfico Estratégico" },
      { nid: "37", name: "Comunicación y Publicidad Transmedia" },
      { nid: "38", name: "Comunicación Audiovisual y Cine" },
      { nid: "39", name: "Marketing e Innovación" },
    ];
  $scope.opciones = "0";
  $scope.opciones = (Drupal.settings.carrera !== '')? Drupal.settings.carrera : "0";


	$scope.availableDiplomados = [
		{nid: "0", name: "Elegir un diplomado"},
		{nid: "fotografia-profesional", name: "Fotografía Profesional"},
		{nid: "fotografia-publicitaria", name: "Fotografía Publicitaria"},
		{nid: "diseno-espacios-residenciales", name: "Diseño de Espacios Residenciales"},
		{nid: "diseno-espacios-comerciales-corporativos", name: "Diseño de Espacios Comerciales y Corporativos"}
	];
	$scope.diplomado = (Drupal.settings.diplomado !== '')? Drupal.settings.diplomado : "0";
	


  $scope.acepto = {
    value1 : true
  };
	
    $scope.maxanio = new Date().getFullYear();

    $scope.sendForm = function () {
      $scope.message = "El pedido fué enviado...";
	  //$scope.cargando = "spinner";
        // use $.param jQuery function to serialize data from JSON
      var data = {
        "carrera":$scope.carrera,
        "opciones": $scope.opciones,
        "carrera_interes": $scope.opciones,
        "nombre":$scope.nombre,
        "apellido1":$scope.apellido1,
        "anio":$scope.anio,
        "telefono":$scope.telefono,
        "email":$scope.email
      }
      //Create account using Service
      Contact.sendInfo(data).then(function(response){
		jQuery(location).attr('href', window.location.origin + '/gracias' + window.location.href.substr(window.location.origin.length));
        //This is the success function of the promise
        $scope.user = response.data;
        $scope.logging = false;
        $scope.PostDataResponse = "El pedido fué enviado...";
        //Clean the form fields
        $scope.user = " ";
        $scope.mail = " ";
        $scope.password = " ";
        $scope.sending = false;
	$scope.cargando = "no-spinner";
      //This is the failure funcion of the promise
	//window.location.href.substr(window.location.origin.length)
	jQuery(location).attr('href', window.location.origin + '/gracias' + window.location.href.substr(window.location.origin.length));
      }, function(response){
        $scope.message = "Error: " + response.status + " - " + response.statusText;
        $scope.cargando = "no-spinner";
        $scope.sending = false;
      });
    };
    
	//jQuery("#checkbox_id").prop( "checked" );
});


app.factory('Contact', function($http, $q, form_instance) {

 return {

  sendInfo : function(data){

    var defer = $q.defer();
    var req = {
      method: 'POST',
      url: form_instance,
      headers: {
        'Content-Type': 'application/json;charset=utf-8;',
      },
	  data : data
    }
    $http(req)
      .then(function successCallback(response, status) {
        defer.resolve(data);
        jQuery(location).attr('href', window.location.origin + '/gracias' + window.location.href.substr(window.location.origin.length));
      }, function errorCallback(response) {
        defer.reject(data);
      });
    return defer.promise;
   }
 }
});

