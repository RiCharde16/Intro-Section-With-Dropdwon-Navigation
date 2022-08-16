var menu_fea = $('#features_menu');
var menu_comp = $('#company_menu');
var menus = $('.icon-arrow');
var nav = $('nav');
var bg_black = $('#background_black');

var window_size;


// var temp = setInterval(function(){
//     window_size = $(document).width();
//     if(window_size > 711){  
//         // console.log('Sua tela esta maior que: '+window_size)
// },1000)

menu_fea.on({
    click: function(){
            $('#features_menu>img').attr('src','images/icon-arrow-down.svg');
                $('#features_menu + .menu_dropdown').slideToggle(600,function(){
                    if($(this).is(':visible')){
                        $('#features_menu>img').attr('src','images/icon-arrow-up.svg');
                }
                else{    
                    $('#features_menu>img').attr('src','images/icon-arrow-down.svg');
                }
                })

    }
})
menu_comp.on({
    click: function(){
            $('#company_menu>img').attr('src','images/icon-arrow-down.svg');
            // $('#features_menu + .menu_dropdown').slideToggle(1000, function(){
                $('#company_menu + .menu_dropdown').slideToggle(600,function(){
                    if($(this).is(':visible')){
                        $('#company_menu>img').attr('src','images/icon-arrow-up.svg');
                }
                else{    
                    $('#company_menu>img').attr('src','images/icon-arrow-down.svg');
                }
                })

    }
})  

$('#icon-menu').click(function(){
    bg_black.fadeIn();
    // $('nav').animate({display : 'block'});
    // nav.css('display','block');
    nav.addClass('active');
    nav.animate({width : '200px'}); 
})
$('#close_nav').click(function(){
    // nav.animate({width : px"});
    // nav.css('display','none');
    // nav.animate({width : "0px"},{finish:function(){
    // }});
    nav.removeClass('active')
    bg_black.fadeOut();
    // nav.addClass('container')
})

