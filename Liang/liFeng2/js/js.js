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
            let aaa = num*oBusinessBar.offsetWidth;
            oBackground.style.width = aaa+'px';
            small.innerHTML = small.innerHTML.replace(/0000/,"")+'w';
            lager.innerHTML = lager.innerHTML.replace(/0000/,"")+'w';
            let oBusinessBars = aUsersLi[i].querySelector(objs);
            oBusinessBars.addEventListener('mouseover',()=>{
                "use strict";
                aUsersLi[i].querySelector('.showActual').innerHTML = oBusinessBar.querySelector('.actual').innerHTML;
                aUsersLi[i].querySelector('.showActual').style.display = 'block';
            },false);
            oBusinessBars.addEventListener('mouseout',()=>{
                "use strict";
                aUsersLi[i].querySelector('.showActual').style.display = 'none';
            },false);
        }
    }
    progress('.businessBar','.businessBars');
    progress('.praiseBar','.praiseBars');
};