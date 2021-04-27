
$(function () {
    //数据
    var giao = location.search.split("?")[1].split("=")[1];
     $.ajax({
             url:'http://47.105.96.139:8082/napi/index/product',
             type:'get',
             dataType:'json',
             data:{id:giao},
             success:function(data){
                 var {P_pic,P_rest,P_title,P_price,S_title,P_vip,P_content,P_id,P_tag,P_specs,P_shuxing} = data.data;
                 /*
                 * P_title: 标题
                    P_id：id
                    p_vip:VIP
                    P_pic：图片
                    P_rest:库存
                    P_price：价格
                    S_title：大标题
                    *
                    * */
                 for (var i = 0 ; i < 1; i++) {
                     console.log(data);
                     //大标题
                     $('<h1/>').css({color:'white',lineHeight:'120px'}).html(S_title).appendTo('.ttitle');
                     //<div>
                     // 本商品由
                     // <span style="font-size:12px;background:#c81623;border-radius:5px;padding:2px 3px;color:#ffffff;display:inline;margin:0 2px;">
                     // 官方自营店
                     // </span>
                     // 提供
                     // </div>
                     $('<img src="http://47.105.96.139:8082/media/'+P_pic+'"/>').css({width:'100%'}).appendTo($('.detail-left'));
                     $('<h2/>').html(P_title).css({color:'black'}).prependTo($('.detail-right'));
                     $('.own').html('本商品由`<span style="font-size:12px;background:#c81623;border-radius:5px;padding:2px 3px;color:#ffffff;display:inline;margin:0 2px;">官方自营店</span>`提供');
                     var str2 = P_tag.split(' ');
                     // console.log(str2);
                     for (var j = 0 ; j < str2.length ; j++) {
                         $('<a href="###"/>').html(str2[j]).css({border:'1px solid black',marginRight: '10px',padding:'3px'}).appendTo($('.tags'));
                     }
                     console.log();
                     $('.p>span').html('$'+P_price+'&nbsp;');
                     $('.SX>span').html(P_rest+'件');
                     // $('.SY-one').html(P_specs[0].title+':').css({fontWeight:'bold'});
                     // console.log(P_specs[0].specs_value);
                     // console.log(P_specs.specs_value);
                     // //第一个p
                     // for (let j = 0 ; j < P_specs.specs_value.length; j++) {
                     //    $('<span/>').html(P_specs[j].specs_value).appendTo($('.SY-one'));
                     // }
                     $('.detail-right>p>a').html(P_vip).css({
                         fontSize: '12px',
                         borderRadius: '5px',
                         marginLeft: '10px',
                         marginRight: '10px',
                         fontWeight: 'bold',
                     });

                     var li1 = $('<li/>').appendTo('.df>.container>ul');
                     $('<a href="lesson.html?id='+P_id+'"/>').html(S_title+'&gt;').appendTo(li1);
                     $('<li/>').html(P_title+'&gt;').appendTo('.df>.container>ul');
                     $('.uu').html(P_content);
                     $('.an').html(P_shuxing);
                 }
             },
             error:function(data){
                 alert('请求出错啦!');
             }
         })

})