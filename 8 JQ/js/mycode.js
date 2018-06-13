$(window).on('load', function(){
    scroll();
    openMenu();
    closeMenu();
    openAddFilm();
    closeAddFilm();
    addNewFilm();
});

function scroll(){
    $('body').smoothScroll({
      delegateSelector: 'nav a',
      speed: 1000,
    });
}

// task 3 mobile_menu
function openMenu(){
    $('.mobile_nav').hide();
    $(".humburger").click(function(){
        $('.humburger').hide();
        $('.mobile_nav').fadeIn(600);
    });
}

function closeMenu(){
    $('.close_burger').click(function(){
        $('.mobile_nav').hide();
        $('.humburger').fadeIn(400);
    });
}
//task 4 adding films

function openAddFilm(){
    $('.overlay').hide();
    $('.form_add_film').hide();
        $('.add_block').click(function(){
        $('.overlay').show();
        $('.form_add_film').show();
    })
}

function closeAddFilm(){
        $('.close_icon').click(function(){
        $('.overlay').hide();
        $('.form_add_film').hide();
    })
}

function addNewFilm(){
    $("#movie_submit").click(function(event) {
        if (($("#urlfilm").val() != '') && ($("#film_name").val() != '') && ($("#about_film").val() != '')) {
            var movieTemplate = '<div class="colum">';
            movieTemplate += '<img class="film_image"' + 'src="' + $("#urlfilm").val() + '">';
            movieTemplate += '<h1 class="title_image">' + $("#film_name").val() + '</h1>';
            movieTemplate += '<p class="text_image">' + $("#about_film").val() + '</p>';
            movieTemplate += '</div>';

            $("#colum_container").append(movieTemplate);
            $("#urlfilm").val('');
            $("#film_name").val('');
            $("#about_film").val('');
            $(".overlay").hide();
            $("#form_add_film").fadeOut("fast");
            $("#form_add_film").hide();
        }
    });
}
