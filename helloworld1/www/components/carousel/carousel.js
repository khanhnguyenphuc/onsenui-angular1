'use strict';
ons.bootstrap()
  .controller('CarouselController', function() {
  	this.data = [1,2,3,4,5];
  })
  .directive('goTo', [ function() {
	
	var template = '<div>\
	<ons-input id="page-number"\
	  type="number"\
	  placeholder="Page"\
	  min="0"\
	  max="4">\
	</ons-input>\
	<ons-button ng-click="goTo(carousel)">Go</ons-button>\
	</div>';
	return {
		template: template,
		restrict: 'E',
		link: function($scope, element) {
	      $scope.goTo = function(carousel) {
	      	var index = element[0].querySelector('#page-number').value;
	      	carousel.setActiveIndex(index);
	      };
		}
	};
}]);
