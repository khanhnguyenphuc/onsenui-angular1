ons.bootstrap()
  .controller('SplitterController', function() {
    this.load = function(page, options) {
    	options = options ? options : {};
      mySplitter.content.load(page, options)
        .then(function() {
          mySplitter.left.close();
        });
    };
  });