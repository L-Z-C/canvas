/**
 * Created by Liulc on 2017/6/15.
 */
window.onload =  ()=>{
    let aUsersLi = document.querySelectorAll('.usersLi');
    function progress(obj) {
        for (let i =0 ;i<aUsersLi.length;i++){
            let oBusinessBar = aUsersLi[i].querySelector(obj);
            let small = oBusinessBar.querySelector('bdo');
            let lager = oBusinessBar.querySelector('bdi');
            let oBackground = oBusinessBar.querySelector('.background');
            let oActual = oBusinessBar.querySelector('.actual').innerHTML;
            let num = parseFloat((oActual -small.innerHTML)/(lager.innerHTML-small.innerHTML));
            let aaa = num*oBusinessBar.offsetWidth;
            oBackground.style.width = aaa+'px';
            oBusinessBar.querySelector('p').innerHTML = oActual;
            small.innerHTML = small.innerHTML.replace(/0000/,"")+'w';
            lager.innerHTML = lager.innerHTML.replace(/0000/,"")+'w';
            oBusinessBar.addEventListener('mouseover',()=>{
                "use strict";
                oBusinessBar.querySelector('p').style.display = 'block';
            },false);
            oBusinessBar.addEventListener('mouseout',()=>{
                "use strict";
                oBusinessBar.querySelector('p').style.display = 'none';
            },false);
        }
    }
    progress('.businessBar');
    progress('.praiseBar');
}