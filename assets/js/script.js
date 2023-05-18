$(document).ready(function() {
    var projectCount = document.getElementById('projectCount');
    var plasterCount = document.getElementById('plasterCount');
    var coffeeCount = document.getElementById('coffeeCount');

    new Odometer({
      el: projectCount,
      value: 1211,
      format: '(,ddd)',
      theme: 'minimal'
    });

    new Odometer({
      el: plasterCount,
      value: 6731,
      format: '(,ddd)',
      theme: 'minimal'
    });

    new Odometer({
      el: coffeeCount,
      value: 847,
      format: '(,ddd)',
      theme: 'minimal'
    });
  });


  $(document).ready(function() {
    $('.menu-item').on('click', function() {
      $('.site-menu-toggle').trigger('click'); // Close the menu
    });
  });