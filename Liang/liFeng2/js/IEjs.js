/**
 * Created by Liulc on 2017/6/27.
 */
if(!document.getElementsByClassName){
    document.getElementsByClassName = function(className, element){
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i=0; i<children.length; i++){
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j=0; j<classNames.length; j++){
                if (classNames[j] == className){
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}
function getEleChild(ele){
    var eleChildArr=ele.children || ele.childNodes;
    var childArrTmp=[];
    for(var i=0;i<eleChildArr.length;i++){
        if(eleChildArr[i].nodeType==1){
            childArrTmp.push(eleChildArr[i]);
        }
    }
    return childArrTmp;
}
function getClassNames(classStr, tagName) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(classStr)
    } else {
        var nodes = document.getElementsByTagName(tagName), ret = [];
        for (var i = 0; i < nodes.length; i++) {
            if (hasClass(nodes[i], classStr)) {
                ret.push(nodes[i])
            }
        }
        return ret;
    }
}
function hasClass(tagStr, classStr) {
    var arr = tagStr.className.split(/\s+/);
    for ( var i = 0; i < arr.length; i++)
    {
        if (arr[i] == classStr)
        {
            return true;
        }
    }
    return false;
}
function getEleStyle(ele, cssName){

    var style = window.getComputedStyle ?

        window.getComputedStyle(ele, "") :

        ele.currentStyle;

    return style[cssName];

}
window.onload = function () {
    var oContent = document.getElementById('content'),aFirstThree = getClassNames('firstThree','ul'),oMiddle = getClassNames('middle','div')[0];
    oContent.style.marginLeft = '-'+oContent.offsetWidth/2+'px';
    aFirstThree[0].style.marginLeft = '-40%';
    var aUsersLi = document.getElementsByClassName('usersLi');
    function progress(obj,objs,objes) {
        for (var i =0 ;i<aUsersLi.length;i++){
            var oBusinessBar = getEleChild(aUsersLi[i])[obj];
            var small = getEleChild(oBusinessBar)[1];
            var lager = getEleChild(oBusinessBar)[2];
            var oBackground = getEleChild(oBusinessBar)[0];
            var oActual = getEleChild(oBusinessBar)[3].innerHTML;
            var num = parseFloat((oActual -small.innerHTML)/(lager.innerHTML-small.innerHTML));
            var aaa = num*oBusinessBar.offsetHeight;
            oBackground.style.height = aaa+'px';
            small.innerHTML = small.innerHTML.replace(/0000/,"")+'w';
            lager.innerHTML = lager.innerHTML.replace(/0000/,"")+'w';
            (function (i) {
                var oBusinessBars = getEleChild(aUsersLi[i])[objs];
                oBusinessBars.attachEvent('onmouseover',function(){
                    var oShowActual = getEleChild(getEleChild(getEleChild(aUsersLi[i])[0])[1])[3];
                    oShowActual.innerHTML = getEleChild(oBusinessBar)[3].innerHTML;
                    oShowActual.style.display = 'block';
                    getEleChild(getEleChild(aUsersLi[i])[objes])[0].style.display = 'block';
                    oShowActual.style.marginLeft = '-'+oShowActual.offsetWidth/2+'px';
                },false);
                oBusinessBars.attachEvent('onmouseout',function(){
                    getEleChild(getEleChild(getEleChild(aUsersLi[i])[0])[1])[3].style.display = 'none';
                    getEleChild(getEleChild(aUsersLi[i])[objes])[0].style.display = 'none';
                },false);
            })(i);
        }
    }
    progress(4,2,2);
    progress(5,3,3);
    aUsersLi[1].style.border = 'solid 1px #8c8c8c';
    aUsersLi[1].style.height = '218px';
    aUsersLi[2].style.border = 'solid 1px #D98719';
    aUsersLi[2].style.height = '218px';
    var aDl = oContent.getElementsByTagName('dl');
    for (var i=0;i<aDl.length;i++){
        aDl[i].style.marginLeft = '-'+aDl[i].offsetWidth/2+'px';
    }
    if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0"){
        oMiddle.style.translateY = '-50%';
    }else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0"){
        oMiddle.style.top = '55%';
        oMiddle.style.marginTop = '-'+oMiddle.offsetHeight/2+'px';
    }
};