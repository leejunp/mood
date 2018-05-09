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
  output.html('So ' + $('#name').val() + ', tell me how you felt today morning.');
  anime({
    targets: '.avatars',
    translateY: '36rem',
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
    translateY: '-40rem',
    delay: function(el, index) {
     return index * 80;
    },
  });
};


var info = [""];

function el01(){
  $('#firstz').hide();
  $('#firste').show();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function ha01(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').show();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function ok01(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').show();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function sa01(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').show();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function an01(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood01').hide();
  $('.mood02').show();
};

function el02(){
  $('#firstz').hide();
  $('#firste').show();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function ha02(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').show();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function ok02(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').show();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function sa02(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').show();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function an02(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').show();
};

function el03(){
  $('#firstz').hide();
  $('#firste').show();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').fadeOut(600);

  if(jQuery.inArray("happy", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Overall it was pretty good! Maybe take a nice hot bath.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('A good ending. Try reminding yourself of what made you happy.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('You calmed down in the end. Try to write down how you did it.');
  }

};

function ha03(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').show();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').fadeOut(600);

  if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('A relativly happy ending ey? Try recapping what made you happy.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Try to appreciate those who made your day better!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('At least you ended the day with a smile!');
  }
};

function ok03(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').show();
  $('#firsts').hide();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to write down what made you less happy.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Lets see if a cup of hot cocoa makes it better again!');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Hmm... Try taking a hot bath. It can never go wrong!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Think of puppies, kittens, bunnies... All better!');
  }
};

function sa03(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').show();
  $('#firsta').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Oh no! Write down what made you sad today.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Take a hot bath and think about the happy things!');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('When in doubt.... Ice cream! You deserve a cheat day.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Hey, watch some netflix, listen to some music, you deserve it.');
}
};

function an03(){
  $('#firstz').hide();
  $('#firste').hide();
  $('#firsth').hide();
  $('#firsto').hide();
  $('#firsts').hide();
  $('#firsta').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood01').hide();
  $('.mood02').hide();
  $('.mood03').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to meditate. What made you happy today?');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('You were having a great day earlier, try to remember that.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('All you need is some sleep. Try to sleep early.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Do something that makes you happy. Eat pizza!');
}
};

//Avatar 2

function avcltwo(){
  output.html('So ' + $('#name').val() + ', tell me how you felt today morning.');
  anime({
    targets: '.avatars',
    translateY: '36rem',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
  $('#secondz').show();

  setTimeout(function(){
    $('.mood001').fadeIn(600);
  },500);

  anime({
    targets: '#secondz',
    translateY: '-40rem',
    delay: function(el, index) {
     return index * 80;
    },
  });
};


var info = [""];

function el04(){
  $('#secondz').hide();
  $('#seconde').show();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood001').hide();
  $('.mood002').show();
};

function ha04(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').show();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood001').hide();
  $('.mood002').show();
};

function ok04(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').show();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood001').hide();
  $('.mood002').show();
};

function sa04(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').show();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood001').hide();
  $('.mood002').show();
};

function an04(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood001').hide();
  $('.mood002').show();
};

function el05(){
  $('#secondz').hide();
  $('#seconde').show();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').show();
};

function ha05(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').show();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').show();
};

function ok05(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').show();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').show();
};

function sa05(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').show();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').show();
};

function an05(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').show();
};

function el06(){
  $('#secondz').hide();
  $('#seconde').show();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').fadeOut(600);

  if(jQuery.inArray("happy", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Overall it was pretty good! Maybe take a nice hot bath.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('A good ending. Try reminding yourself of what made you happy.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('You calmed down in the end. Try to write down how you did it.');
  }

};

function ha06(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').show();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').fadeOut(600);

  if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('A relativly happy ending ey? Try recapping what made you happy.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Try to appreciate those who made your day better!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('At least you ended the day with a smile!');
  }
};

function ok06(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').show();
  $('#seconds').hide();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to write down what made you less happy.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Lets see if a cup of hot cocoa makes it better again!');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Hmm... Try taking a hot bath. It can never go wrong!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Think of puppies, kittens, bunnies... All better!');
  }
};

function sa06(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').show();
  $('#seconda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Oh no! Write down what made you sad today.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Take a hot bath and think about the happy things!');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('When in doubt.... Ice cream! You deserve a cheat day.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Hey, watch some netflix, listen to some music, you deserve it.');
}
};

function an06(){
  $('#secondz').hide();
  $('#seconde').hide();
  $('#secondh').hide();
  $('#secondo').hide();
  $('#seconds').hide();
  $('#seconda').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood001').hide();
  $('.mood002').hide();
  $('.mood003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to meditate. What made you happy today?');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('You were having a great day earlier, try to remember that.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('All you need is some sleep. Try to sleep early.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Do something that makes you happy. Eat pizza!');
}
};


//Avatar 3

function avclthree(){
  output.html('So ' + $('#name').val() + ', tell me how you felt today morning.');
  anime({
    targets: '.avatars',
    translateY: '36rem',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
  $('#thirdz').show();

  setTimeout(function(){
    $('.mood0001').fadeIn(600);
  },500);

  anime({
    targets: '#thirdz',
    translateY: '-40rem',
    delay: function(el, index) {
     return index * 80;
    },
  });
};


var info = [""];

function el07(){
  $('#thirdz').hide();
  $('#thirde').show();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood0001').hide();
  $('.mood0002').show();
};

function ha07(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').show();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood0001').hide();
  $('.mood0002').show();
};

function ok07(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').show();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood0001').hide();
  $('.mood0002').show();
};

function sa07(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').show();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood0001').hide();
  $('.mood0002').show();
};

function an07(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood0001').hide();
  $('.mood0002').show();
};

function el08(){
  $('#thirdz').hide();
  $('#thirde').show();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').show();
};

function ha08(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').show();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').show();
};

function ok08(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').show();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').show();
};

function sa08(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').show();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').show();
};

function an08(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').show();
};

function el09(){
  $('#thirdz').hide();
  $('#thirde').show();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').fadeOut(600);

  if(jQuery.inArray("happy", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Overall it was pretty good! Maybe take a nice hot bath.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('A good ending. Try reminding yourself of what made you happy.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('You calmed down in the end. Try to write down how you did it.');
  }

};

function ha09(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').show();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').fadeOut(600);

  if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('A relativly happy ending ey? Try recapping what made you happy.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Try to appreciate those who made your day better!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('At least you ended the day with a smile!');
  }
};

function ok09(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').show();
  $('#thirds').hide();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to write down what made you less happy.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Lets see if a cup of hot cocoa makes it better again!');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Hmm... Try taking a hot bath. It can never go wrong!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Think of puppies, kittens, bunnies... All better!');
  }
};

function sa09(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').show();
  $('#thirda').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Oh no! Write down what made you sad today.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Take a hot bath and think about the happy things!');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('When in doubt.... Ice cream! You deserve a cheat day.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Hey, watch some netflix, listen to some music, you deserve it.');
}
};

function an09(){
  $('#thirdz').hide();
  $('#thirde').hide();
  $('#thirdh').hide();
  $('#thirdo').hide();
  $('#thirds').hide();
  $('#thirda').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood0001').hide();
  $('.mood0002').hide();
  $('.mood0003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to meditate. What made you happy today?');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('You were having a great day earlier, try to remember that.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('All you need is some sleep. Try to sleep early.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Do something that makes you happy. Eat pizza!');
}
};

//Avatar 4

function avclfour(){
  output.html('So ' + $('#name').val() + ', tell me how you felt today morning.');
  anime({
    targets: '.avatars',
    translateY: '36rem',
    scale: [.75, .9],
    delay: function(el, index) {
     return index * 80;
    },
  });
  $('#fourthz').show();

  setTimeout(function(){
    $('.mood00001').fadeIn(600);
  },500);

  anime({
    targets: '#fourthz',
    translateY: '-40rem',
    delay: function(el, index) {
     return index * 80;
    },
  });
};


var info = [""];

function el010(){
  $('#fourthz').hide();
  $('#fourthe').show();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood00001').hide();
  $('.mood00002').show();
};

function ha010(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').show();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood00001').hide();
  $('.mood00002').show();
};

function ok010(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').show();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood00001').hide();
  $('.mood00002').show();
};

function sa010(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').show();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood00001').hide();
  $('.mood00002').show();
};

function an010(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about noon?');

  $('.mood00001').hide();
  $('.mood00002').show();
};

function el011(){
  $('#fourthz').hide();
  $('#fourthe').show();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').show();
};

function ha011(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').show();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').show();
};

function ok011(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').show();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').show();
};

function sa011(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').show();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').show();
};

function an011(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').show();
};

function el012(){
  $('#fourthz').hide();
  $('#fourthe').show();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "elated";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').fadeOut(600);

  if(jQuery.inArray("happy", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Overall it was pretty good! Maybe take a nice hot bath.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('A good ending. Try reminding yourself of what made you happy.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('You calmed down in the end. Try to write down how you did it.');
  }

};

function ha012(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').show();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "happy";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').fadeOut(600);

  if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Hey! A happy day. Try writing down what made you happy.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('A relativly happy ending ey? Try recapping what made you happy.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Try to appreciate those who made your day better!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('At least you ended the day with a smile!');
  }
};

function ok012(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').show();
  $('#fourths').hide();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "okay";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to write down what made you less happy.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Lets see if a cup of hot cocoa makes it better again!');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('Hmm... Try taking a hot bath. It can never go wrong!');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Think of puppies, kittens, bunnies... All better!');
  }
};

function sa012(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').show();
  $('#fourtha').hide();

  for(y = 0; y < info.length; y++){
    moodo = "sad";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Oh no! Write down what made you sad today.');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('Take a hot bath and think about the happy things!');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('When in doubt.... Ice cream! You deserve a cheat day.');

} else if(jQuery.inArray("angry", info) !== -1){
    output.html('Hey, watch some netflix, listen to some music, you deserve it.');
}
};

function an012(){
  $('#fourthz').hide();
  $('#fourthe').hide();
  $('#fourthh').hide();
  $('#fourtho').hide();
  $('#fourths').hide();
  $('#fourtha').show();

  for(y = 0; y < info.length; y++){
    moodo = "angry";
  }

  info.push(moodo);
  output.html('How about now?');

  $('.mood00001').hide();
  $('.mood00002').hide();
  $('.mood00003').fadeOut(600);

  if(jQuery.inArray("happy", info) !== -1){
    output.html('Try to meditate. What made you happy today?');

} else if(jQuery.inArray("elated", info[3]) !== -1){
    output.html('You were having a great day earlier, try to remember that.');

} else if(jQuery.inArray("sad", info) !== -1){
    output.html('All you need is some sleep. Try to sleep early.');

} else if(jQuery.inArray("okay", info) !== -1){
    output.html('Do something that makes you happy. Eat pizza!');
}
};
