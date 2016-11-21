ons.bootstrap()
  .controller('ListController', function() {
    this.delegate = {
      configureItemScope: function(index, itemScope) {
        itemScope.item = 'Item ' + index;
      },
      countItems: function() {
        return 10000;
      },
      calculateItemHeight: function() {
        return ons.platform.isAndroid() ? 48 : 44;
      },
      destroyItemScope: function(index, itemScope) {
        // Optional method that is called when an item is unloaded.
        console.log('Destroyed item with index: ' + index);
      }
    };
  });