$(()  => {
  var colors = ['blue', 'lilac', 'pink'];
  var $body = $('body');
  var classToAdd = colors[Math.floor(Math.random() * colors.length)];
  $body.addClass(classToAdd);
});
