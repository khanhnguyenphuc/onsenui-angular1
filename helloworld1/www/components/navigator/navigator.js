ons.bootstrap()
  .controller('NavigatorController', function() {
  	this.changeAnimation = function(animation) {
  		myNavigator.pushPage('page2.html', {
  			animation: animation,
  			data: {title: 'Page 2'}
  		});
  	}
  });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});