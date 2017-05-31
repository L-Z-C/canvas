/**
 * Created by Liulc on 2016/8/9.
 */
window.onload=function() {
    function pageName() {
        var strUrl = location.href;
        var arrUrl = strUrl.split("/");
        var strPage = arrUrl[arrUrl.length - 1];
        if (strPage == 'index.html') {
            function getTime() {
                var now = new Date();
                getId('EntTime').value = now.getFullYear()
                    + "-" + (now.getMonth() + 1)
                    + "-" + now.getDate();

                getId('EntTime').onclick = function () {
                    return showCalendar('EntTime', 'y-mm-dd');
                };
            }

            getTime();

            getId('explain').onmousemove = function () {
                this.style.right = "0";
            };
            getId('explain').onmouseout = function () {
                this.style.right = "-120px";
            };
            function prevNext(id) {
                var num = 0;
                getId(id).onclick = function () {
                    if (id == "prev") {
                        num--;
                    } else {
                        num++;
                    }
                    var times = getId('content').getElementsByClassName('data_top_time');
                    var oDate = new Date();
                    var iM = oDate.getTime();
                    var d = 24 * 60 * 60 * 1000;
                    for (var i = 0; i < times.length; i++) {
                        times[i].index = i;
                        times[i].innerHTML = ymd(new Date(iM + d * [i] + d * num));
                    }
                    getId('shade').style.display = "block";
                    getId('spinner').style.display = "block";
                    setTimeout(function () {
                        getId('spinner').style.display = "none";
                        getId('shade').style.display = "none";
                        document.body.style.overflowY = "auto";
                    }, 500);
                }
            }

            prevNext('next');
            prevNext('prev');

            function ymd(date) {
                return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            }

            function listDay() {
                var aDays = getId('content').getElementsByClassName('data_bottom_day');
                for (var i = 0; i < aDays.length; i++) {
                    var oDate = new Date();
                    var iM = oDate.getTime();
                    var d = 24 * 60 * 60 * 1000;
                    var weekday = new Array(7);
                    weekday[0] = "星期天";
                    weekday[1] = "星期一";
                    weekday[2] = "星期二";
                    weekday[3] = "星期三";
                    weekday[4] = "星期四";
                    weekday[5] = "星期五";
                    weekday[6] = "星期六";
                    aDays[i].index = i;
                    aDays[i].innerHTML = weekday[new Date(iM + d * [i]).getDay()];
                }

            }

            listDay();

            function listTimes() {
                var times = getId('content').getElementsByClassName('data_top_time');
                var oDate = new Date();
                var iM = oDate.getTime();
                var d = 24 * 60 * 60 * 1000;
                for (var i = 0; i < times.length; i++) {
                    times[i].index = i;
                    times[i].innerHTML = ymd(new Date(iM + d * [i]));
                }
            }

            listTimes();

            function objSize(objOne,objTwo,objThree) {
                objOne.style.height = objTwo.offsetHeight - objThree.offsetHeight+'px';
            }
            objSize(getId('left'),document.getElementsByClassName('both')[0],getId('top'));

            function backgroundRgb(objOne,objTwo,backgroundColor) {
                if (objTwo == "content"){
                    if (objOne.offsetHeight > objTwo.offsetHeight - objTwo.getElementsByClassName('right')[0].offsetHeight){
                        objTwo.style.backgroundColor = "";
                    }else {
                        objTwo.style.backgroundColor = backgroundColor;
                    }
                }else {
                    if (objOne.offsetHeight > objTwo.offsetHeight){
                        objTwo.style.backgroundColor = "";
                    }else {
                        objTwo.style.backgroundColor = backgroundColor;
                    }
                }
            }
            function roomTypeList() {
                var roomlistNum = parseInt(Math.random() * 20);
                var roomListName = ['欧式大床房', '欧式双床房', '欧式豪华单人房', '中式双床房', '欧式风情房', '中式单人房'];
                var oList = getId('left').getElementsByClassName('list')[0];
                if (roomlistNum == 0) {
                    roomlistNum++;
                }
                for (var i = 0; i < roomlistNum; i++) {
                    var roomlistLi = document.createElement('li');
                    roomlistLi.className = "listClass";
                    var numName = parseInt(Math.random() * roomListName.length);
                    roomlistLi.innerHTML = roomListName[numName];
                    oList.appendChild(roomlistLi);
                    roomBoxs(getId('rooms'));
                }
                var roomTypeNum = parseInt(roomlistNum * 11);
                for (j = 0; j < roomTypeNum; j++) {
                    var roomTypeLi = document.createElement('li');
                    roomTypeLi.className = "typeClass";
                    getId('list').appendChild(roomTypeLi);
                    var roomTypeTop = document.createElement('div');
                    roomTypeTop.className = "list_top";
                    roomTypeLi.appendChild(roomTypeTop);
                    var roomTypeTopH3 = document.createElement('h3');
                    roomTypeTopH3.className = "list_top_h3";
                    roomTypeTopH3.innerHTML = parseInt(Math.random() * 10);
                    if (roomTypeTopH3.innerHTML == 0) {
                        roomTypeTopH3.innerHTML++;
                    }
                    roomTypeTop.appendChild(roomTypeTopH3);
                    var roomTypeBottom = document.createElement('div');
                    roomTypeBottom.className = "list_bottom";
                    roomTypeLi.appendChild(roomTypeBottom);
                    var roomTypeBottomP = document.createElement('p');
                    roomTypeBottomP.className = "list_bottom_p";
                    roomTypeBottomP.innerHTML = parseInt(Math.random() * 1000).toFixed(2);
                    roomTypeBottom.appendChild(roomTypeBottomP);
                }
                backgroundRgb(oList,getId('left'),"rgba(112,128,144,0.90)");
                backgroundRgb(getId('list'),getId('content'),"rgba(255,255,255,0.6)");
            }

            roomTypeList();

            function roomType() {
                var aLeftLi = getId('left').getElementsByTagName('li');
                var oRoomType = getId('set').getElementsByClassName('select')[0];
                for (var i = 0; i < aLeftLi.length; i++) {
                    var option = document.createElement('option');
                    option.innerHTML = aLeftLi[i].innerHTML;
                    oRoomType.appendChild(option);
                }
            }

            roomType();


            function tier() {
                var contentLi = getId('content').getElementsByTagName('li');
                var listLiNodes = getId('list').childNodes;
                for (var i = 0; i < contentLi.length; i++) {
                    contentLi[i].index = i;
                    var clickNumber = 0;
                    contentLi[i].ondblclick = function () {
                        thist = this;
                        clickNumber = 0;
                        getId('title').innerHTML = "单个修改";
                        preservation();
                        show('shade', 'tier');
                        var times = getId('content').getElementsByClassName('data_top_time');
                        for (var i = 0; i < times.length; i++) {
                            times[i].index = i;
                            if (times[i].index % 11 == this.index % 11) {
                                getId('set').getElementsByClassName('start_time')[0].value = times[i].innerHTML;
                                getId('set').getElementsByClassName('end_time')[0].value = times[i].innerHTML;
                            }
                        }
                        var aLeftLi = getId('left').getElementsByTagName('li');
                        var oOption = getId('set').getElementsByTagName('option');
                        for (var i = 0; i < aLeftLi.length; i++) {
                            aLeftLi[i].index = i;
                            for (var j = 0; j < oOption.length; j++) {
                                if (this.offsetTop == aLeftLi[i].offsetTop && oOption[j].index == aLeftLi[i].index) {
                                    oOption[j].setAttribute('selected', selected);
                                }
                            }
                        }
                    };

                    contentLi[i].onclick = function () {
                        thist = this;
                        getId('title').innerHTML = "批量修改";
                        if (clickNumber % 2 == 0) {
                            j = this.index + 1;
                            x = this;
                        } else {
                            var h = this.index + 1;
                            xt = this;
                            if (x.offsetTop == xt.offsetTop) {
                                for (var i = 0; i < listLiNodes.length; i++) {
                                    if (listLiNodes[i].index < j && listLiNodes[i].index >= h && j > h) {
                                        listLiNodes[i].style.background = "yellow";
                                        listLiNodes[i].style.transition = "all 1s ease";
                                        listLiNodes[i].style.boxShadow = " 0 2px 16px #666, 0 0 1px #666, 0 0 1px #666";
                                        listLiNodes[i].style.zIndex = "999";
                                        xt.style.background = "";
                                        show('shade', 'tier');
                                        preservation();
                                    } else if (listLiNodes[i].index >= j && listLiNodes[i].index < h && j < h) {
                                        listLiNodes[i].style.background = "yellow";
                                        listLiNodes[i].style.transition = "all 1s ease";
                                        listLiNodes[i].style.boxShadow = " 0 2px 16px #666, 0 0 1px #666, 0 0 1px #666";
                                        listLiNodes[i].style.zIndex = "999";
                                        xt.style.background = "";
                                        show('shade', 'tier');
                                        preservation();
                                    }
                                }
                            } else if (x.offsetTop !== xt.offsetTop) {
                                alert('请选择同一行!!!');
                                return;
                            }
                        }
                        clickNumber++;
                        close('tier');
                        if (this.style.background == "yellow") {
                            this.style.background = "";
                            this.style.transition = "all 1s ease";
                            this.style.boxShadow = "";
                            this.style.zIndex = "";
                        } else {
                            this.style.background = "yellow";
                            this.style.transition = "all 1s ease";
                            this.style.boxShadow = " 0 2px 16px #666, 0 0 1px #666, 0 0 1px #666";
                            this.style.zIndex = "999";
                        }
                        var times = getId('content').getElementsByClassName('data_top_time');
                        for (var i = 0; i < times.length; i++) {
                            times[i].index = i;
                            if (j < h) {
                                if (times[i].index % 11 == x.index % 11) {
                                    getId('set').getElementsByClassName('start_time')[0].value = times[i].innerHTML;
                                } else if (times[i].index % 11 == xt.index % 11) {
                                    getId('set').getElementsByClassName('end_time')[0].value = times[i].innerHTML;
                                }
                            } else if (j > h) {
                                if (times[i].index % 11 == x.index % 11) {
                                    getId('set').getElementsByClassName('end_time')[0].value = times[i].innerHTML;
                                } else if (times[i].index % 11 == xt.index % 11) {
                                    getId('set').getElementsByClassName('start_time')[0].value = times[i].innerHTML;
                                }
                            }
                        }
                    };
                }
            }

            tier();

            function preservation() {
                var contentLi = getId('content').getElementsByTagName('li');
                var Amount_room = getId('set').getElementsByTagName('input')[2];
                var House_prices = getId('set').getElementsByTagName('input')[3];
                var re = /^[0-9]+$/;

                var aLeftLi = getId('left').getElementsByTagName('li');
                var oOption = getId('set').getElementsByTagName('option');
                for (var i = 0; i < aLeftLi.length; i++) {
                    aLeftLi[i].index = i;
                    for (var j = 0; j < oOption.length; j++) {
                        if (x.offsetTop == aLeftLi[i].offsetTop && oOption[j].index == aLeftLi[i].index) {
                            oOption[j].setAttribute('selected', selected);
                        }
                    }
                }

                getId('preservation').onclick = function () {
                    for (var i = 0; i < contentLi.length; i++) {
                        if (contentLi[i].style.background == "yellow") {
                            if (!(re.test(Amount_room.value) && re.test(House_prices.value))) {
                                alert("你输入的内容不是纯数字");
                                return
                            } else {
                                contentLi[i].getElementsByTagName('h3')[0].innerHTML = Amount_room.value;
                                contentLi[i].getElementsByTagName('p')[0].innerHTML = House_prices.value+'.00';
                            }
                        } else {
                            if (!(re.test(Amount_room.value) && re.test(House_prices.value))) {
                                alert("你输入的内容不是纯数字");
                                return
                            } else {
                                thist.getElementsByTagName('h3')[0].innerHTML = Amount_room.value;
                                thist.getElementsByTagName('p')[0].innerHTML = House_prices.value+'.00';
                            }
                        }
                        contentLi[i].style.background = "";
                        contentLi[i].style.boxShadow = "";
                        contentLi[i].style.zIndex = "";
                    }
                    Amount_room.value = "";
                    House_prices.value = "";
                    getId('tier').style.display = "none";
                    getId('spinner').style.display = "block";
                    setTimeout(function () {
                        getId('spinner').style.display = "none";
                        getId('shade').style.display = "none";
                        document.body.style.overflowY = "auto";
                    }, 500);
                }
            }

            getId('rooms_list').getElementsByClassName('add')[0].onclick = function () {
                show('shade', 'add_rooms');
                close('add_rooms');
                getId('add_rooms').getElementsByClassName('number')[0].value = "";
            };

            roomList('left', 'content', 'rooms');
            function roomList(obj, content, rooms) {
                var aroomList = getId(obj).getElementsByTagName('li');
                var aBoxs = getId(rooms).getElementsByClassName('box');
                all();
                for (var i = 0; i < aroomList.length; i++) {
                    aroomList[i].index = i;
                    aroomList[i].onclick = function () {
                        if (getId(rooms).style.left == "-100%") {
                            getId(rooms).style.left = "20%";
                            getId('modification').style.left = "-100%";
                            getId(rooms).style.opacity = "1";
                            getId('modification').style.opacity = "0";
                            getId('rooms_list').style.opacity = "0.8";
                        }
                        t = this.index;
                        getId(content).style.right = "-80%";
                        getId(rooms).style.left = "20%";
                        getId(content).style.opacity = "0";
                        getId(rooms).style.opacity = "100";
                        for (var i = 0; i < aroomList.length; i++) {
                            aroomList[i].style.background = "";
                            aroomList[i].style.transition = "all 1s ease";
                            aroomList[i].style.boxShadow = "";
                        }
                        this.style.backgroundColor = "rgba(151,151,151,0.8)";
                        this.style.transition = "all 1s ease";
                        this.style.boxShadow = "inset 2px 2px 3px #333";


                        for (var j = 0; j < aBoxs.length; j++) {
                            aBoxs[j].style.opacity = "0";
                            aBoxs[j].style.zIndex = "";
                            aBoxs[j].index = j;
                            if (aBoxs[j].index == t) {
                                aBoxs[j].style.opacity = "100";
                                aBoxs[j].style.zIndex = "1000";
                            }
                        }
                        getId('rooms_list').getElementsByClassName('del')[0].onclick = function () {
                            for (var j = 0; j < aBoxs.length; j++) {
                                aBoxs[j].index = j;
                                if (aBoxs[j].index == t) {
                                    var aBoxs_li = aBoxs[j].childNodes;
                                    for (var x = 0; x < aBoxs_li.length; x++) {
                                        aBoxs_li[x].index = x;
                                        if (aBoxs_li[x].type == "1") {
                                            var navigatorName = "zh-CN";
                                            if (navigator.browserLanguage == navigatorName) {     //判断是否IE浏览器再执行对应的删除方法,对BOM的操作
                                                aBoxs_li[x].removeNode(true);
                                            } else {
                                                aBoxs_li[x].remove();
                                            }
                                        }
                                    }
                                }
                            }
                        };
                        getId('rooms_list').getElementsByClassName('res')[0].onclick = function () {

                            for (var j = 0; j < aBoxs.length; j++) {
                                aBoxs[j].index = j;
                                if (aBoxs[j].index == t) {
                                    var aBoxs_li = aBoxs[j].childNodes;
                                    for (var x = 0; x < aBoxs_li.length; x++) {
                                        aBoxs_li[x].index = x;
                                        if (aBoxs_li[x].type == "1") {
                                            aBoxs_li[x].style.background = "";
                                            aBoxs_li[x].style.transition = "all 1.5s ease";
                                            aBoxs_li[x].style.opacity = "100";
                                            aBoxs_li[x].setAttribute('type', "");
                                        }
                                    }
                                }
                            }
                        };
                        var aRoomsBtn = getId('add_rooms').getElementsByTagName('button');
                        getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].style.display = 'none';
                        for (var i=0;i<aRoomsBtn.length;i++){
                            if (aRoomsBtn[i].innerHTML == '单个添加'){
                                aRoomsBtn[i].onclick = showRoom;
                            }else if (aRoomsBtn[i].innerHTML == '生成出来'){
                                aRoomsBtn[i].onclick = showRooms;
                            }else if (aRoomsBtn[i].innerHTML == '批量添加'){
                                aRoomsBtn[i].onclick = function () {
                                    alert('没有编辑不能添加');
                                }
                            }
                        }


                        getId('rooms_list').style.opacity = "100";
                    }
                }
            }

            window.onresize = function () {
                var oTierw = getId('tier').offsetWidth;
                var oTierh = getId('tier').offsetHeight;
                getId('tier').style.marginTop = '-' + (oTierh / 2) + 'px';
                getId('tier').style.marginLeft = '-' + (oTierw / 2) + 'px';
                var oModificationw = getId('modification').offsetWidth;
                var oModificationh = getId('modification').offsetHeight;
                getId('modification').style.marginTop = '-' + (oModificationh / 2) + 'px';
                getId('modification').style.marginLeft = '-' + (oModificationw / 2) + 'px';
                var add_roomsw = getId('add_rooms').offsetWidth;
                var add_roomsh = getId('add_rooms').offsetHeight;
                getId('add_rooms').style.marginTop = '-' + (add_roomsh / 2) + 'px';
                getId('add_rooms').style.marginLeft = '-' + (add_roomsw / 2) + 'px';
                navLiA('header','grogshop');
                objSize(getId('left'),document.getElementsByClassName('both')[0],getId('top'));
            };
            navLiA('header','grogshop');
            SlideLR('add_rooms','h3','both','addRoom','addRooms','','bar',0);
            grogshop();
            title();
            if (window.name !== "") {
                getId('grogshop').getElementsByTagName('h1')[0].innerHTML = window.name;
            }
            wildcard_Character();
            canvas();
        }
        else if (strPage == 'set.html') {
            var oSetLeft = getId('set_left');
            var oSetContent = getId('set_content');
            var aSetLeft_li = oSetLeft.getElementsByTagName('li');
            var aSetContent_li = oSetContent.getElementsByClassName('content');
            aSetContent_li[0].style.opacity = "100";
            aSetLeft_li[0].style.backgroundColor = "rgba(151,151,151,0.6)";
            aSetLeft_li[0].style.boxShadow = "inset 2px 2px 3px #333";
            for (var i = 0; i < aSetLeft_li.length; i++) {
                aSetLeft_li[i].index = i;
                aSetContent_li[0].style.zIndex = "1000";
                aSetLeft_li[i].onclick = function () {
                    if (oSetContent.style.right == "-80%") {
                        oSetContent.style.right = "0";
                        oSetContent.style.opacity = "100";
                        getId('addGrogshop_Information').style.left = "-80%";
                        getId('addGrogshop_Information').style.opacity = "0";
                    }
                    aSetLeft_liT = this.index;
                    for (var i = 0; i < aSetLeft_li.length; i++) {
                        aSetLeft_li[i].style.background = "";
                        aSetLeft_li[i].style.transition = "all 1s ease";
                        aSetLeft_li[i].style.boxShadow = "";
                    }
                    this.style.backgroundColor = "rgba(151,151,151,0.6)";
                    this.style.boxShadow = "inset 2px 2px 3px #333";


                    for (var j = 0; j < aSetContent_li.length; j++) {
                        aSetContent_li[j].style.opacity = "0";
                        aSetContent_li[j].style.zIndex = "";
                        aSetContent_li[j].index = j;
                        if (aSetContent_li[j].index == aSetLeft_liT) {
                            aSetContent_li[j].style.opacity = "100";
                            aSetContent_li[j].style.zIndex = "1000";
                        }
                    }
                    if (this.innerHTML == "房间"){
                        pull(getId('set_content').getElementsByClassName('roomType')[0],getId('set_content').getElementsByClassName('roomTypeContent')[0]);
                        buttonClick('set_content','list',0);
                    }
                };
                if (aSetLeft_li[i].innerHTML == "房间"){
                    roomBoxs(getId('set_content').getElementsByClassName('housingPrice_information')[0]);
                }
            }

            function addOnclick() {
                getId('addHouse_type').getElementsByTagName('h3')[0].innerHTML = "房型信息";
                getId('addHouse_type').getElementsByTagName('button')[0].innerHTML = "添加";
                aAddButton_i = this.index;
                show('shade', 'addHouse_type');
                oButton.onclick = addHotel;
            }

            function compileOnclick() {
                oHotelNames = this;
                getId('addGrogshop_Information').getElementsByTagName('h3')[0].innerHTML = "酒店修改";
                getId('addGrogshop_Information').getElementsByTagName('button')[0].innerHTML = "确定修改";
                getId('set_content').style.right = "-80%";
                getId('set_content').style.opacity = "0";
                getId('addGrogshop_Information').style.left = "20%";
                getId('addGrogshop_Information').style.opacity = "1";
            }

            var aHotel = getId('set_content').getElementsByClassName('hotel');
            var oButton = getId('addHouse_type').getElementsByTagName('button')[0];

            function addCompile(addCompile) {
                var aAddButton = getId('set_content').getElementsByClassName(addCompile);
                for (var i = 0; i < aAddButton.length; i++) {
                    aAddButton[i].index = i;
                    if (addCompile == "add") {
                        aAddButton[i].onclick = addOnclick;
                    } else if (addCompile == "compile") {
                        aAddButton[i].onclick = compileOnclick;
                    }
                }
            }

            addCompile('add');
            addCompile('compile');

            function hotelPull(){
                var aHotelDd = this.parentNode.parentNode.getElementsByTagName('dd');
                for (var i=0;i<aHotelDd.length;i++){
                    if (aHotelDd[i].style.display == "none"){
                        aHotelDd[i].style.display = "block";
                    }else {
                        aHotelDd[i].style.display = "none";
                    }
                }
                if (this.parentNode.getElementsByTagName('p')[0].className == "topArrowT"){
                    this.parentNode.getElementsByTagName('p')[0].className = "bottomArrowT";
                }else {
                    this.parentNode.getElementsByTagName('p')[0].className = "topArrowT";
                }
            }

            function hotelPullObj(id,tagName) {
                var aHotelDt = getId(id).getElementsByTagName(tagName);
                for (var j=0;j<aHotelDt.length;j++){
                    aHotelDt[j].onclick = hotelPull;
                }
            }
            hotelPullObj('set_content','p');

            function addHotel() {
                var aInput = getId('addHouse_type').getElementsByTagName('input');
                var reHanZi = /^[\u4E00-\u9FA5]+$/;
                var reNumber = /^[0-9]+$/;
                if (!reHanZi.test(aInput[0].value)) {
                    alert('请输入合法房型名称');
                    return false;
                } else if (!reNumber.test(aInput[1].value && aInput[2].value && aInput[3].value)) {
                    alert('请输入纯数字');
                    return false;
                } else {
                    getId('spinner').style.display = "block";
                    document.body.style.overflowY = "hidden";
                    setTimeout(function () {
                        getId('spinner').style.display = "none";
                        getId('shade').style.display = "none";
                        document.body.style.overflowY = "auto";
                        for (var j = 0; j < aHotel.length; j++) {
                            aHotel[j].index = j;
                            if (aHotel[j].index == aAddButton_i) {
                                var roomDd = document.createElement('dd');
                                roomDd.style.width = "100%";
                                roomDd.style.height = "50px";
                                roomDd.style.border = "solid 1px #CCC";
                                roomDd.style.borderTop = "none";
                                aHotel[j].appendChild(roomDd);
                                var roomUl = document.createElement('ul');
                                roomUl.style.width = "100%";
                                roomUl.style.height = "100%";
                                roomDd.appendChild(roomUl);
                                for (var x = 0; x < 5; x++) {
                                    var roomLi = document.createElement('li');
                                    roomLi.style.width = "20%";
                                    roomLi.style.height = "50px";
                                    roomLi.style.float = "left";
                                    roomLi.style.lineHeight = "50px";
                                    roomLi.style.textAlign = "center";
                                    roomLi.style.fontSize = "1.4rem";
                                    roomLi.style.boxShadow = "1px 1px 2px #CCC";
                                    roomLi.style.position = "relative";
                                    roomUl.appendChild(roomLi);
                                }
                                var lastDdLi = aHotel[j].lastChild.getElementsByTagName('li');
                                var compile_smallButton = document.createElement('button');
                                compile_smallButton.className = "compile_small";
                                compile_smallButton.innerHTML = "编辑";
                                compile_smallButton.onclick = editFun;
                                lastDdLi[4].appendChild(compile_smallButton);
                                var deleteButton = document.createElement('button');
                                deleteButton.className = "delete";
                                deleteButton.innerHTML = "删除";
                                deleteButton.onclick = deletesFun;
                                lastDdLi[4].appendChild(deleteButton);
                                for (j = 0; j < lastDdLi.length; j++) {
                                    lastDdLi[j].index = j;
                                    for (x = 0; x < aInput.length; x++) {
                                        aInput[x].index = x;
                                        if (lastDdLi[j].index == aInput[x].index) {
                                            lastDdLi[j].innerHTML = aInput[x].value;
                                        }
                                    }
                                }

                            }
                        }
                    }, 500);
                    getId('addHouse_type').style.display = "none";
                }
            }

            close('addHouse_type');

            getId('set_content').getElementsByClassName('addGrogshop')[0].onclick = function () {
                getId('addGrogshop_Information').getElementsByTagName('h3')[0].innerHTML = "酒店添加";
                getId('addGrogshop_Information').getElementsByTagName('button')[0].innerHTML = "确定添加";
                getId('set_content').style.right = "-80%";
                getId('set_content').style.opacity = "0";
                getId('addGrogshop_Information').style.left = "20%";
                getId('addGrogshop_Information').style.opacity = "1";
            };
            getId('addGrogshop_Information').getElementsByClassName('back')[0].onclick = function () {
                getId('set_content').style.right = "0";
                getId('set_content').style.opacity = "1";
                getId('addGrogshop_Information').style.left = "-80%";
                getId('addGrogshop_Information').style.opacity = "0";
            };
            getId('addGrogshop_Information').getElementsByTagName('button')[0].onclick = function () {
                var reHanZi = /^[\u4E00-\u9FA5]+$/;
                if (!reHanZi.test(getId('addGrogshop_Information').getElementsByTagName('input')[0].value)) {
                    alert('请输入合法房型名称');
                    return false;
                }
                if (this.innerHTML == "确定添加") {
                    var hotelDl = document.createElement('dl');
                    hotelDl.className = "hotel";
                    for (var i = 0; i < aSetLeft_li.length; i++) {
                        aSetLeft_li[i].index = i;
                        if (aSetContent_li[i].index == aSetLeft_liT) {
                            aSetContent_li[i].appendChild(hotelDl);
                        }
                    }
                    var hotelDt = document.createElement('dt');
                    hotelDt.style.width = "100%";
                    hotelDt.style.height = "60px";
                    hotelDt.style.background = "#f5f5f5";
                    hotelDt.style.border = "solid 1px #CCC";
                    hotelDt.style.position = "relative";
                    hotelDl.appendChild(hotelDt);
                    var hotelP = document.createElement('p');
                    hotelP.className = "topArrowT";
                    hotelP.onclick = hotelPull;
                    hotelDt.appendChild(hotelP);
                    var hotelH1 = document.createElement('h1');
                    hotelH1.style.fontSize = "1.8rem";
                    hotelH1.style.lineHeight = "60px";
                    hotelH1.style.color = "#333";
                    hotelH1.style.padding = "0 0 0 50px";
                    hotelH1.innerHTML = getId('addGrogshop_Information').getElementsByTagName('input')[0].value;
                    hotelDt.appendChild(hotelH1);
                    var hotelAdd = document.createElement('button');
                    hotelAdd.className = "add";
                    hotelAdd.innerHTML = "添加房型";
                    hotelAdd.onclick = addOnclick;
                    hotelDt.appendChild(hotelAdd);
                    var hotelCompile = document.createElement('button');
                    hotelCompile.className = "compile";
                    hotelCompile.innerHTML = "编辑";
                    hotelCompile.onclick = compileOnclick;
                    hotelDt.appendChild(hotelCompile);
                    var hotelDd = document.createElement('dd');
                    hotelDd.style.width = "100%";
                    hotelDd.style.height = "50px";
                    hotelDd.style.border = "solid 1px #CCC";
                    hotelDd.style.borderTop = "none";
                    hotelDl.appendChild(hotelDd);
                    var hotelUl = document.createElement('ul');
                    hotelUl.style.width = "100%";
                    hotelUl.style.height = "100%";
                    hotelDd.appendChild(hotelUl);
                    for (var x = 0; x < 5; x++) {
                        var hotelLi = document.createElement('li');
                        hotelLi.style.width = "20%";
                        hotelLi.style.height = "50px";
                        hotelLi.style.float = "left";
                        hotelLi.style.lineHeight = "50px";
                        hotelLi.style.textAlign = "center";
                        hotelLi.style.fontSize = "1.4rem";
                        hotelLi.style.boxShadow = "1px 1px 2px #CCC";
                        hotelLi.style.position = "relative";
                        hotelUl.appendChild(hotelLi);
                    }
                    var hotelLis = hotelUl.getElementsByTagName('li');
                    var characters = ['房型名称', '房间数量', '门市价', '网络零售价', '操作'];
                    for (i = 0; i < hotelLis.length; i++) {
                        hotelLis[i].index = i;
                        for (x = 0; x < characters.length; x++) {
                            if (hotelLis[i].index == x) {
                                hotelLis[i].innerHTML = characters[x];
                            }
                        }
                    }
                    addCompile('add');
                    addCompile('compile');
                } else if (this.innerHTML == "确定修改") {
                    oHotelNames.parentNode.getElementsByTagName('h1')[0].innerHTML = getId('addGrogshop_Information').getElementsByTagName('input')[0].value;
                }
                getId('spinner').style.display = "block";
                getId('shade').style.display = "block";
                document.body.style.overflowY = "hidden";
                setTimeout(function () {
                    getId('spinner').style.display = "none";
                    getId('shade').style.display = "none";
                    document.body.style.overflowY = "auto";
                    getId('set_content').style.right = "0";
                    getId('addGrogshop_Information').style.left = "-80%";
                    getId('set_content').style.opacity = "1";
                    getId('addGrogshop_Information').style.opacity = "0";
                    var addGrogshop_Information_Inputs = getId('addGrogshop_Information').getElementsByTagName('input');
                    for (x = 0; x < addGrogshop_Information_Inputs.length; x++) {
                        addGrogshop_Information_Inputs[x].value = "";
                    }
                }, 500);
            };


            function deletesFun() {
                deletesButton = this;
                var aUlDelete = deletesButton.parentNode.parentNode.parentNode;
                if (confirm("确认删除吗")) {
                    var navigatorName = "zh-CN";
                    if (navigator.browserLanguage == navigatorName) {     //判断是否IE浏览器再执行对应的删除方法,对BOM的操作
                        aUlDelete.removeNode(true);
                    } else {
                        aUlDelete.remove();
                    }
                } else {
                    return false;
                }

            }

            function deletes() {
                var aDeletes = getId('set_content').getElementsByClassName('delete');
                for (var i = 0; i < aDeletes.length; i++) {
                    aDeletes[i].onclick = deletesFun;
                }
            }

            deletes();

            function editFun() {
                aEditsButton = this;
                getId('addHouse_type').getElementsByTagName('h3')[0].innerHTML = "房型编辑";
                getId('addHouse_type').getElementsByTagName('button')[0].innerHTML = "修改";
                show('shade', 'addHouse_type');
                getId('addHouse_type').getElementsByTagName('button')[0].onclick = editHotel;

            }

            function edit() {
                var aEdits = getId('set_content').getElementsByClassName('compile_small');
                for (var i = 0; i < aEdits.length; i++) {
                    aEdits[i].onclick = editFun;
                }
            }

            edit();

            function editHotel() {
                var aInput = getId('addHouse_type').getElementsByTagName('input');
                var aUl = aEditsButton.parentNode.parentNode.getElementsByTagName('li');
                var reHanZi = /^[\u4E00-\u9FA5]+$/;
                var reNumber = /^[0-9]+$/;
                if (!reHanZi.test(aInput[0].value)) {
                    alert('请输入合法房型名称');
                    return false;
                } else if (!reNumber.test(aInput[1].value && aInput[2].value && aInput[3].value)) {
                    alert('请输入纯数字');
                    return false;
                }
                for (var j = 0; j < aUl.length; j++) {
                    aUl[j].index = j;
                    for (var x = 0; x < aInput.length; x++) {
                        aInput[x].index = x;
                        if (aUl[j].index == aInput[x].index) {
                            aUl[j].innerHTML = aInput[x].value;
                        }
                    }
                }
                getId('spinner').style.display = "block";
                document.body.style.overflowY = "hidden";
                setTimeout(function () {
                    getId('spinner').style.display = "none";
                    getId('shade').style.display = "none";
                    document.body.style.overflowY = "auto";
                }, 500);
                getId('addHouse_type').style.display = "none";
            }
            window.onresize = function () {
                navLiA('header','grogshop');
                centerHeight(getId('set_content').getElementsByClassName('roomType')[0],false);
            };
            navLiA('header','grogshop');
            grogshop();
            title();
            centerHeight(getId('set_content').getElementsByClassName('roomType')[0],false);
            if (window.name !== "") {
                getId('grogshop').getElementsByTagName('h1')[0].innerHTML = window.name;
            }
            wildcard_Character();
            canvas();
        } else if (strPage == 'housingPrice.html') {

            SlideLR('housingPrice','h3','housingPrice','addHousingPrice','modificationHousingPrice','modificationHousingPriceT','bar',0);
            buttonClick('housingPrice','list',0);
            buttonClick('housingPrice','list',1);

            pull(getId('housingPrice').getElementsByClassName('roomType')[0],getId('housingPrice').getElementsByClassName('roomTypeContent')[0]);
            pull(getId('housingPrice').getElementsByClassName('roomType')[1],getId('housingPrice').getElementsByClassName('roomTypeContent')[1]);
            pull(getId('housingPrice').getElementsByClassName('roomType')[2],getId('housingPrice').getElementsByClassName('roomTypeContent')[2]);

            window.onresize = function () {
                navLiA('header','grogshop');
                centerHeight(getId('housingPrice').getElementsByTagName('h3'),true);
                centerHeight(getId('housingPrice').getElementsByClassName('bar')[0],false);
                centerHeight(getId('housingPrice').getElementsByClassName('roomType'),true);
            };
            navLiA('header','grogshop');
            grogshop();
            title();
            centerHeight(getId('housingPrice').getElementsByTagName('h3'),true);
            centerHeight(getId('housingPrice').getElementsByClassName('bar')[0],false);
            centerHeight(getId('housingPrice').getElementsByClassName('roomType'),true);
            if (window.name !== "") {
                getId('grogshop').getElementsByTagName('h1')[0].innerHTML = window.name;
            }
            canvas();
        }else if (strPage == 'login.html'){
            var oLogin_box = document.getElementById('login_box');
            var oLogo = document.getElementById('logo');
            var oImg = document.getElementById('img').src;
            var oLogow = oLogo.offsetWidth;
            oLogo.style.marginLeft = '-' + (oLogow / 2) + 'px';
            var aList = oLogin_box.getElementsByTagName('li');
            for (var i = 0; i < aList.length; i++) {
                aList[i].onclick = function () {
                    for (var i = 0; i < aList.length; i++) {
                        aList[i].className = "";
                    }
                    this.className = "active";
                }
            }
            var src = oImg.substring(oImg.lastIndexOf("/") + 1);
            if (src == 'login_logo.png') {
                oLogo.style.width = "48%";
                oLogo.style.height = "40%";
            } else {
                oLogo.style.width = "18.6%";
                oLogo.style.height = "45%";
            }


            window.onresize = function () {
                var oLogow = oLogo.offsetWidth;
                oLogo.style.marginLeft = '-' + (oLogow / 2) + 'px';
            };
            canvas();
        }
    }

    pageName();
    function getId(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    }

    function title(){
        var aTitle = getId('header').getElementsByTagName('a');
        for (var i = 0; i < aTitle.length; i++) {
            aTitle[i].onclick = function () {
                window.name = getId('grogshop').getElementsByTagName('h1')[0].innerHTML;
            }
        }
    }
    function canvas() {
        "use strict";
        var canvas = getId('canvas'),
            ctx = canvas.getContext('2d'),
            w = canvas.width = window.innerWidth,
            h = canvas.height = window.innerHeight,

            hue = parseInt(Math.random()*1000),//217
            stars = [],
            count = 0,
            maxStars = 2300;//星星数量

        var canvas2 = document.createElement('canvas'),
            ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        var half = canvas2.width / 2,
            gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#CCC');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();


        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            }

            if (min > max) {
                var hold = max;
                max = min;
                min = hold;
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
            var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
            //星星移动范围，值越大范围越小，
        }

        var Star = function() {
            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 8;
            //星星大小
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 50000;
            //星星移动速度
            this.alpha = random(2, 10) / 10;

            count++;
            stars[count] = this;
        };

        Star.prototype.draw = function() {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);

            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
            }

            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        };

        for (var i = 0; i < maxStars; i++) {
            new Star();
        }

        function animation() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.5; //尾巴
            ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
            ctx.fillRect(0, 0, w, h);

            ctx.globalCompositeOperation = 'lighter';
            for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw();
            }

            window.requestAnimationFrame(animation);
        }

        animation();
    }
    //重新脏检查所有房间
    function all() {
        var aBoxs_li = getId('rooms').childNodes;
        for (var i = 0; i < aBoxs_li.length; i++) {
            var aBoxsli_li = getId('rooms').childNodes[i].childNodes;
            for (var x = 0; x < aBoxsli_li.length; x++) {
                aBoxsli_li[x].index = x;
                aBoxsli_li[x].onclick = function () {
                    if (this.style.opacity == "0.8") {
                        this.style.background = "";
                        this.style.transition = "all 1.5s ease";
                        this.style.opacity = "100";
                        this.setAttribute('type', "");
                    } else {
                        this.style.background = this.className;
                        this.style.transition = "all 1.5s ease";
                        this.style.opacity = "0.8";
                        this.setAttribute('type', "1");
                    }
                };
                aBoxsli_li[x].ondblclick = function () {
                    getId('rooms').style.left = "-100%";
                    getId('modification').style.left = "20%";
                    getId('rooms').style.opacity = "0";
                    getId('modification').style.opacity = "1";
                    getId('modification').getElementsByTagName('span')[0].innerHTML = this.getElementsByTagName('dd')[0].innerHTML;
                    getId('modification').getElementsByClassName('back')[0].onclick = function () {
                        getId('rooms').style.left = "20%";
                        getId('modification').style.left = "-100%";
                        getId('rooms').style.opacity = "0.8";
                        getId('modification').style.opacity = "0";
                        getId('rooms_list').style.opacity = "0.8";
                    };
                    getId('modification').getElementsByTagName('button')[0].onclick = function () {
                        getId('spinner').style.display = "block";
                        getId('shade').style.display = "block";
                        document.body.style.overflowY = "hidden";
                        setTimeout(function () {
                            getId('spinner').style.display = "none";
                            getId('shade').style.display = "none";
                            document.body.style.overflowY = "auto";
                            getId('rooms').style.left = "20%";
                            getId('modification').style.left = "-100%";
                            getId('rooms').style.opacity = "0.8";
                            getId('modification').style.opacity = "0";
                            getId('rooms_list').style.opacity = "0.8";
                        }, 500);
                    };
                    getId('rooms_list').style.opacity = "0";
                }
            }
        }
    }

    //单个和批量添加
    function showRoom() {
        var aBoxs = getId('rooms').getElementsByClassName('box');
        var roomThat = this;
        if (this.innerHTML == '单个添加'){
            var number = 1;
            var re = /^[0-9]+$/;
            if (!(re.test(getId('add_rooms').getElementsByClassName('number')[0].value))) {
                alert('请输入正确的房间号码!!!');
                getId('add_rooms').getElementsByClassName('number')[0].value = "";
                return false;
            }
        }else if (this.innerHTML == '批量添加'){
            var number = getId('add_rooms').getElementsByClassName('showList')[0].getElementsByTagName('li').length;
        }
                getId('add_rooms').style.display = "none";
                getId('spinner').style.display = "block";
                document.body.style.overflowY = "hidden";
                setTimeout(function () {
                    getId('spinner').style.display = "none";
                    getId('shade').style.display = "none";
                    document.body.style.overflowY = "auto";
                    for (var j = 0; j < aBoxs.length; j++) {
                        aBoxs[j].index = j;
                        if (aBoxs[j].index == t) {
                            for (var k=0;k<number;k++) {
                                var roomsClass = ['pink', 'greenT', 'grey', 'green', 'yellow', 'orange', 'reserve', 'blue'];
                                var roomsClassNum = parseInt(Math.random() * roomsClass.length);
                                var roomLi = document.createElement('li');
                                roomLi.style.width = "80px";
                                roomLi.style.height = "80px";
                                roomLi.className = roomsClass[roomsClassNum];
                                roomLi.style.borderRadius = "10px";
                                roomLi.style.display = "inline-block";
                                roomLi.style.cursor = "pointer";
                                roomLi.style.position = "relative";
                                aBoxs[j].appendChild(roomLi);
                                var roomDl = document.createElement('dl');
                                roomDl.className = "info";
                                roomLi.appendChild(roomDl);
                                var roomDd = document.createElement('dd');
                                roomDd.className = "infoDd";
                                if (roomThat.innerHTML == '单个添加') {
                                    roomDd.innerHTML = getId('add_rooms').getElementsByClassName('number')[0].value;
                                }else {
                                    // var aRoomLi = getId('add_rooms').getElementsByClassName('showList')[0].getElementsByTagName('li');
                                    // for (var i=0;i<aRoomLi.length;i++){
                                    //     aRoomLi[i].index = i;
                                    //     roomDd.innerHTML = aRoomLi[i].innerHTML;
                                    // }
                                    roomDd.innerHTML = parseInt(Math.random() * 100);
                                }
                                roomDl.appendChild(roomDd);
                            }
                            all();
                        }
                    }
                }, 500);
    }

    //批量生成
    function showRooms() {
            var num = this.parentNode.previousSibling.previousSibling.firstChild.value;
            if (this.innerHTML == '重置'){
                if (confirm("确认重置吗")) {
                    var navigatorName = "zh-CN";
                    if (navigator.browserLanguage == navigatorName) {     //判断是否IE浏览器再执行对应的删除方法,对BOM的操作
                        getId('add_rooms').getElementsByClassName('showList')[0].removeNode(true);
                    } else {
                        getId('add_rooms').getElementsByClassName('showList')[0].remove();
                    }
                    this.parentNode.previousSibling.previousSibling.firstChild.disabled = '';
                } else {
                    return false;
                }
                this.innerHTML = '生成出来';
            }else {
                var re = /^[0-9]+$/;
                if (!re.test(num)){
                    alert('请输入纯数字！');
                    return false;
                }else if (num > 50){
                    alert('请输入小于等于50的纯数字！');
                    return false;
                }else {
                    var oShowList = document.createElement('ul');
                    oShowList.style.position = 'absolute';
                    oShowList.style.top = '22%';
                    oShowList.style.left = '0';
                    oShowList.style.width = '100%';
                    oShowList.style.height = '60%';
                    oShowList.className = 'showList';
                    oShowList.style.overflow = 'auto';
                    this.parentNode.parentNode.parentNode.appendChild(oShowList);
                    for (var i=0;i<num;i++){
                        var aShowList = document.createElement('li');
                        aShowList.style.width = '11%';
                        aShowList.style.height = '70px';
                        aShowList.style.margin = '10px';
                        aShowList.style.borderRadius = '5px';
                        aShowList.style.background = '#CCC';
                        aShowList.style.display = 'inline-block';
                        aShowList.style.cursor = 'pointer';
                        aShowList.style.lineHeight = '70px';
                        aShowList.style.textAlign = 'center';
                        aShowList.style.fontWeight = 'bold';
                        aShowList.innerHTML = i+1;
                        aShowList.onclick = informations;
                        oShowList.appendChild(aShowList);
                    }
                }
                this.parentNode.previousSibling.previousSibling.firstChild.value = '';
                this.parentNode.previousSibling.previousSibling.firstChild.disabled = 'true';
                this.innerHTML = '重置';
            }
    }
    function back() {
        getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].style.display = 'none';
        getId('add_rooms').getElementsByClassName('roomsNum')[0].style.display = 'block';
        this.parentNode.getElementsByClassName('showList')[0].style.display = 'block';
        this.innerHTML = '批量添加';
        this.onclick = function () {
            alert('没有编辑不能添加');
        }
    }
    function informations() {
        var that = this;
        this.parentNode.style.display = 'none';
        getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].style.display = 'block';
        getId('add_rooms').getElementsByClassName('roomsNum')[0].style.display = 'none';
        this.parentNode.previousSibling.previousSibling.innerHTML = '返回';
        getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].getElementsByTagName('input')[0].oninput = function () {
            if (this.value == ''){
                that.parentNode.previousSibling.previousSibling.innerHTML = '返回';
            }else {
                that.parentNode.previousSibling.previousSibling.innerHTML = '保存并返回';
            }
        };
        getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].getElementsByTagName('input')[0].onblur = function () {
            if (this.value == ''){
                that.parentNode.previousSibling.previousSibling.innerHTML = '返回';
                that.parentNode.previousSibling.previousSibling.onclick = back;
            }else {
                that.parentNode.previousSibling.previousSibling.innerHTML = '保存并返回';
                that.parentNode.previousSibling.previousSibling.onclick = function () {
                    that.innerHTML = getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].getElementsByTagName('input')[0].value;
                    getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].style.display = 'none';
                    getId('add_rooms').getElementsByClassName('roomsNum')[0].style.display = 'block';
                    that.parentNode.style.display = 'block';
                    getId('add_rooms').getElementsByClassName('addRoomsInformation')[0].getElementsByTagName('input')[0].value = '';
                    this.innerHTML = '批量添加';
                    this.onclick = showRoom;
                }
            }
        };
        this.parentNode.previousSibling.previousSibling.onclick = back;
    }
    //左右切换动画
    function SlideLR(id,TagName,classNameOne,classNameTwo,classNameThree,classNameFour,bar,item) {
        var aH3 = getId(id).getElementsByTagName(TagName);
        var oHousingPrice = getId(id).getElementsByClassName(classNameOne)[item];
        getId(id).getElementsByClassName(classNameThree)[item].style.opacity = "0";
        for (var j = 0; j < aH3.length; j++) {
            aH3[j].onclick = function () {
                if (this.innerHTML == '添加房价') {
                    oHousingPrice.style.left = "0";
                    getId(id).getElementsByClassName(bar)[item].innerHTML = '添加房价';
                    getId(id).getElementsByClassName(bar)[item].style.left = "0";
                    getId(id).getElementsByClassName(classNameTwo)[item].style.opacity = "100";
                    getId(id).getElementsByClassName(classNameThree)[item].style.opacity = "0";
                    getId(id).getElementsByClassName(classNameFour)[item].style.opacity = "0";
                } else if (this.innerHTML == '修改房价') {
                    oHousingPrice.style.left = "-100%";
                    getId(id).getElementsByClassName(bar)[item].innerHTML = '修改房价';
                    getId(id).getElementsByClassName(bar)[item].style.left = "33.3%";
                    getId(id).getElementsByClassName(classNameTwo)[item].style.opacity = "0";
                    getId(id).getElementsByClassName(classNameThree)[item].style.opacity = "100";
                    getId(id).getElementsByClassName(classNameFour)[item].style.opacity = "0";
                } else if (this.innerHTML == '指定房价') {
                    oHousingPrice.style.left = "-200%";
                    getId(id).getElementsByClassName(bar)[item].innerHTML = '指定房价';
                    getId(id).getElementsByClassName(bar)[item].style.left = "66.6%";
                    getId(id).getElementsByClassName(classNameTwo)[item].style.opacity = "0";
                    getId(id).getElementsByClassName(classNameThree)[item].style.opacity = "0";
                    getId(id).getElementsByClassName(classNameFour)[item].style.opacity = "100";
                } else if (this.innerHTML == '单个添加') {
                    oHousingPrice.style.left = "0";
                    getId(id).getElementsByClassName(bar)[item].innerHTML = '单个添加';
                    getId(id).getElementsByClassName(bar)[item].style.left = "0";
                    getId(id).getElementsByClassName(classNameTwo)[item].style.opacity = "100";
                    getId(id).getElementsByClassName(classNameThree)[item].style.opacity = "0";
                } else if (this.innerHTML == '批量添加') {
                    oHousingPrice.style.left = "-100%";
                    getId(id).getElementsByClassName(bar)[item].innerHTML = '批量添加';
                    getId(id).getElementsByClassName(bar)[item].style.left = "50%";
                    getId(id).getElementsByClassName(classNameTwo)[item].style.opacity = "0";
                    getId(id).getElementsByClassName(classNameThree)[item].style.opacity = "100";
                }
            }
        }
    }
    //房型房间按钮选择共用的方法
    function buttonClick(id,className,item) {
        var aButton = getId(id).getElementsByClassName(className)[item].getElementsByTagName('button');
        if (id == 'set_content'){
            for (var j = 0; j < aButton.length; j++) {
                aButton[j].onclick = function () {
                    for (var j = 0; j < aButton.length; j++) {
                        aButton[j].style.background = "";
                        aButton[j].style.boxShadow = "";
                        aButton[j].style.color = "#333";
                    }
                    this.style.background = "sandybrown";
                    this.style.boxShadow = "3px 3px 3px sandybrown";
                    this.style.color = "#FFF";
                }
            }
        }else {
            for (var j = 0; j < aButton.length; j++) {
                aButton[j].onclick = function () {
                    if (this.style.background == "") {
                        this.style.background = "sandybrown";
                        this.style.boxShadow = "3px 3px 3px sandybrown";
                        this.style.color = "#FFF";
                    } else {
                        this.style.background = "";
                        this.style.boxShadow = "3px 3px 3px #d6d6d6";
                        this.style.color = "#333";
                    }
                }
            }
        }
    }
    //上下拉的共用方法
    function pull(objRoomType,objRoomTypeContent) {
        objRoomType.onclick = function () {
            var h = objRoomTypeContent.offsetHeight + 'px';
            if (this.getElementsByTagName('div')[0].className == "topArrow") {
                objRoomTypeContent.style.marginBottom = "-" + h;
                objRoomTypeContent.style.opacity = "0";
                this.getElementsByTagName('div')[0].className = "bottomArrow";
            } else {
                objRoomTypeContent.style.marginBottom = "0";
                objRoomTypeContent.style.opacity = "100";
                this.getElementsByTagName('div')[0].className = "topArrow";
            }
        };
    }
    //添加房间共用方法
    function roomBoxs(obj) {
        var roomBoxs = document.createElement('ul');
        roomBoxs.className = "box";
        obj.appendChild(roomBoxs);
        var roomsNum = parseInt(Math.random() * 100);
        for (var x = 0; x < roomsNum; x++) {
            var roomsClass = ['pink', 'greenT', 'grey', 'green', 'yellow', 'orange', 'reserve', 'blue'];
            var roomsClassNum = parseInt(Math.random() * roomsClass.length);
            var roomBoxsLi = document.createElement('li');
            roomBoxsLi.className = roomsClass[roomsClassNum];
            roomBoxs.appendChild(roomBoxsLi);
            var roomBoxsSpan = document.createElement('span');
            roomBoxsSpan.className = "nop";
            roomBoxsSpan.innerHTML = parseInt(Math.random() * 100);
            roomBoxsLi.appendChild(roomBoxsSpan);
            var roomBoxsDl = document.createElement('dl');
            roomBoxsDl.className = "info";
            roomBoxsLi.appendChild(roomBoxsDl);
            for (var k = 0; k < 4; k++) {
                var roomBoxsDd = document.createElement('dd');
                roomBoxsDd.className = "infoDd";
                roomBoxsDd.innerHTML = parseInt(Math.random() * 20);
                roomBoxsDl.appendChild(roomBoxsDd);
            }
        }
    }
    //每个页面头部导航的宽高适应
    function navLiA(header,grogshop) {
        var aNavLi = getId(header).getElementsByClassName('nav')[0].getElementsByTagName('li');
        var aA = getId(header).getElementsByTagName('a');
        for (var i=0;i<aNavLi.length;i++){
            aNavLi[i].style.width = aNavLi[i].offsetHeight+'px';
            for (var j=0;j<aA.length;j++){
                aA[j].style.lineHeight = aNavLi[0].offsetHeight+'px';
            }
        }
        getId(grogshop).getElementsByTagName('h1')[0].style.lineHeight = getId(grogshop).offsetHeight+'px';
        getId(grogshop).getElementsByClassName('arrow')[0].style.top = getId(grogshop).offsetHeight/2.8+'px';
    }
    //一个或多个元素名和类名的百分比高度内容高度居中的方法
    function centerHeight(classTab,tf) {
        var aTabClass = classTab;
        if (tf == true){
            for (var i=0;i<aTabClass.length;i++){
                aTabClass[i].style.lineHeight = aTabClass[i].offsetHeight+'px';
            }
        }else {
            aTabClass.style.lineHeight = aTabClass.offsetHeight+'px';
        }
    }

    //每个页面头部共用的方法
    function grogshop() {
        var oGrogshop_list = getId('grogshop_list');
        var aGrogshop_list_li = oGrogshop_list.getElementsByTagName('li');
        getId('grogshop').onmouseout = function (ev) {
            var oEvent = ev || event;
            if (this.offsetTop + this.offsetHeight <= oEvent.clientY){
                if (oGrogshop_list.style.left == "20%"){
                    oGrogshop_list.style.opacity = "100";
                    oGrogshop_list.style.left = "20%";
                    this.getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_top.png)";
                }
            }else {
                oGrogshop_list.style.opacity = "0";
                oGrogshop_list.style.left = "-20%";
                this.getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_bottom.png)";
            }
        };
        oGrogshop_list.onmouseout = function (ev) {
            var oEvent = ev || event;
            if (this.offsetTop <= oEvent.clientY){
                this.style.opacity = "0";
                this.style.left = "-20%";
                getId('grogshop').getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_bottom.png)";
            }else {
                this.style.opacity = "100";
                this.style.left = "20%";
                getId('grogshop').getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_top.png)";
            }
        };
        getId('grogshop').onclick = function () {
            if (oGrogshop_list.style.opacity == "100") {
                oGrogshop_list.style.opacity = "0";
                oGrogshop_list.style.left = "-20%";
                this.getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_bottom.png)";
            } else {
                oGrogshop_list.style.opacity = "100";
                oGrogshop_list.style.left = "20%";
                this.getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_top.png)";
            }
        };
        for (var i = 0; i < aGrogshop_list_li.length; i++) {
            aGrogshop_list_li[i].onclick = function () {
                var title = getId('grogshop').getElementsByTagName('h1')[0].innerHTML;
                getId('grogshop').getElementsByTagName('h1')[0].innerHTML = this.innerHTML;
                oGrogshop_list.style.opacity = "0";
                oGrogshop_list.style.left = "-20%";
                this.innerHTML = title;
                getId('grogshop').getElementsByClassName('arrow')[0].style.backgroundImage = "url(images/arrow_bottom.png)";
                getId('spinner').style.display = "block";
                getId('shade').style.display = "block";
                document.body.style.overflowY = "hidden";
                setTimeout(function () {
                    getId('spinner').style.display = "none";
                    getId('shade').style.display = "none";
                    document.body.style.overflowY = "auto";
                }, 500);
            }
        }
    }


    //*符号通用
    function wildcard_Character(){
        var aWildcard_Character = document.getElementsByTagName('span');
        for (var i=0;i<aWildcard_Character.length;i++){
            if (aWildcard_Character[i].innerHTML == "*"){
                aWildcard_Character[i].style.position = "absolute";
                aWildcard_Character[i].style.fontSize = "1.6rem";
                aWildcard_Character[i].style.fontWeight = "bold";
                aWildcard_Character[i].style.color = "red";
                aWildcard_Character[i].style.margin = "5px 0 0 -8px";
            }
        }
    }


    function close(obj) {
        getId(obj).getElementsByClassName('close')[0].onclick = function () {
            getId('shade').style.display = "none";
            getId(obj).style.display = "none";
            document.body.style.overflowY = "auto";
            if (obj == 'tier') {
                var contentLi = getId('content').getElementsByTagName('li');
                for (var i = 0; i < contentLi.length; i++) {
                    contentLi[i].style.background = "";
                    contentLi[i].style.boxShadow = "";
                    contentLi[i].style.zIndex = "";
                }
            }else if (obj == 'add_rooms'){
                var navigatorName = "zh-CN";
                if (navigator.browserLanguage == navigatorName) {     //判断是否IE浏览器再执行对应的删除方法,对BOM的操作
                    getId(obj).getElementsByClassName('showList')[0].removeNode(true);
                } else {
                    getId(obj).getElementsByClassName('showList')[0].remove();
                }
                getId(obj).getElementsByClassName('addRoomsInformation')[0].style.display = 'none';
                getId(obj).getElementsByClassName('roomsNum')[0].style.display = 'block';
                getId(obj).getElementsByClassName('roomsNum')[0].getElementsByTagName('button')[0].innerHTML = '生成出来';
                getId(obj).getElementsByClassName('roomsNum')[0].getElementsByTagName('input')[0].disabled = '';
                getId(obj).getElementsByClassName('addRooms')[0].lastChild.previousSibling.innerHTML = '批量添加';

            }
            var aObjText = getId(obj).getElementsByTagName('input');
            for (var o = 0;o<aObjText.length;o++){
                aObjText[o].value = '';
            }
        };
    }

    function show(shade, box) {
        var aInputs = getId(box).getElementsByTagName('input');
        var aTextarea = getId(box).getElementsByTagName('textarea');
        for (var j = 0; j < aTextarea.length; j++) {
            aTextarea[j].value = "";
        }
        for (var i = 0; i < aInputs.length; i++) {
            aInputs[i].value = "";
        }
        getId(shade).style.display = "block";
        getId(box).style.display = "block";
        var oTierw = getId(box).offsetWidth;
        var oTierh = getId(box).offsetHeight;
        getId(box).style.marginTop = '-' + (oTierh / 2) + 'px';
        getId(box).style.marginLeft = '-' + (oTierw / 2) + 'px';
        document.body.style.overflowY = "hidden";
    }

};
