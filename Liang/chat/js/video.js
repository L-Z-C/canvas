/**
 * Created by Liulc on 2017/5/24.
 */
window.onload = ()=>{
    "use strict";
    function getAideoMedia() {
        navigator.MediaStream  = navigator.MediaStream  ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia;

        if (navigator.MediaStream ) {
            navigator.MediaStream ({ audio: true , video: true},
                function(stream) {
                    let oArticle = document.querySelector('article');
                    oArticle.style.display = 'block';
                    let video = oArticle.querySelector('video');
                    console.log(video);
                    video.src = window.URL.createObjectURL(stream);
                    video.onloadedmetadata = function(e) {
                        video.play();
                    };
                },
                function(err) {
                    console.log("The following error occurred: " + err.name);
                }
            );
            alert('支持视频聊天');
        } else {
            console.log("getUserMedia not supported");
            alert('不支持视频聊天');
        }
    }
    getAideoMedia();
    let oArticle = document.querySelector('article');
    document.querySelector('i').addEventListener('click',()=>{
        "use strict";
        window.location.href = 'index.html';
    });
    oArticle.querySelector('video').style.width = window.screen.width+'px';
    oArticle.querySelector('video').style.height = window.screen.height+'px';
};