ons.bootstrap()
  .controller('PageController', function($timeout) {
    this.items = [3, 2, 1];

    this.load = function($done) {
      $timeout(function() {
        this.items.unshift(this.items.length + 1);
        $done();
      }.bind(this), 1000);
    }.bind(this);
  });