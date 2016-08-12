

import Star from './star.es6';

import starArr from './stardata.es6';

import personArr from './persondata.es6';

import Line from './line.es6';



!function(document){

	function $(selector){
		return document.querySelector(selector);
	};


	

	var util = {

		init(){

			

			var canvas = $('#star'),
			stage = new createjs.Stage(canvas);

			

			var data = {
				viewWidth : document.documentElement.clientWidth,
				viewHeight : document.documentElement.clientHeight,
				personArr:personArr(),
				personInfo:[],
				container:new createjs.Container()

			}
			this.setSize(canvas,data);

			stage.addChildAt(data.container,0);

			var iNow  = 0,
			halfImgWidth = 105;

			data.personArr.forEach((person,i)=>{
				var line = null;
				if(data.personArr[i+1] ){
					 line = new createjs.Shape();
			
					line.graphics.beginStroke('#fff').setStrokeStyle(3)
					.moveTo(person.x+ halfImgWidth,person.y+ halfImgWidth)
					.lineTo(data.personArr[i+1].x+ halfImgWidth,data.personArr[i+1].y+ halfImgWidth);
			//line.graphics.beginFill('red').drawCircle(this.moveTo[0],this.moveTo[1],120);

					line.alpha = 0;		
					data.container.addChild(line);
				}else{
					line = new createjs.Shape();
					line.graphics.beginStroke('#fff').setStrokeStyle(3)
					.moveTo(person.x+ halfImgWidth,person.y+ halfImgWidth)
					.lineTo(data.personArr[0].x+ halfImgWidth,data.personArr[0].y+ halfImgWidth);
			//line.graphics.beginFill('red').drawCircle(this.moveTo[0],this.moveTo[1],120);

					line.alpha = 0;		
					data.container.addChild(line);
				}


				var circle = new createjs.Shape();
				circle.alpha=0;
				circle.scaleX = circle.scaleY = .5;

				var x =data.personArr[i].x + halfImgWidth;
				var y =data.personArr[i].y + halfImgWidth;
				circle.x = x;
				circle.y = y;

				circle.graphics.beginFill('#fff').drawCircle(0,0,40);
				stage.addChildAt(circle,1);

				var img = $('#person'+(i+1));

				var map = new createjs.DOMElement(img);
				map.x = person.x;
				map.y = person.y;
				map.scaleX = map.scaleY = .5;
				map.alpha=0;
				
				stage.addChildAt(map,2);
				

				data.personInfo.push({
					person:map,
					circle:circle,
					line:line,
					personData :person
				});
			});


			let drawLine = false;


			this.showPerson(data.personInfo[0].circle).then(()=>{
				
				//data.personInfo[0].person.shadow =  new createjs.Shadow('#ff0',-10,10,20);


				return this.showPerson(data.personInfo[0].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[0].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[1].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[1].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[1].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[2].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[2].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[2].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[3].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[3].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[3].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[4].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[4].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[4].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[5].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[5].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[5].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[6].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[6].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[6].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[7].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[7].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[7].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[8].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[8].person);
			}).then(()=>{
				return this.showPerson(data.personInfo[8].line);
			}).then(()=>{
				return this.showPerson(data.personInfo[9].circle);
			}).then(()=>{
				return this.showPerson(data.personInfo[9].person);
			}).then(()=>{
				$('.mask').classList.add('active');
			}).then(()=>{

				/*	this.getLine(9,7,halfImgWidth,data);
					this.getLine(8,1,halfImgWidth,data);
					this.getLine(8,2,halfImgWidth,data);
					this.getLine(2,4,halfImgWidth,data);
					this.getLine(3,6,halfImgWidth,data);
					this.getLine(3,7,halfImgWidth,data);*/
					drawLine = true;

					data.personInfo.forEach(p=>{
						stage.removeChild(p.circle);
					});
					
			});

			createjs.MotionGuidePlugin.install(createjs.Tween);



			starArr(stage).forEach(star=>{
				new Star(star);
			});


			createjs.Ticker.timingMode = createjs.Ticker.RAF;

			createjs.Ticker.on('tick',()=>{

				data.personInfo.forEach(p=>{
					var s = p.personData;
					 s.iNowY++;
	                if (s.iNowY > s.yLife) {
	                    s.iNowY = 0;
	                    s.speedY *= -1;

	                }
		            s.iNowX+=.6;
		            if (s.iNowX > s.xLife) {
		                s.iNowX = 0;
		                s.speedX *= -1;
		            }
		            p.person.x += s.speedX;
		            p.person.y += s.speedY;
				});

				if(drawLine){
					data.container.removeAllChildren();
				data.personArr.forEach((person,i)=>{
						var line = null;
						if(data.personArr[i+1] ){
							 line = new createjs.Shape();
					
							line.graphics.beginStroke('#fff').setStrokeStyle(3)
							.moveTo(data.personInfo[i].person.x+ halfImgWidth,data.personInfo[i].person.y+ halfImgWidth)
							.lineTo(data.personArr[i+1].x+ halfImgWidth,data.personArr[i+1].y+ halfImgWidth);
					//line.graphics.beginFill('red').drawCircle(this.moveTo[0],this.moveTo[1],120);

							
							data.container.addChild(line);
						}
					});
				}
				
				stage.update();
			});
		},

		getLine(a,b,halfImgWidth,data){
			var line = new createjs.Shape();
	
			line.graphics.beginStroke('#fff').setStrokeStyle(2)
			.moveTo(data.personArr[a].x+ halfImgWidth,data.personArr[a].y+ halfImgWidth)
			.lineTo(data.personArr[b].x+ halfImgWidth,data.personArr[b].y+ halfImgWidth);

			data.container.addChild(line);
		},

		setSize(canvas,data) {
			canvas.width = data.viewWidth;
			canvas.height = data.viewHeight
		},
		showPerson(obj){

			if(!obj){
				return;
			}

			return new Promise((resolve,reject)=>{

				createjs.Tween.get(obj,{loop:false},false).to({
					alpha:1,
					scaleX:1,
					scaleY:1
				},210,createjs.Ease.cubicOut).call( () => {
					resolve(obj);
				});
			});
		}
	}
	window.onload = ()=>{util.init()};

}(document);