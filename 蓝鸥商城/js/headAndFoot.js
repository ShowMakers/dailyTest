$(function () {
    if (localStorage.getItem('lanou')!=null){
        let who = localStorage.getItem('lanou');
        $('#login').html(JSON.parse(who).username).attr('href','ownerCenter.html');
        $('#reg').html('退出');
        if($('#reg').html() === '退出' ){
            $('#reg').on('click',function(){
                localStorage.removeItem('lanou');
                $('#reg').attr('href','first.html');
            })
        }
    }
})
    //头部选项卡
    $(function(){
        $.ajax({
            url:'http://47.105.96.139:8082/napi/index/nav',
            dataType:'json',
            type:'get',
            success: function(dt){
                let asd = dt.data;
                $('<ul/>').prop('class','nav-ul container').appendTo($('#nav'));
                // for (const {id,title} of dt.data) {
                for (let i = 0 ; i <dt.data.length; i++) {
                    let{title} = asd[i];
                    // console.log(dt.data);
                    $('.nav-ul').append($('<li><a class="ss" target="_self" href="lesson.html?id='+i+'">'+title+'</a></li>').prop('class','nav-li'));
                    $('.ss:eq(0)').attr('href','first.html');
                    $('.ss:eq(6)').attr('href','付费阅读.html?id=0');
                    $('.ss:eq(7)').attr('href','在线购物.html?id=0');
                    $('.ss:eq(8)').attr('href','relation.html');
                }
            }
        })
    });

//底部选项
    $(function(){
        $.ajax({
            url:'http://47.105.96.139:8082/napi/index/botLink',
            dataType:'json',
            type:'get',
            success: function(dt){
                //获取所有对象里的key
                let allKeys = Object.keys(dt);
                //排个序
                allKeys.sort();
                // console.log(dt[]);
                // console.log(dt.data);
                $('<ul/>').prop('class','foot-head-ul container').appendTo($('.foot-nav'));
                for (const {title} of dt.data) {
                    $('.foot-head-ul').append($('<li><a href="/">'+title+'</a></li>').prop('class','nav-li'));
                }
            }
        })
    });
//友情链接
    $(function(){
        $.ajax({
            url:'http://47.105.96.139:8082/napi/index/comLinks',
            dataType:'json',
            type:'get',
            success: function(dt){
                //获取所有对象里的key
                let allKeys = Object.keys(dt);
                //排个序
                allKeys.sort();
                // console.log(dt[]);
                // console.log(dt.data);
                $('<ul/>').prop('class','foot-down-ul container').appendTo($('.friendlyLinks'));
                for (const {link,title} of dt.data) {
                    $('.foot-down-ul').append($('<li><a href="+'+link+'+">'+title+'</a></li>').prop('class','nav-li'));
                }
            }
        })
    });
//siwper上的子字
    $(function(){
        $.ajax({
            url:'http://47.105.96.139:8082/napi/index/nav',
            dataType:'json',
            type:'get',
            success: function(dt){
                //获取所有对象里的key
                let allKeys = Object.keys(dt);
                //排个序
                allKeys.sort();
                // console.log(dt[]);
                // console.log(dt.data);
                $('<ul/>').prop('class','swiper-top-left').appendTo($('.swiper-left'));
                for (const {title} of dt.data) {
                    $('.swiper-top-left').append($('<li><a href="###">'+title+'&gt;'+'</a></li>').prop('class','nav-li'));
                }
            }
        })
    });

