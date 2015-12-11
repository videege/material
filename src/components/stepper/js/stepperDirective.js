/**
 * @ngdoc directive
 * @name mdStepper
 * @module material.components.stepper
 * @restrict E
 * @description
 *
 * Steppers do stuff.
 *
 *
 */

angular
  .module('material.components.stepper')
  .directive('mdStepper', StepperDirective);

function StepperDirective() {
  return {
    scope: {
      selectedIndex: '=?mdSelected'
    },
    template: function(element, attr) {
      attr["$mdStepperTemplate"] = element.html();
      return '' +
        '<md-stepper-wrapper>' +
          '<p>Whatup dudes!</p>'
        '</md-stepper-wrapper>';
    },
    controller: 'MdStepperController',
    controllerAs: '$mdStepperCtrl',
    bindToController: true
  };
}
