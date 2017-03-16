(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.text_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ani
	this.text = new cjs.Text("animation", "75px 'Acier BAT Text Noir'", "#6633CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 87;
	this.text.lineWidth = 383;
	this.text.parent = this;
	this.text.setTransform(247.5,57.7);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(19).to({_off:false},0).wait(11));

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("AnBHCQi6i6AAkIQAAkGC6i7QC7i6EGAAQEIAAC6C6QC6C7AAEGQAAEIi6C6Qi6C6kIAAQkGAAi7i6g");
	var mask_graphics_5 = new cjs.Graphics().p("AmYHNQi6i6h4kGQh3kEEwi8QEwi9ErgUQEtgVDSCtQDSCtg7EpQg7Epi7C6Qi6C6kHAAQkHAAi6i6g");
	var mask_graphics_6 = new cjs.Graphics().p("AltHaQi6i6jvkDQjvkCGmi/QGli+FRgpQFSgpDpCfQDqCfh2FMQh2FKi7C6Qi6C7kHAAQkHAAi6i7g");
	var mask_graphics_7 = new cjs.Graphics().p("AlDHpQi6i6lmkBQlnkAIcjAQIbjBF2g9QF3g+EBCSQEBCRixFuQixFsi7C6Qi6C7kHAAQkHAAi6i7g");
	var mask_graphics_8 = new cjs.Graphics().p("AkaH6Qi6i6ndj/Qnej+KRjDQKRjDGbhRQGchSEZCEQEYCEjsGPQjsGPi6C6Qi6C6kIAAQkGAAi7i6g");
	var mask_graphics_9 = new cjs.Graphics().p("AjxIMQi6i6pVj8QpVj8MHjFQMHjFHAhmQHBhnEwB3QEwB2knGyQknGwi6C6Qi6C7kIAAQkGAAi7i7g");
	var mask_graphics_10 = new cjs.Graphics().p("AjIIgQi6i6rNj6QrMj6N8jHQN9jHHlh7QHmh7FIBpQFHBplhHTQliHTi7C6Qi6C6kHAAQkHAAi6i6g");
	var mask_graphics_11 = new cjs.Graphics().p("AigI1Qi6i6tDj4QtEj4PyjJQPxjJILiPQIMiQFfBcQFfBbmdH1QmdH1i6C6Qi6C6kIAAQkHAAi6i6g");
	var mask_graphics_12 = new cjs.Graphics().p("Ah4JLQi6i6u7j2Qu7j1RojMQRmjLIxikQIwikF3BOQF3BOnYIXQnYIXi6C6Qi6C6kIAAQkHAAi6i6g");
	var mask_graphics_13 = new cjs.Graphics().p("AhQJiQi6i6wyj0QwzjzTdjOQTdjNJVi5QJWi4GOBAQGPBBoTI5QoTI5i6C6Qi6C6kIAAQkHAAi6i6g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:260.4,y:108.4}).wait(1).to({graphics:mask_graphics_5,x:256.3,y:107.3}).wait(1).to({graphics:mask_graphics_6,x:252,y:105.9}).wait(1).to({graphics:mask_graphics_7,x:247.8,y:104.4}).wait(1).to({graphics:mask_graphics_8,x:243.7,y:102.8}).wait(1).to({graphics:mask_graphics_9,x:239.6,y:100.9}).wait(1).to({graphics:mask_graphics_10,x:235.5,y:99}).wait(1).to({graphics:mask_graphics_11,x:231.5,y:96.9}).wait(1).to({graphics:mask_graphics_12,x:227.5,y:94.7}).wait(1).to({graphics:mask_graphics_13,x:223.5,y:92.4}).wait(1).to({graphics:null,x:0,y:0}).wait(16));

	// first
	this.text_1 = new cjs.Text("First", "75px 'Acier BAT Text Noir'", "#66CC33");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 87;
	this.text_1.lineWidth = 383;
	this.text_1.parent = this;
	this.text_1.setTransform(247.5,57.7);
	this.text_1._off = true;

	var maskedShapeInstanceList = [this.text_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(8).to({_off:false},0).to({_off:true},11).wait(11));

	// my
	this.text_2 = new cjs.Text("MY", "75px 'Acier BAT Text Noir'", "#996600");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 87;
	this.text_2.lineWidth = 383;
	this.text_2.parent = this;
	this.text_2.setTransform(247.5,57.7);

	this.text_3 = new cjs.Text("MY", "75px 'Acier BAT Text Noir'", "#996600");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 87;
	this.text_3.lineWidth = 383;
	this.text_3.parent = this;
	this.text_3.setTransform(247.5,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2}]}).to({state:[]},8).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(329.1,155.7,387,88.6);
// library properties:
lib.properties = {
	width: 550,
	height: 200,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
