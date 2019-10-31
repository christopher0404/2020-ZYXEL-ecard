
var s = skrollr.init({
    forceHeight: false,

    render: function(data) {
        //Log the current scroll position.
        $('#info').text(data.curTop);
    }
});

// mobileCheck = function() {
// 	return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
// }

// ScrollReveal().reveal('.scene-1-bg-2');
/*
window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');

    var index = 0, length = target.length;
    for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;
            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }
});
*/