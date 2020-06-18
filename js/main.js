$(document).ready(function() {
    $( "#accordion" ).accordion({ animate: 600, heightStyle: "content" });

    var textWrapper = document.querySelector('.ml6 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 1500,
        delay: (el, i) => 50 * i
      }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1900,
        easing: "easeOutExpo",
        delay: 1000
      });

    $('video').each(function () {
        var player = videojs(this);
        var playbtn = $(this).parent().parent().find('.btn');
        var playbtn1 = $(this).parent().parent().find('.vooruit');
        var playbtn2 = $(this).parent().parent().find('.achteruit');

        playbtn1.click(function(){
          var time = player.currentTime();
          var timeNew = time+20;
          player.currentTime(timeNew);
          });
    
          playbtn2.click(function(){
            var time = player.currentTime();
            var timeNew = time-20;
            player.currentTime(timeNew);
            });
    
        var geklikt = true;
        
        playbtn.click(function(){
        if (!geklikt) {
                player.pause();
                geklikt = true;
                $('body').removeClass('geklikt');
        }
        else {
            player.play();
            geklikt = false;
            $('body').addClass('geklikt');
        }


        player.on('ended', function() {
            modal.style.display = "block";

            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        });
    });
    
    });

    
const toggleSwitch = document.querySelector('.switcher input[type="checkbox"');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
   document.documentElement.setAttribute('data-theme', currentTheme);

   if (currentTheme === 'dark') {
       toggleSwitch.checked = true;
   }
}

function switchTheme(e) {
   if (e.target.checked) {
       document.documentElement.setAttribute('data-theme', 'dark');
       localStorage.setItem('theme', 'dark');
       $("#logo").attr('src','img/logowit@2x.png');
       $("#lamp").attr('src','img/lampwit@2x.png');
       $("#lamp1").attr('src','img/raketwit@2x.png');
       $("#lamp2").attr('src','img/telefoonwit@2x.png');
       $("#voren").attr('src','img/tofront@2x.png');
       $("#achter").attr('src','img/goback@2x.png');
       $("#pauze").attr('url','img/pauze@2x.png');
   } else {
       document.documentElement.setAttribute('data-theme', 'light');
       localStorage.setItem('theme', 'light');
       $("#logo").attr('src','img/logo@2x.png');
       $("#lamp").attr('src','img/lamp@2x.png');
       $("#lamp1").attr('src','img/raket@2x.png');
       $("#lamp2").attr('src','img/telefoon@2x.png');
       $("#voren").attr('src','img/darktofront@2x.png');
       $("#achter").attr('src','img/darkgoback@2x.png');
       $("#pauze").attr('src','img/darkpauze@2x.png');
   }
}
toggleSwitch.addEventListener('change', switchTheme, false);


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});




 
 