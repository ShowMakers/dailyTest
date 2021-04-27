//数据
let giao = location.search.split("?")[1].split("=")[1];
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/getcatec',
    type:'get',
    dataType:'json',
    data:{'sub':giao,'page':1,'pageNum':10},
    success:function(data){
        // console.log(data.data.courses[i].title);
        for (let i = 0 ; i < data.data.courses.length ; i++) {
            let ul = $('<ul/>').prop('class','four-ul').appendTo($('.course>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
            let a = $('<a href="courses-details.html?id='+data.data.courses[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.courses[i].pic+'" height="163px"/>').appendTo(a);
            $('<p/>').html(data.data.courses[i].title).appendTo(a);
            let p2 = $('<p/>').appendTo(a);
            $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data.courses[i].price).appendTo(p2);
            $('<span/>').css({color:'#999999'}).html(data.data.courses[i].view+'人学习').appendTo(p2);
        }
        switch (giao) {
            case '1':
                $('<h1/>').css({color:'white',lineHeight:'120px'}).html('职场提升').appendTo('.ttitle');
                break;
            case '2':
                $('<h1/>').css({color:'white',lineHeight:'120px'}).html('编程开发').appendTo('.ttitle');
                break;
            case '3':
                $('<h1/>').css({color:'white',lineHeight:'120px'}).html('生活兴趣').appendTo('.ttitle');
                break;
            case '4':
                $('<h1/>').css({color:'white',lineHeight:'120px'}).html('创意设计').appendTo('.ttitle');
                break;
            case '5':
                $('<h1/>').css({color:'white',lineHeight:'120px'}).html('电商运营').appendTo('.ttitle');
                break;
        }
    }
})
//小标题
$(function() {
    $.ajax({
        url: 'http://47.105.96.139:8082/napi/index/nav',
        dataType: 'json',
        type: 'get',
        success: function (dt) {
            let asd = dt.data;
            $('<ul/>').prop('class','allCourse-ul container').appendTo($('.allCourse'));
            for (let i = 0 ; i < 5; i++) {
                let {title} = asd[i];
                // console.log(dt.data);
                $('.allCourse-ul').append($('<li><a class="aa" target="_self" href="lesson.html?id='+i+'">'+title+'</a></li>').prop('class','nav-li'));
                console.log(i);
                $('.aa:eq(0)').attr('href','first.html');
            }
            $(`.allCourse-ul li:eq(${giao}) a`).css({color:'#f32196'});
            $(".nav-ul").find(`li:eq(${giao}) a`).css({color:'#f32196'});
        }
    })
});

