/** ---------- create by wangsongyang in 2016.03.23 ---------- **/

/* 搜索结果展示列表——点击分类均未检索到该商标的里面展开、收起效果 */
$(function(){
    $('.notFound-category .notFound-header .s3').on('click', function(){
        var isOpen = $(this).hasClass('open');
        $(this)[isOpen ? 'removeClass' : 'addClass']('open');
        var text = isOpen ? '收起' : '展开';
        $(this).find('.text').text(text);
        $(this).closest('.notFound-category')[isOpen ? 'removeClass' : 'addClass']('open');
    });
});

/* 搜索结果展示列表页、尼斯分类页——设置category-box快捷分类选择的高度、鼠标切换效果 */
$(function(){
    var $item = $('.category-box .item');
    var itemLength = $item.length;
    var itemHeight = $item.height();
    $item.find('.item-body').css({'height': itemLength*itemHeight});
    $item.on({
        mouseenter: function(){
            $(this).addClass('selected').siblings().removeClass('selected');
        }
    });
});

/* 尼斯分类也——鼠标移动到45类的效果 */
$(function(){
    var $list = $('.classify-big .item .list');
    $list.on({
        mouseenter: function(){
            var $img = $(this).find('.pic-big');
            var imgSrc = $img.attr('src');
            $(this).closest('.item').find('.big-box img').attr('src',imgSrc);
            $(this).addClass('selected').siblings().removeClass('selected');
        }
    });
});




