$(function() {

  $('.tooltip').tooltipster({
    offsetY: 25,
    theme: '.tooltip-theme'
  });

  var swatches = ['#D41338', '#144B72', '#037553', '#336B9C', '#EFA81D'];
  var swatchIndex = 0;
  var randomize = function() {
    $('.shuffle').children().each(function() {
      $(this).css('background-color', swatches[swatchIndex]);
      swatchIndex = ++swatchIndex % swatches.length;
    });
    $('.shuffle').shuffle();
  }

  $('#phoneShow').click(function() {
    $(this).replaceWith('<a href="tel:+393386744415">+39 338 6744415</a>');
  });

  $('#emailShow').click(function() {
    $(this).replaceWith('<a href="mailto:gabriele@destefanis.eu">gabriele@destefanis.eu</a>');
  });

  $('#randomize').click(function() {
    randomize();
  });

  randomize();
});
