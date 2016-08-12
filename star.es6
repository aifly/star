
import FlyImage from './flyImage.es6';

export default class Star extends FlyImage{
   
   constructor(args){
         super(args);
   		this.duration = Math.floor(Math.random()*1000+1000);
   		this.life = Math.floor(Math.random()*1000);
         this.init();
   }

   flash(){
   		createjs.Tween.get(this.target,{loop:true},false).wait(this.life)
   			.to({alpha:0},this.duration, createjs.Ease.linear)
   			.to({alpha:1},1000, createjs.Ease.linear).call(()=>{
               this.duration = Math.floor(Math.random()*1000+1000);
               this.life = Math.floor(Math.random()*800);
            });
   }
}