/**
 * Created by Liulc on 2016/8/9.
 */
window.onload=function(){
    function pageName()
    {
        var strUrl=location.href;
        var arrUrl=strUrl.split("/");
        var strPage=arrUrl[arrUrl.length-1];
        if (strPage == 'index.html'){
            function getTime()
            {
                var now = new Date();
                getId('EntTime').value = now.getFullYear()
                    + "-" + (now.getMonth() + 1)
                    + "-" + now.getDate();

                getId('EntTime').onclick=function(){
                    return showCalendar('EntTime', 'y-mm-dd');
                };
            }
            getTime();
            function close(obj){
                getId(obj).onclick=function(){
                    getId('shade').style.display="none";
                    getId('tier').style.display="none";
                    document.body.style.overflowY="auto";
                    var contentLi = getId('content').getElementsByTagName('li');
                    for (var i=0;i<contentLi.length;i++){
                        contentLi[i].style.background="";
                    }
                };
            }

            function show(shade,tier){
                getId(shade).style.display="block";
                getId(tier).style.display="block";
                var oTierw=getId(tier).offsetWidth;
                var oTierh=getId(tier).offsetHeight;
                getId(tier).style.marginTop='-'+(oTierh/2)+'px';
                getId(tier).style.marginLeft='-'+(oTierw/2)+'px';
                document.body.style.overflowY="hidden";
            }
            function tier(){
                var contentLi = getId('content').getElementsByTagName('li');
                var listLiNodes = getId('list').childNodes;
                for (var i=0;i<contentLi.length;i++){
                    contentLi[i].index = i;
                    contentLi[i].ondblclick=function(){
                        thist = this;
                        getId('title').innerHTML="单个修改";
                        preservation();
                        show('shade','tier');
                    };
                    var clickNumber =0;

                    contentLi[i].onclick=function(){
                        thist = this;
                        getId('title').innerHTML="批量修改";
                        if(clickNumber %2==0){
                            j=this.index+1;
                        }else{
                            var h=this.index+1;
                            for (var i=0;i<listLiNodes.length;i++){
                                if (listLiNodes[i].index< j && listLiNodes[i].index>=h && j>h){
                                    listLiNodes[i].style.background="yellow";
                                    listLiNodes[i].style.transition="all 1s ease";
                                    show('shade','tier');
                                    preservation();
                                }else if (listLiNodes[i].index>= j && listLiNodes[i].index<h && j<h){
                                    listLiNodes[i].style.background="yellow";
                                    listLiNodes[i].style.transition="all 1s ease";
                                    show('shade','tier');
                                    preservation();
                                }
                            }
                        }
                        clickNumber++;
                        close('close');
                        if (this.style.background=="yellow"){
                            this.style.background="";
                            this.style.transition="all 1s ease";
                        }else {
                            this.style.background="yellow";
                            this.style.transition="all 1s ease";
                        }
                    };
                }
            }
            tier();

            function preservation(){
                var contentLi = getId('content').getElementsByTagName('li');
                var Amount_room = getId('set').getElementsByTagName('input')[0];
                var House_prices = getId('set').getElementsByTagName('input')[1];
                var re = /^[0-9]+$/;
                getId('preservation').onclick=function(){
                    for (var i=0;i<contentLi.length;i++){
                        if (contentLi[i].style.background=="yellow"){
                            if (!(re.test(Amount_room.value) && re.test(House_prices.value))){
                                alert("你输入的内容不是数字");
                                Amount_room.value="";
                                House_prices.value="";
                                return
                            }else {
                                contentLi[i].getElementsByTagName('h3')[0].innerHTML=Amount_room.value;
                                contentLi[i].getElementsByTagName('p')[0].innerHTML='￥'+House_prices.value;
                            }
                        }else {
                            if (!(re.test(Amount_room.value) && re.test(House_prices.value))){
                                alert("你输入的内容不是数字");
                                Amount_room.value="";
                                House_prices.value="";
                                return
                            }else {
                                thist.getElementsByTagName('h3')[0].innerHTML=Amount_room.value;
                                thist.getElementsByTagName('p')[0].innerHTML='￥'+House_prices.value;
                            }
                        }
                        contentLi[i].style.background="";
                    }
                    Amount_room.value="";
                    House_prices.value="";
                    getId('tier').style.display="none";
                    getId('spinner').style.display="block";
                    setTimeout(function(){
                        getId('spinner').style.display="none";
                        getId('shade').style.display="none";
                        document.body.style.overflowY="auto";
                    },500);
                }
            }
            window.onresize=function(){
                var oTierw=getId('tier').offsetWidth;
                var oTierh=getId('tier').offsetHeight;
                getId('tier').style.marginTop='-'+(oTierh/2)+'px';
                getId('tier').style.marginLeft='-'+(oTierw/2)+'px';
            };

            roomList('left','content','rooms');
            function roomList(obj,content,rooms){
                var aroomList = getId(obj).getElementsByTagName('li');
                var aBoxs = getId(rooms).getElementsByClassName('box');
                var aBoxs_li = getId(rooms).childNodes;
                for (var i=0;i<aBoxs_li.length;i++){
                    var aBoxsli_li = getId(rooms).childNodes[i].childNodes;
                    for (var x=0;x<aBoxsli_li.length;x++){
                        aBoxsli_li[x].index = x;
                        aBoxsli_li[x].onmousemove=function(){
                            this.style.background= this.className;
                            this.style.transition="all 1.5s ease";
                            this.style.opacity="0.5";
                        };
                        aBoxsli_li[x].onmouseout=function(){
                            this.style.background="";
                            this.style.transition="all 1.5s ease";
                            this.style.opacity="100";
                        };
                        aBoxsli_li[x].onclick=function(){
                            alert(this.index);
                        }
                    }
                }
                for (var i=0;i<aroomList.length;i++){
                    aroomList[i].index = i;
                    aroomList[i].onclick=function(){
                        var t=this.index;
                        getId(content).style.right="-80%";
                        getId(rooms).style.left="20%";
                        getId(content).style.opacity="0";
                        getId(rooms).style.opacity="100";
                        for (var i = 0; i < aroomList.length; i++) {
                            aroomList[i].style.background="";
                            aroomList[i].style.transition="all 1s ease";
                        }
                        this.style.background="#979797";
                        this.style.transition="all 1s ease";


                        for (var j=0;j<aBoxs.length;j++){
                            aBoxs[j].style.opacity="0";
                            aBoxs[j].style.zIndex = "";
                            aBoxs[j].index=j;
                            if (aBoxs[j].index == t){
                                aBoxs[j].style.opacity="100";
                                aBoxs[j].style.zIndex = "1000";
                            }
                        }
                    }
                }
            }
        }
        else if (strPage == 'set.html'){
            var oSetLeft = getId('set_left');
            var oSetContent = getId('set_content');
            var aSetLeft_li = oSetLeft.getElementsByTagName('li');
            var aSetContent_li = oSetContent.getElementsByClassName('content');
            aSetContent_li[0].style.opacity = "100";
            aSetLeft_li[0].style.background = "#979797";
            for (var i=0;i<aSetLeft_li.length;i++){
                aSetLeft_li[i].index=i;
                aSetLeft_li[i].onclick=function(){
                    var t = this.index;
                    for (var i=0;i<aSetLeft_li.length;i++){
                        aSetLeft_li[i].style.background="";
                        aSetLeft_li[i].style.transition = "all 1s ease";
                    }
                    this.style.background="#979797";


                    for (var j=0;j<aSetContent_li.length;j++){
                        aSetContent_li[j].style.opacity="0";
                        aSetContent_li[j].style.zIndex = "";
                        aSetContent_li[j].index=j;
                        if (aSetContent_li[j].index == t){
                            aSetContent_li[j].style.opacity="100";
                            aSetContent_li[j].style.zIndex = "1000";
                        }
                    }
                };
            }
        }
    }
    pageName();
    function getId(id) {
        return typeof id==='string'?document.getElementById(id):id;
    }

    //每个页面头部共用的方法
    function grogshop(){
        var oGrogshop_list = getId('grogshop_list');
        var aGrogshop_list_li=oGrogshop_list.getElementsByTagName('li');
        getId('grogshop').onclick=function(){
            if (oGrogshop_list.style.opacity=="100"){
                oGrogshop_list.style.opacity="0";
                oGrogshop_list.style.left="-20%";
                this.getElementsByClassName('arrow')[0].style.backgroundImage="url(images/arrow_bottom.png)";
            }else {
                oGrogshop_list.style.opacity="100";
                oGrogshop_list.style.left="20%";
                this.getElementsByClassName('arrow')[0].style.backgroundImage="url(images/arrow_top.png)";
            }
        };
        for (var i=0;i<aGrogshop_list_li.length;i++){
            aGrogshop_list_li[i].onclick=function(){
                var title = getId('grogshop').getElementsByTagName('h1')[0].innerHTML;
                getId('grogshop').getElementsByTagName('h1')[0].innerHTML = this.innerHTML;
                oGrogshop_list.style.opacity="0";
                oGrogshop_list.style.left="-20%";
                this.innerHTML= title;
                getId('grogshop').getElementsByClassName('arrow')[0].style.backgroundImage="url(images/arrow_bottom.png)";
                getId('spinner').style.display="block";
                getId('shade').style.display="block";
                document.body.style.overflowY="hidden";
                setTimeout(function(){
                    getId('spinner').style.display="none";
                    getId('shade').style.display="none";
                    document.body.style.overflowY="auto";
                },500);
            }
        }
    }
    grogshop();

};
