/**
 * Created by Liulc on 2017/4/27.
 */
function Users(name) {
    this.name = name;
}
Users.prototype.getId = function (id) {
    return typeof id==='string'?document.querySelector(id):id;
};
Users.prototype.getClassTag = function (obj,classTagName) {
    return typeof classTagName==='string'?obj.querySelectorAll(classTagName):classTagName;
};
Users.prototype.loop = function (aObj,fn) {
    for (var i=0;i<aObj;i++){
        fn(i)
    }
};
Users.prototype.evFn = function (obj,fn,event) {
    obj.addEventListener(event,function () {
        var that = this;
        fn(that);
    })
};
Users.prototype.cellLength = function (length,obj,tagName,fn) {
    for (var i=0;i<length;i++){
        var aTagName = document.createElement(tagName);
        fn(aTagName,i);
        obj.appendChild(aTagName);
    }
};
window.onload = function () {
    var data = {
      person : [
          {
              HeadPortrait :'./images/1.jpg',
              name : '小黄',
              medal : ['./images/gold.png','./images/bronze.png','./images/silver.png'],
              businessMin : 10000,
              businessMax : 50000,
              businessActual : 40000,
              praiseMin : 20000,
              praiseMax : 70000,
              praiseActual : 50000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小蓝',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 30000,
              businessMax : 80000,
              businessActual : 50000,
              praiseMin : 20000,
              praiseMax : 70000,
              praiseActual : 50000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小红',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 40000,
              praiseActual : 40000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小黑',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 30000,
              praiseActual : 30000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小绿',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 30000,
              praiseActual : 30000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小白',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 30000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 10000,
              praiseMax : 30000,
              praiseActual : 18000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小黄',
              medal : ['./images/gold.png','./images/bronze.png','./images/silver.png'],
              businessMin : 10000,
              businessMax : 50000,
              businessActual : 40000,
              praiseMin : 20000,
              praiseMax : 70000,
              praiseActual : 50000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小蓝',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 30000,
              businessMax : 80000,
              businessActual : 50000,
              praiseMin : 20000,
              praiseMax : 70000,
              praiseActual : 50000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小红',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 40000,
              praiseActual : 40000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小黑',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 30000,
              praiseActual : 30000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小绿',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 30000,
              praiseActual : 30000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小白',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 30000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 10000,
              praiseMax : 30000,
              praiseActual : 18000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小黄',
              medal : ['./images/gold.png','./images/bronze.png','./images/silver.png'],
              businessMin : 10000,
              businessMax : 50000,
              businessActual : 40000,
              praiseMin : 20000,
              praiseMax : 70000,
              praiseActual : 50000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小蓝',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 30000,
              businessMax : 80000,
              businessActual : 50000,
              praiseMin : 20000,
              praiseMax : 70000,
              praiseActual : 50000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小红',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 40000,
              praiseActual : 40000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小黑',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 30000,
              praiseActual : 30000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小绿',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 20000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 20000,
              praiseMax : 30000,
              praiseActual : 30000,
          },
          {
              HeadPortrait :'./images/1.jpg',
              name : '小粉',
              medal : ['./images/gold.png','./images/bronze.png'],
              businessMin : 30000,
              businessMax : 50000,
              businessActual : 45000,
              praiseMin : 10000,
              praiseMax : 30000,
              praiseActual : 18000,
          },
          ],
    };
    var oUsers = new Users();
    for (var i in data.person){
        oUsers.cellLength(1,oUsers.getId('#users'),'li',function (aTagName) {
            aTagName.className = 'usersLi';
            aTagName.style.width = 100 / 5 +'%';
            oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                aTagName.className = 'head';
                aTagName.style.backgroundImage = 'url('+data.person[i].HeadPortrait+')';
            });
            oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                aTagName.className = 'nameBox';
                oUsers.cellLength(1,aTagName,'span',function (aTagName) {
                    aTagName .innerHTML = data.person[i].name;
                });
                oUsers.cellLength(1,aTagName,'ul',function (aTagName) {
                    var aMedal = data.person[i].medal;
                    oUsers.cellLength(aMedal.length,aTagName,'li',function (aTagName,i) {
                        aTagName.style.backgroundImage = 'url('+aMedal[i]+')';
                    });
                });
            });
            oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                aTagName.className = 'income';
                oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                    aTagName.className = 'top';
                    oUsers.cellLength(1,aTagName,'span',function (aTagName) {
                        aTagName.innerHTML = '营业收入';
                    });
                    oUsers.cellLength(1,aTagName,'p',function (aTagName) {
                        var _this = aTagName;
                        aTagName.className = 'businessBar';
                        oUsers.cellLength(1,aTagName,'span',function (aTagName) {
                            aTagName.innerHTML = data.person[i].businessMin;
                        });
                        oUsers.cellLength(1,aTagName,'p',function (aTagName) {
                            aTagName.innerHTML = data.person[i].businessMax;
                        });
                        oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                            aTagName.className = 'background';
                        });
                        oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                            aTagName.className = 'actual';
                            aTagName.innerHTML = data.person[i].businessActual;
                        });
                    });
                });
                oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                    aTagName.className = 'bottom';
                    oUsers.cellLength(1,aTagName,'span',function (aTagName) {
                        aTagName.innerHTML = '好评人数';
                    });
                    oUsers.cellLength(1,aTagName,'p',function (aTagName) {
                        aTagName.className = 'praiseBar';
                        oUsers.cellLength(1,aTagName,'span',function (aTagName) {
                            aTagName.innerHTML = data.person[i].praiseMin;
                        });
                        oUsers.cellLength(1,aTagName,'p',function (aTagName) {
                            aTagName.innerHTML = data.person[i].praiseMax;
                        });
                        oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                            aTagName.className = 'background';
                        });
                        oUsers.cellLength(1,aTagName,'div',function (aTagName) {
                            aTagName.className = 'actual';
                            aTagName.innerHTML = data.person[i].praiseActual;
                        });
                    });
                });
            })
        });
    }
  console.log(window.screen.width);
  console.log(document.documentElement.clientHeight);
  var scl = window.screen.width-document.documentElement.clientWidth;
  console.log(window.screen.width-scl);
  var oContent = document.querySelector("#content");
  var aUsersLi = oUsers.getClassTag(oUsers.getId('#users'),'.usersLi');
  function progress(obj) {
      oUsers.loop(aUsersLi.length,function (i) {
          var oBusinessBar = aUsersLi[i].querySelector(obj);
          var small = oBusinessBar.querySelector('span');
          var lager = oBusinessBar.querySelector('p');
          var oBackground = oBusinessBar.querySelector('.background');
          var oActual = oBusinessBar.querySelector('.actual').innerHTML;
          if (oActual == lager.innerHTML){
              oBackground.style.borderRadius = '4px';
          }else {
              oBackground.style.borderTopLeftRadius = '4px';
              oBackground.style.borderBottomLeftRadius = '4px';
          }
          var num = parseFloat((oActual -small.innerHTML)/(lager.innerHTML-small.innerHTML));
          var aaa = num*oBusinessBar.offsetWidth;
          oBackground.style.width = aaa+'px';
          oBackground.innerHTML = oActual;
          small.innerHTML = small.innerHTML.replace(/0000/,"")+'w';
          lager.innerHTML = lager.innerHTML.replace(/0000/,"")+'w';
      });
  }
    progress('.businessBar');
    progress('.praiseBar');
  var oHeader = oUsers.getId('#header');
    if (document.documentElement.clientHeight < oHeader.offsetHeight+oContent.offsetHeight){
        oContent.style.width = window.screen.width-scl+'px';
        oHeader.style.width = window.screen.width-scl+'px';
        // alert('超出');
    }else {
        oContent.style.width = window.screen.width+'px';
        oHeader.style.width = window.screen.width+'px';
        // alert('不超出');
    }
    console.log(oContent.offsetHeight + oHeader.offsetHeight);
    var headerDd = oUsers.getClassTag(oHeader,'dd');
    var contentDd = document.querySelectorAll('#content>dl>dd');
    oUsers.loop(headerDd.length,function (i) {
        headerDd[i].index = i;
        oUsers.evFn(headerDd[i],function (that) {
            oUsers.loop(contentDd.length,function (i) {
                contentDd[i].style.display = 'none';
                headerDd[i].className = '';
            });
            contentDd[that.index].style.display = 'block';
            headerDd[that.index].className = 'active';
        },'click');
    });
    var oEdit = oUsers.getClassTag(oContent,'.edit'),oAdd = oUsers.getClassTag(oContent,'.add'),oDel = oUsers.getClassTag(oContent,'.del');
    var oMask = oUsers.getId('#mask'),oModify = oUsers.getId('#modify');
    var oClose = oUsers.getClassTag(oModify,'.close');
    oUsers.evFn(oEdit[0],function (that) {
        oUsers.getClassTag(oModify,'span')[0].innerHTML = '编辑用户';
        oUsers.getClassTag(oModify,'li')[0].style.display = 'block';
        oMask.style.display = 'block';
        oModify.style.display = 'block';
    },'click');
    oUsers.evFn(oAdd[0],function (that) {
        oUsers.getClassTag(oModify,'li')[0].style.display = 'none';
        oUsers.getClassTag(oModify,'span')[0].innerHTML = '新增用户';
        oMask.style.display = 'block';
        oModify.style.display = 'block';
    },'click');
    oUsers.evFn(oClose[0],function (that) {
        oMask.style.display = 'none';
        oModify.style.display = 'none';
    },'click');
    var oYear = oUsers.getClassTag(oContent,'.year')[0];
    oUsers.getClassTag(oContent,'.month')[0].disabled = true;
    oUsers.evFn(oYear,function () {
        if (oYear.options[oYear.selectedIndex].value == '全部'){
            oUsers.getClassTag(oContent,'.month')[0].disabled = true;
        }else {
            oUsers.getClassTag(oContent,'.month')[0].disabled = false;
        }
    },'change');
    var aUserDataUL = oUsers.getClassTag(oUsers.getClassTag(oContent,'.userData')[0],'ul');
    var oDelButton = oUsers.getClassTag(oDel[0],'button');
    oUsers.loop(aUserDataUL.length,function (i) {
       oUsers.evFn(aUserDataUL[i],function (that) {
           if (that.style.background == 'yellow'){
               that.style.background = '';
               oDelButton[0].style.background = 'silver';
               oDelButton[0].style.cursor = 'default';
           }else {
               that.style.background = 'yellow';
               oDelButton[0].style.background = 'thistle';
               oDelButton[0].style.cursor = 'pointer';
           }
       },'click');
    });
    oUsers.evFn(oDel[0],function () {
        if(oDelButton[0].style.background == 'thistle'){
            if(confirm("确认删除吗")){
                oUsers.loop(aUserDataUL.length,function (i) {
                    if (aUserDataUL[i].style.background == 'yellow'){
                        var navigatorName = "zh-CN";
                        if(navigator.browserLanguage == navigatorName){
                            aUserDataUL[i].removeNode(true);
                        }else{
                            aUserDataUL[i].remove();
                        }
                    }
                });
                oDelButton[0].style.background = 'silver';
                oDelButton[0].style.cursor = 'default';
            }else {
                return false;
            }
        }
    },'click');
};