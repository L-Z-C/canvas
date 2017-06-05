/**
 * Created by Liulc on 2017/6/3.
 */
window.onload = ()=>{
    "use strict";
    function F() {
        return Chat.call(Chat.prototype);
    }
    const chats = new F();
    function bodyScroll(event){
        event.preventDefault();
    }
    let jin = 0;
    if (jin == 0){
        document.body.addEventListener('touchmove',bodyScroll,false);
    }
    let oAll = chats.getId('#all');
    let aAllOneLi = document.querySelectorAll('#all>li')[0];
    let aAllTwoLi = document.querySelectorAll('#all>li')[1];
    let aAllThreeLi = document.querySelectorAll('#all>li')[2];
    let oOperation = chats.getId('#operation');
    let oBody = chats.getTagClass(document,'body');
    let oVoice = chats.getTagClass(oOperation,'.voice'),oContent = chats.getTagClass(oOperation,'.content'),
        oPlus = chats.getTagClass(oOperation,'.plus'), oEmoticon = chats.getTagClass(oOperation,'.emoticon');
    chats.addEvFn(aAllOneLi.querySelector('.group'),'click',()=>{
        oAll.style.left = '-100%';
        oBody.style.overflowY = 'auto';
        chats.getId('#more').style.display = 'none';
        chats.getId('#emoticon').style.display = 'none';
        oBody.style.height = chats.getTagClass(aAllTwoLi,'header').offsetHeight+chats.getTagClass(aAllTwoLi,'footer').offsetHeight+'px';
        aAllTwoLi.style.height = oBody.offsetHeight+'px';
    });
    chats.addEvFn(aAllTwoLi.querySelector('.back'),'click',()=>{
        oAll.style.left = 0;
        oBody.style.overflow = 'hidden';
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
            let  oArticle = chats.getTagClass(aAllOneLi,'article');
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
            chats.removeEvFn(chats.getId('#btnStart'),'click',()=>{
                console.log('录音开始...');
                recorder.start();
            });
            oContent.setAttribute("id", "");
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
        }else {
            // oContent.setAttribute("disabled", "disabled");
            oContent.setAttribute("id", "btnStart");
            oContent.innerHTML = '';
            chats.cellLength([1],oContent,'span',(aTagName)=>{
                aTagName.innerHTML = '按住说话';
            });
            chats.cellLength([1],oContent,'audio',(aTagName)=>{
                aTagName.style.opacity = 0;
                aTagName.setAttribute("id", "audio");
            });
            that.style.backgroundImage = 'url(./images/keyboard.png)';
            oContent.style.border = '0.1rem solid #8a8a8a';
            oContent.style.justifyContent = 'center';
            oContent.style.alignSelf = 'center';
            chats.getId('#more').style.bottom = '-8rem';
            chats.getId('#emoticon').style.bottom = '-18rem';
            that.parentNode.parentNode.style.bottom = 0;
            oContent.style.contentEditable = 'false';
            oContent.addEventListener('click',getUserMedia,false);
            var recorder = new MP3Recorder({
                debug:true,
                funOk: function () {
                    console.log('初始化成功');
                },
                funCancel: function (msg) {
                    console.log(msg);
                    recorder = null;
                }
            });
            let mp3Blob;
            chats.addEvFn(chats.getId('#btnStart'),'click',()=>{
                console.log('录音开始...');
                recorder.start();
            });
            setTimeout(()=>{
                recorder.stop();
                console.log('录音结束，MP3导出中...');
                recorder.getMp3Blob(function (blob) {
                    console.log('MP3导出成功');

                    mp3Blob = blob;
                    window.url = URL.createObjectURL(mp3Blob);
                });
            },5000);
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
                    let audio = chats.getId('#audio');
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
                                aTagName.controls = "controls";
                                aTagName.src = window.url;
                                aTagName.style.width = '12rem';
                                aTagName.style.height = '5rem';
                            });
                        });
                        oContent.removeEventListener('click',getUserMedia,false);
                    },5000);
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
        window.location.href = './video.html';
    },false);
    let oArticle = document.querySelectorAll('#emoticon>article');
    let oArt = aAllOneLi.querySelectorAll('article');
    function scrollTop(abj) {
        chats.loop(abj,(i)=>{
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
                    case 3:
                        document.body.addEventListener('touchmove',bodyScroll,false);
                        break;
                    case 4:
                        document.body.addEventListener('touchmove',bodyScroll,false);
                        break;
                    default:
                }
                jin = 0;
            });
        });
    }
    scrollTop(oArticle);
    scrollTop(oArt);
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
    function ShotUpload(obj) {
        obj.addEventListener('change',function(e){
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
    }
    ShotUpload(oUploadImages);
    ShotUpload(oShot);
    let aPersons = aAllTwoLi.querySelectorAll('.persons');
    chats.myPromise(true).then(()=>{
        let logger = {
            fn: ()=>{
                oAll.style.left = '-200%';
                oBody.style.overflow = 'hidden';
            }
        };
        chats.loop(aPersons,(i)=>{
            chats.addEvFn(i,'click',logger.fn.bind(logger));
        });
    }).then(()=>{
        let oBack = chats.getTagClass(aAllThreeLi,'.back');
        let logger = {
            fn: ()=>{
                oAll.style.left = '-100%';
                oBody.style.overflowY = 'auto';
            }
        };
        chats.addEvFn(oBack,'click',logger.fn.bind(logger));
    });
    function getLocation()
    {
        if (navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(showPosition);
            console.log('支持');
        }
        else
        {
            console.log("该浏览器不支持获取地理位置");
        }
    }
    getLocation();
    function showPosition(position)
    {
        console.log("纬度: " + position.coords.latitude + "<br>经度: " + position.coords.longitude);
        // if(window.localStorage){
        //     var latitLongit = {};
        //     latitLongit.latitude = position.coords.latitude;
        //     latitLongit.longitude  = position.coords.longitude;
        //     localStorage.setItem('info',JSON.stringify(latitLongit));
        // }else{
        //     alert("浏览暂不支持localStorage");
        // }
    }
};