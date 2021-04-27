//网站公告
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/notice',
    type:'get',
    dataType:'json',
    success:function(dt){
        for (const {data} of dt.data) {
            $('#notice').html(data);
        }
    }
})
//新品上架
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/newc',
    type:'get',
    dataType:'json',
    success:function(data){
        let ul = $('<ul/>').prop('class','row newProduct').appendTo($('#newP'));
            for (let i = 0 ; i <=4 ; i++) {
                let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
                let a = $('<a href="courses-details.html?id='+data.data[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
                $('<img src="http://47.105.96.139:8082'+data.data[i].pic+'"/>').appendTo(a);
                $('<p/>').html(data.data[i].title).appendTo(a);
                let p2 = $('<p/>').appendTo(a);
                $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data[i].price).appendTo(p2);
                $('<span/>').css({color:'#999999'}).html(data.data[i].view+'人学习').appendTo(p2);
            }
    }
})
//首页职场提升
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/getccate?sub=1',
    type:'get',
    dataType:'json',
    success:function(data){
        for (let i = 0 ; i < 4 ; i++) {
            //上
            let ul2 = $('<ul/>').prop('class','title-nav').appendTo($('.hangUp>.container>.host-title'));
            let li2 = $('<li/>').appendTo(ul2);
            $('<a/>').html(data.data.cate_name[i].title).appendTo(li2);

            let ul = $('<ul/>').prop('class','four-ul').appendTo($('.hangUp>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
            let a = $('<a href="courses-details.html?id='+data.data.courses[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.courses[i].pic+'" height="163px"/>').appendTo(a);
            $('<p/>').html(data.data.courses[i].title).css({margin:'10px 0'}).appendTo(a);
            let p2 = $('<p/>').appendTo(a);
            $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data.courses[i].price).appendTo(p2);
            $('<span/>').css({color:'#999999'}).html(data.data.courses[i].view+'人学习').appendTo(p2);
        }
    }

})
//编程开发
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/getccate?sub=2',
    type:'get',
    dataType:'json',
    success:function(data){
        for (let i = 0 ; i < 4 ; i++) {
            //上
            let ul2 = $('<ul/>').prop('class','title-nav').appendTo($('.program>.container>.host-title'));
            let li2 = $('<li/>').appendTo(ul2);
            $('<a/>').html(data.data.cate_name[i].title).appendTo(li2);

            let ul = $('<ul/>').prop('class','four-ul').appendTo($('.program>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
            let a = $('<a href="courses-details.html?id='+data.data.courses[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.courses[i].pic+'" height="163px"/>').appendTo(a);
            $('<p/>').html(data.data.courses[i].title).appendTo(a);
            let p2 = $('<p/>').appendTo(a);
            $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data.courses[i].price).appendTo(p2);
            $('<span/>').css({color:'#999999'}).html(data.data.courses[i].view+'人学习').appendTo(p2);
        }
    }
})
//生活兴趣
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/getccate?sub=3',
    type:'get',
    dataType:'json',
    success:function(data){
        for (let i = 0 ; i < 4 ; i++) {
            //上
            let ul2 = $('<ul/>').prop('class','title-nav').appendTo($('.interest>.container>.host-title'));
            let li2 = $('<li/>').appendTo(ul2);
            $('<a/>').html(data.data.cate_name[i].title).appendTo(li2);

            let ul = $('<ul/>').prop('class','four-ul').appendTo($('.interest>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
            let a = $('<a href="courses-details.html?id='+data.data.courses[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.courses[i].pic+'" height="163px"/>').appendTo(a);
            $('<p/>').html(data.data.courses[i].title).appendTo(a);
            let p2 = $('<p/>').appendTo(a);
            $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data.courses[i].price).appendTo(p2);
            $('<span/>').css({color:'#999999'}).html(data.data.courses[i].view+'人学习').appendTo(p2);
        }
    }
})
//创意设计
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/getccate?sub=4',
    type:'get',
    dataType:'json',
    success:function(data){
        for (let i = 0 ; i < 4 ; i++) {
            //上
            let ul2 = $('<ul/>').prop('class','title-nav').appendTo($('.design>.container>.host-title'));
            let li2 = $('<li/>').appendTo(ul2);
            $('<a/>').html(data.data.cate_name[i].title).appendTo(li2);

            let ul = $('<ul/>').prop('class','four-ul').appendTo($('.design>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
            let a = $('<a href="courses-details.html?id='+data.data.courses[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.courses[i].pic+'" height="163px"/>').appendTo(a);
            $('<p/>').html(data.data.courses[i].title).appendTo(a);
            let p2 = $('<p/>').appendTo(a);
            $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data.courses[i].price).appendTo(p2);
            $('<span/>').css({color:'#999999'}).html(data.data.courses[i].view+'人学习').appendTo(p2);
        }
    }
})
//电商运营
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/getccate?sub=5',
    type:'get',
    dataType:'json',
    success:function(data){
        for (let i = 0 ; i < 4 ; i++) {
            //上
            let ul2 = $('<ul/>').prop('class','title-nav').appendTo($('.jd>.container>.host-title'));
            let li2 = $('<li/>').appendTo(ul2);
            $('<a href="###"/>').html(data.data.cate_name[i].title).appendTo(li2);

            let ul = $('<ul/>').prop('class','four-ul').appendTo($('.jd>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3').appendTo(ul);
            let a = $('<a href="courses-details.html?id='+data.data.courses[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.courses[i].pic+'" height="163px"/>').appendTo(a);
            $('<p/>').html(data.data.courses[i].title).appendTo(a);
            let p2 = $('<p/>').appendTo(a);
            $('<span/>').css({fontWeight:'bold',marginRight:'10px',color:'#ff0000'}).html(data.data.courses[i].price).appendTo(p2);
            $('<span/>').css({color:'#999999'}).html(data.data.courses[i].view+'人学习').appendTo(p2);
        }
    }
})
//文章咨询
$.ajax({
    url:'http://47.105.96.139:8082/napi/index/article?sub=4',
    type:'get',
    dataType:'json',
    success:function(data){
        for (let i = 0 ; i < 4 ; i++) {
            // console.log(data.data.news[i].title);
            let ul = $('<ul/>').prop('class','four-ul ').appendTo($('.text>.container'));
            let li = $('<li/>').prop('class', 'col-xs-6 col-md-3 read').appendTo(ul);
            let a = $('<a href="new-detail.html?id='+data.data.news[i].id+'"/>').prop('class', 'thumbnail').appendTo(li);
            $('<img src="http://47.105.96.139:8082'+data.data.news[i].pic+'" height="163px"/>').appendTo(a);
            let span = $('<span/>').appendTo(a);
            $('<p/>').html(data.data.news[i].intro).appendTo(span);
            $('<p/>').html('发布日期：'+data.data.news[i].date).appendTo(span);
            $('<b/>').prop('class','ltitle').html(data.data.news[i].title).appendTo(span);
        }
    }
})
