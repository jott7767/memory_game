$(document).ready(function() {

  var twoFlip = [];
  var revealed = [];

  function turnBack() {
    $('.reveal').removeClass('reveal').addClass('text-box');
    twoFlip = [];
  }

  function keep() {
    $('.reveal').addClass('keep').removeClass('reveal text-box');
    revealed.push(1);
    win();
  }

  function win() {
    if(revealed.length == 8) {
      alert('You won!');
    }
  }


  function check() {
    if(twoFlip.length == 2) {
      if(twoFlip[0] === twoFlip[1]) {
        keep()
        twoFlip = [];
        alert('You found a match!')
      } else {
          alert("They don't match")
          turnBack();
          twoFlip = [];
      }
    }
  }

  $('.text-box').click(function() {
    if( $(this).hasClass('reveal') ){
      $(this).off('click');
    } else if ( $(this).hasClass('keep') ) {
      $(this).off('click');
    } else {
      var card = $(this).addClass('reveal').removeClass('text-box');
      twoFlip.push(card.html());
      check();
    }
  });

  $('#play').click(function() {
    if(confirm('Are you sure?')) {
      $('.keep').addClass('text-box').removeClass('keep');
      $('.text-box').on('click');
      revealed = [];
    }
  });








});