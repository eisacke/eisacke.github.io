$(()  => {
  var colors = ['blue', 'lilac'];
  var $body = $('body');
  var classToAdd = colors[Math.floor(Math.random() * colors.length)];
  $body.addClass(classToAdd);
});
