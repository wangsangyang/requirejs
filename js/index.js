/* ---------- create by wangsongyang in 2016.03.09 ---------- */

/*首页：用户评价轮播*/
$(function(){
    /*有几个列表就生成几个按钮*/
    var len = $('#user-rating .items .list').length;
    var itemsBtn = '';
    for(var i=0; i<len; i++){
        itemsBtn +='<a href="javascript:;" class="btn"></a>';
    }
    itemsBtn = '<div class="items-btn">'+itemsBtn+'</div>';
    $('#user-rating').append(itemsBtn);
    $('#user-rating .items-btn .btn').eq(0).addClass('selected');

    /*给按钮加事件*/
    var time = 3000;
    var timing;
    var timer;
    var index = 0;
    $('#user-rating .items-btn .btn').on('click', function(){
        clearInterval(timing);
        index = $(this).index();
        $(this).addClass('selected').siblings().removeClass('selected');
        $('#user-rating .items .list').eq(index).stop(true,true).fadeIn(800).siblings().fadeOut(800);
        timing = setInterval(timer,time);
    });
    /*定时播放*/
    timer = function(){
        index = index>=len-1?0:++index;
        $('#user-rating .items-btn .btn').eq(index).addClass('selected').siblings().removeClass('selected');
        $('#user-rating .items .list').eq(index).fadeIn(800).siblings().fadeOut(800);
    }
    timing = setInterval(timer,time);
});

/*首页：代理机构slide轮播图*/
$(function(){
/*    var timeFunc;
    var setIntervalFunc;
    var time = 3000;
    var index = 0;
    var li_width = $('.figureImg .slide-img .list:eq(0)').outerWidth();
    $('.figureImg .slide-btn li').on('click', function(){
        clearInterval(setIntervalFunc);
        var $this = $(this);
        index = $this.index();
        console.log(index);
        $this.addClass('active').siblings().removeClass('active');
        $('.figureImg .slide-img').animate({'left':-li_width*index});
        setIntervalFunc = setInterval(timeFunc,time)
    });*/

/*    timeFunc = function(){
        index = index>=2?0:++index;
        $('.figureImg .slide-btn li').eq(index).addClass('active').siblings().removeClass('active');
        $('.figureImg .slide-img').animate({'left':-li_width*index});
    }
    setIntervalFunc = setInterval(timeFunc,time);*/
});

;(function($){
    var defaults= {};
    $.fn.figureImg = function(options){
        var options = $.extend(true,defaults,options);
        return this.each(function(){
            var timeFunc;
            var setIntervalFunc;
            var time = 5000;
            var index = 0;
            var $this = $(this);
            var li_width = $this.find('.slide-img .list:eq(0)').outerWidth();
            $this.find('.slide-btn li').on('click', function(){
                clearInterval(setIntervalFunc);
                var $thisLi = $(this);
                index = $thisLi.index();
                $thisLi.addClass('active').siblings().removeClass('active');
                $this.find('.slide-img').animate({'left':-li_width*index});
                setIntervalFunc = setInterval(timeFunc,time)
            });
            timeFunc = function(){
                index = index>=2?0:++index;
                $this.find('.slide-btn li').eq(index).addClass('active').siblings().removeClass('active');
                $this.find('.slide-img').animate({'left':-li_width*index});
            }
            setIntervalFunc = setInterval(timeFunc,time);
        });
    };// end $.fn.figureImg
})(jQuery);


