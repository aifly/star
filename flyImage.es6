

export default class FlyImage{
	  constructor(args){
   		this.x= args.x;
   		this.y= args.y;
   		this.scale= args.scale || 1;
   		this.stage = args.stage;
   		this.src= args.src;
   		this.target = null;
   		this.duration = Math.floor(Math.random()*2000+2000);
   		this.life = Math.floor(Math.random()*800);
   		
   }

   init(){

   		var star = new createjs.Bitmap(this.src);

   		star.x = this.x;
   		star.y = this.y;
   		star.scale=this.scale;
   		this.target = star;
   		this.stage.addChild(star);
   		this.flash();
   }

   flash(){
   		
   }
   
};