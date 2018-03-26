/*create by wangsongyang in 2016.03.09*/

/*新闻页：上一篇*/
$(function(){
    var index = 0;
    var w = $('.relevant-article-prev .list-box').width();
    var len = $('.relevant-article-prev .list-box .list li').length;
    $('.relevant-article-prev .icon-arrow-prev').on('click',function(){
        index = index>=len-1?index:++index;
        $(this).closest('.relevant-article-prev').find('.list-box .list').animate({'left':-index*w});

    });
});
/*新闻页：下一篇*/
$(function(){
    var index = 0;
    var w = $('.relevant-article-next .list-box').width();
    var len = $('.relevant-article-next .list-box .list li').length;
    $('.relevant-article-next .icon-arrow-next').on('click',function(){
        index = index>=len-1?index:++index;
        $(this).closest('.relevant-article-next').find('.list-box .list').animate({'right':-index*w});
    });
});


/*首页：点击星级代理人的左右翻页按钮*/
$(function(){
    var index = 0;
    var constantlen = 6;/*常量*/
    var liWidth = $('#star-agent .items .list').outerWidth(true);
    var len =  $('#star-agent .items .list').length;
    $('#star-agent .items-btn .btn-flip-left').on('click', function(){
        index = index==0?index:--index;
        $('#star-agent .items').stop().animate({'left': -index*liWidth});
        if(index==0){
            $('#flip-tip').text('已到第一页了！').show();
            setTimeout(tipHide,3000);
        }
    });
    $('#star-agent .items-btn .btn-flip-right').on('click', function(){
        if(len>=constantlen){
            index = index==len-constantlen?index:++index;
        }
        $('#star-agent .items').stop().animate({'left': -index*liWidth});
        if(index==len-constantlen){
            $('#flip-tip').text('已到最后一页了！').show();
            setTimeout(tipHide,3000);
        }
    });
    function tipHide(){
        $('#flip-tip').fadeOut(800);
    }
});
