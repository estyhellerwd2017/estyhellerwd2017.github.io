(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"painting_Canvas_atlas_", frames: [[0,838,600,453],[0,0,1464,836]]}
];


// symbols:



(lib.canvas = function() {
	this.spriteSheet = ss["painting_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.painting = function() {
	this.spriteSheet = ss["painting_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("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");
	this.shape.setTransform(-6.3,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-160.5,-34.6,321.1,69.3), null);


(lib.paintbrush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2283B4").s().p("ACDbVQh0gIhigJQh8gMhhgNQh1gQhngTQhogThsgbQhtgchXgeQgugQgtgSQgvgUgkgSQgngTglgXQgogYgcgVQgggZgbgZQgcgdgUgaQgVgbgQggQgPgdgKgiQgKgggDglQgDgjAFgmQAEgsgCgfQAAgjgHgkQgFgggMgkQgKgjgPgeQgPgggTgeQgSgdgYgeQgTgZgdgfQgVgVgiggQgfgbgegWQgbgWgmgZIgegSQCRlCB6nFQA1klCXkCQCTj8Dgi8QDhi/EShmQEehqExAAQFZAAE6CFQEvCADrDqQDqDrCAEvQCFE7AAFYQABDUg0DMQgyDGhhC1QjNFlmFECQljDtoCCeg");
	this.shape.setTransform(24.7,85.7,0.057,0.057,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F9EE6").s().p("A/PMpQgfgigGguQgGgyAaglQAegqBAgMQMoiXHhloQG6lKEJpOIAeASQAlAZAcAWQAeAXAfAbQAiAfAUAWQAdAeAUAaQAYAeASAcQATAeAPAgQAOAfALAiQAMAlAFAfQAHAkAAAjQACAggFArQgEAnADAjQADAlAJAfQAKAiAQAeQAQAeAVAcQATAZAdAdQAaAZAhAZQAcAWAoAYQAlAWAnATQAkATAvATQAtATAuAQQBXAeBtAcQBpAaBrAUQBsATBwAPQBhANB8AMQBjAKB0AHIAUABQrwDoyHBMQrCAv0/AAQgsAAghgjg");
	this.shape_1.setTransform(12.3,89.9,0.057,0.057,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EhIAB+6QkiizlQg0QBPjTDIm5QBijXFJq+QKM10EvrkQAahAAohUQA4ASBsAmQGQCPGLDmQHpEeHVGfQhABcg2BEQnxJsuCTbQnDJwiNC/QkeGEiTCrQjEkNkciugEgmBA/vQmDjamGiLIhwgmUAO/ga/A6shT8UAdZgqEAa7glYQAwhABAgBQAkgBAhATIAHAFQAgAWAMArQAPA1gYA9UgTeAphgWaAuDUgssBb7gQdAasQoHnCodkwg");
	this.shape_2.setTransform(71,39.9,0.057,0.057,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.paintbrush, new cjs.Rectangle(0,0,112.5,95.6), null);


// stage content:
(lib.painting_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//
		///* Click to Go to Web Page
		//Clicking on the specified symbol instance loads the URL in a new browser window.
		//
		//Instructions:
		//1. Replace http://www.adobe.com with the desired URL address.
		//   Keep the quotation marks ("").
		//*/
		//
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage);
		//
		function fl_ClickToGoToWebPage() {
			window.open("http://www.google.com", "_blank");
		}
		//
	}
	this.frame_29 = function() {
		//
		///* Stop at This Frame
		//The  timeline will stop/pause at the frame where you insert this code.
		//Can also be used to stop/pause the timeline of movieclips.
		//*/
		//
		this.stop();
		//
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// text
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(265.1,100);
	this.movieClip_1.alpha = 0;
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(19).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

	// paintbrush.svg
	this.instance = new lib.paintbrush();
	this.instance.parent = this;
	this.instance.setTransform(56.3,60.8,1,1,0,0,0,56.3,47.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2283B4").s().p("ACDbVQh0gIhigJQh8gMhhgNQh1gQhngTQhogThsgbQhtgchXgeQgugQgtgSQgvgUgkgSQgngTglgXQgogYgcgVQgggZgbgZQgcgdgUgaQgVgbgQggQgPgdgKgiQgKgggDglQgDgjAFgmQAEgsgCgfQAAgjgHgkQgFgggMgkQgKgjgPgeQgPgggTgeQgSgdgYgeQgTgZgdgfQgVgVgiggQgfgbgegWQgbgWgmgZIgegSQCRlCB6nFQA1klCXkCQCTj8Dgi8QDhi/EShmQEehqExAAQFZAAE6CFQEvCADrDqQDqDrCAEvQCFE7AAFYQABDUg0DMQgyDGhhC1QjNFlmFECQljDtoCCeg");
	this.shape.setTransform(24.7,98.6,0.057,0.057,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F9EE6").s().p("A/PMpQgfgigGguQgGgyAaglQAegqBAgMQMoiXHhloQG6lKEJpOIAeASQAlAZAcAWQAeAXAfAbQAiAfAUAWQAdAeAUAaQAYAeASAcQATAeAPAgQAOAfALAiQAMAlAFAfQAHAkAAAjQACAggFArQgEAnADAjQADAlAJAfQAKAiAQAeQAQAeAVAcQATAZAdAdQAaAZAhAZQAcAWAoAYQAlAWAnATQAkATAvATQAtATAuAQQBXAeBtAcQBpAaBrAUQBsATBwAPQBhANB8AMQBjAKB0AHIAUABQrwDoyHBMQrCAv0/AAQgsAAghgjg");
	this.shape_1.setTransform(12.3,102.8,0.057,0.057,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("EhIAB+6QkiizlQg0QBPjTDIm5QBijXFJq+QKM10EvrkQAahAAohUQA4ASBsAmQGQCPGLDmQHpEeHVGfQhABcg2BEQnxJsuCTbQnDJwiNC/QkeGEiTCrQjEkNkciugEgmBA/vQmDjamGiLIhwgmUAO/ga/A6shT8UAdZgqEAa7glYQAwhABAgBQAkgBAhATIAHAFQAgAWAMArQAPA1gYA9UgTeAphgWaAuDUgssBb7gQdAasQoHnCodkwg");
	this.shape_2.setTransform(71,52.8,0.057,0.057,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:56.2,regY:41.4,x:75.8,y:64.3},0).wait(1).to({x:92.4,y:78.5},0).wait(1).to({x:100.3,y:98.6},0).wait(1).to({x:94.9,y:119.7},0).wait(1).to({x:116.8,y:120.5},0).wait(1).to({x:138.5,y:123},0).wait(1).to({x:159.6,y:128.8},0).wait(1).to({x:168.2,y:145.8},0).wait(1).to({x:188.4,y:146.7},0).wait(1).to({x:210.3,y:133.4},0).wait(1).to({x:224.9,y:117.8},0).wait(1).to({x:241.6,y:94.4},0).wait(1).to({x:252.3,y:75.5},0).wait(1).to({x:257.7,y:49.7},0).wait(1).to({x:282.2,y:51.4},0).wait(1).to({x:298.9,y:62},0).wait(1).to({x:320.6,y:76.8},0).wait(1).to({x:338.5,y:92.8},0).wait(1).to({x:357.6,y:115.3},0).wait(1).to({x:362.5,y:128.9},0).wait(1).to({x:386.7,y:115.3},0).wait(1).to({x:408.1,y:103.4},0).wait(1).to({x:429.4,y:91.6},0).wait(1).to({x:450.8,y:79.9},0).wait(1).to({x:472.7,y:68.3},0).wait(1).to({x:493.7,y:58.8},0).wait(2).to({_off:true},1).wait(1));

	// maskPainting (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_1 = new cjs.Graphics().p("EhDJAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_2 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_3 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_4 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_5 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_6 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_7 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_8 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_9 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_10 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_11 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_12 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_13 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_14 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_15 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_16 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_17 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_18 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_19 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_20 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_21 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_22 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_23 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_24 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_25 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_26 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_27 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");
	var mask_graphics_28 = new cjs.Graphics().p("EhCnAgMMAAAhAXMCFPAAAMAAABAXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-442.4,y:53.6}).wait(1).to({graphics:mask_graphics_1,x:-429.8,y:54.5}).wait(1).to({graphics:mask_graphics_2,x:-423.1,y:55.4}).wait(1).to({graphics:mask_graphics_3,x:-412.2,y:56.4}).wait(1).to({graphics:mask_graphics_4,x:-400.2,y:57.5}).wait(1).to({graphics:mask_graphics_5,x:-387.2,y:58.7}).wait(1).to({graphics:mask_graphics_6,x:-373,y:60}).wait(1).to({graphics:mask_graphics_7,x:-357.5,y:61.4}).wait(1).to({graphics:mask_graphics_8,x:-340.6,y:63}).wait(1).to({graphics:mask_graphics_9,x:-322.1,y:64.7}).wait(1).to({graphics:mask_graphics_10,x:-301.8,y:66.5}).wait(1).to({graphics:mask_graphics_11,x:-279.6,y:68.6}).wait(1).to({graphics:mask_graphics_12,x:-255.2,y:70.8}).wait(1).to({graphics:mask_graphics_13,x:-228.2,y:73.3}).wait(1).to({graphics:mask_graphics_14,x:-198.5,y:76}).wait(1).to({graphics:mask_graphics_15,x:-165.6,y:79.1}).wait(1).to({graphics:mask_graphics_16,x:-129.2,y:82.4}).wait(1).to({graphics:mask_graphics_17,x:-89,y:86.1}).wait(1).to({graphics:mask_graphics_18,x:-44.9,y:90.2}).wait(1).to({graphics:mask_graphics_19,x:2.6,y:94.5}).wait(1).to({graphics:mask_graphics_20,x:52.2,y:99.1}).wait(1).to({graphics:mask_graphics_21,x:101.8,y:103.6}).wait(1).to({graphics:mask_graphics_22,x:148.4,y:107.9}).wait(1).to({graphics:mask_graphics_23,x:189.4,y:111.7}).wait(1).to({graphics:mask_graphics_24,x:223.5,y:114.8}).wait(1).to({graphics:mask_graphics_25,x:250.6,y:117.3}).wait(1).to({graphics:mask_graphics_26,x:271.3,y:119.2}).wait(1).to({graphics:mask_graphics_27,x:286.6,y:120.6}).wait(1).to({graphics:mask_graphics_28,x:297.4,y:121.6}).wait(2));

	// painting
	this.instance_1 = new lib.painting();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16,-44);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// bg
	this.instance_2 = new lib.canvas();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34,-68);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241,32,600,453);
// library properties:
lib.properties = {
	width: 550,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/painting_Canvas_atlas_.png?1489660065214", id:"painting_Canvas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
