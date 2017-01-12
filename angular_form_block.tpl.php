<?php

/**
 * @file
 * tpl file for theming the angular form
 *
 */
?>

<div ng-app='ucalApp' ng-controller="ucalCtrl" class="inner">
  <div id="informacion-spinners"> 
  <h3>Inscríbete Aquí</h3>
  <div id="message">{{ message }}</div>
  <div id="informacion-spinner" class="{{ cargando }}"> 
    <i class="fa fa-spinner"></i>
  <form name="InscribeteForm" ng-submit="sendForm()"> 
    <select ng-model="carrera" placeholder="Fefe">
	  <option ng-repeat="option in availableOptions" value="{{option.nid}}">{{option.name}}</option>
	</select>
    <input type="text" name="nombre" ng-model="nombre" required placeholder="Nombres"/>
    <input type="text" name="apellido1" ng-model="apellido1" required placeholder="Apellidos" />
    <?php if($hide_value === false): ?> 
    <select ng-model="opciones" placeholder="Carrera" required >
      <option ng-repeat="option in availableCarrers" value="{{option.nid}}">{{option.name}}</option>
    </select>
    <div class="dob">
      <input type="number" name="anio" ng-model="anio" min="{{ maxanio - 6 }}" max="{{ maxanio + 5 }}" required placeholder="Año de egreso">
      <input type="tel" name="telefono" ng-model="telefono" required placeholder="Teléfono o celular" />
    </div>
    <input type="email" name="email" ng-model="email" required placeholder="Correo electrónico" />
    <?php endif; ?>

    <?php if($hide_value === true): ?> 
    <div class="dob">
		<input type="email" name="email" ng-model="email" required placeholder="Correo electrónico" />
      <input type="tel" name="telefono" ng-model="telefono" required placeholder="Teléfono o celular" />
    </div>
    <select ng-model="diplomado" placeholder="Diplomado" required >
      <option ng-repeat="option in availableDiplomados" value="{{option.nid}}">{{option.name}}</option>
    </select>
    <?php endif; ?>
    <div class="dob-sub">
      <button  type="submit" ng-disabled="!acepto.value1">Enviar</button>
    </div>
    <div class="subs">
      <input type="checkbox" name="checkbox" id="checkbox_id" value="value" ng-model="acepto.value1">
      <label for="checkbox_id">
        <span>* Acepto los 
          <a href="http://www.ucal.edu.pe/politica-seguridad-privacidad" target="_blank" style="text-decoration: underline !important;">t&eacute;rminos y Condiciones.</a></span></label>
    </div>
  </form>
  </div>
  </div>
</div>

