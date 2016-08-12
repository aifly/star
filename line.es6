
export default class Line {

	constructor(args = {}){
		this.container = args.container;
		this.moveTo = args.moveTo|| [0,0];
		this.lineTo = args.lineTo || [0,0];
		this.color = args.color||'#fff';
		this.init();
	}

	init(){


		var line = new createjs.Shape();
		//line.scaleX = line.scaleY = .5;
		//line.graphics.beginStroke(this.color).setStrokeStyle(3).moveTo(this.moveTo[0],this.moveTo[1]).lineTo(this.lineTo[0],this.lineTo[1]);
		line.graphics.beginFill('red').drawCircle(this.moveTo[0],this.moveTo[1],120);

		line.alpha = 0;
		this.container.addChild(line);
		
	}
}