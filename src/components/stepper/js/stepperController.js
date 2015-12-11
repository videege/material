angular
    .module('material.components.stepper')
    .controller('MdStepperController', MdStepperController);

/**
 * @ngInject
 */
function MdStepperController ($scope, $element, $window, $mdConstant, $mdTabInkRipple,
                           $mdUtil, $animateCss, $attrs, $compile, $mdTheming) {
  // define private properties
  var ctrl      = this,
      locked    = false,
      //elements  = getElements(),
      queue     = [],
      destroyed = false,
      loaded    = false;


}
