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
  }).directive('infinite', [function() {
    var template = ['<ons-page ng-controller="ListController as list">',
        '<ons-toolbar>',
          '<div class="center">Lists</div>',
          '<div class="right">',
            '<ons-toolbar-button ng-click="list.delegate.refresh()">Refresh</ons-toolbar-button>',
          '</div>',
        '</ons-toolbar>',
    
        '<ons-list var="myList">',
          '<ons-list-item ons-lazy-repeat="list.delegate">{{ item }}</ons-list-item>',
        '</ons-list>',
      '</ons-page>'].join('');
    return {
      template: template,
      restrict: 'E'
    }
  }]);