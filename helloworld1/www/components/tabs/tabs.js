ons.bootstrap()
  .controller('TabController', function() {
  	this.changeAnimation = function(index,animation) {
  		myTabs.setActiveTab(index, {
  			animation: animation
  		});
  	}
  });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});