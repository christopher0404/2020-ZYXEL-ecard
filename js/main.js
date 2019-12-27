// Uses Passive Event Listeners to Improve Scrolling Performance
    window.onload = () => {
        document.addEventListener('touchstart', (event) => {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
        }, { passive: false });
        
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
        }, false);
    }

// Detect mobile devices
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
        },
        none: function() {
            return (!isMobile.any());
        }
    };

// Check iOS version
    function iOSversion() {
        let d, v;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            d = {
                status: true,
                version: parseInt(v[1], 10) , 
                info: parseInt(v[1], 10)+'.'+parseInt(v[2], 10)+'.'+parseInt(v[3] || 0, 10)
            };
        } else{
            d = {status:false, version: false, info:''}
        } return d;
    }

    let iosVer = iOSversion();
/*
    if (iosVer.status) {
        alert('iOS : '+iosVer.info+', version : '+iosVer.version);
        //ex. IOS 11.2.6, version 11
    } else{
        console.log('not iPhone or iPad');
    }

    if (iosVer.version < 13) {
        alert("Please update to iOS 13");
    }
*/

// Detect Tablet devices
    function isTablet() {
        return /ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(navigator.userAgent.toLowerCase());
    }
/*
    if (isTablet()) {
        alert("Please use computer for better experience.");
    }
    if (navigator.userAgent.match(/iPad/i)) {
        alert("Please use computer or mobile phone for better experience.");
    }
*/

// Redirect if mobile or tablet detected
    if (isTablet()) {
        document.location = "https://zyxel.demo.lohaslife.cc/video-mobile.html";
    }
    
    if (isMobile.Android()) {
        document.location = "https://zyxel.demo.lohaslife.cc/video-mobile.html";
    }

    if (isMobile.iOS() && iosVer.version < 13) {
        alert("Please update to iOS 13");
        document.location = "https://zyxel.demo.lohaslife.cc/video-mobile.html";
    }

// Detect Browsers
    window.addEventListener("load", function() {
        if (navigator.userAgent.indexOf("Opera") != -1 ) {
            swal ( "Oops!", "Please use Google Chrome for better experience.", "error" );
        }
        else if (navigator.userAgent.indexOf("MSIE") != -1 ) {
            swal ( "Oops!", "Please use Google Chrome for better experience.", "error" );
        }
        else if (navigator.userAgent.indexOf("Edge") != -1 ) {
            swal ( "Oops!", "Please use Google Chrome for better experience.", "error" );
        }
        else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
            swal ( "Oops!", "Please use Google Chrome for better experience.", "error" );
        }
        else if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf('Chrome') == -1 ) {
            swal ( "Oops!", "Please use Google Chrome for better experience.", "error" );
        }
    });

    if (/Line/.test(navigator.userAgent)) {
        location.href = location.href + '?openExternalBrowser=1'; 
    }

    if (navigator.userAgent.match(/FBIOS/i)) {
        location.href = location.href + '?openExternalBrowser=1';
    }

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

// Fullscreen
    function toggleFullScreen() {
        var doc = window.document;
        var docEl = doc.documentElement;
    
        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    
        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            requestFullScreen.call(docEl);
        } else {
            cancelFullScreen.call(doc);
        }
    }
    $(".fullscreen").click(function() {
        $(".reminder").hide();
    });

    $(".reminder-close").click(function() {
        $(".reminder").hide();
    });

// Social Share
    var linkedinShare = document.querySelector('[data-js="linkedin-share"]');

    linkedinShare.onclick = function(e) {
        e.preventDefault();
        var linkedinWindow = window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + document.URL, 'linkedin-popup', 'height=600, width=600');
        if(linkedinWindow.focus) { linkedinWindow.focus(); }
            return false;
    }

    var facebookShare = document.querySelector('[data-js="facebook-share"]');

    facebookShare.onclick = function(e) {
        e.preventDefault();
        var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=600, width=600');
        if(facebookWindow.focus) { facebookWindow.focus(); }
            return false;
    }

    var twitterShare = document.querySelector('[data-js="twitter-share"]');

    twitterShare.onclick = function(e) {
        e.preventDefault();
        var twitterWindow = window.open('https://twitter.com/share?url=' + document.URL, 'twitter-popup', 'height=600, width=600');
        if(twitterWindow.focus) { twitterWindow.focus(); }
            return false;
    }

// Reload Page
    function reloadPage() {
        var currentURL = window.location.pathname + window.location.search + window.location.hash;
        window.location.replace(currentURL);

        // Redirect to the current URL.
        // window.location.href = currentURL;
    }

// Scroll to the top of the document
    function toTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    $('#scrollToBottom').click(function(e) {
        $('html, body').animate({scrollTop: $(document).height()}, 1000);
    });

    $('#scrollToTop').click(function(e) {
        // if (isMobile.any()) {
            $('html, body').animate({scrollTop: 0});
        // }
    });

/*
// Scroll to specific position of the document
    function toCut3() {
        window.scrollTo(0, 2200);
    }

    function toCut4() {
        window.scrollTo(0, 3900);
    }

    function toCut5() {
        window.scrollTo(0, 5650);
    }

    function toCut6() {
        window.scrollTo(0, 7100);
    }

    function toCut7() {
        window.scrollTo(0, 8400);
    }

    function toCut8() {
        window.scrollTo(0, 9900);
    }
*/