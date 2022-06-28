$(document).ready(function(){
    
    // Cross Browser support for Smooth Scroll ------------------------------
    $("a").on('click', function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
      }
    });

    $('[data-vbg]').youtube_background({
      'mobile':true
    });

   
    $('select').niceSelect();

    // Mapbox functionality for footer
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbmRhbGFwYSIsImEiOiJjazY2cjdkcjAwNDY4M2VwODFyZnZpbDg5In0.yZurTAPPw4f1D-VkffaHpw';
    var map = new mapboxgl.Map({
        container: 'footerMap',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [5.988000, 52.297980],
        zoom: 15
    });

    var marker1 = new mapboxgl.Marker({ color: '#D2121C'}).setLngLat([5.988000, 52.297980]).addTo(map);


});


function openTab(targetTab, tabName, evt) {  

    $("."+tabName+" .tabcontent").removeClass('show');
    $("."+tabName+" #"+targetTab).addClass('show');
    $('.'+tabName+' .tablinks').removeClass('active');
    evt.currentTarget.className += " active";
}

function openModal(modalid){
    $('.modal').removeClass('show');
    $('.modal').css('display', 'none');
    $('#'+modalid).fadeIn( "slow", function() {
      $(this).addClass('show');
    });
}

$(document).on('click', '.close, .modal', function(){
  $('.modal').fadeOut( 100, function() {
    $(this).removeClass('show');
  });
});

$(document).on('click', '.modal-warp', function(e){
  e.stopPropagation();
});

// Slider Initialization--------------
var featureSlide = new Swiper(".featureSlide", {
  slidesPerView: 1,
    loop: true,
    autoplay: true,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        680: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 1.9,
            spaceBetween: 30,
        },
        1170: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
});

