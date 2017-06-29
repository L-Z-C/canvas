/**
 * Created by Liulc on 2017/6/15.
 */
window.onload =  function(){
    var aUsersLi = document.getElementsByClassName('usersLi');
    function progress(obj,objs) {
        for (var i =0 ;i<aUsersLi.length;i++){
            var oBusinessBar = aUsersLi[i].getElementsByClassName(obj)[0];
            var small = oBusinessBar.getElementsByTagName('bdo')[0];
            var lager = oBusinessBar.getElementsByTagName('bdi')[0];
            var oBackground = oBusinessBar.getElementsByClassName('background')[0];
            var oActual = oBusinessBar.getElementsByClassName('actual')[0].innerHTML;
            var num = parseFloat((oActual -small.innerHTML)/(lager.innerHTML-small.innerHTML));
            var aaa = num*oBusinessBar.offsetHeight;
            oBackground.style.height = aaa+'px';
            small.innerHTML = small.innerHTML.replace(/0000/,"")+'w';
            lager.innerHTML = lager.innerHTML.replace(/0000/,"")+'w';
            (function (i) {
                var oBusinessBars = aUsersLi[i].getElementsByClassName(objs)[0];
                oBusinessBars.addEventListener('mouseover',function(){
                    "use strict";
                    aUsersLi[i].getElementsByClassName('showActual')[0].innerHTML = oBusinessBar.getElementsByClassName('actual')[0].innerHTML;
                    aUsersLi[i].getElementsByClassName('showActual')[0].style.display = 'block';
                    this.getElementsByTagName('bdo')[0].style.display = 'block';
                },false);
                oBusinessBars.addEventListener('mouseout',function(){
                    "use strict";
                    aUsersLi[i].getElementsByClassName('showActual')[0].style.display = 'none';
                    this.getElementsByTagName('bdo')[0].style.display = 'none';
                },false);
            })(i);
        }
    }
    progress('businessBar','businessBars');
    progress('praiseBar','praiseBars');
};