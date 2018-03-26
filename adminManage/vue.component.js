/* ---------- create by wangsongyang in 2017.01.10 ---------- */
/* vue.js导航组件，正式开发需要去掉 */

define(['vue'],function(Vue){
    Vue.component('left-nav',{
        template:'<ul class="leftBox-nav songti">\
                    <li class="menu open">\
                        <div class="menu-header">\
                            <em class="icon icon-admin-down"></em>\
                            <span class="text">订单管理</span>\
                        </div>\
                        <ul class="menu-body">\
                            <li><a class="text" href="adminManage/neworderManage/list-all-zn.html">智能注册</a></li>\
                            <li><a class="text" href="adminManage/neworderManage/list-all-pt.html">商标业务</a></li>\
                        </ul>\
                    </li>\
                    <li class="menu open">\
                        <div class="menu-header">\
                            <em class="icon icon-admin-down"></em>\
                            <span class="text">指派管理</span>\
                        </div>\
                        <ul class="menu-body">\
                            <li><a class="text" href="adminManage/newzhipai/list-shenhe.html">审核指派</a></li>\
                            <li><a class="text" href="adminManage/newzhipai/list-dijiao.html">递交指派</a></li>\
                            <li><a class="text" href="adminManage/newzhipai/record.html">指派记录</a></li>\
                        </ul>\
                    </li>\
                    <li class="menu open">\
                        <div class="menu-header">\
                            <em class="icon icon-admin-down"></em>\
                            <span class="text">审核管理</span>\
                        </div>\
                        <ul class="menu-body">\
                            <li><a class="text" href="adminManage/newshenhe/list-waiting.html">商标审核</a></li>\
                        </ul>\
                    </li>\
                    <li class="menu open">\
                        <div class="menu-header">\
                            <em class="icon icon-admin-down"></em>\
                            <span class="text">网站配置</span>\
                        </div>\
                        <ul class="menu-body">\
                            <li><a class="text" href="adminManage/newwebSet/brandSet.html">商标配置</a></li>\
                            <li><a class="text" href="adminManage/newwebSet/personSet.html">流程人员管理</a></li>\
                        </ul>\
                    </li>\
                    <li class="menu open">\
                        <div class="menu-header">\
                            <em class="icon icon-admin-down"></em>\
                            <span class="text">电子递交</span>\
                        </div>\
                        <ul class="menu-body">\
                            <li><a class="text" href="adminManage/newBrandSubmit/list-unjiaoguan.html">商标递交</a></li>\
                        </ul>\
                    </li>\
                </ul>'
    });

    new Vue({
        el:'#leftnav'
    });

});





