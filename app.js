var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  $('.lightbox').click(function(e) {
    e.preventDefault();

    var image_href = $(this).attr("href");

    if ($('#lightbox').length > 0) {
      $('#content').html('<img src="' + image_href + '">')

      $('#lightbox').show();
    }
    else {
      var lightbox = 
      '<div id="lightbox">' + 
        '<div id="container">' + 
          '<p>Close X</p>' + 
          '<div class="sixteen-nine">' + 
            '<iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/M7lc1UVf-VE?showinfo=0" frameborder="0"></iframe>' + 
          '</div>' + 
          // '<img src="' + image_href + '"">' + 
        '</div>' + 
      '</div>';

      $('body').append(lightbox);
    }
  });

  $('body').on('click', '#lightbox', function() {
    $('#lightbox').hide();
  });

}

$(document).ready(main);