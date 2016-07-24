window.onload = function(){
  var $about = $('#about-link');
  var $contact = $('#contact-link');
  var $home = $('#home');
  $about.on("click", about);
  $contact.on("click", contact);
}

var about = function(){
  $(document.body).animate({'scrollTop':$('.about').offset().top}, 1500);
}

var contact = function(){
  $(document.body).animate({'scrollTop':$('.contact').offset().top}, 1500);
}

var home = function(){
  $(document.body).animate({'scrollTop':$('.module').offset().top}, 1500);
}