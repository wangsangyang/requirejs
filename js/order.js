/* ---------- create by wangsongyang in 2016.04.06 ---------- */
/* 商标购买：点击分享图标显示微博、微信、qq空间、豆瓣图标 */
$(function(){
    $('.share-to').on({
        mouseenter: function(){
            $(this).addClass('hover');
        },
        mouseleave: function(){
            $(this).removeClass('hover');
        }
    });
});

/* 选择代理人：点击向下箭头出现更多项 */
$(function(){
    $('.icon-double-down').on({
        click: function(){
            var isOpen = $(this).closest('.shadow-box').hasClass('open');
            $(this).closest('.shadow-box')[isOpen?'removeClass':'addClass']('open');
        }
    });
});


/*点击左、右箭头切换代理人的偏移的banner特效*/
;(function($){
	$.fn.slideBanner = function(options){    
		var setOffset = 100;
		var fullOffset = '105%';
	    
		return this.each(function(){
            var $this = $(this);
			var isComplete = true;
			var banner_i = 0;
			
			$this.on({
				mouseenter: function(){
					$(this).find('.btn-arrow-banner').show();
				},
				mouseleave: function(){
					$(this).find('.btn-arrow-banner').hide();		
				}
			});			
			/* 点击右箭头 */
			$this.find('.btn-arrow-next').on('click', function(){
				flyMove('right');				
			});/*end click*/
			
			/* 点击左箭头 */
			$this.find('.btn-arrow-prev').on('click', function(){
				flyMove('left');						
			});/*end click*/		
			
			function flyMove(direction){
				if(isComplete){			
					isComplete = false;
					var totalBanner = $this.find('.slideBanner').length - 1;

                    if(totalBanner>=1){
                        var activeBanner = $this.find('.activeBanner');
                        var activeBannerIndex = $this.find('.slideBanner').index($this.find('.activeBanner'));
                        var leftpic = activeBanner.find('.pic').position().left;
                        var left1 = activeBanner.find('.p1').position().left;
                        var left2 = activeBanner.find('.p2').position().left;
                        var leftpbtn = activeBanner.find('.p-btn').position().left;
                        if(direction=='right'){
                            banner_i = activeBannerIndex==totalBanner?0:++banner_i;
                        }else{
                            banner_i = activeBannerIndex==0?totalBanner:--banner_i;
                        }
                        var moveElement = $this.find('.slideBanner').eq(banner_i);
                        moveElement.find('.pic').css({'left':fullOffset}).end().find('.p1').css({'left':fullOffset}).end().find('.p2').css({'left':fullOffset}).end().find('.p-btn').css({'left':fullOffset});
                        activeBanner.find('.pic').animate({'left':leftpic + setOffset},400,function(){
                            $(this).animate({'left':'-100%'},600);
                            activeBanner.find('.p1').delay(200).animate({'left':left1 + setOffset},400,function(){
                                $(this).animate({'left':'-100%'});
                            });
                            activeBanner.find('.p2').delay(600).animate({'left':left2 + setOffset},400,function(){
                                $(this).animate({'left':'-100%'});
                            });
                            activeBanner.find('.p-btn').delay(1000).animate({'left':leftpbtn + setOffset},400,function(){
                                $(this).animate({'left':'-100%'},400, function(){
                                    moveElement.addClass('activeBanner').siblings().removeClass('activeBanner');
                                    moveElement.find('.pic').animate({'left':leftpic},200);
                                    moveElement.find('.p1').animate({'left':left1},400);
                                    moveElement.find('.p2').delay(400).animate({'left':left2},400);
                                    moveElement.find('.p-btn').delay(800).animate({'left':leftpbtn},400,function(){
                                        isComplete = true;
                                    });
                                });
                            });
                        });
                    }

				}/*end if*/					
			}/*end flyMove*/	

		});/* end each */
	};/* end $.fn.slideBanner */
})(jQuery);


/*购买成功页：点击您可能还需要的服务的左右翻页按钮*/
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

/*点击加减号改版购买数量*/
$(function(){
    $('#buy-number .jian').on('click', function(){
        changeBuyNumber('jian');
    });
    $('#buy-number .jia').on('click', function(){
        changeBuyNumber('jia');
    });

    var index = 1;
    function changeBuyNumber(direction){
        var value =  $('#buy-number .buy-number-input').val();
        if(isNaN(value)){
            index = 1;
        }else if(direction=='jian'){
            index = index==1?1:--index;
        }else if(direction=='jia'){
            ++index;
        }
        $('#buy-number .buy-number-input').val(index);
    }
});


$(function(){
    /*切换城市*/
    $('.switch-city .default-city .switch-btn').on('click', function(e){
        var isOpen = $(this).closest('.switch-city').hasClass('open');
        $(this).closest('.switch-city')[isOpen?'removeClass':'addClass']('open');
        e.stopPropagation();
    });
    $('body').on('click', function(e){
        $('.switch-city').removeClass('open');
        e.stopPropagation();
    });
});




