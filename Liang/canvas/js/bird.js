/**
 * Created by Liulc on 2016/8/30.
 */
window.onload=function(){
    var circleCxt = document.getElementById('circle').getContext('2d');
    circleCxt.beginPath();
    circleCxt.arc(200,200,80,1.5*Math.PI,Math.PI/2,false);
    circleCxt.fillStyle = 'white';
    circleCxt.closePath();
    circleCxt.fill();

    circleCxt.beginPath();
    circleCxt.arc(200,200,80,Math.PI/2,1.5*Math.PI,false);
    circleCxt.fillStyle = 'black';
    circleCxt.closePath();
    circleCxt.fill();

    circleCxt.beginPath();
    circleCxt.arc(200,240,40,0,Math.PI*2,true);
    circleCxt.fillStyle = 'black';
    circleCxt.closePath();
    circleCxt.fill();

    circleCxt.beginPath();
    circleCxt.arc(200,160,40,0,Math.PI*2,true);
    circleCxt.fillStyle = 'white';
    circleCxt.closePath();
    circleCxt.fill();

    circleCxt.beginPath();
    circleCxt.arc(200,160,8,0,Math.PI*2,true);
    circleCxt.fillStyle = 'black';
    circleCxt.closePath();
    circleCxt.fill();

    circleCxt.beginPath();
    circleCxt.arc(200,240,8,0,Math.PI*2,true);
    circleCxt.fillStyle = 'white';
    circleCxt.closePath();
    circleCxt.fill();

    circleCxt.save();
    circleCxt.stroke();

    var birdCxt = document.getElementById('bird').getContext('2d');
    birdCxt.beginPath();
    birdCxt.moveTo(50, 120);
    birdCxt.bezierCurveTo(50, 50,150, 50, 150, 150);
    birdCxt.quadraticCurveTo(150, 250, 250, 250);
    birdCxt.stroke();
};