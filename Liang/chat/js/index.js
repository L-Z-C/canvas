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
    let off = true;
    let aAllOneLi = document.querySelectorAll('#all>li')[0];
    let aAllTwoLi = document.querySelectorAll('#all>li')[1];
    let aAllThreeLi = document.querySelectorAll('#all>li')[2];
    let oOperation = chats.getId('#operation');
    let oBody = chats.getTagClass(document,'body');
    let oMore = chats.getId('#more');
    oMore.style.bottom = '-'+ oMore.offsetHeight+'px';
    let MoreHeight = oMore.offsetHeight+'px';
    let oVoice = chats.getTagClass(oOperation,'.voice'),oContent = chats.getTagClass(oOperation,'.content'),
        oPlus = chats.getTagClass(oOperation,'.plus'), oEmoticon = chats.getTagClass(oOperation,'.emoticon');
    oContent.setAttribute("type", "true");
    chats.addEvFn(aAllOneLi.querySelector('.group'),'click',()=>{
        oAll.style.left = '-100%';
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
            chats.css(chats.getId('#emoticon'),{'display':'none','bottom':'-18rem'});
            // chats.getId('#emoticon').style.display = 'none';
            // chats.getId('#emoticon').style.bottom = '-18rem';
        }else {
            that.parentNode.parentNode.style.bottom = '18rem';
            chats.css(chats.getId('#emoticon'),{'display':'block','bottom':'0'});
            // chats.getId('#emoticon').style.display = 'block';
            // chats.getId('#emoticon').style.bottom = 0;
            chats.getId('#more').style.bottom = '-18rem';
        }
        oVoice.style.backgroundImage = 'url(./images/voice.png)';
        oContent.style.justifyContent = 'flex-start';
        if (chats.getTagClass(oContent,'span')){
            chats.remove(chats.getTagClass(oContent,'span'));
        }
    });
    chats.addEvFn(aAllTwoLi.querySelector('span'),'click',(that)=>{
        if (that.style.left == '50%'){
            // chats.css(that,{'left':'0','background':'#e6e6e6'});
            that.style.left = '0';
            that.parentNode.style.background = '#e6e6e6';
        }else {
            // chats.css(that,{'left':'50%','background':'#0ee379'});
            that.style.left = '50%';
            that.parentNode.style.background = '#0ee379';
        }
    });
    function cell(obj,nums,width,height,file,mine) {
        chats.cellLength([1],obj,'ul',(aTagName)=>{
            var num = 0;
            chats.cellLength(nums,aTagName,'li',(aTagName)=>{
                num++;
                chats.css(aTagName,{'width':width,'height':height,'backgroundImage':'url(./images/'+file+'/'+num+mine+')','backgroundSize':'cover'});
                chats.addEvFn(aTagName,'click',(that)=>{
                    chats.cellLength([1],oContent,'bdo',(aTagName)=>{
                        chats.css(aTagName,{'width':'3rem','height':'3rem','backgroundImage':that.style.backgroundImage,'backgroundSize':'cover'});
                    });
                    chats.css(chats.getId('#send'),{'backgroundColor':'#3572c5','color':'white'});
                });
            })
        });
    }
    cell(chats.getTagClassAll(chats.getId('#emoticon'),'article',0),new Array(91),'3rem','3rem','qq','.gif');
    cell(chats.getTagClassAll(chats.getId('#emoticon'),'article',1),new Array(50),'3rem','3rem','tieba','.jpg');
    chats.cellLength([1],chats.getTagClassAll(chats.getId('#emoticon'),'article',2),'ul',(aTagName)=>{
        var num = 0;
        chats.cellLength(new Array(39),aTagName,'li',(aTagName)=>{
            num++;
            chats.css(aTagName,{'width':'11rem','height':'9rem','backgroundImage':'url(./images/beg/'+num+'.jpg)','backgroundSize':'100% 100%'});
            chats.addEvFn(aTagName,'click',(that)=>{
                let meYou = ['me','you'];
                chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                    aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        chats.css(aTagName,{'width':that.offsetWidth+'px','height':that.offsetHeight+'px','margin':'0 1rem 0 1rem','backgroundImage':that.style.backgroundImage,'backgroundSize':'100% 100%'});
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
            let meYou = ['me','you'];
            if (oContent.innerHTML !== ''){
                chats.cellLength([1],oArticle,'div',(aTagName)=>{
                    aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        chats.css(aTagName,{'margin':'0 1rem 0 1rem'});
                        // aTagName.style.margin = '0 1rem 0 1rem';
                        aTagName.innerHTML = oContent.innerHTML;
                    });
                });
                oContent.innerHTML = '';
                chats.css(that,{'backgroundColor':'#f5f5f5','color':'8a8a8a'});
            }else {
                return false;
            }
        }
    });
    chats.addEvFn(oPlus,'click',(that)=>{
        if (that.parentNode.parentNode.style.bottom == MoreHeight){
            that.parentNode.parentNode.style.bottom = 0;
            // chats.css(chats.getId('#more',{'display':'none','bottom':'-'+MoreHeight}));
            chats.getId('#more').style.display = 'none';
            chats.getId('#more').style.bottom = '-'+MoreHeight;
        }else {
            that.parentNode.parentNode.style.bottom = MoreHeight;
            // chats.css(chats.getId('#more',{'display':'block','bottom':'0'}));
            chats.getId('#more').style.bottom = 0;
            chats.getId('#more').style.display = 'block';
            chats.getId('#emoticon').style.bottom = '-18rem';
        }
        oVoice.style.backgroundImage = 'url(./images/voice.png)';
        oContent.style.justifyContent = 'flex-start';
        if (chats.getTagClass(oContent,'span')){
            chats.remove(chats.getTagClass(oContent,'span'));
        }
    });
    chats.addEvFn(oVoice,'click',(that)=>{
        if (chats.getTagClass(oContent,'span')){
            oContent.id = '';
            oContent.type = 'false';
            oContent.contentEditable = 'true';
            that.style.backgroundImage = 'url(./images/voice.png)';
            oContent.innerHTML = '';
            chats.addEvFn(oContent,'keydown',(that,e)=>{
                e = e || window.event;
                if (e.keyCode == 13){
                    e.returnValue = false;
                    e.preventDefault();
                    let  oArticle = chats.getTagClass(document,'article');
                    let meYou = ['me','you'];
                    if (that.innerHTML !== ''){
                        chats.cellLength([1],oArticle,'div',(aTagName)=>{
                            aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                            chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
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
            oContent.innerHTML = '';
            oContent.id = 'btnStart';
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
            chats.getId('#more').style.bottom = '-'+MoreHeight;
            chats.getId('#emoticon').style.bottom = '-18rem';
            that.parentNode.parentNode.style.bottom = 0;
            let oBtnStart = chats.getId('#btnStart');
            chats.recorder(oBtnStart,oBtnStart,(recorder,oBtnStart)=>{
                chats.getId('#spinner').style.display = 'block';
                let num = 0;
                window.seconds = setInterval(()=>{
                    num++;
                    console.log(num);
                    if (num >= 60){
                        voice(recorder,oBtnStart);
                        clearInterval(window.seconds);
                        off = false;
                    }else if (num < 60){
                        off = true;
                    }
                },1000);
            },(recorder,oBtnStart)=>{
                if (off == true){
                    voice(recorder,oBtnStart);
                    clearInterval(window.seconds);
                }
            });
            oContent.contentEditable = 'false';
            oContent.type = 'false';
        }
    });
    function voice(recorder,oBtnStart) {
        let mp3Blob;
        if (oBtnStart.id == 'btnStart'){
            recorder.stop();
            console.log('录音结束，MP3导出中...');
            recorder.getMp3Blob((blob)=>{
                console.log('MP3导出成功');

                mp3Blob = blob;
                let url = URL.createObjectURL(mp3Blob);
                chats.getId('#spinner').style.display = 'none';
                let meYou = ['me','you'];
                chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                    aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                    chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
                    chats.cellLength([1],aTagName,'audio',(aTagName)=>{
                        aTagName.className = 'audioimg';
                        aTagName.controls = "controls";
                        aTagName.src = url;
                        console.log(url);
                        chats.css(aTagName,{'width':'12rem','height':'5rem','display':'none'});
                    });
                    chats.cellLength([1],aTagName,'span',(aTagName)=>{
                        chats.css(aTagName,{'height':'2.6rem','background':'#94e322'});
                        chats.cellLength([1],aTagName,'i',(aTagName)=>{
                            chats.css(aTagName,{'backgroundImage':'url(./images/3.png','backgroundSize':'100% 100%'});
                        });
                        chats.addEvFn(aTagName,'click',(that)=>{
                            let num = 1;
                            that.previousSibling.play();
                            let timer = setInterval(()=>{
                                if (num >= 3){
                                    num = 1
                                }else {
                                    num++;
                                }
                                chats.getTagClass(that,'i').style.backgroundImage = 'url(./images/'+num+'.png)';
                            },300);
                            that.previousSibling.onended = ()=>{
                                clearInterval(timer);
                                chats.getTagClass(that,'i').style.backgroundImage = 'url(./images/3.png)';
                            };
                        });
                    });
                    chats.cellLength([1],aTagName,'time',(aTagName)=>{});
                });
                let aAudioimg = document.querySelectorAll('.audioimg');
                chats.loop(aAudioimg,(i)=>{
                    console.log(i.src);
                    i.onloadedmetadata = ()=>{
                        console.log(i.duration);
                        i.nextSibling.nextSibling.innerHTML = Math.round(i.duration)+'s';
                        let time = (Math.round(i.duration) / 60).toFixed(2);
                        console.log(time);
                        if (16 * time < 2){
                            i.nextSibling.style.width = '2rem';
                        }else {
                            i.nextSibling.style.width = 16 * time + 'rem';
                        }
                    };
                })
            });
        }
    }
    function send(obj,event) {
        chats.addEvFn(obj,event,(that,e)=>{
            e = e || window.event;
            if (event == 'keydown'){
                if (e.keyCode == 13) {
                    e.returnValue = false;
                    e.preventDefault();
                    let  oArticle = chats.getTagClass(document,'article');
                    if (that.innerHTML !== ''){
                        let meYou = ['me','you'];
                        chats.cellLength([1],oArticle,'div',(aTagName)=>{
                            aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                            chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
                            chats.cellLength([1],aTagName,'span',(aTagName)=>{
                                aTagName.style.margin = '0 1rem 0 1rem';
                                aTagName.innerHTML = that.innerHTML;
                            });
                        });
                        that.innerHTML = '';
                        oPlus.style.display = 'flex';
                        chats.getTagClass(oOperation,'.sendText').style.display = 'none';
                    }else {
                        return false;
                    }
                }
                return false;
            }else {
                let  oArticle = chats.getTagClass(document,'article');
                if (oContent.innerHTML !== ''){
                    let meYou = ['me','you'];
                    chats.cellLength([1],oArticle,'div',(aTagName)=>{
                        aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                        chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
                        chats.cellLength([1],aTagName,'span',(aTagName)=>{
                            aTagName.style.margin = '0 1rem 0 1rem';
                            aTagName.innerHTML = oContent.innerHTML;
                        });
                    });
                    oContent.innerHTML = '';
                    oPlus.style.display = 'flex';
                    chats.getTagClass(oOperation,'.sendText').style.display = 'none';
                }else {
                    return false;
                }
            }
            return false;
        });
    }
    send(oContent,'keydown');
    send(chats.getTagClass(oOperation,'.sendText'),'click');
    chats.addEvFn(oContent,'blur',bottoms);
    chats.addEvFn(oContent,'focus',bottom);
    function bottom() {
        if (chats.getId('#emoticon').style.bottom != '0'){
            chats.getId('#operation').parentNode.parentNode.style.bottom = 0;
        }else {
            chats.getId('#more').style.bottom = MoreHeight;
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
    // scrollTop(aAllOneLi.querySelectorAll('article'));
    // scrollTop(document.querySelectorAll('#all>li'));
    // chats.addEvFn(oContent,'focus',(that)=>{
    //     document.execCommand("insertImage","false","https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png")
    //     document.execCommand("insertHTML","false","<br/>");
    // });
    chats.getTagClass(oOperation,'.sendText').style.display = 'none';
    oContent.addEventListener('input',function(e){
        if (this.innerHTML == ''){
            oPlus.style.display = 'flex';
            chats.getTagClass(oOperation,'.sendText').style.display = 'none';
        }else {
            oPlus.style.display = 'none';
            chats.getTagClass(oOperation,'.sendText').style.display = 'flex';
        }
    }, false);
    oContent.focus();
    let oUploadImages = chats.getTagClass(chats.getId('#more'),'.uploadImages');
    let oShot = chats.getTagClass(chats.getId('#more'),'.shots');
    let oRecording = chats.getTagClass(chats.getId('#more'),'.recording');
    chats.browserRedirect((equipment)=>{
        if (equipment == 'pc'){
            oUploadImages.setAttribute("multiple", "multiple");
            ShotUpload(oUploadImages,true);
            ShotUpload(oShot,true);
        }else {
            ShotUpload(oUploadImages,false);
            ShotUpload(oShot,false);
        }
    });
    function ShotUpload(obj,off) {
        obj.addEventListener('change',function(e){
            if (off == true){
                let ele = this.files;
                chats.loop(ele,(i)=>{
                    let fr = new FileReader();
                    fr.onload = function (i) {
                        let pvImg = new Image();
                        pvImg.src = i.target.result;
                        console.log(pvImg);
                        pvImg.onload = function () {
                            let width = this.width;
                            let height = this.height;
                            images(width,height,pvImg);
                        };
                    };
                    fr.readAsDataURL(i);
                });
            }else {
                let ele = this.files[0];
                let fr = new FileReader();
                fr.onload = function (ele) {
                    let pvImg = new Image();
                    pvImg.src = ele.target.result;
                    console.log(pvImg);
                    pvImg.onload = function () {
                        let width = this.width;
                        let height = this.height;
                        images(width,height,pvImg);
                    };
                };
                fr.readAsDataURL(ele);
            }
        }, false);
    }
    function images(width,height,pvImg) {
        let meYou = ['me','you'];
        chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
            aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
            chats.cellLength([1],aTagName,'em',(aTagName)=>{
                aTagName.innerHTML = width;
            });
            chats.cellLength([1],aTagName,'p',(aTagName)=>{
                aTagName.innerHTML = height;
            });
            chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
            chats.cellLength([1],aTagName,'span',(aTagName)=>{
                aTagName.className = 'images';
                aTagName.style.margin = '0 1rem 0 1rem';
                aTagName.style.backgroundImage = 'url('+pvImg.src+')';
                chats.addEvFn(aTagName,'click',(that)=>{
                    chats.cellLength([1],chats.getTagClass(document,'body'),'div',(aTagName)=>{
                        aTagName.className = 'morePic';
                        aTagName.style.width = window.screen.width+'px';
                        aTagName.style.height = window.screen.height+'px';
                        chats.addEvFn(aTagName,'click',(that)=>{
                            if (that.firstChild.style.bottom == '-10rem'){
                                that.firstChild.style.bottom = '1rem';
                            }else {
                                that.firstChild.style.bottom = '-10rem';
                            }
                        });
                        chats.cellLength([1],aTagName,'nav',(aTagName)=>{
                            aTagName.style.bottom = '-10rem';
                            aTagName.style.position = 'fixed';
                            chats.cellLength([1],aTagName,'a',(aTagName)=>{
                                aTagName.innerHTML = '保存图片';
                                aTagName.href = pvImg.src;
                                aTagName.setAttribute("download",new Date());
                            });
                            chats.cellLength([1],aTagName,'bdi',(aTagName)=>{
                                aTagName.innerHTML = '关闭';
                                chats.addEvFn(aTagName,'click',(that)=>{
                                    chats.remove(that.parentNode.parentNode);
                                });
                            });
                        });
                        let imagesLi = document.querySelectorAll('.images');
                        console.log(imagesLi);
                        chats.cellLength([1],aTagName,'ul',(aTagName)=>{
                            aTagName.style.width = imagesLi.length * window.screen.width+'px';
                            aTagName.style.overflow = 'hidden';
                            chats.loop(imagesLi.entries(),(i)=>{
                                chats.cellLength([1],aTagName,'li',(aTagName)=>{
                                    aTagName.style.float = 'left';
                                    let ratioWidth = 0,_this = i[1].parentNode;
                                    if (chats.getTagClass(_this,'em').innerHTML >= window.screen.width || chats.getTagClass(_this,'em').innerHTML < window.screen.width){
                                        ratioWidth = window.screen.width/chats.getTagClass(_this,'em').innerHTML;
                                        aTagName.style.width = chats.getTagClass(_this,'em').innerHTML*ratioWidth+'px';
                                        aTagName.style.height = chats.getTagClass(_this,'p').innerHTML*ratioWidth+'px';
                                    }
                                    aTagName.style.backgroundImage = imagesLi[i[0]].style.backgroundImage;
                                    aTagName.style.backgroundSize = '100% 100%';
                                })
                            });
                            let num = 0;
                            chats.touch(aTagName,(direction)=>{
                                switch (direction) {
                                    case 1:
                                        alert('上');
                                        break;
                                    case 2:
                                        alert('下');
                                        break;
                                    case 3:
                                        if(num >= imagesLi.length-1){
                                            num = imagesLi.length-1;
                                        }else {
                                            parseInt(num++);
                                        }
                                        console.log(num);
                                        aTagName.style.left = '-'+chats.getTagClassAll(aTagName,'li',num).offsetLeft+'px';
                                        break;
                                    case 4:
                                        if (num <= 0 ){
                                            num = 0;
                                        }else {
                                            parseInt(num--);
                                        }
                                        console.log(num);
                                        aTagName.style.left = '-'+chats.getTagClassAll(aTagName,'li',num).offsetLeft+'px';
                                        break;
                                    default:
                                }
                            });
                        });
                    });
                });
                let ratioWidth = 0,ratioHeight = 0;
                if (width > 200){
                    ratioWidth = 200/width;
                    aTagName.style.width = width*ratioWidth+'px';
                    aTagName.style.height = height*ratioWidth+'px';
                }else {
                    aTagName.style.width = width+'px';
                    aTagName.style.height = height+'px';
                }
                aTagName.style.backgroundSize = '100% 100%';
            });
        });
    }
    let oBuddyList = chats.getId('#buddyList');
    let aCheckBox = oBuddyList.querySelectorAll('.checkBox');
    chats.addEvFn(chats.getTagClass(aAllTwoLi,'.plusPer'),'click',()=>{
            oBuddyList.style.left = 0;
            chats.getTagClass(oBuddyList,'title').innerHTML = '选择联系人';
            chats.css(chats.getTagClass(oBuddyList,'.back'),{'display':'none'});
            chats.css(chats.getTagClass(oBuddyList,'.personal'),{'display':'none'});
            chats.getTagClass(oBuddyList,'.cancel').style.display = 'flex';
            chats.getTagClass(oBuddyList,'.confirm').style.display = 'flex';
        chats.loop(aCheckBox,(i)=>{
            chats.css(i,{'display':'flex'});
        });
            oAll.style.display = 'none';
            oBody.removeEventListener('touchmove',bodyScroll,false);
        
    });
    chats.addEvFn(chats.getTagClass(chats.getId('#buddyList'),'.cancel'),'click',()=>{
        chats.getId('#buddyList').style.left = '-100%';
        oBody.addEventListener('touchmove',bodyScroll,false);
        oAll.style.display = 'flex';
    });
    let aPersons = aAllTwoLi.querySelectorAll('.persons');
    chats.myPromise(true).then(()=>{
        let logger = {
            fn: (i)=>{
                oAll.style.left = '-200%';
                oBody.style.overflow = 'hidden';
                chats.getTagClass(aAllThreeLi,'figure').style.backgroundImage = 'url('+chats.getTagClass(i,'img').src+')';
                chats.getTagClass(aAllThreeLi,'span').innerHTML = chats.getTagClass(i,'figcaption').innerHTML;
                chats.getTagClass(aAllThreeLi,'.niCheng').innerHTML = '昵称：'+chats.getTagClass(aAllTwoLi,'.niCheng').innerHTML;
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
    }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", ()=>{
        if (window.orientation === 180 || window.orientation === 0) {
            console.log('竖屏');
        }
        if (window.orientation === 90 || window.orientation === -90 ){
            console.log('横屏');
        }
    }, false);
    oRecording.addEventListener('change',function(e){
        let ele = this.files[0];
        console.log(ele);
        let fr = new FileReader();
        fr.onload = function (ele) {
            let pvImg = document.createElement('video');
            pvImg.src = ele.target.result;
            console.log(pvImg);
            let meYou = ['me','you'];
            chats.cellLength([1],aAllOneLi.querySelector('article'),'div',(aTagName)=>{
                aTagName.className = meYou[parseInt(Math.random() * meYou.length)];
                chats.cellLength([1],aTagName,'bdo',(aTagName)=>{});
                chats.cellLength([1],aTagName,'video',(aTagName)=>{
                    aTagName.style.margin = '0 1rem 0 1rem';
                    aTagName.controls = 'controls';
                    aTagName.src = pvImg.src;
                    aTagName.style.width = '16rem';
                    aTagName.style.height = '16rem';
                });
            });
        };
        fr.readAsDataURL(ele);
    });
    // oBody.style.width = oAll.offsetWidth+'px';
    chats.myPromise(true).then(()=>{
        chats.addEvFn(chats.getTagClass(aAllTwoLi,'.niCheng'),'click',()=>{
            chats.getId('#nickname').style.bottom = 0;
            chats.getTagClass(chats.getId('#nickname'),'.niCheng').focus();
        });
    }).then(()=>{
        chats.addEvFn(chats.getTagClass(chats.getId('#nickname'),'.cancle'),'click',()=>{
            chats.getId('#nickname').style.bottom = '-100%';
            chats.getTagClass(chats.getId('#nickname'),'.niCheng').blur();
        });
    }).then(()=>{
        chats.addEvFn(chats.getTagClass(chats.getId('#nickname'),'.preservation'),'click',()=>{
            chats.getId('#nickname').style.bottom = '-100%';
            chats.getTagClass(chats.getId('#nickname'),'.niCheng').blur();
            chats.getTagClass(aAllTwoLi,'.niCheng').innerHTML = chats.getTagClass(chats.getId('#nickname'),'.niCheng').innerHTML;
            chats.getTagClass(chats.getId('#nickname'),'.niCheng').innerHTML = '';
        });
    });
    chats.myPromise(true).then(()=>{
        chats.addEvFn(chats.getTagClass(aAllOneLi,'.buddyList'),'click',()=>{
            chats.getId('#buddyList').style.left = 0;
            chats.getTagClass(chats.getId('#buddyList'),'title').innerHTML = '好友列表';
            chats.css(chats.getTagClass(oBuddyList,'.back'),{'display':'flex'});
            chats.css(chats.getTagClass(oBuddyList,'.personal'),{'display':'flex'});
            chats.getTagClass(oBuddyList,'.cancel').style.display = 'none';
            chats.getTagClass(oBuddyList,'.confirm').style.display = 'none';
            chats.loop(aCheckBox,(i)=>{
                chats.css(i,{'display':'none'});
            });
            oAll.style.display = 'none';
            oBody.removeEventListener('touchmove',bodyScroll,false);
        })
    }).then(()=>{
        chats.addEvFn(chats.getTagClass(chats.getId('#buddyList'),'.back'),'click',()=>{
            chats.getId('#buddyList').style.left = '-100%';
            oBody.addEventListener('touchmove',bodyScroll,false);
            oAll.style.display = 'flex';
        })
    });
    chats.loop(aCheckBox,(i)=>{
        chats.addEvFn(i,'click',(that)=>{
            if(that.style.background == 'seagreen'){
                that.style.background = '#FFF';
                chats.getTagClass(that,'span').style.display = 'none';
                chats.getTagClass(oBuddyList,'.confirm').style.color = '#CCC';
            }else {
                that.style.background = 'seagreen';
                chats.getTagClass(that,'span').style.display = 'block';
            }
        })
    });
};
function M() {
    this.showM = function () {
        console.log('M');
    }
}
function N() {
    this.showN = function () {
        console.log('N');
    }
}
function K() {};
M.prototype = new N();
M.prototype.constructor = M;
K.prototype = new M();
K.prototype.constructor = K;
K.prototype.getBook = function () {
    console.log('JAVASCRIPT');
};
M.prototype.name = function (name) {
    console.log(name);
};
let box = new K();
box.showM();
box.showN();
box.getBook();
box.name('梁志成');
