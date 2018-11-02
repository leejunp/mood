var output = $('.na');
var input = $('#name').val();

var cookie = Cookies.get('id');
var date = new Date();

if (cookie) {
  var cookieJson = Cookies.getJSON('id');
  $('#name').val(cookieJson.name)
  $('#name').hide();
  $('#myButton').hide();
  if (!cookieJson.pickedAvatar) {
	  output.html('Hello ' + $('#name').val() + '! Choose your avatar:');
	  $('.avatars').show();

	  anime({
		targets: '.avatars',
		translateY: '-800px',
		scale: [.75, .9],
		delay: function(el, index) {
		 return index * 80;
		},
	  });
  } else if (cookieJson.pickedAvatar && cookieJson.lockout < date.getTime()) {
	  var pickedAvatar = cookieJson.avatar;
	  if (pickedAvatar === '1') {
		  avclone();
	  } else if (pickedAvatar === '2') {
		  avcltwo();
	  } else if (pickedAvatar === '3') {
		  avclthree();
	  } else {
		  avclfour();
	  }
  } else if (cookieJson.pickedAvatar && cookieJson.lockout > date.getTime()) {
	  $('.mood01').hide();
	  $('.mood02').hide();
	  $('.mood03').hide();

	  output.html('You have responded elated ' + cookieJson.e + ' times, happy ' + cookieJson.h + ' times, okay ' + cookieJson.o + ' times, sad ' + cookieJson.s + ' times, and angry ' + cookieJson.a + ' times since starting your journal. Please come back later to write a new entry!');
  }
}

function answer() {
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: false, e: 0, h: 0, o: 0, s: 0, a: 0 });
  output.html('Hello ' + $('#name').val() + '! Choose your avatar:');
  $('#name').fadeOut(200);
  $('#myButton').fadeOut(200);
  $('.avatars').show();

  anime({
    targets: '.avatars',
    translateY: '-850px',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
};

function avclone(){
  var cookieJson = Cookies.getJSON('id');
  output.html('So ' + $('#name').val() + ', tell me how you felt today morning.');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a });
  anime({
    targets: '.avatars',
    translateY: '850px',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
  $('#firstz').show();

  setTimeout(function(){
    $('.mood01').fadeIn(600);
  },500);

  anime({
    targets: '#firstz',
    translateY: '-850px',
    delay: function(el, index) {
     return index * 80;
    },
  });
};

function el01(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e + 1, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').show();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function ha01(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h + 1, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').show();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function ok01(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o + 1, s: cookieJson.s, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').show();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function sa01(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s + 1, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').show();
  $('#firsta').hide();

  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function an01(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a + 1 });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').show();

  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function el02(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e + 1, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').show();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function ha02(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h + 1, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').show();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function ok02(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o + 1, s: cookieJson.s, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').show();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function sa02(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s + 1, a: cookieJson.a });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').show();
  $('#firsta').hide();

  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function an02(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a + 1 });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').show();

  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function el03(){

  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e + 1, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a, lockout: date.getTime() + /*86400000*/180000 });
  $('#firstz').hide();
  $('#firste').show();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('You have responded elated ' + (cookieJson.e + 1) + ' times, happy ' + cookieJson.h + ' times, okay ' + cookieJson.o + ' times, sad ' + cookieJson.s + ' times, and angry ' + cookieJson.a + ' times since starting your journal. Please come back later to write a new entry!');

  $('.mood01').hide();
  $('.mood02').hide();
  $('#firste').fadeOut(300);
  $('.mood03').fadeOut(300);

};

function ha03(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h + 1, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a, lockout: date.getTime() + /*86400000*/180000 });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').show();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('You have responded elated ' + cookieJson.e + ' times, happy ' + (cookieJson.h + 1) + ' times, okay ' + cookieJson.o + ' times, sad ' + cookieJson.s + ' times, and angry ' + cookieJson.a + ' times since starting your journal. Please come back later to write a new entry!');

  $('.mood01').hide();
  $('.mood02').hide();
  $('#firsth').fadeOut(300);
  $('.mood03').fadeOut(300);
};

function ok03(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o + 1, s: cookieJson.s, a: cookieJson.a, lockout: date.getTime() + /*86400000*/180000 });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').show();
  $('#firsts').hide();
  $('#firsta').hide();

  output.html('You have responded elated ' + cookieJson.e + ' times, happy ' + cookieJson.h + ' times, okay ' + (cookieJson.o + 1) + ' times, sad ' + cookieJson.s + ' times, and angry ' + cookieJson.a + ' times since starting your journal. Please come back later to write a new entry!');

  $('.mood01').hide();
  $('.mood02').hide();
  $('#firsto').fadeOut(300);
  $('.mood03').fadeOut(300);
};

function sa03(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s + 1, a: cookieJson.a, lockout: date.getTime() + /*86400000*/180000 });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').show();
  $('#firsta').hide();

  output.html('You have responded elated ' + cookieJson.e + ' times, happy ' + cookieJson.h + ' times, okay ' + cookieJson.o + ' times, sad ' + (cookieJson.s + 1) + ' times, and angry ' + cookieJson.a + ' times since starting your journal. Please come back later to write a new entry!');

  $('.mood01').hide();
  $('.mood02').hide();
  $('#firsts').fadeOut(300);
  $('.mood03').fadeOut(300);
};

function an03(){
  var cookieJson = Cookies.getJSON('id');
  Cookies.set('id', { name: $('#name').val(), pickedAvatar: true, avatar: '1', e: cookieJson.e, h: cookieJson.h, o: cookieJson.o, s: cookieJson.s, a: cookieJson.a + 1, lockout: date.getTime() + /*86400000*/180000 });
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').show();

  output.html('You have responded elated ' + cookieJson.e + ' times, happy ' + cookieJson.h + ' times, okay ' + cookieJson.o + ' times, sad ' + cookieJson.s + ' times, and angry ' + (cookieJson.a + 1) + ' times since starting your journal. Please come back later to write a new entry!');

  $('.mood01').hide();
  $('.mood02').hide();
  $('#firsta').fadeOut(300);
  $('.mood03').fadeOut(300);
};
