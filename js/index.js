$(document).ready(function(){
  $("#worklabel").hide();
  $("#chooseBreak").hide();

    var pomClock;
    var breakClock;
    var sessionVal;
    var breakSessionVal;
    var longBreakClock;
    var longBreakSession;
    sessionVal = parseInt($('#sessionVal').html() * 60);
    breakSessionVal = 5 * 60;
    longBreakSession = 10 *60;
    //clock session
    pomClock = $('.timer').FlipClock(sessionVal, {
		countdown: true,
		clockFace: 'MinuteCounter',
    autoStart: false,
    callbacks: {
      start: function() {
          $("#worklabel").show();
          $("#chooseBreak").hide();
          $("#startShortBreak").addClass('disabled');
          $("#startLongBreak").addClass('disabled');
      },
      stop: function() {
          $("#worklabel").hide();
      },
      interval: function() {
        var time = pomClock.getTime().time;
        if(time === 0) {
              $("#chooseBreak").show();
              $("#startShortBreak").removeClass('disabled');
              $("#startLongBreak").removeClass('disabled');
              
        }
      }
    }
	});

  breakClock = $('.timer2').FlipClock(breakSessionVal, {
    countdown: true,
    clockFace: 'MinuteCounter',
    autoStart: false,
    callbacks: {
      start: function() {

      },
      interval: function() {

      }
    }
  });

  longBreakClock = $('.timer3').FlipClock(longBreakSession, {
    countdown: true,
    clockFace: 'MinuteCounter',
    autoStart: false
  });

  //button Start
    $('#startSession').click(function(){
      pomClock.setTime(parseInt($('#sessionVal').html() * 60));
      pomClock.start();

    });
    //button Stop
    $('#stopSession').click(function(){
      pomClock.stop();
    });

//shortBreak Button start

$('#startShortBreak').click(function(){
    breakClock.setTime(breakSessionVal);
    breakClock.start();
});

$('#startLongBreak').click(function(){
    longBreakClock.setTime(longBreakSession);
    longBreakClock.start();
});


  //remove session with button -
  $('#remSessionVal').click(function(){
    sessionVal = parseInt($('#sessionVal').html());
    $('#sessionVal').html(sessionVal - 1);
      if(sessionVal === 1) {
        $('#sessionVal').html(1);
      }
      pomClock.setTime(parseInt($("#sessionVal").html()) * 60);
  });

  //add sesion with button +
  $('#addSessionVal').click(function(){
    sessionVal = parseInt($('#sessionVal').html());
    $('#sessionVal').html(sessionVal + 1);
    if(sessionVal === 25) {
        $('#sessionVal').html(25);
    }
    pomClock.setTime(parseInt($("#sessionVal").html()) * 60);
  });


});
