/**
 * Created by Liulc on 2017/6/3.
 */
(function (exports) {
function * Chat() {
    "use strict";
}
Chat.prototype = {
    add : (a,b)=>{
        "use strict";
        return a+b;
    },
    addEvFn : (obj,event,fn)=>{
        "use strict";
        obj.addEventListener(event,function () {
            let that = this;
            fn(that);
        },false);
    },
    removeEvFn : (obj,event,fn)=>{
        "use strict";
        obj.removeEventListener(event,function () {
            let that = this;
            fn(that);
        },false);
    },
    myPromise : (tag)=>{
        "use strict";
        return new Promise((resolve,reject)=>{
            if(tag){
                resolve();
            }else{
                reject();
            }
        })
    },
    loop : (aObj,fn)=>{
        "use strict";
        for (let i of aObj){
            fn(i)
        }
    },
    cellLength : (length,obj,tagName,fn)=>{
        "use strict";
        for (let i of length){
            let aTagName = document.createElement(tagName);
            fn(aTagName,i);
            obj.appendChild(aTagName);
        }
    },
    getId : (id)=>{
        "use strict";
        return typeof id==='string'?document.querySelector(id):id;
    },
    getTagClassAll : (obj,classTagName,num)=>{
        "use strict";
        if(arguments.length == 2){
            return typeof classTagName==='string'?obj.querySelectorAll(classTagName):classTagName;
        }else {
            return typeof classTagName==='string'?obj.querySelectorAll(classTagName)[num]:classTagName;
        }
    },
    getTagClass : (obj,classTagName)=>{
        "use strict";
        return typeof classTagName==='string'?obj.querySelector(classTagName):classTagName;
    },
    touch : (obj,fn)=>{
        "use strict";
        let startx, starty;
        function getAngle(angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI;
        };
        function getDirection(startx, starty, endx, endy) {
            let angx = endx - startx;
            let angy = endy - starty;
            let result = 0;
            if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                return result;
            }

            let angle = getAngle(angx, angy);
            if (angle >= -135 && angle <= -45) {
                result = 1;
            } else if (angle > 45 && angle < 135) {
                result = 2;
            } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            } else if (angle >= -45 && angle <= 45) {
                result = 4;
            }

            return result;
        }
        obj.addEventListener("touchstart", function(e) {
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
        }, false);
        obj.addEventListener("touchend", function(e) {
            let endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;
            let direction = getDirection(startx, starty, endx, endy);
            fn(direction);
        }, false);
    },
    remove : (obj)=>{
        "use strict";
        let navigatorName = "zh-CN";
        if(navigator.browserLanguage == navigatorName){
            obj.removeNode(true);
        }else{
            obj.remove();
        }
    },
};
    exports.Chat = Chat;
})(window);