/**
 * Allows you to animate any Drawable node
 * @class Animation
 * @fires FF.Animation#start
 * @fires FF.Animation#step
 * @fires FF.Animation#end
 * @example
 * TODO
 */
FF.Animation = function(item, duration, options){
	FF.EventManager.call(this);

	var that = this;

	this.node = item;

	this.timer = new FF.Timer({ timeout : duration, interval : options.step || 2, autostart : options.autostart  });
	this.timer.addEventListener("start", function(){ that.dispatchEvent({ type : "start" }); });
	this.timer.addEventListener("tick", function(){ that.animate(); that.dispatchEvent({ type : "step" }); });
	this.timer.addEventListener("timeout", function(){ that.dispatchEvent({ type : "end" }); });

	this.animateLeft = options.left || null;

	this.animateRight = options.right || null;

	this.animateTop = options.top || null;

	this.animateBottom = options.bottom || null;

	this.animateWidth = options.width || null;

	this.animateHeight = options.height || null;

	this.animateScale = options.scale || null;

	this.animateOpacity = options.opacity || null;
};


FF.Animation.prototype.update = function(){
	this.timer.update();
};


FF.Animation.prototype.animate = function(){
	if(this.animateLeft) this.node.x-= this.animateLeft;
	if(this.animateRight) this.node.x+= this.animateRight;
	if(this.animateTop) this.node.y-= this.animateTop;
	if(this.animateBottom) this.node.y+= this.animateBottom;
	if(this.animateWidth) this.node.width+= this.animateWidth;
	if(this.animateHeight) this.node.height+= this.animateHeight;
	if(this.animateScale && this.node.scale > 0) this.node.scale+= this.animateScale;
	if(this.animateOpacity && this.node.opacity > 0) this.node.opacity+= this.animateOpacity;
};
