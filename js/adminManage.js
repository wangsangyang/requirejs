/*固定的顶部-鼠标移动出现二级菜单*/
$(function(){
    /*点击左侧导航的菜单栏，显示、收缩菜单内容*/
    $('.leftBox-nav .menu .menu-header').on('click', function(){
        var menu = $(this).closest('.menu');
        var isOpen = menu.hasClass('open');
        if(isOpen){
            menu.find('.menu-body').stop().animate({'height':0});
        }else{
            var animateHeight = 0;
            menu.find('.menu-body li').each(function(){
                animateHeight += $(this).outerHeight();
            });
            menu.find('.menu-body').stop().animate({'height':animateHeight+20},function(){
                menu.find('.menu-body').css('height','auto');
            });
        }
        menu[isOpen?'removeClass':'addClass']('open');
        //menu.siblings().removeClass('open');
    });

});

