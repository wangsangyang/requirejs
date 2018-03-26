/*create by wangsongyang in 2016.03.09*/

/*主导航栏-鼠标移动出现二级菜单*/
$(function(){
    $('.main-nav .user-account').mouseenter(function(){
        $(this).addClass('open');
    }).mouseleave(function(){
        $(this).removeClass('open');
    });
});

//带logo的下拉菜单
$(function(){
    $('#logo-nav .main-menu .menu').on({
        'mouseenter': function(){
            $(this).addClass('active').siblings('.menu').removeClass('active');
        },
        'mouseleave': function(){
            $(this).removeClass('active');
        }
    });
});

//footer底部切换分公司城市
$(function(){
    $('.footer-wrap .items-left .row-1 .menu').on({
        'mouseenter': function(){
            $(this).addClass('active').siblings('.menu').removeClass('active');
        }
    });
});

/*搜索框：点击搜索框的向下选择箭头，展开搜索条件*/
$(function(){
/*    $('#search-select').on({
        'mouseenter': function(){
            var isOpen = $(this).hasClass('open');
            $(this)[isOpen ? 'removeClass' : 'addClass']('open');
        },
        'mouseleave': function(){
            $(this).removeClass('open');
        },
        'click': function(){
            $(this).removeClass('open');
        }
    });*/

    $('#search-select').on({
        'click': function(){
            var isOpen = $(this).hasClass('open');
            $(this)[isOpen ? 'removeClass' : 'addClass']('open');
        }
    });
    /*选择条件*/
    $('#search-select .select-body .item').on('click', function(){
        var downSelectValue = $(this).text();
        var currentValue = $(this).closest('#search-select').find('.select-title .text').text();
        $(this).closest('#search-select').find('.select-title .text').text(downSelectValue);
        $(this).text(currentValue);
    });
});

/*mytab切换*/
$(function(){
    $('.mytab .mytap-header .list').on('click',function(){
        var index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        //$(this).closest('.mytab').find('.mytap-body .content').eq(index).addClass('selected').siblings().removeClass('selected');
        $(this).closest('.mytab').children('.mytap-body').children('.content').eq(index).addClass('selected').siblings().removeClass('selected');
    });
});

/*选择价格区间*/
$(function(){
    $('.select-price').on({
        'mouseenter': function(){
            var isOpen = $(this).hasClass('open');
            $(this)[isOpen ? 'removeClass' : 'addClass']('open');
        },
        'mouseleave': function(){
            $(this).removeClass('open');
        },
        'click': function(){
            $(this).removeClass('open');
        }
    });
    /*选择条件*/
    $('.select-price .select-body .item').on('click', function(){
        var downSelectValue = $(this).text();
        $(this).closest('.select-price').find('.select-title .text').text(downSelectValue);
        $(this).addClass('selected').siblings().removeClass('selected');
    });
});

