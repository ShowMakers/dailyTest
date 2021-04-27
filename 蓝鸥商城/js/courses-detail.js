//数据
let giao = location.search.split("?")[1].split("=")[1];
$(function () {
         $.ajax({
                 url:'http://47.105.96.139:8082/napi/index/courseintro',
                 type:'get',
                 data:{'id':giao},
                 dataType:'json',
                 success:function(data){
                     // console.log(data);
                     // C_vip  Vip价钱
                     // C_pic   图片地址
                     // C_title 小标题
                     // C_price 普价
                     // S_title 大标题
                     // C_content   介绍
                     let {C_pic,C_title,C_price,S_title,C_vip,C_content,C_id} = data.data;
                     for (let i = 0 ; i < 1; i++) {
                         console.log(C_pic);
                         $('<h1/>').css({color:'white',lineHeight:'120px'}).html(S_title).appendTo('.ttitle');
                         $('<img src="http://47.105.96.139:8082/media/'+C_pic+'"/>').css({width:'100%'}).appendTo($('.detail-left'));
                         $('<h2/>').html(C_title).css({color:'black'}).prependTo($('.detail-right'));
                         $('.detail-right>p>span').html('$'+C_price+'&nbsp;');
                         $('.detail-right>p>a').html(C_vip).css({
                             fontSize: '12px',
                             borderRadius: '5px',
                             marginLeft: '10px',
                             marginRight: '10px',
                             fontWeight: 'bold',
                             border:'solid 1px #000000',
                         });
                         //<h4><a href="course-content.html?id=">开始学习</a></h4>
                         $(`<h4><a href="course-content.html?id=${C_id}">开始学习</a></h4>`).appendTo($('.learn'));
                         let li1 = $('<li/>').appendTo('.qwe>.container>ul');
                            $('<a href="lesson.html?id='+C_id+'"/>').html(S_title+'&gt;').appendTo(li1);
                         $('<li/>').html(C_title+'&gt;').appendTo('.qwe>.container>ul');
                         $('.uu').html(C_content);
                     }
                 },
                 error:function(data){
                     alert('请求出错啦!');
                 }
             })
        //热门推荐
         $.ajax({
                 url:'http://47.105.96.139:8082/napi/index/getHotRecommon',
                 type:'get',
                 dataType:'json',
                 data:{id:giao},
                 success:function(data){
                     let asd = data.data;
                     // console.log(asd);
                     for (let i = 0 ; i < data.data.length ; i++) {
                        let li =  $('<li/>').css({margin:'20px 0 20px 0'}).appendTo($('.hot-ul'));
                        let a = $('<a/>').css({textAlign:'center'}).appendTo(li);
                        $('<img src="http://47.105.96.139:8082'+asd[i].P_pic+'"/>').css({width:'100%'}).appendTo(a);
                         $('<p/>').html(asd[i].P_title).css({
                             whiteSpace: 'nowrap',
                             overflow: 'hidden',
                             textOverflow: 'ellipsis',
                         }).appendTo(a);
                              $('<p/>').html('$'+asd[i].P_price).css({color:'red'}).appendTo(a);

                         }
                 },
                 error:function(data){
                     alert('请求出错啦!');
                 }
             })

})
