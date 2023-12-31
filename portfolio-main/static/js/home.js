$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat daniswarawardana<br/>" +
      "><span class='caret'>$</span> job: web developer<br/> ^100" +
      "><span class='caret'>$</span> skills: canva, python, microsoft<br/> ^100" +
      "><span class='caret'>$</span> hobbies: badminton, game<br/> ^300" +
      "><span class='caret'>$</span> studying: universitas teknologi yogyakarta<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
