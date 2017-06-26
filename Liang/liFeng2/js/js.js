/**
 * Created by Liulc on 2017/6/15.
 */
window.onload =  ()=>{
    let aUsersLi = document.querySelectorAll('.usersLi');
    function progress(obj,objs) {
        for (let i =0 ;i<aUsersLi.length;i++){
            let oBusinessBar = aUsersLi[i].querySelector(obj);
            let small = oBusinessBar.querySelector('bdo');
            let lager = oBusinessBar.querySelector('bdi');
            let oBackground = oBusinessBar.querySelector('.background');
            let oActual = oBusinessBar.querySelector('.actual').innerHTML;
            let num = parseFloat((oActual -small.innerHTML)/(lager.innerHTML-small.innerHTML));
            let aaa = num*oBusinessBar.offsetHeight;
            oBackground.style.height = aaa+'px';
            small.innerHTML = small.innerHTML.replace(/0000/,"")+'w';
            lager.innerHTML = lager.innerHTML.replace(/0000/,"")+'w';
            let oBusinessBars = aUsersLi[i].querySelector(objs);
            oBusinessBars.addEventListener('mouseover',function(){
                "use strict";
                aUsersLi[i].querySelector('.showActual').innerHTML = oBusinessBar.querySelector('.actual').innerHTML;
                aUsersLi[i].querySelector('.showActual').style.display = 'block';
                this.querySelector('bdo').style.display = 'block';
            },false);
            oBusinessBars.addEventListener('mouseout',function(){
                "use strict";
                aUsersLi[i].querySelector('.showActual').style.display = 'none';
                this.querySelector('bdo').style.display = 'none';
            },false);
        }
    }
    progress('.businessBar','.businessBars');
    progress('.praiseBar','.praiseBars');
};