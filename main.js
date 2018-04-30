var output = $('.na');
var input = $('#name').val();

function answer() {
  output.html('Hello ' + $('#name').val() + '! Choose your avatar:');
  $('#name').fadeOut(200);
  $('#myButton').fadeOut(200);
  $('.avatars').show();

  anime({
    targets: '.avatars',
    translateY: '-36rem',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
};

function avclone(){
  output.html('So ' + $('#name').val() + ', how are you feeling today?');
  anime({
    targets: '.avatars',
    translateY: '36rem',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
  $('#firsta').show();
  $('.slider').show();
  anime({
    targets: '#firsta',
    translateY: '-40rem',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
};
