ons.bootstrap()
  .controller('PageController', function() {
    this.username = '';
    this.password = '';

    this.login = function() {
      if (this.username === 'bob' && this.password === 'secret') {
        ons.notification.alert('Congratulations!');
      }
      else {
        ons.notification.alert('Incorrect username or password.');
      }
    };

    this.apples = true;
    this.bananas = false;

    this.labelStyle = {
      marginLeft: '6px',
      width: '10px',
      height: '10px',
      borderRadius: '100%',
      backgroundColor: 'transparent',
      display: 'inline-block'
    };
  });