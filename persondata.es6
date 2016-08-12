
import pp1 from './assets/images/1.png';
import pp2 from './assets/images/2.png';
import pp3 from './assets/images/3.png';
import pp4 from './assets/images/4.png';
import pp5 from './assets/images/5.png';
import pp6 from './assets/images/6.png';
import pp7 from './assets/images/7.png';
import pp8 from './assets/images/8.png';
import pp9 from './assets/images/9.png';
import pp10 from './assets/images/10.png';

let p1 = './assets/js/'+pp1,
    p2 = './assets/js/'+pp2,
    p3 = './assets/js/'+pp3,
    p4 = './assets/js/'+pp4,
    p5 = './assets/js/'+pp5,
    p6 = './assets/js/'+pp6,
    p7 = './assets/js/'+pp7,
    p8 = './assets/js/'+pp8,
    p9 = './assets/js/'+pp9,
    p10 = './assets/js/'+pp10;
 [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10].forEach((src,i)=>{

 	var img = document.createElement('img');
 	img.id = 'person'+(i+1);
 	img.className = 'person';
 	img.style.animationDelay = Math.random()*1000+200+"ms";
 	img.onload = ()=>{
 		document.body.appendChild(img);
 	}
 	img.src = src;
 });


function r(m, n) {
    return (m + Math.random() * (n - m));
}



const personArr = function(stage){
	return [
			{
				x:1648,
				y:276,
				src:p1,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},
			{
				x:2090,
				y:90,
				src:p2,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},
			{
				x:2480,
				y:188,
				src:p3,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:2832,
				y:328,
				src:p4,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:3008,
				y:88,
				src:p5,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:3400,
				y:324,
				src:p6,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:3204,
				y:704,
				src:p7,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:2492,
				y:730,
				src:p8,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:2168,
				y:528,
				src:p9,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},{
				x:1748,
				y:630,
				src:p10,
				iNowX : 0,
                iNowY : 0,
                speedX : r(.07, .2),
                speedY : r(.01, .1),
                xLife : r(200, 280),
                yLife : r(200, 300)
			},
			
		]
};

export default personArr;