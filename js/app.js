// Audio
$(document).ready(function() {
    $(".sound-on").hide();

    $(".sound-on").click(function() {
        $(".sound-on").hide();
        $(".sound-off").show();
    });
    
    $(".sound-off").click(function() {
        $(".sound-off").hide();
        $(".sound-on").show();
    });
});

document.getElementById("audio").loop = true;
var audio = document.getElementById("audio"); 

function playAudio() { 
  audio.play(); 
} 

function pauseAudio() { 
  audio.pause(); 
}

// skrollr
var s = skrollr.init({
    forceHeight: false,

    render: function(data) {
        //Log the current scroll position.
        $('#info').text(data.curTop);
    }
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    $('.snow-world').Yoshi({
        num_particles: 20,
        particle_color: '#ffffff',
        particle_size: 0,
        particle_shape: 'circle',
        max_size: 3
    });
} else {
    $('.snow-world').Yoshi({
        num_particles: 100,
        particle_color: '#ffffff',
        particle_size: 0,
        particle_shape: 'circle',
        max_size: 5
    });
}

// Social Share
var facebookShare = document.querySelector('[data-js="facebook-share"]');

facebookShare.onclick = function(e) {
    e.preventDefault();
    var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350, width=350');
    if(facebookWindow.focus) { facebookWindow.focus(); }
        return false;
}

function tws_click() {
    return window.open("http://twitter.com/share?text=ZyXEL Season's Greetings&url=http://www.zyxel.com/greetings/", "twitter", "toolbar=0,status=0,width=626,height=436"), !1
}

function lds_click() {
    return window.open("https://www.linkedin.com/shareArticle?mini=true&url=http://www.zyxel.com/greetings/&title=ZyXEL%20Season's%20Greetings&summary=&source=", "linkedin", "toolbar=0,status=0,width=626,height=436"), !1
}