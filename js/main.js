$(document).ready(function(){
  console.log('ready');
  $('.navbar-toggler').click(function(){
    $('nav.navbar').toggleClass('active');
  });
});

