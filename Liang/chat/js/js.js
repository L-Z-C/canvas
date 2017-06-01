/**
 * Created by Liulc on 2017/5/19.
 */
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
        return typeof classTagName==='string'?obj.querySelectorAll(classTagName)[num]:classTagName;
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
    }
};
window.onload = ()=>{
    "use strict";
    function F() {
        return Chat.call(Chat.prototype);
    }
    const chats = new F();
    let oAll = chats.getId('#all');
    let aAllOneLi = document.querySelectorAll('#all>li')[0];
    let aAllTwoLi = document.querySelectorAll('#all>li')[1];
    let oOperation = chats.getId('#operation');
    let oVoice = chats.getTagClass(oOperation,'.voice'),oContent = chats.getTagClass(oOperation,'.content'),
        oPlus = chats.getTagClass(oOperation,'.plus'), oEmoticon = chats.getTagClass(oOperation,'.emoticon');
    chats.addEvFn(aAllOneLi.querySelector('.group'),'click',()=>{
        oAll.style.left = '-100%';
        document.body.style.overflowY = 'auto';
        chats.getId('#more').style.display = 'none';
        chats.getId('#emoticon').style.display = 'none';
    });
    chats.addEvFn(aAllTwoLi.querySelector('.back'),'click',()=>{
        oAll.style.left = 0;
        document.body.style.overflowY = 'hidden';
        chats.getId('#more').style.display = 'block';
        chats.getId('#emoticon').style.display = 'block';
    });
    chats.addEvFn(oEmoticon,'click',(that)=>{
        if (that.parentNode.parentNode.style.bottom == '18rem'){
            that.parentNode.parentNode.style.bottom = 0;
            chats.getId('#emoticon').style.display = 'none';
            chats.getId('#emoticon').style.bottom = '-18rem';
        }else {
            that.parentNode.parentNode.style.bottom = '18rem';
            chats.getId('#emoticon').style.display = 'block';
            chats.getId('#emoticon').style.bottom = 0;
            chats.getId('#more').style.bottom = '-8rem';
        }
        oVoice.style.backgroundImage = 'url(./images/voice.png)';
        oContent.style.justifyContent = 'flex-start';
        oContent.removeEventListener('click',getUserMedia,false);
        if (chats.getTagClass(oContent,'span')){
            chats.remove(chats.getTagClass(oContent,'span'));
        }
    });
    chats.addEvFn(aAllTwoLi.querySelector('span'),'click',(that)=>{
        if (that.style.left == '50%'){
            that.style.left = '0';
            that.parentNode.style.background = '#e6e6e6';
        }else {
            that.style.left = '50%';
            that.parentNode.style.background = '#0ee379';
        }
    });
    chats.cellLength([1],chats.getTagClassAll(chats.getId('#emoticon'),'article',0),'ul',(aTagName)=>{
        var num = 0;
        chats.cellLength(new Array(91),aTagName,'li',(aTagName)=>{
            num++;
            aTagName.style.width = '3rem';
            aTagName.style.height = '3rem';
            aTagName.style.backgroundImage = 'url(./images/qq/'+num+'.gif)';
            aTagName.style.backgroundSize = 'cover';
            chats.addEvFn(aTagName,'click',(that)=>{
                chats.cellLength([1],oContent,'bdo',(aTagName)=>{
                    aTagName.style.width = '3rem';
                    aTagName.style.height = '3rem';
                    aTagName.style.backgroundImage = that.style.backgroundImage;
                    aTagName.style.backgroundSize = 'cover';
                });
                chats.getId('#send').style.backgroundColor = '#3572c5';
                chats.getId('#send').style.color = 'white';
            });
        })
    });
    chats.cellLength([1],chats.getTagClassAll(chats.getId('#emoticon'),'article',1),'ul',(aTagName)=>{
        var num = 0;
        chats.cellLength(new Array(50),aTagName,'li',(aTagName)=>{
            num++;
            aTagName.style.width = '3rem';
            aTagName.style.height = '3rem';
            aTagName.style.backgroundImage = 'url(./images/tieba/'+num+'.jpg)';
            aTagName.style.backgroundSize = 'cover';
            chats.addEvFn(aTagName,'click',(that)=>{
                chats.cellLength([1],oContent,'bdo',(aTagName)=>{
                    aTagName.style.width = '3rem';
                    aTagName.style.height = '3rem';
                    aTagName.style.backgroundImage = that.style.backgroundImage;
                    aTagName.style.backgroundSize = 'cover';
                });
                chats.getId('#send').style.backgroundColor = '#3572c5';
                chats.getId('#send').style.color = 'white';
            });
        })
    });
    chats.cellLength([1],chats.getTagClassAll(chats.getId('#emoticon'),'article',2),'ul',(aTagName)=>{
        var num = 0;
        chats.cellLength(new Array(39),aTagName,'li',(aTagName)=>{
            num++;
            aTagName.style.width = '11rem';
            aTagName.style.height = '9rem';
            aTagName.style.backgroundImage = 'url(./images/beg/'+num+'.jpg)';
            aTagName.style.backgroundSize = '100% 100%';
            chats.addEvFn(aTagName,'click',(that)=>{
                chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                    });
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        aTagName.style.width = that.offsetWidth+'px';
                        aTagName.style.height = that.offsetHeight+'px';
                        aTagName.style.margin = '0 1rem 0 1rem';
                        aTagName.style.backgroundImage = that.style.backgroundImage;
                        aTagName.style.backgroundSize = '100% 100%';
                    });
                });
            });
        })
    });
    let aImgs = document.querySelectorAll('#emoticon img'),aEmoArticle = document.querySelectorAll('#emoticon>article');
    chats.loop(aImgs.entries(),(i)=>{
        chats.addEvFn(i[1],'click',()=>{
            chats.loop(aEmoArticle,(i)=>{
                i.style.zIndex = '1';
            });
            aEmoArticle[i[0]].style.zIndex = '9999';
        });
        console.log(i);
    });
    chats.addEvFn(chats.getId('#send'),'click',(that)=>{
        if (that.style.color == 'white'){
            let  oArticle = chats.getTagClass(document,'article');
            if (oContent.innerHTML !== ''){
                chats.cellLength([1],oArticle,'div',(aTagName)=>{
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                    });
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                        aTagName.innerHTML = oContent.innerHTML;
                    });
                });
                oContent.innerHTML = '';
                that.style.backgroundColor = '#f5f5f5';
                that.style.color = '#8a8a8a';
            }else {
                return false;
            }
        }else{
            alert(222);
        }
    });
    function bodyScroll(event){
        event.preventDefault();
    }
    let jin = 0;
    if (jin == 0){
        document.body.addEventListener('touchmove',bodyScroll,false);
    }
    chats.addEvFn(oPlus,'click',(that)=>{
        if (that.parentNode.parentNode.style.bottom == '8rem'){
            that.parentNode.parentNode.style.bottom = 0;
            chats.getId('#more').style.display = 'none';
            chats.getId('#more').style.bottom = '-8rem';
        }else {
            that.parentNode.parentNode.style.bottom = '8rem';
            chats.getId('#more').style.bottom = 0;
            chats.getId('#more').style.display = 'block';
            chats.getId('#emoticon').style.bottom = '-18rem';
        }
        oVoice.style.backgroundImage = 'url(./images/voice.png)';
        oContent.contentEditable = true;
        oContent.style.justifyContent = 'flex-start';
        oContent.removeEventListener('click',getUserMedia,false);
        if (chats.getTagClass(oContent,'span')){
            chats.remove(chats.getTagClass(oContent,'span'));
        }
    });
    chats.addEvFn(oVoice,'click',(that)=>{
        if (chats.getTagClass(oContent,'span')){
            that.style.backgroundImage = 'url(./images/voice.png)';
            oContent.innerHTML = '';
                chats.addEvFn(oContent,'keydown',(that,e)=>{
                    e = e || window.event;
                    if (e.keyCode == 13){
                        e.returnValue = false;
                        e.preventDefault();
                        let  oArticle = chats.getTagClass(document,'article');
                        if (that.innerHTML !== ''){
                            chats.cellLength([1],oArticle,'div',(aTagName)=>{
                                chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                                    aTagName.style.margin = '0 1rem 0 1rem';
                                });
                                chats.cellLength([1],aTagName,'span',(aTagName)=>{
                                    aTagName.style.margin = '0 1rem 0 1rem';
                                    aTagName.innerHTML = that.innerHTML;
                                });
                            });
                            that.innerHTML = '';
                        }else {
                            return false;
                        }
                    }
                    return false;
                });
            oContent.removeEventListener('click',getUserMedia,false);
            oContent.style.justifyContent = 'flex-start';
            oContent.style.contentEditable = 'true';
        }else {
            oContent.innerHTML = '';
            chats.cellLength([1],oContent,'span',(aTagName)=>{
                aTagName.innerHTML = '按住说话';
            });
            chats.cellLength([1],oContent,'audio',(aTagName)=>{
                aTagName.style.opacity = 0;
            });
            that.style.backgroundImage = 'url(./images/keyboard.png)';
            oContent.style.border = '0.1rem solid #8a8a8a';
            oContent.addEventListener('click',getUserMedia,false);
            oContent.style.justifyContent = 'center';
            oContent.style.alignSelf = 'center';
            chats.getId('#more').style.bottom = '-8rem';
            chats.getId('#emoticon').style.bottom = '-18rem';
            that.parentNode.parentNode.style.bottom = 0;
            oContent.style.contentEditable = 'false';
        }
    });
    chats.addEvFn(oContent,'keydown',(that,e)=>{
        e = e || window.event;
        if (e.keyCode == 13){
            e.returnValue = false;
            e.preventDefault();
            let  oArticle = chats.getTagClass(document,'article');
            if (that.innerHTML !== ''){
                chats.cellLength([1],oArticle,'div',(aTagName)=>{
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 0';
                    });
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                        aTagName.innerHTML = that.innerHTML;
                    });
                });
                that.innerHTML = '';
            }else {
                return false;
            }
            chats.addEvFn(oContent,'blur',bottoms);
        }
        return false;
    });
    chats.addEvFn(oContent,'blur',bottoms);
    chats.addEvFn(oContent,'focus',bottom);
    function bottom() {
        if (chats.getId('#emoticon').style.bottom != '0'){
            chats.getId('#operation').parentNode.parentNode.style.bottom = 0;
        }else {
            chats.getId('#more').style.bottom = '-8rem';
            chats.getId('#emoticon').style.bottom = '-18rem';
        }
        chats.getId('#more').style.display = 'none';
        chats.getId('#emoticon').style.display = 'none';
        document.body.addEventListener('touchmove',bodyScroll,false);
    }
    function bottoms() {
        chats.getId('#more').style.display = 'block';
        chats.getId('#emoticon').style.display = 'block';
        document.body.addEventListener('touchmove',bodyScroll,false);
    }
    function getUserMedia() {
        navigator.MediaStream  = navigator.MediaStream  ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;

        if (navigator.MediaStream ) {
            navigator.MediaStream ({ audio: true , video: false},
                function(stream) {
                    var audio = document.querySelector('audio');
                    console.log(audio);
                    audio.src = window.URL.createObjectURL(stream);
                    audio.onloadedmetadata = function(e) {
                        audio.play();
                    };
                    setTimeout(()=>{
                        chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                            chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                                aTagName.style.margin = '0 1rem 0 1rem';
                            });
                            chats.cellLength([1],aTagName,'audio',(aTagName)=>{
                                aTagName.style.margin = '0 1rem 0 1rem';
                                aTagName.src = audio.src;
                            });
                        });
                    },10000);
                },
                function(err) {
                    console.log("The following error occurred: " + err.name);
                }
            );
            alert('支持语音');
        } else {
            console.log("getUserMedia not supported");
            alert('不支持语音');
        }
    }
    chats.getTagClass(chats.getId('#more'),'.video').addEventListener('click',()=>{
        window.location.href = 'video.html';
    },false);
    let oArticle = document.querySelectorAll('#emoticon>article');
    let oArt = aAllOneLi.querySelectorAll('article');
    chats.loop(oArticle,(i)=>{
        chats.touch(i,(direction)=>{
            switch (direction) {
                case 1:
                    if(i.scrollHeight == i.clientHeight + i.scrollTop){
                        document.body.addEventListener('touchmove',bodyScroll,false);
                    }else {
                        document.body.removeEventListener('touchmove',bodyScroll,false);
                    }
                    break;
                case 2:
                    if(i.scrollTop == 0){
                        document.body.addEventListener('touchmove',bodyScroll,false);
                    }else {
                        document.body.removeEventListener('touchmove',bodyScroll,false);
                    }
                    break;
                default:
            }
            jin = 0;
        });
    });
    chats.loop(oArt,(i)=>{
        chats.touch(i,(direction)=>{
            switch (direction) {
                case 1:
                    if(i.scrollHeight == i.clientHeight + i.scrollTop){
                        document.body.addEventListener('touchmove',bodyScroll,false);
                    }else {
                        document.body.removeEventListener('touchmove',bodyScroll,false);
                    }
                    break;
                case 2:
                    if(i.scrollTop == 0){
                        document.body.addEventListener('touchmove',bodyScroll,false);
                    }else {
                        document.body.removeEventListener('touchmove',bodyScroll,false);
                    }
                    break;
                default:
            }
            jin = 0;
        });
    });
    // chats.addEvFn(oContent,'focus',(that)=>{
    //     document.execCommand("insertImage","false","https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png")
    //     document.execCommand("insertHTML","false","<br/>");
    // });
    oContent.addEventListener('input',function(e){
        console.log(this.innerHTML);
    }, false);
    oContent.focus();
    let oUploadImages = chats.getTagClass(chats.getId('#more'),'.uploadImages');
    let oShot = chats.getTagClass(chats.getId('#more'),'.shots');
    oUploadImages.addEventListener('change',function(e){
        console.log(this);
        let ele = this.files[0];
        let fr = new FileReader();
        fr.onload = function (ele) {
            let pvImg = new Image();
            pvImg.src = ele.target.result;
            console.log(pvImg);
            pvImg.onload = function () {
                console.log(this.width);
                console.log(this.height);
                chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                    chats.cellLength([1],aTagName,'em',(aTagName)=>{
                        aTagName.innerHTML = this.width;
                    });
                    chats.cellLength([1],aTagName,'p',(aTagName)=>{
                        aTagName.innerHTML = this.height;
                    });
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                    });
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                        aTagName.style.backgroundImage = 'url('+pvImg.src+')';
                        chats.addEvFn(aTagName,'click',(that)=>{
                            chats.cellLength([1],chats.getTagClass(document,'body'),'div',(aTagName)=>{
                                aTagName.className = 'morePic';
                                aTagName.style.width = window.screen.width+'px';
                                aTagName.style.height = window.screen.height+'px';
                                chats.addEvFn(aTagName,'click',(that)=>{
                                    chats.remove(that);
                                });
                                chats.cellLength([1],aTagName,'span',(aTagName)=>{
                                    let ratioWidth = 0,_this = that.parentNode;
                                    if (chats.getTagClass(_this,'em').innerHTML >= window.screen.width || chats.getTagClass(_this,'em').innerHTML < window.screen.width){
                                        ratioWidth = window.screen.width/chats.getTagClass(_this,'em').innerHTML;
                                        aTagName.style.width = chats.getTagClass(_this,'em').innerHTML*ratioWidth+'px';
                                        aTagName.style.height = chats.getTagClass(_this,'p').innerHTML*ratioWidth+'px';
                                    }
                                    aTagName.style.backgroundImage = that.style.backgroundImage;
                                    aTagName.style.backgroundSize = '100% 100%';
                                });
                            });
                        });
                        let ratioWidth = 0,ratioHeight = 0;
                        if (this.width > 200){
                            ratioWidth = 200/this.width;
                            aTagName.style.width = this.width*ratioWidth+'px';
                            aTagName.style.height = this.height*ratioWidth+'px';
                        }else {
                            aTagName.style.width = this.width+'px';
                            aTagName.style.height = this.height+'px';
                        }
                        aTagName.style.backgroundSize = '100% 100%';
                    });
                });
            };
        };
        fr.readAsDataURL(ele);
    }, false);
    oShot.addEventListener('change',function(e){
        console.log(this);
        let ele = this.files[0];
        let fr = new FileReader();
        fr.onload = function (ele) {
            let pvImg = new Image();
            pvImg.src = ele.target.result;
            console.log(pvImg);
            pvImg.onload = function () {
                console.log(this.width);
                console.log(this.height);
                chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                    chats.cellLength([1],aTagName,'em',(aTagName)=>{
                        aTagName.innerHTML = this.width;
                    });
                    chats.cellLength([1],aTagName,'p',(aTagName)=>{
                        aTagName.innerHTML = this.height;
                    });
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                    });
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        aTagName.style.margin = '0 1rem 0 1rem';
                        aTagName.style.backgroundImage = 'url('+pvImg.src+')';
                        chats.addEvFn(aTagName,'click',(that)=>{
                            chats.cellLength([1],chats.getTagClass(document,'body'),'div',(aTagName)=>{
                                aTagName.className = 'morePic';
                                aTagName.style.width = window.screen.width+'px';
                                aTagName.style.height = window.screen.height+'px';
                                chats.addEvFn(aTagName,'click',(that)=>{
                                    chats.remove(that);
                                });
                                chats.cellLength([1],aTagName,'span',(aTagName)=>{
                                    let ratioWidth = 0,_this = that.parentNode;
                                    if (chats.getTagClass(_this,'em').innerHTML > window.screen.width || chats.getTagClass(_this,'em').innerHTML < window.screen.width){
                                        ratioWidth = window.screen.width/chats.getTagClass(_this,'em').innerHTML;
                                        aTagName.style.width = chats.getTagClass(_this,'em').innerHTML*ratioWidth+'px';
                                        aTagName.style.height = chats.getTagClass(_this,'p').innerHTML*ratioWidth+'px';
                                    }
                                    aTagName.style.backgroundImage = that.style.backgroundImage;
                                    aTagName.style.backgroundSize = '100% 100%';
                                });
                            });
                        });
                        let ratioWidth = 0,ratioHeight = 0;
                        if (this.width > 200){
                            ratioWidth = 200/this.width;
                            aTagName.style.width = this.width*ratioWidth+'px';
                            aTagName.style.height = this.height*ratioWidth+'px';
                        }else {
                            aTagName.style.width = this.width+'px';
                            aTagName.style.height = this.height+'px';
                        }
                        aTagName.style.backgroundSize = '100% 100%';
                    });
                });
            };
        };
        fr.readAsDataURL(ele);
    }, false);
};