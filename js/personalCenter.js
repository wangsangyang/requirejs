/* ---------- create by wangsongyang in 2016.04.20 ---------- */

/*固定的顶部-鼠标移动出现二级菜单*/
$(function(){
    $('.topBox-nav .menu').mouseenter(function(){
        $(this).addClass('hover');
    }).mouseleave(function(){
        $(this).removeClass('hover');
    });
    /*点击顶部的产品与服务*/
    $('.topBox-nav .menu').on('click', function(e){
        var isOpen = $(this).hasClass('open');
        $(this).closest('.topBox-nav').find('.menu').removeClass('open');
        $(this)[isOpen?'removeClass':'addClass']('open');
        e.stopPropagation();
    });
    /*点击顶部的产品与服务*/
    $('body').on('click', function(e){
        $('.topBox-nav .menu').removeClass('open');
        e.stopPropagation();
    });
    /*点击顶部的搜索*/
    $('.topBox-nav .menu-search .search-text').on('click', function(e){
        e.stopPropagation();
    });

    /*可折叠的面板*/
    $('.collapse-panel .collapse-panel-header').on('click', function(){
        var panel = $(this).closest('.collapse-panel');
        var isOpen = panel.hasClass('open');
        panel[isOpen?'removeClass':'addClass']('open');
    });
});

/*您可能还需要的服务：点击左右翻页按钮*/
$(function(){
    var index = 0;
    var constantlen = 3;/*常量*/
    var liWidth = $('#may-service .items .list').outerWidth(true);
    var len =  $('#may-service .items .list').length;
    $('#may-service .items-btn .btn-flip-left').on('click', function(){
        index = index==0?index:--index;
        $('#may-service .items').stop().animate({'left': -index*liWidth});
        if(index==0){
            $('.flip-tip').text('已到第一页了！').show();
            setTimeout(tipHide,3000);
        }
    });
    $('#may-service .items-btn .btn-flip-right').on('click', function(){
        index = index==len-constantlen?index:++index;
        $('#may-service .items').stop().animate({'left': -index*liWidth});
        if(index==len-constantlen){
            $('.flip-tip').text('已到最后一页了！').show();
            setTimeout(tipHide,3000);
        }
    });
    function tipHide(){
        $('.flip-tip').fadeOut(800);
    }
});
