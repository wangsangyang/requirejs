/* ---------- create by wangsongyang in 2017.01.10 ---------- */
/* vue.js导航组件，正式开发需要去掉 */



Vue.component('my-nav',{
    template:'<div class="main-nav">\
                <div class="nav">\
                        <div class="logo-nav" id="logo-nav">\
                            <div class="logo"><a href="../index.html"><img src="../images/logo.png" alt="权大师logo" title="权大师logo" /></a></div>\
                            <div class="nav-menu">\
                                <h2 class="all-service"><i class="icon icon-all-service"></i>全部服务</h2>\
                                <ul class="main-menu">\
                                    <li class="menu">\
                                        <h3 class="menu-title"><a href="#">商标业务<i class="icon icon-arrow songti">&gt;</i></a></h3>\
                                        <div class="menu-bodyer">\
                                            <dl>\
                                                <dt><a href="#">查询是否可以注册</a></dt>\
                                                <dd>\
                                                    <a class="selected" href="#">商标查询</a>\
                                                    <a href="#">专业商标查询（报告）</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">快速办理商标注册</a></dt>\
                                                <dd>\
                                                    <a href="#">自助商标注册</a>\
                                                    <a href="#">保姆商标注册</a>\
                                                    <a class="selected" href="#">担保商标注册</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">遇到障碍如何化解</a></dt>\
                                                <dd>\
                                                    <a href="#">商标驳回复审</a>\
                                                    <a href="#">商标撤三答辩</a>\
                                                    <a href="#">商标异议答辩</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">异议他人商标</a></dt>\
                                                <dd>\
                                                    <a href="#">商标撤三申请</a>\
                                                    <a href="#">商标异议申请</a>\
                                                    <a href="#">商标无效宣告</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">商标信息及时变更</a></dt>\
                                                <dd>\
                                                    <a href="#">商标变更</a>\
                                                    <a href="#">商标转让</a>\
                                                    <a href="#">商标续展</a>\
                                                    <a href="#">商标宽展</a>\
                                                    <a href="#">商标许可备案</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">我要进入海外市场</a></dt>\
                                                <dd>\
                                                    <a href="#">马德里商标注册</a>\
                                                    <a href="#">美国商标注册</a>\
                                                    <a href="#">日本商标注册</a>\
                                                    <a href="#">韩国商标注册</a>\
                                                    <a href="#">欧洲商标注册</a>\
                                                </dd>\
                                            </dl>\
                                            <ul class="right-bar" data="众多专家答疑解惑">\
                                                <li class="icon-0"><a href="#"></a></li>\
                                                <li class="icon-1"><a href="#"></a></li>\
                                                <li class="icon-2"></li>\
                                                <li class="icon-3"></li>\
                                            </ul>\
                                        </div>\
                                    </li>\
                                    <li class="menu">\
                                        <h3 class="menu-title"><a href="#">专利业务<i class="icon icon-arrow songti">&gt;</i></a></h3>\
                                        <div class="menu-bodyer">\
                                            <dl>\
                                                <dt><a href="#">发明专利申请</a></dt>\
                                                <dd>\
                                                    <a href="#">商标查询</a>\
                                                    <a href="#">专业商标查询（报告）</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">实用新型专利</a></dt>\
                                                <dd>\
                                                    <a href="#">自助商标注册</a>\
                                                    <a href="#">保姆商标注册</a>\
                                                    <a href="#">担保商标注册</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">外观专利申请</a></dt>\
                                                <dd>\
                                                    <a href="#">商标驳回复审</a>\
                                                    <a href="#">商标撤三答辩</a>\
                                                    <a href="#">商标异议答辩</a>\
                                                </dd>\
                                            </dl>\
                                            <ul class="right-bar">\
                                                <li class="icon-0"><a href="#"></a></li>\
                                                <li class="icon-1"><a href="#"></a></li>\
                                                <li class="icon-2"></li>\
                                                <li class="icon-3"></li>\
                                            </ul>\
                                        </div>\
                                    </li>\
                                    <li class="menu">\
                                        <h3 class="menu-title"><a href="#">版权业务<i class="icon icon-arrow songti">&gt;</i></a></h3>\
                                        <div class="menu-bodyer">\
                                            <dl>\
                                                <dt><a href="#">软件著作版权</a></dt>\
                                                <dd>\
                                                    <a href="#">商标查询</a>\
                                                    <a href="#">专业商标查询（报告）</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">作品版权</a></dt>\
                                                <dd>\
                                                    <a href="#">自助商标注册</a>\
                                                    <a href="#">保姆商标注册</a>\
                                                    <a href="#">担保商标注册</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">版权变更</a></dt>\
                                                <dd>\
                                                    <a href="#">商标驳回复审</a>\
                                                    <a href="#">商标撤三答辩</a>\
                                                    <a href="#">商标异议答辩</a>\
                                                </dd>\
                                            </dl>\
                                            <ul class="right-bar">\
                                                <li class="icon-0"><a href="#"></a></li>\
                                                <li class="icon-4"></li>\
                                                <li class="icon-3"></li>\
                                            </ul>\
                                        </div>\
                                    </li>\
                                    <li class="menu">\
                                        <h3 class="menu-title"><a href="#">创业业务<i class="icon icon-arrow songti">&gt;</i></a></h3>\
                                        <div class="menu-bodyer">\
                                            <dl>\
                                                <dt><a href="#">公司注册</a></dt>\
                                                <dd>\
                                                    <a href="#">商标查询</a>\
                                                    <a href="#">专业商标查询（报告）</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">VI设计</a></dt>\
                                                <dd>\
                                                    <a href="#">自助商标注册</a>\
                                                    <a href="#">保姆商标注册</a>\
                                                    <a href="#">担保商标注册</a>\
                                                </dd>\
                                            </dl>\
                                            <dl>\
                                                <dt><a href="#">LOGO设计</a></dt>\
                                                <dd>\
                                                    <a href="#">商标驳回复审</a>\
                                                    <a href="#">商标撤三答辩</a>\
                                                    <a href="#">商标异议答辩</a>\
                                                </dd>\
                                            </dl>\
                                            <ul class="right-bar">\
                                                <li class="icon-6"><a href="#"></a></li>\
                                                <li class="icon-5"></li>\
                                                <li class="icon-3"></li>\
                                            </ul>\
                                        </div>\
                                    </li>\
                                    <div class="saomiao">\
                                        <img src="../images/erweimas.jpg" alt="权大师二维码">\
                                        <span>权大师APP  开启简单之旅</span>\
                                    </div>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class="nav-item">\
                            <ul class="nav-bar">\
                                <li class="menu"><a class="menu-title" href="erBusiness/brand-business.html">自助商标注册<i class="icon icon-hot"></i></a></li>\
                                <li class="menu"><a class="menu-title" href="erBusiness/patent-business.html">担保商标注册<i class="icon icon-hot"></i></a></li>\
                                <li class="menu"><a class="menu-title" href="erBusiness/copyright-business.html">专利申请</a></li>\
                                <li class="menu"><a class="menu-title" href="erBusiness/chuangye-business.html">版权登记</a></li>\
                                <li class="menu open"><a class="menu-title" href="order/agent-list.html">选代理人</a></li>\
                                <li class="menu"><a class="menu-title" href="quanzhidao/quanzhidaoQA-list.html">权知道</a></li>\
                            </ul>\
                            <div class="tools">\
                                <a class="tools-title" href="javascript:;" title="特色工具栏">\
                                    <em class="icon icon-tools"></em>\
                                </a>\
                            </div>\
                <!--            <div class="user-account">\
                                <a class="menu-title" href="javascript:;">\
                                    <em class="icon icon-user"></em>\
                                    <i class="text">182****4820</i>\
                                    <em class="icon icon-number">22</em>\
                                </a>\
                                <ul class="menu-body">\
                                    <li class="sub-menu"><a href="#">个人中心</a></li>\
                                    <li class="sub-menu"><a href="#">账号设置</a></li>\
                                    <li class="sub-menu"><a href="#">个人消息</a><em class="icon icon-number">3</em></li>\
                                    <li class="sub-menu"><a href="#">监控消息</a><em class="icon icon-number">3</em></li>\
                                    <li class="sub-menu"><a href="#">意见反馈</a></li>\
                                    <li class="sub-menu"><a href="#">退出</a></li>\
                                </ul>\
                            </div>-->\
                            <div class="login-btn">\
                                <a href="#">登录</a>\
                                <a href="#">注册</a>\
                            </div>\
                        </div>\
                </div>\
            </div>'
});

new Vue({
    el:'#nav'
});

Vue.component('my-footer',{
    template:'<div class="footer-wrap">\
                <div class="footer">\
                <div class="items clearfix">\
                    <div class="items-left">\
                        <ul class="row-1 songti">\
                            <li class="menu active">\
                                <h6 class="menu-title songti">北京</h6>\
                                <dl class="menu-bodyer">\
                                    <dt>\
                                        <h1>北京</h1>\
                                        <span>BEIJING</span>\
                                    </dt>\
                                    <dd>\
                                        <table width="100%">\
                                            <tr>\
                                                <td width="310px">北京梦知网科技有限公司</td>\
                                                <td></td>\
                                            </tr>\
                                            <tr>\
                                                <td>北京市朝阳区广顺北大街五号融创动力B座3楼北侧</td>\
                                                <td></td>\
                                            </tr>\
                                        </table>\
                                    </dd>\
                                </dl>\
                            </li>\
                            <li class="menu">\
                                <h6 class="menu-title songti">上海</h6>\
                                <dl class="menu-bodyer">\
                                    <dt>\
                                        <h1>上海</h1>\
                                        <span>SHANGHAI</span>\
                                    </dt>\
                                    <dd>\
                                        <table width="100%">\
                                            <tr>\
                                                <td width="310px">上海知湃信息科技有限公司</td>\
                                                <td>电话：021-60534889</td>\
                                            </tr>\
                                            <tr>\
                                                <td>上海市徐汇区凯旋路2218号3楼</td>\
                                                <td>邮箱：info.sh@quandashi.com</td>\
                                            </tr>\
                                        </table>\
                                    </dd>\
                                </dl>\
                            </li>\
                            <li class="menu">\
                                <h6 class="menu-title songti">深圳</h6>\
                                <dl class="menu-bodyer">\
                                    <dt>\
                                        <h1>深圳</h1>\
                                        <span>SHENZHEN</span>\
                                    </dt>\
                                    <dd>\
                                        <table width="100%">\
                                            <tr>\
                                                <td width="310px">深圳市权大师科技有限公司</td>\
                                                <td>电话：0755-86538627</td>\
                                            </tr>\
                                            <tr>\
                                                <td>深圳市南山区科苑路8号讯美科技广场1号楼815</td>\
                                                <td>邮箱：info.sz@quandashi.com</td>\
                                            </tr>\
                                        </table>\
                                    </dd>\
                                </dl>\
                            </li>\
                            <li class="menu">\
                                <h6 class="menu-title songti">苏州</h6>\
                                <dl class="menu-bodyer">\
                                    <dt>\
                                        <h1>苏州</h1>\
                                        <span>SUZHOU</span>\
                                    </dt>\
                                    <dd>\
                                        <table width="100%">\
                                            <tr>\
                                                <td width="310px">苏州梦知网信息科技有限公司</td>\
                                                <td>电话：0512-65936472</td>\
                                            </tr>\
                                            <tr>\
                                                <td>苏州市工业园区星湖街328号创意产业园16-B206</td>\
                                                <td>邮箱：info.sh@quandashi.com</td>\
                                            </tr>\
                                        </table>\
                                    </dd>\
                                </dl>\
                            </li>\
                        </ul>\
                        <ul class="row-2">\
                            <li><a href="/index/about/1.html" rel="nofollow" target="_black">关于我们</a></li>\
                            <li><a href="/index/about/2.html" rel="nofollow" target="_black">加入我们</a></li>\
                            <li><a href="/index/about/3.html" rel="nofollow" target="_black">联系我们</a></li>\
                            <li><a href="/index/about/4.html" rel="nofollow" target="_black">商务合作</a></li>\
                            <li><a href="/index/about/5.html" target="_black">常见问题</a></li>\
                            <!-- <li><a href="#">支持帮助</a></li> -->\
                            <li><a href="/index/about/7.html" rel="nofollow" target="_black">费用说明</a></li>\
                            <li><a href="/index/about/8.html" rel="nofollow" target="_black">服务说明</a></li>\
                            <li><a href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&amp;key=XzkzODAyMjgzNF8zMDU4NDdfNDAwOTk4ODIxMV8yXw" target="_blank">意见反馈</a></li>\
                            <li><a href="/agentadmin/index/login" rel="nofollow" target="_black">机构登录</a></li>\
                        </ul>\
                    </div>\
                    <div class="items-right">\
                        <p class="row-1"><em class="icon icon-400"></em>400-8646-001 / 010-52596009</p>\
                        <p class="row-1"><em class="icon icon-email"></em>info@quandashi.com</p>\
                        <p class="row-1">版权所有 © 2014 IPMASTER 京ICP备1408888号</p>\
                        <p class="share-to">\
                            <span class="text">分享到</span>\
                            <a class="icon icon-weibo" href="#" target="_blank"></a>\
                            <a class="icon icon-weixin" href="#" target="_blank"></a>\
                            <a class="icon icon-qqkongjian" href="#" target="_blank"></a>\
                            <a class="icon icon-douban" href="#" target="_blank"></a>\
                        </p>\
                    </div>\
                </div>\
                    <ul class="items-1">\
                        <li>友情链接：</li>\
                        <li><a href="http://www.iprbank.cn" target="_blank" title="申请专利">申请专利</a></li>\
                        <li><a href="http://www.reglogo.com" target="_blank" title="中国商标注册">中国商标注册</a></li>\
                        <li><a href="http://www.1633.com/service" target="_blank" title="科易网">科易网</a></li>\
                        <li><a href="http://www.ipbhw.com/" target="_blank" title="深圳专利申请">深圳专利申请</a></li>\
                        <li><a href="http://www.cqshoucheng.com" target="_blank" title="重庆商标注册">重庆商标注册</a></li>\
                        <li><a href="https://www.rishiqing.com/" target="_blank" title="日事清">日事清</a></li>\
                        <li><a href="http://www.iptop.cn " target="_blank" title="商标交易">商标交易</a></li>\
                        <li><a href="/html " target="_blank" title="商标大全">商标大全</a></li>\
                    </ul>\
                </div>\
                </div>'
});

new Vue({
    el:'#footer'
});




