ons.bootstrap()
  .controller('PageController', function($timeout) {
    this.volume = 25;

    this.changeVolume = function() {
      alert(this.volume);
    };
  });