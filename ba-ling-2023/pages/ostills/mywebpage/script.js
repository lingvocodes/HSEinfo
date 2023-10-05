function playAudio(){
     var myAudio = new Audio;
     myAudio.src = "https://www.fesliyanstudios.com/play-mp3/551";
     myAudio.play();
   }
   jQuery(function(){
     $('#myLink').click(function(){
       playAudio();
     });
  });