(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"lets_meat_atlas_1", frames: [[0,0,1374,851],[0,853,1374,851]]},
		{name:"lets_meat_atlas_2", frames: [[637,778,113,106],[1897,148,139,114],[0,0,607,325],[1039,0,669,288],[1481,290,501,323],[0,327,358,429],[360,457,420,319],[609,0,428,455],[1039,290,440,435],[1710,187,104,86],[782,457,189,170],[360,327,133,109],[925,974,133,109],[1710,0,185,185],[495,327,104,86],[1897,0,146,146],[0,931,499,83],[1481,615,546,139],[1440,869,519,86],[637,886,519,86],[1158,957,475,79],[0,778,635,151],[782,727,656,157],[1440,756,501,111],[501,974,422,86],[0,1016,417,70],[1060,1038,419,8],[1635,957,369,62],[1635,1021,371,7]]},
		{name:"lets_meat_atlas_3", frames: [[1176,378,849,291],[0,1306,816,374],[0,1685,899,310],[454,628,720,419],[901,1685,795,319],[1290,0,715,376],[497,0,450,566],[1290,671,477,515],[1290,1188,473,479],[818,1049,470,634],[0,628,452,676],[0,0,495,626]]},
		{name:"lets_meat_atlas_4", frames: [[502,1253,1042,340],[939,1595,910,379],[511,421,875,414],[0,1595,937,378],[502,837,875,414],[511,0,878,419],[0,741,500,726],[0,0,509,739],[1388,546,494,665],[1391,0,654,544]]},
		{name:"lets_meat_atlas_5", frames: [[0,0,936,736],[938,0,936,736],[0,738,936,736],[938,738,936,736]]},
		{name:"lets_meat_atlas_6", frames: [[0,0,936,736],[938,0,936,736],[0,738,936,736],[938,738,936,736]]},
		{name:"lets_meat_atlas_7", frames: [[0,0,936,736],[938,0,936,736],[0,738,936,736],[938,738,936,736]]},
		{name:"lets_meat_atlas_8", frames: [[0,841,994,736],[996,841,936,736],[0,0,924,839],[926,0,924,839]]},
		{name:"lets_meat_atlas_9", frames: [[0,0,924,839],[926,0,924,839],[0,841,924,839],[926,841,924,839]]},
		{name:"lets_meat_atlas_10", frames: [[0,0,924,839],[926,0,924,839],[0,841,924,839],[926,841,924,839]]},
		{name:"lets_meat_atlas_11", frames: [[0,0,924,839],[926,0,924,839],[0,841,924,839],[926,841,924,839]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_86 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_326 = function() {
	this.initialize(ss["lets_meat_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_325 = function() {
	this.initialize(ss["lets_meat_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_324 = function() {
	this.initialize(ss["lets_meat_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_323 = function() {
	this.initialize(ss["lets_meat_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_322 = function() {
	this.initialize(ss["lets_meat_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_321 = function() {
	this.initialize(ss["lets_meat_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_320 = function() {
	this.initialize(ss["lets_meat_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_319 = function() {
	this.initialize(ss["lets_meat_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_318 = function() {
	this.initialize(ss["lets_meat_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_317 = function() {
	this.initialize(ss["lets_meat_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_316 = function() {
	this.initialize(ss["lets_meat_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_315 = function() {
	this.initialize(ss["lets_meat_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_314 = function() {
	this.initialize(ss["lets_meat_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_313 = function() {
	this.initialize(ss["lets_meat_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_312 = function() {
	this.initialize(ss["lets_meat_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_311 = function() {
	this.initialize(ss["lets_meat_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_310 = function() {
	this.initialize(ss["lets_meat_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_309 = function() {
	this.initialize(ss["lets_meat_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_308 = function() {
	this.initialize(ss["lets_meat_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_307 = function() {
	this.initialize(ss["lets_meat_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_306 = function() {
	this.initialize(ss["lets_meat_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_305 = function() {
	this.initialize(ss["lets_meat_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_304 = function() {
	this.initialize(ss["lets_meat_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_303 = function() {
	this.initialize(ss["lets_meat_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_302 = function() {
	this.initialize(ss["lets_meat_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_301 = function() {
	this.initialize(ss["lets_meat_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_300 = function() {
	this.initialize(ss["lets_meat_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_299 = function() {
	this.initialize(ss["lets_meat_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_298 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_297 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_296 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_295 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_294 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_293 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_292 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_291 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_290 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_289 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_288 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_287 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_286 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_285 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_284 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["lets_meat_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["lets_meat_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_283 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_282 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_281 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_280 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_279 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["lets_meat_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["lets_meat_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["lets_meat_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Artwork31aiAssetscopy = function() {
	this.initialize(img.Artwork31aiAssetscopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2101,1068);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.sliceNames = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.sliceName = new cjs.Text("אנטריקוט", "normal 700 50px 'Assistant'", "#F0B807");
	this.sliceName.name = "sliceName";
	this.sliceName.textAlign = "center";
	this.sliceName.lineHeight = 67;
	this.sliceName.lineWidth = 318;
	this.sliceName.parent = this;
	this.sliceName.setTransform(0,-44.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.sliceName);
	}

	this.timeline.addTween(cjs.Tween.get(this.sliceName).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliceNames, new cjs.Rectangle(-161,-46.7,322,93.5), null);


(lib.slice18b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AghH1IgIgBIgEgBIhmgUIiDgZIAhhdQAUg3AIgnQAYhtgmhQQgth3gFiqQgCg0AChfQABhnAAguIIzBbQgtCegECpQgFAjAABHQAABkgBAWQgFCVg/AtIgEAEIhVBnIgIAOIgQAhQgGANgHAFIgBAAIgBABIgBAAQgFACgJAAg");
	this.shape.setTransform(0.0125,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("18", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-0.05,-29.15);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AghH1IgIgBIgEgBIhmgUIiDgZIAhhdQAUg3AIgnQAYhtgmhQQgth3gFiqQgCg0AChfQABhnAAguIIzBbQgtCegECpQgFAjAABHQAABkgBAWQgFCVg/AtIgEAEIhVBnIgIAOIgQAhQgGANgHAFIgBAAIgBABIgBAAQgFACgJAAg");
	this.shape_1.setTransform(0.0125,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice18b, new cjs.Rectangle(-28.3,-50.7,56.6,101.5), null);


(lib.slice17b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AJKLSQgNgcgQACQgWAJgQAEQgdAKgdgMQhyg4hKhwQgVgfgUgGQgVgGghATQhwA7iVAlQhWAVi8AeQg0AEgfgBQg6gCgJgZQgCiTAEjLIAJleQAFigg4jdQhGj3gah+IQfgZQgSBFgqCQQgiB+gEBVIAAAPIAAAGIAAAHIAAAHIAAADQAEDCCgBvIAWAPIASANQAIAHAHAIQARASAKATIADAHIAEAKQAMAjgEAuQgOCfALCCQANCZAwCEQANAlgDAoQgDAugXApQgShYgNggg");
	this.shape.setTransform(0.0031,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("17", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-6.6,-31.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AJKLSQgNgcgQACQgWAJgQAEQgdAKgdgMQhyg4hKhwQgVgfgUgGQgVgGghATQhwA7iVAlQhWAVi8AeQg0AEgfgBQg6gCgJgZQgCiTAEjLIAJleQAFigg4jdQhGj3gah+IQfgZQgSBFgqCQQgiB+gEBVIAAAPIAAAGIAAAHIAAAHIAAADQAEDCCgBvIAWAPIASANQAIAHAHAIQARASAKATIADAHIAEAKQAMAjgEAuQgOCfALCCQANCZAwCEQANAlgDAoQgDAugXApQgShYgNggg");
	this.shape_1.setTransform(0.0031,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice17b, new cjs.Rectangle(-64.4,-84.2,128.8,168.5), null);


(lib.slice16b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AjXEBQhVgMhFgRQBGh/B7iGQAug1C1iyQANgLAWAAIBrAlIAUAMIAJAGIBVA4QAeAZAhAbIh4BVIgQAOIgHAFIgHAFIgSAPIgHAFIgHAGIgJAIIjwD1IiagTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("16", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(2.05,-20.3);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AjXEBQhVgMhFgRQBGh/B7iGQAug1C1iyQANgLAWAAIBrAlIAUAMIAJAGIBVA4QAeAZAhAbIh4BVIgQAOIgHAFIgHAFIgSAPIgHAFIgHAGIgJAIIjwD1IiagTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice16b, new cjs.Rectangle(-36.9,-27.6,73.9,55.2), null);


(lib.slice15b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("Ak0ItQglgGgFgHQgGgHAJgjQAdhrAoikIBCkOQBRlFBQjRQATg1AYgLQAUgKA5ANQAtAJBIAKIB3APQg2DxACC5QADDqBcCxQAEAKABAKQABAMgDAIIg9C2QgmBtgSBKIoehVg");
	this.shape.setTransform(0.017,-0.0222);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("15", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(2.35,-7.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("Ak0ItQglgGgFgHQgGgHAJgjQAdhrAoikIBCkOQBRlFBQjRQATg1AYgLQAUgKA5ANQAtAJBIAKIB3APQg2DxACC5QADDqBcCxQAEAKABAKQABAMgDAIIg9C2QgmBtgSBKIoehVg");
	this.shape_1.setTransform(0.017,-0.0222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice15b, new cjs.Rectangle(-35.3,-64.2,70.69999999999999,128.4), null);


(lib.slice14b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AicDjQgrhPADhlIABgFIAAgDIAAgCIAhi0IACgHIADgJIA7jMQACgZB/ABIABAAIBiADQA1ABAOgCIi/MFQhxhIgxhZg");
	this.shape.setTransform(0.0152,-0.0292);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("14", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-1.55,-28.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AicDjQgrhPADhlIABgFIAAgDIAAgCIAhi0IACgHIADgJIA7jMQACgZB/ABIABAAIBiADQA1ABAOgCIi/MFQhxhIgxhZg");
	this.shape_1.setTransform(0.0152,-0.0292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice14b, new cjs.Rectangle(-22.4,-38.8,42.099999999999994,77.6), null);


(lib.slice13b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AnwG0QAEgYAJgMQAMgOAYgFQB3gTB2hmQBEg6B8iEIkzi3QgIgFgHgJQgHgJABgGQAMhKAji7QADgSAMgIQAKgGAVgBQD8ABHygBIg3A6QgeAggWAUQhUBEhgCCIhPBtQguA/gjAqQgvA2ghBkIgcBVQgQAygOAgQgFAOgEAFQgGAGgOABQgvAAiOADIhrACQgvAAgkgCg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("13", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-2.85,-41.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AnwG0QAEgYAJgMQAMgOAYgFQB3gTB2hmQBEg6B8iEIkzi3QgIgFgHgJQgHgJABgGQAMhKAji7QADgSAMgIQAKgGAVgBQD8ABHygBIg3A6QgeAggWAUQhUBEhgCCIhPBtQguA/gjAqQgvA2ghBkIgcBVQgQAygOAgQgFAOgEAFQgGAGgOABQgvAAiOADIhrACQgvAAgkgCg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice13b, new cjs.Rectangle(-49.6,-43.7,99.30000000000001,87.5), null);


(lib.slice12b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AhsDnQgagHAKgSQAGgMAggcQAngiAKgMQAZgagDgSQgngMg/AJQhZAPgMAAQixATixhuIgEgOQCahLDUg1QBQgUEsg+QAqgKAgADQAmAEAhAWQA0AjBOAvICEBOQh6Cji0BHQiBAyiYAAQgyAAg0gFg");
	this.shape.setTransform(0,-0.0114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("12", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(17.55,-21.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AhsDnQgagHAKgSQAGgMAggcQAngiAKgMQAZgagDgSQgngMg/AJQhZAPgMAAQixATixhuIgEgOQCahLDUg1QBQgUEsg+QAqgKAgADQAmAEAhAWQA0AjBOAvICEBOQh6Cji0BHQiBAyiYAAQgyAAg0gFg");
	this.shape_1.setTransform(0,-0.0114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice12b, new cjs.Rectangle(-57.7,-23.6,115.4,47.2), null);


(lib.slice11b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AoTG9QgIgHgDgUIgGg2QgFgpAAhHQABhSgCgfQgMjNgMhdQgWiigxiCQDzgEGYAEQHeAFCqAAIgzEXIjTAiQh6AVhWATQjnAzioBUIgBABIgbANIgGADQgeANgMAHIgJAGIgIAGIAAAmIACACIABABIACABQBqBUCIAbQB8AZCPgYIAHAKIgDACIgzA1QgFAKgCAMQgEASAEANIAoAeIABAAIACABIABAAIADABIABAAIAEABQB0ALCLgNQAAAWgKAIQgJAIgVAAQpWANkEAIIgXABQg4AAgJgJg");
	this.shape.setTransform(0.025,-0.0407);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("11", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-1.45,-43.75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AoTG9QgIgHgDgUIgGg2QgFgpAAhHQABhSgCgfQgMjNgMhdQgWiigxiCQDzgEGYAEQHeAFCqAAIgzEXIjTAiQh6AVhWATQjnAzioBUIgBABIgbANIgGADQgeANgMAHIgJAGIgIAGIAAAmIACACIABABIACABQBqBUCIAbQB8AZCPgYIAHAKIgDACIgzA1QgFAKgCAMQgEASAEANIAoAeIABAAIACABIABAAIADABIABAAIAEABQB0ALCLgNQAAAWgKAIQgJAIgVAAQpWANkEAIIgXABQg4AAgJgJg");
	this.shape_1.setTransform(0.025,-0.0407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice11b, new cjs.Rectangle(-64.9,-45.7,129.9,91.1), null);


(lib.slice10b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AkiGCQgJgCgJgMQgIgKgCgMQgXiKA+ikQAthzBmieQCXjOgQjTICpAAQA8gCAHAHQAFAEACAPIAFAmQA6FbALCLQAFBJAABEIgmFQIgDAIIgCAJIgOBaIgBABIAAAFQgLA8gkAeQgJAHgJASIgQAgQjgjEj8g9g");
	this.shape.setTransform(-0.0344,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("10", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(4.3,-13.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AkiGCQgJgCgJgMQgIgKgCgMQgXiKA+ikQAthzBmieQCXjOgQjTICpAAQA8gCAHAHQAFAEACAPIAFAmQA6FbALCLQAFBJAABEIgmFQIgDAIIgCAJIgOBaIgBABIAAAFQgLA8gkAeQgJAHgJASIgQAgQjgjEj8g9g");
	this.shape_1.setTransform(-0.0344,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice10b, new cjs.Rectangle(-32.5,-64.3,65,128.6), null);


(lib.slice9b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("ALtE0QmbgXhKgFQgDg/AChdQADhnAAgyQABi5geh5QClgHDngBIGMABQAvAAAJAHQAKAHALAsQAMBBAZBcIAqCaQAwC8gDCBQi8gUklgQgAyBj2IEPAPQhDDyBMDqIlkAdg");
	this.shape.setTransform(-0.0163,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("9", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-105.25,-20.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("9", "normal 700 26px 'Assistant'", "#54100E");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 38;
	this.text_1.parent = this;
	this.text_1.setTransform(68.75,-21.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("ALtE0QmbgXhKgFQgDg/AChdQADhnAAgyQABi5geh5QClgHDngBIGMABQAvAAAJAHQAKAHALAsQAMBBAZBcIAqCaQAwC8gDCBQi8gUklgQgAyBj2IEPAPQhDDyBMDqIlkAdg");
	this.shape_1.setTransform(-0.0163,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice9b, new cjs.Rectangle(-126.1,-34.4,249.1,68.8), null);


(lib.slice8b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AEcKFQgVgDgNgJQgOgJgIgUIgziEIg0iEQgCgJAAgaQABgZgFgLQgphOgXgkQgphBg0gZQikhYiHigQhrh/htjIQAtgSBxhJQBog9AzATIBKAaQAtAMAkgIQADgBAGAGQAGAFADAGIADAEIAFAGIACAEIADADICNDMIAWAiIAOAVIBFBcIAFAFIAFADQAJAGAJACIBDgdIAAgBIACgCIAEgDQAggeCIihIAKADQgCC0AECCQAFCnAPCNQAIBEATBfIAhCiQAFAbgIATQgIAVgWAPQhXA7hkAAQgYAAgZgDg");
	this.shape.setTransform(0,0.0003);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("8", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(30.85,3.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AEcKFQgVgDgNgJQgOgJgIgUIgziEIg0iEQgCgJAAgaQABgZgFgLQgphOgXgkQgphBg0gZQikhYiHigQhrh/htjIQAtgSBxhJQBog9AzATIBKAaQAtAMAkgIQADgBAGAGQAGAFADAGIADAEIAFAGIACAEIADADICNDMIAWAiIAOAVIBFBcIAFAFIAFADQAJAGAJACIBDgdIAAgBIACgCIAEgDQAggeCIihIAKADQgCC0AECCQAFCnAPCNQAIBEATBfIAhCiQAFAbgIATQgIAVgWAPQhXA7hkAAQgYAAgZgDg");
	this.shape_1.setTransform(0,0.0003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice8b, new cjs.Rectangle(-55.4,-64.8,110.9,129.7), null);


(lib.slice3b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AqoFCIo/phQgTgUAMgjQANgkAegJQBEgMBygJQCOgKApgFQAZgCAPAJQAQAJALAXQBcC0B4CKQCECWChBdQA1AhAhAqQAhArAVBCQihA9h4ACIgHAAQieAAhchmgAR/F9QhFgNgtgIQiSgTjbhLIiyg+QhogjhNgUIAAoYQB/AHFeAXQErAUCzAGIAALfIh1gXg");
	this.shape.setTransform(-0.023,0.0019);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("3", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-80.8,-24.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("3", "normal 700 26px 'Assistant'", "#54100E");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 38;
	this.text_1.parent = this;
	this.text_1.setTransform(78.7,-24.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AqoFCIo/phQgTgUAMgjQANgkAegJQBEgMBygJQCOgKApgFQAZgCAPAJQAQAJALAXQBcC0B4CKQCECWChBdQA1AhAhAqQAhArAVBCQihA9h4ACIgHAAQieAAhchmgAR/F9QhFgNgtgIQiSgTjbhLIiyg+QhogjhNgUIAAoYQB/AHFeAXQErAUCzAGIAALfIh1gXg");
	this.shape_1.setTransform(-0.023,0.0019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice3b, new cjs.Rectangle(-126.8,-42.4,253.6,84.8), null);


(lib.slice2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AhwHwIh+gIIh/gHQgNjOgdihIgKg0IgEgSIgXhkIgBgEIgBgFIgGguIAAAAIACgJQAEgOANgLIAQgLIAWgNIARgKIARgKIDvieQCXh4C9gbQBEgEASANQATANAPBDIA8EEQAlCeASBnQiogUiVBrQiKBkhBCkQgGARgKAHQgJAFgNAAIgHAAg");
	this.shape.setTransform(-0.025,-0.0172);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("2", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-0.5,-22.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AhwHwIh+gIIh/gHQgNjOgdihIgKg0IgEgSIgXhkIgBgEIgBgFIgGguIAAAAIACgJQAEgOANgLIAQgLIAWgNIARgKIARgKIDvieQCXh4C9gbQBEgEASANQATANAPBDIA8EEQAlCeASBnQiogUiVBrQiKBkhBCkQgGARgKAHQgJAFgNAAIgHAAg");
	this.shape_1.setTransform(-0.025,-0.0172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice2b, new cjs.Rectangle(-45.3,-49.6,90.6,99.2), null);


(lib.slice1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(237,181,11,0.098)").s().p("AiOGsQhRhoh1g8Qhpg2iNgWQgQgCgHgIQgHgGgDgRQgRhPgtjHQgpixgUhmQBXgCB/ADIDTAGQBxgID3gTQDpgTB/gIIBegEQA7gCAigDQAagCAOALQALAKAKAbQA+CxAPD5QAKCQAFElQg3ABlggBQj6gBieAJIgJAAQglAAgYgfg");
	this.shape.setTransform(0,0.0105);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("1", "normal 700 26px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(4.15,-24.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AiOGsQhRhoh1g8Qhpg2iNgWQgQgCgHgIQgHgGgDgRQgRhPgtjHQgpixgUhmQBXgCB/ADIDTAGQBxgID3gTQDpgTB/gIIBegEQA7gCAigDQAagCAOALQALAKAKAbQA+CxAPD5QAKCQAFElQg3ABlggBQj6gBieAJIgJAAQglAAgYgfg");
	this.shape_1.setTransform(0,0.0105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice1b, new cjs.Rectangle(-74.3,-45.9,148.7,91.9), null);


(lib.slice_4_5_6_19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("4", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(12.9,75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("5", "normal 700 26px 'Assistant'", "#767171");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 38;
	this.text_1.parent = this;
	this.text_1.setTransform(54.4,57.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("6", "normal 700 26px 'Assistant'", "#767171");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 38;
	this.text_2.parent = this;
	this.text_2.setTransform(90.8,92);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("19", "normal 700 26px 'Assistant'", "#767171");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 36;
	this.text_3.lineWidth = 38;
	this.text_3.parent = this;
	this.text_3.setTransform(417.7,47.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("A3PJrIiDi2QgMgQgCgMQgCgPALgQIC9j6QBxiJBuhQQARgMAPADQAPAFAEATIAXBmQANA7ACAsQAABFADCOQAAB8gMBVQgOAPhiBzQhDBPgyAtQg3hUhIhmgEgigAEOQgDh+Akh0QAlh4BLhaQBQhgBxgwQAACFgMDFIgVFJQgBAMgGAMQgGANgIAFQgxAdhHAnIh6BDQgohygCh+gA7gGIQgKgFgTgEIgggHQglgKACgeIARk8IASk8QABgcAFgIQAIgQAcAAQCpgFCHAsQCcAzBlByQh8BXh5CTQgrA1g8BRQhDBcgiAtQgYAmgNAEIgHABQgPAAgigMgAfrFdQgyifhFARQg1ANhcCIQhmkyA7llICxkKIARgRIAbgZID6i9QAZB5gIC1IgJCXQgGBbABA8IgbErIgDAZQgWCqgWA/IgCASQgFASgUACIgBAAIgGABQgoAAgTgvg");
	this.shape.setTransform(220.9496,80.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slice_4_5_6_19, new cjs.Rectangle(-8,0,449.9,160.9), null);


(lib.reset = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(-0.5,2.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-8.65,-12.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_24();
	this.instance_2.setTransform(-8.35,-2.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_25();
	this.instance_3.setTransform(-18.4,-22.45,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_26();
	this.instance_4.setTransform(-8.35,-2.85,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_28();
	this.instance_5.setTransform(-0.5,2.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_27();
	this.instance_6.setTransform(-17.85,-19.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-22.4,95.1,92.5);


(lib.preBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_281();
	this.instance.setTransform(-1.45,0,0.3375,0.3375);

	this.instance_1 = new lib.CachedBmp_282();
	this.instance_1.setTransform(-8.8,-1.1,0.3375,0.3375);

	this.instance_2 = new lib.CachedBmp_283();
	this.instance_2.setTransform(-8.8,-1.1,0.3375,0.3375);

	this.instance_3 = new lib.CachedBmp_19();
	this.instance_3.setTransform(-5.75,-1.1,0.3375,0.3375);

	this.instance_4 = new lib.CachedBmp_18();
	this.instance_4.setTransform(-11.8,-9.6,0.3375,0.3375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-9.6,184.3,46.9);


(lib.part3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.textPart3 = new cjs.Text("אחוז שומן נמוך", "normal 700 50px 'Assistant'", "#54100E");
	this.textPart3.name = "textPart3";
	this.textPart3.textAlign = "center";
	this.textPart3.lineHeight = 67;
	this.textPart3.lineWidth = 324;
	this.textPart3.parent = this;
	this.textPart3.setTransform(0,-35.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.textPart3);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.639)").s().p("A5dFFIAAqJMAy7AAAIAAKJg");
	this.shape.setTransform(-2.75,6.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.textPart3,p:{color:"#54100E"}}]}).to({state:[{t:this.shape},{t:this.textPart3,p:{color:"#F0B807"}}]},1).to({state:[{t:this.shape},{t:this.textPart3,p:{color:"#666666"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.8,-37.8,329.9,77);


(lib.part2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.textPart2 = new cjs.Text("אחוז שומן בינוני", "normal 700 50px 'Assistant'", "#54100E");
	this.textPart2.name = "textPart2";
	this.textPart2.textAlign = "center";
	this.textPart2.lineHeight = 67;
	this.textPart2.lineWidth = 324;
	this.textPart2.parent = this;
	this.textPart2.setTransform(0,-32.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.textPart2);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.639)").s().p("A57FhIAArBMAz3AAAIAALBg");
	this.shape.setTransform(-3,6.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.textPart2,p:{color:"#54100E"}}]}).to({state:[{t:this.shape},{t:this.textPart2,p:{color:"#F0B807"}}]},1).to({state:[{t:this.shape},{t:this.textPart2,p:{color:"#666666"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169,-34.9,333.1,76.19999999999999);


(lib.part = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.textPart1 = new cjs.Text("אחוז שומן גבוה", "normal 700 50px 'Assistant'", "#54100E");
	this.textPart1.name = "textPart1";
	this.textPart1.textAlign = "center";
	this.textPart1.lineHeight = 67;
	this.textPart1.lineWidth = 324;
	this.textPart1.parent = this;
	this.textPart1.setTransform(0,-32.95);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.textPart1);
	}

	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(-163.45,-26.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_13();
	this.instance_1.setTransform(-164.05,-35.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.textPart1,p:{color:"#54100E"}}]}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.textPart1,p:{color:"#F0B807"}}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.textPart1,p:{color:"#666666"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-35.7,328.1,84.7);


(lib.out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.098)").s().p("Egr+AaQMAAAg0fMBX9AAAMAAAA0fg");
	this.shape.setTransform(281.475,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.out, new cjs.Rectangle(0,0,563,336), null);


(lib.nextBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.4696,0.4696);

	this.instance_1 = new lib.CachedBmp_3();
	this.instance_1.setTransform(0.9,32.45,0.4696,0.4696);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(-11.35,-2.25,0.4696,0.4696);

	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-10.35,34.4,0.4696,0.4696);

	this.instance_4 = new lib.CachedBmp_279();
	this.instance_4.setTransform(-11.35,-2.25,0.4696,0.4696);

	this.instance_5 = new lib.CachedBmp_280();
	this.instance_5.setTransform(-28.2,-10.95,0.4696,0.4696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.2,-10.9,235.29999999999998,52.1);


(lib.hitlogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#62120E").ss(3,1,1).p("A+W3JMA8tAAAMAAAAuTMg8tAAAg");
	this.shape.setTransform(166.325,139.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54100E").s().p("A+WXKMAAAguTMA8tAAAMAAAAuTg");
	this.shape_1.setTransform(166.325,139.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.4,-9.8,391.5,299.3);


(lib.headline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Let's meat", "normal 700 80px 'Assistant'", "#F0B807");
	this.text.textAlign = "center";
	this.text.lineHeight = 106;
	this.text.lineWidth = 422;
	this.text.parent = this;
	this.text.setTransform(256.5,2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0B807").s().p("AdnAPIAAgdIHgAAIAAAdgEglGAAPIAAgdIHgAAIAAAdg");
	this.shape.setTransform(256.525,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(19.1,0,474.9,108.8), null);


(lib.gCow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("4", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.alpha = 0.49803922;
	this.text.parent = this;
	this.text.setTransform(-111.05,-69.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("5", "normal 700 26px 'Assistant'", "#767171");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 38;
	this.text_1.alpha = 0.49803922;
	this.text_1.parent = this;
	this.text_1.setTransform(-69.55,-86.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("6", "normal 700 26px 'Assistant'", "#767171");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 38;
	this.text_2.alpha = 0.49803922;
	this.text_2.parent = this;
	this.text_2.setTransform(-33.15,-52.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("19", "normal 700 26px 'Assistant'", "#767171");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 36;
	this.text_3.lineWidth = 38;
	this.text_3.alpha = 0.49803922;
	this.text_3.parent = this;
	this.text_3.setTransform(293.65,-97.15);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-343.5,-212.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gCow, new cjs.Rectangle(-343.5,-212.8,687,425.5), null);


(lib.about = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אודות", "normal 700 30px 'Assistant'", "#018287");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 124;
	this.text.parent = this;
	this.text.setTransform(64.15,2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#018287").s().p("AlKAUIAAgnIKVAAIAAAng");
	this.shape.setTransform(64.175,38.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#018287").s().p("AoIEAIAAn/IQRAAIAAH/g");
	this.shape_1.setTransform(62.175,26.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.3,53.1);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhWBdIAAi5ICsAAIAAC5g");
	mask.setTransform(8.65,9.3);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62120E").s().p("AgVgIQhGhGAJgMIAPAKQAkAWAgAcQAkgdAfgTIAPgJQAIALhCBEQAxAyAGAuQgngigognQgoAogoAkQAGgwA0gzg");
	this.shape.setTransform(8.7667,9.425);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.4,0.4,16.8,18.1), null);


(lib.Xbotton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(17.65,17.55,1.0727,1.0727,0,0,0,8.7,9.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#62120E").ss(3,0,0,8).p("AivAAQAAhIAzgzQA0g0BIAAQBJAAA0A0QA0AzAABIQAABJg0AzQg0A0hJAAQhIAAg0g0QgzgzAAhJg");
	this.shape.setTransform(17.6233,17.6452,1.0727,1.0727);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah8B8QgzgzAAhJQAAhIAzgzQA0g0BIAAQBJAAA0A0QA0AzAABIQAABJg0AzQg0A0hJAAQhIAAg0g0g");
	this.shape_1.setTransform(17.6233,17.6452,1.0727,1.0727);

	this.instance_1 = new lib.CachedBmp_86();
	this.instance_1.setTransform(-2.75,-2.65,0.3825,0.3825);

	this.instance_2 = new lib.CachedBmp_85();
	this.instance_2.setTransform(-10.05,-3.95,0.3825,0.3825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.0727,scaleY:1.0727,x:17.6233,y:17.6452}},{t:this.shape,p:{scaleX:1.0727,scaleY:1.0727,x:17.6233,y:17.6452}},{t:this.instance,p:{regX:8.7,scaleX:1.0727,scaleY:1.0727,x:17.65}}]}).to({state:[{t:this.shape_1,p:{scaleX:1.3429,scaleY:1.3429,x:17.6622,y:17.7108}},{t:this.shape,p:{scaleX:1.3429,scaleY:1.3429,x:17.6622,y:17.7108}},{t:this.instance,p:{regX:8.8,scaleX:1.3429,scaleY:1.3429,x:17.75}}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.3429,scaleY:1.3429,x:17.6622,y:17.7108}},{t:this.shape,p:{scaleX:1.3429,scaleY:1.3429,x:17.6622,y:17.7108}},{t:this.instance,p:{regX:8.8,scaleX:1.3429,scaleY:1.3429,x:17.75}}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{regX:8.7,scaleX:1.0727,scaleY:1.0727,x:17.65}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-7.4,53.1,50.199999999999996);


(lib.tabs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton1.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton1.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(0);
		}
	}
	this.frame_2 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton2.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(3);
		}
	}
	this.frame_3 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton2.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(2);
		}
	}
	this.frame_4 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton3.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(5);
		}
	}
	this.frame_5 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton3.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(4);
		}
	}
	this.frame_6 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton8.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(7);
		}
	}
	this.frame_7 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton8.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(6);
		}
	}
	this.frame_8 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton9.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(9);
		}
	}
	this.frame_9 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton9.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(8);
		}
	}
	this.frame_10 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton10.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(11);
		}
	}
	this.frame_11 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton10.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(10);
		}
	}
	this.frame_12 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton11.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(13);
		}
	}
	this.frame_13 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton11.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(12);
		}
	}
	this.frame_14 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton12.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(15);
		}
	}
	this.frame_15 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton12.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(14);
		}
	}
	this.frame_16 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton13.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(17);
		}
	}
	this.frame_17 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton13.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(16);
		}
	}
	this.frame_18 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton14.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(19);
		}
	}
	this.frame_19 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton14.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(18);
		}
	}
	this.frame_20 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton15.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(21);
		}
	}
	this.frame_21 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton15.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(20);
		}
	}
	this.frame_22 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton16.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(23);
		}
	}
	this.frame_23 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton16.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(22);
		}
	}
	this.frame_24 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton17.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(25);
		}
	}
	this.frame_25 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton17.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(24);
		}
	}
	this.frame_26 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.nextbutton18.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(27);
		}
	}
	this.frame_27 = function() {
		var self=this;
		self.stop();
		
		//כפתור למתכון
		self.prebutton18.addEventListener("click", next);
		
		
		function next(){
			self.gotoAndStop(26);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1));

	// buttons
	this.nextbutton1 = new lib.nextBtn();
	this.nextbutton1.name = "nextbutton1";
	this.nextbutton1.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton1, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.fatX = new lib.Xbotton();
	this.fatX.name = "fatX";
	this.fatX.setTransform(-253.35,-258.7,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.fatX, 0, 1, 2, false, new lib.Xbotton(), 3);

	this.prebutton1 = new lib.preBtn();
	this.prebutton1.name = "prebutton1";
	this.prebutton1.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton1, 0, 1, 2, false, new lib.preBtn(), 3);

	this.medX = new lib.Xbotton();
	this.medX.name = "medX";
	this.medX.setTransform(-253.35,-258.7,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.medX, 0, 1, 2, false, new lib.Xbotton(), 3);

	this.nextbutton2 = new lib.nextBtn();
	this.nextbutton2.name = "nextbutton2";
	this.nextbutton2.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton2, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton2 = new lib.preBtn();
	this.prebutton2.name = "prebutton2";
	this.prebutton2.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton2, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton3 = new lib.nextBtn();
	this.nextbutton3.name = "nextbutton3";
	this.nextbutton3.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton3, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton3 = new lib.preBtn();
	this.prebutton3.name = "prebutton3";
	this.prebutton3.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton3, 0, 1, 2, false, new lib.preBtn(), 3);

	this.lowX = new lib.Xbotton();
	this.lowX.name = "lowX";
	this.lowX.setTransform(-253.35,-258.7,1,1,0,0,0,20,20);
	new cjs.ButtonHelper(this.lowX, 0, 1, 2, false, new lib.Xbotton(), 3);

	this.nextbutton8 = new lib.nextBtn();
	this.nextbutton8.name = "nextbutton8";
	this.nextbutton8.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton8, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton8 = new lib.preBtn();
	this.prebutton8.name = "prebutton8";
	this.prebutton8.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton8, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton9 = new lib.nextBtn();
	this.nextbutton9.name = "nextbutton9";
	this.nextbutton9.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton9, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton9 = new lib.preBtn();
	this.prebutton9.name = "prebutton9";
	this.prebutton9.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton9, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton10 = new lib.nextBtn();
	this.nextbutton10.name = "nextbutton10";
	this.nextbutton10.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton10, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton10 = new lib.preBtn();
	this.prebutton10.name = "prebutton10";
	this.prebutton10.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton10, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton11 = new lib.nextBtn();
	this.nextbutton11.name = "nextbutton11";
	this.nextbutton11.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton11, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton11 = new lib.preBtn();
	this.prebutton11.name = "prebutton11";
	this.prebutton11.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton11, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton12 = new lib.nextBtn();
	this.nextbutton12.name = "nextbutton12";
	this.nextbutton12.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton12, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton12 = new lib.preBtn();
	this.prebutton12.name = "prebutton12";
	this.prebutton12.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton12, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton13 = new lib.nextBtn();
	this.nextbutton13.name = "nextbutton13";
	this.nextbutton13.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton13, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton13 = new lib.preBtn();
	this.prebutton13.name = "prebutton13";
	this.prebutton13.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton13, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton14 = new lib.nextBtn();
	this.nextbutton14.name = "nextbutton14";
	this.nextbutton14.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton14, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton14 = new lib.preBtn();
	this.prebutton14.name = "prebutton14";
	this.prebutton14.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton14, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton15 = new lib.nextBtn();
	this.nextbutton15.name = "nextbutton15";
	this.nextbutton15.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton15, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton15 = new lib.preBtn();
	this.prebutton15.name = "prebutton15";
	this.prebutton15.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton15, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton16 = new lib.nextBtn();
	this.nextbutton16.name = "nextbutton16";
	this.nextbutton16.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton16, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton16 = new lib.preBtn();
	this.prebutton16.name = "prebutton16";
	this.prebutton16.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton16, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton17 = new lib.nextBtn();
	this.nextbutton17.name = "nextbutton17";
	this.nextbutton17.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton17, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton17 = new lib.preBtn();
	this.prebutton17.name = "prebutton17";
	this.prebutton17.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton17, 0, 1, 2, false, new lib.preBtn(), 3);

	this.nextbutton18 = new lib.nextBtn();
	this.nextbutton18.name = "nextbutton18";
	this.nextbutton18.setTransform(-181.9,237.9,1,1,0,0,0,87.6,17.9);
	new cjs.ButtonHelper(this.nextbutton18, 0, 1, 2, false, new lib.nextBtn(), 3);

	this.prebutton18 = new lib.preBtn();
	this.prebutton18.name = "prebutton18";
	this.prebutton18.setTransform(-272.55,196.5,1.1859,1.3912,0,0,0,-0.1,-16.9);
	new cjs.ButtonHelper(this.prebutton18, 0, 1, 2, false, new lib.preBtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fatX},{t:this.nextbutton1}]}).to({state:[{t:this.prebutton1},{t:this.fatX}]},1).to({state:[{t:this.nextbutton2},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.prebutton2},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.nextbutton3},{t:this.fatX}]},1).to({state:[{t:this.prebutton3},{t:this.fatX}]},1).to({state:[{t:this.nextbutton8},{t:this.lowX}]},1).to({state:[{t:this.prebutton8},{t:this.lowX}]},1).to({state:[{t:this.nextbutton9},{t:this.fatX}]},1).to({state:[{t:this.prebutton9},{t:this.fatX}]},1).to({state:[{t:this.nextbutton10},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.prebutton10},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.nextbutton11},{t:this.lowX}]},1).to({state:[{t:this.prebutton11},{t:this.lowX}]},1).to({state:[{t:this.nextbutton12},{t:this.lowX}]},1).to({state:[{t:this.prebutton12},{t:this.lowX}]},1).to({state:[{t:this.nextbutton13},{t:this.lowX}]},1).to({state:[{t:this.prebutton13},{t:this.lowX}]},1).to({state:[{t:this.nextbutton14},{t:this.lowX}]},1).to({state:[{t:this.prebutton14},{t:this.lowX}]},1).to({state:[{t:this.nextbutton15},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.prebutton15},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.nextbutton16},{t:this.lowX}]},1).to({state:[{t:this.prebutton16},{t:this.lowX}]},1).to({state:[{t:this.nextbutton17},{t:this.fatX}]},1).to({state:[{t:this.prebutton17},{t:this.fatX}]},1).to({state:[{t:this.nextbutton18},{t:this.medX,p:{regX:20,regY:20,x:-253.35,y:-258.7}}]},1).to({state:[{t:this.prebutton18},{t:this.medX,p:{regX:0,regY:0,x:-273.35,y:-278.7}}]},1).wait(1));

	// text
	this.text = new cjs.Text("כמות שומן גבוהה", "normal 700 20px 'Assistant'", "#621311");
	this.text.textAlign = "right";
	this.text.lineHeight = 28;
	this.text.lineWidth = 142;
	this.text.parent = this;
	this.text.setTransform(-57.35,-180.1);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("עובי בינוני", "normal 700 20px 'Assistant'", "#621311");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 101;
	this.text_1.parent = this;
	this.text_1.setTransform(262.9,-100.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("נוקדת שומן במרכז", "normal 700 20px 'Assistant'", "#621311");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 152;
	this.text_2.parent = this;
	this.text_2.setTransform(-100.45,-14.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("צלייה בינונית\nאו קצרה", "normal 700 22px 'Assistant'", "#621311");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 187;
	this.text_3.parent = this;
	this.text_3.setTransform(161.75,92);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("בישול בחום גבוה\nלמשך שעות", "normal 700 22px 'Assistant'", "#621311");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 31;
	this.text_4.lineWidth = 187;
	this.text_4.parent = this;
	this.text_4.setTransform(-76.1,92);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("מתאים לכל סוגי הסטייקים", "normal 700 25px 'Assistant'", "#621311");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 34;
	this.text_5.lineWidth = 282;
	this.text_5.parent = this;
	this.text_5.setTransform(89.35,176.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_5);
	}

	this.text_6 = new cjs.Text(":המלצת השף", "normal 700 25px 'Assistant'", "#F0B807");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 34;
	this.text_6.lineWidth = 133;
	this.text_6.parent = this;
	this.text_6.setTransform(158.65,176.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_6);
	}

	this.tabName2 = new cjs.Text("ורד הצלע  ריב-איי", "normal 700 26px 'Assistant'", "#54100E");
	this.tabName2.name = "tabName2";
	this.tabName2.textAlign = "center";
	this.tabName2.lineHeight = 36;
	this.tabName2.lineWidth = 597;
	this.tabName2.parent = this;
	this.tabName2.setTransform(11.35,-234.05);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.tabName2);
	}

	this.tabName = new cjs.Text("אַנְטְרֵקוֹט", "normal 700 42px 'Assistant'", "#54100E");
	this.tabName.name = "tabName";
	this.tabName.textAlign = "center";
	this.tabName.lineHeight = 57;
	this.tabName.lineWidth = 597;
	this.tabName.parent = this;
	this.tabName.setTransform(7.35,-284.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.tabName);
	}

	this.instance = new lib.CachedBmp_29();
	this.instance.setTransform(22.15,-137.2,0.4696,0.4696);

	this.instance_1 = new lib.CachedBmp_284();
	this.instance_1.setTransform(23.65,-135.1,0.4696,0.4696);

	this.instance_2 = new lib.CachedBmp_31();
	this.instance_2.setTransform(15.4,-136.35,0.4696,0.4696);

	this.instance_3 = new lib.CachedBmp_32();
	this.instance_3.setTransform(12.75,-136.75,0.4696,0.4696);

	this.instance_4 = new lib.CachedBmp_33();
	this.instance_4.setTransform(11.85,-136.45,0.4696,0.4696);

	this.instance_5 = new lib.CachedBmp_34();
	this.instance_5.setTransform(20.45,-131.85,0.4696,0.4696);

	this.text_7 = new cjs.Text(":המלצת השף", "normal 700 25px 'Assistant'", "#F0B807");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 34;
	this.text_7.lineWidth = 133;
	this.text_7.parent = this;
	this.text_7.setTransform(158.65,176.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_7);
	}

	this.instance_6 = new lib.CachedBmp_35();
	this.instance_6.setTransform(18.8,-133.85,0.4696,0.4696);

	this.instance_7 = new lib.CachedBmp_36();
	this.instance_7.setTransform(25.3,-134.7,0.4696,0.4696);

	this.instance_8 = new lib.CachedBmp_37();
	this.instance_8.setTransform(52.85,-135.45,0.4696,0.4696);

	this.instance_9 = new lib.CachedBmp_38();
	this.instance_9.setTransform(15.15,-137.1,0.4696,0.4696);

	this.instance_10 = new lib.CachedBmp_39();
	this.instance_10.setTransform(9.9,-136.3,0.4696,0.4696);

	this.instance_11 = new lib.CachedBmp_40();
	this.instance_11.setTransform(10.5,-136.1,0.4696,0.4696);

	this.instance_12 = new lib.CachedBmp_41();
	this.instance_12.setTransform(11.8,-137.6,0.4696,0.4696);

	this.instance_13 = new lib.CachedBmp_42();
	this.instance_13.setTransform(15.95,-132.45,0.4696,0.4696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tabName,p:{x:7.35,y:-284.9,text:"אַנְטְרֵקוֹט",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.tabName2,p:{x:11.35,y:-234.05,text:"ורד הצלע  ריב-איי",font:"normal 700 26px 'Assistant'",color:"#54100E",textAlign:"center",lineHeight:35.75,lineWidth:597}},{t:this.text_6,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",textAlign:"center",lineHeight:34.4,lineWidth:133}},{t:this.text_5,p:{x:89.35,y:176.25,text:"מתאים לכל סוגי הסטייקים",font:"normal 700 25px 'Assistant'",lineHeight:34.4,lineWidth:282}},{t:this.text_4,p:{x:-76.1,y:92,text:"בישול בחום גבוה\nלמשך שעות",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_3,p:{x:161.75,y:92,text:"צלייה בינונית\nאו קצרה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_2,p:{x:-100.45,y:-14.9,text:"נוקדת שומן במרכז",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:152}},{t:this.text_1,p:{x:262.9,y:-100.55,text:"עובי בינוני",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:101,textAlign:"right"}},{t:this.text,p:{x:-57.35,y:-180.1,text:"כמות שומן גבוהה",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:142,textAlign:"right"}}]}).to({state:[{t:this.text_4,p:{x:7.35,y:-284.9,text:"אַנְטְרֵקוֹט",font:"normal 700 42px 'Assistant'",color:"#54100E",textAlign:"center",lineHeight:56.55,lineWidth:597}},{t:this.text_3,p:{x:11.35,y:-234.05,text:"ורד הצלע  ריב-איי",font:"normal 700 26px 'Assistant'",color:"#54100E",textAlign:"center",lineHeight:35.75,lineWidth:597}},{t:this.text_2,p:{x:-22.25,y:-145.3,text:"פרוסות אנטריקוט ברוטב יין חרדל ודבש",font:"normal 700 28px 'Assistant'",color:"#62120E",lineHeight:38.35,lineWidth:233}},{t:this.text_1,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:142,textAlign:"right"}},{t:this.text,p:{x:-22.25,y:-10.05,text:"צלייה קצרה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199,textAlign:"right"}},{t:this.instance}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",lineHeight:34.4,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:89.35,y:176.25,text:"לא מקובל לצלות בנתח שלם",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:282}},{t:this.text_6,p:{x:-76.1,y:92,text:"צלייה קצרה\nהקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"בישול ארוך\nטחינה",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:-116.4,y:1.05,text:"חלק שומני ועסיסי",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:152}},{t:this.text_3,p:{x:262.9,y:-100.55,text:"מרקם סיבי",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:-108.95,y:-174.7,text:"חלק רזה",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:87}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"צְלָעוֹת",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"ריפען  אונטר-ריב",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"צלעות ותפוחי \nאדמה בבישול ארוך",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"בישול ארוך",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"צְלָעוֹת",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"ריפען  אונטר-ריב",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_1}]},1).to({state:[{t:this.tabName2,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",textAlign:"center",lineHeight:34.4,lineWidth:133}},{t:this.text_6,p:{x:89.35,y:176.25,text:"השומן שבצד נחשב מעדן",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:282}},{t:this.text_5,p:{x:-76.1,y:92,text:"צלייה קצרה \nסטייקים הקפצה",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:161.75,y:92,text:"צליה ארוכה בישול ארוך עישון וכבישה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_3,p:{x:-164.3,y:2,text:"סיבים עבים ",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:104}},{t:this.text_2,p:{x:297.1,y:-142.8,text:"נתח שומן גדול בקצה",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:163}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"חָזֶה בָּקָר",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"בריסקט  ברוסט",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"חזה בקר בבצלים מקורמלים ושום",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה ארוכה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"חָזֶה בָּקָר",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"בריסקט  ברוסט",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_2}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",lineHeight:34.4,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:89.35,y:176.25,text:"מתאים למרק ולחמין",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:282}},{t:this.text_6,p:{x:-76.1,y:92,text:"בישול קצר צלייה קצרה והקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"צליה ארוכה \nבישול ארוך",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:-148.35,y:-2.65,text:"דל שומן",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:72}},{t:this.text_3,p:{x:260.05,y:-100.55,text:"סיבי וקשה",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:-89.3,y:-180.1,text:"רקמת שומן דקה",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:142}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"אוֹסוֹבּוּקוֹ",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"פולן  זרוע",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"אוסובוקו מושלם",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"בישול ארוך",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"אוֹסוֹבּוּקוֹ",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"פולן  זרוע",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_3}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",lineHeight:34.4,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:89.35,y:176.25,text:"לצלות באש עקיפה וחום נמוך",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:282}},{t:this.text_6,p:{x:-76.1,y:92,text:"צלייה קצרה\nהקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"צליה ארוכה \nבישול ארוך",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:-100.45,y:-26.15,text:"פיס שומן",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:81}},{t:this.text_3,p:{x:214.1,y:-169.1,text:"עצם הצלע",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:-106.15,y:-180.1,text:"סיבי ועדין",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:89}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"אָסָאדוֹ",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"קשתית  שפונדרה  שורט-ריבס",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"אסאדו בסיר",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"בישול ארוך",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"אָסָאדוֹ",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"קשתית  שפונדרה  שורט-ריבס",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_4}]},1).to({state:[{t:this.tabName2,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",textAlign:"center",lineHeight:34.4,lineWidth:133}},{t:this.text_6,p:{x:89.35,y:176.25,text:"מתאים מאוד להכנת המבורגרים",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:337}},{t:this.text_5,p:{x:-76.1,y:92,text:"צלייה קצרה \nהקפצה",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:161.75,y:92,text:"בישול ארוך\nצלייה ארוכה טחינה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_3,p:{x:274.15,y:-100.55,text:"צד שומני ורך",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:-67.5,y:-164.6,text:"צד סיבי וקשה",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:142}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"צַוָּאר",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"אזלה",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"תבשיל צוואר\nוירקות כתומים",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"בישול ארוך ",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.instance_5},{t:this.text_1,p:{x:7.35,y:-284.9,text:"צַוָּאר",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"אזלה",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_7},{t:this.tabName,p:{x:89.35,y:176.25,text:"מתאים לכל סוגי הסטייקים",font:"normal 700 25px 'Assistant'",color:"#621311",lineHeight:34.4,lineWidth:282,textAlign:"right"}},{t:this.tabName2,p:{x:-76.1,y:92,text:"בישול ארוך",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_6,p:{x:161.75,y:92,text:"צלייה בתנור \nקרפצ'יו וסטייקים",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:-127.7,y:-14.9,text:"חלק",font:"normal 700 20px 'Assistant'",lineHeight:27.95,lineWidth:44}},{t:this.text_4,p:{x:236.6,y:-52.65,text:"דל שומן",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:62}},{t:this.text_3,p:{x:-57.35,y:-180.1,text:"גיד קשה מאוד",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:119}},{t:this.text_2,p:{x:183.6,y:-184.85,text:"שכבת שומן דקה ",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:144}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"סִנְּטָה",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"מותן פור-פילה סירלוין",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"סינטה צלוייה\nעם אווז מעושן",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה קצרה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"סִנְּטָה",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"מותן פור-פילה סירלוין",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_6}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",lineHeight:34.4,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:89.35,y:176.25,text:"אחד הנתחים המגוונים ביותר לשימוש",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:361}},{t:this.text_6,p:{x:-76.1,y:92,text:"בישול ארוך \nצלייה ארוכה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"צלייה, סטייקים הקפצה וקרפצ'יו",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:189.3,y:-172.65,text:"נקי משומן",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:84}},{t:this.text_3,p:{x:262.9,y:-114.65,text:"עבה בצד שני",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:-138.15,y:-165.05,text:"דק בצד השני",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:142}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"פִילֶה - מִינְיוֹן",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"מותנית טנדר-לוין פילה",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"פילה – מיניון ברוטב יין אדום יבש",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה קצרה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"פִילֶה - מִינְיוֹן",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"מותנית טנדר-לוין פילה",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_7}]},1).to({state:[{t:this.text_7},{t:this.tabName,p:{x:89.35,y:176.25,text:"נתח חלק המתאים מאוד ליישון",font:"normal 700 25px 'Assistant'",color:"#621311",lineHeight:34.4,lineWidth:315,textAlign:"right"}},{t:this.tabName2,p:{x:-76.1,y:92,text:"בישול ארוך \nייבש את הנתח",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_6,p:{x:161.75,y:92,text:"צלייה, שיפודים סטייקים וקרפצ'יו",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:-122.05,y:-43.1,text:"מעט גידים",font:"normal 700 20px 'Assistant'",lineHeight:27.95,lineWidth:88}},{t:this.text_4,p:{x:252.6,y:-73.35,text:"דל שומן",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:73}},{t:this.text_3,p:{x:-57.35,y:-141.6,text:"סיבים קצרים",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:103}},{t:this.text_2,p:{x:211.75,y:-189.4,text:"צורת מימייה",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:117}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"כְּנַף הָעֹקֶץ",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"שייטל ראמפ-סטייק",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"נתח שייטל צרוב \nעל הפלאנצ'ה",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה קצרה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"כְּנַף הָעֹקֶץ",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"שייטל ראמפ-סטייק",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_8}]},1).to({state:[{t:this.tabName,p:{x:167.65,y:176.25,text:":המלצת השף",font:"normal 700 23px 'Assistant'",color:"#F0B807",lineHeight:31.85,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:101.75,y:176.25,text:"מומלץ לטגן היטב מכל הצדדים כנתח שלם",font:"normal 700 23px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:31.85,lineWidth:370}},{t:this.text_6,p:{x:-76.1,y:92,text:"בישול קצר \nאו הקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"בישול בינוני-ארוך צלייה כנתח אחד",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:195.85,y:-171.9,text:"עגלגל",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:71}},{t:this.text_3,p:{x:300.45,y:-90.25,text:"בעל סיבים קצרים",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:152}},{t:this.text_2,p:{x:17.8,y:-158.5,text:"מעט מאוד שומן חיצוני",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:178}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"אֲוָזִית",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"אגוז אגוזית קאצ'ה קצ'קע",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"אווזית בחרדל\n דבש וטימין",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:166}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה ארוכה בתנור",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"אֲוָזִית",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"אגוז אגוזית קאצ'ה קצ'קע",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_9}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",lineHeight:34.4,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:88.3,y:176.25,text:"בישול ארוך נותן טעמי בשר עמוקים",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:352}},{t:this.text_6,p:{x:-76.1,y:92,text:"צלייה קצרה\nאו הקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"בישול בינוני-ארוך צלייה כנתח אחד",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:-170,y:-26.15,text:"פנים רזה",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:105}},{t:this.text_3,p:{x:298.45,y:-47.25,text:"סיבים בינוניים",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:144}},{t:this.text_2,p:{x:42.15,y:-179.2,text:"שכבת שומן עבה בחלק העליון",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:273}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"יַרְכָּה",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"צ'אך צ'אק סילבר-סייד וייסברטאן",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"וייסברטאן \nבניחוח מרווה",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:180}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה ארוכה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"יַרְכָּה",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"צ'אך צ'אק סילבר-סייד וייסברטאן",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_10}]},1).to({state:[{t:this.tabName2,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",textAlign:"center",lineHeight:34.4,lineWidth:133}},{t:this.text_6,p:{x:89.35,y:176.25,text:"מתאים מאוד לשניצלים בפריסה דקה",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:360}},{t:this.text_5,p:{x:-76.1,y:92,text:"בישול ארוך\nוסטייקים",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:161.75,y:92,text:"צלייה קצרה\nוקרפצ'יו",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_3,p:{x:295.8,y:-88.35,text:"בעל סיבים ארוכים",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:160}},{t:this.text_2,p:{x:-88.35,y:-180.1,text:"אחוזי שומן נמוכים",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:142}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"כַּף",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"טופ-ראמפ  טופ-סייד",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"כף חגיגי על הפלאנצ'ה",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה קצרה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"כַּף",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"טופ-ראמפ  טופ-סייד",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_11}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 25px 'Assistant'",color:"#F0B807",lineHeight:34.4,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:89.35,y:176.25,text:"מומלץ מאוד להכנת סטייקים",font:"normal 700 25px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:34.4,lineWidth:282}},{t:this.text_6,p:{x:-76.1,y:92,text:"צלייה קצרה \nאו הקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"צלייה ארוכה",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:158.8,y:-182.1,text:"אחוז שומן גבוה",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:152}},{t:this.text_3,p:{x:300.45,y:-115.55,text:"דק בצד שני",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:-154.95,y:-154.8,text:"עבה בצד אחד",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:118}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"פְּלָדָה",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"כְּסָלִים  נתח קצבים ",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:-22.25,y:-145.3,text:"נתח קצבים\nברוטב רימונים",font:"normal 700 28px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:38.35,lineWidth:226}},{t:this.text_3,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",textAlign:"right",lineHeight:34.4,lineWidth:142}},{t:this.text_2,p:{x:-22.25,y:-10.05,text:"צלייה ארוכה בתנור",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"פְּלָדָה",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"כְּסָלִים  נתח קצבים ",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}},{t:this.instance_12}]},1).to({state:[{t:this.tabName,p:{x:158.65,y:176.25,text:":המלצת השף",font:"normal 700 23px 'Assistant'",color:"#F0B807",lineHeight:31.85,lineWidth:133,textAlign:"center"}},{t:this.tabName2,p:{x:95.65,y:176.25,text:"לנסר את העצם לאורכה ולהוציא את המח",font:"normal 700 23px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:31.85,lineWidth:365}},{t:this.text_6,p:{x:-76.1,y:92,text:"צלייה קצרה\n או הקפצה",font:"normal 700 22px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:30.55,lineWidth:187}},{t:this.text_5,p:{x:161.75,y:92,text:"בישול ארוך \nצלייה ארוכה",font:"normal 700 22px 'Assistant'",lineHeight:30.55,lineWidth:187}},{t:this.text_4,p:{x:-9.55,y:-180.3,text:"רקמות חיבור",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"right",lineHeight:27.95,lineWidth:107}},{t:this.text_3,p:{x:228.75,y:-75.2,text:"אחוזי שומן נמוכים",font:"normal 700 20px 'Assistant'",color:"#621311",textAlign:"center",lineHeight:27.95,lineWidth:101}},{t:this.text_2,p:{x:181.1,y:-163.15,text:"עצם הפולי",font:"normal 700 20px 'Assistant'",color:"#621311",lineHeight:27.95,lineWidth:83}},{t:this.text_1,p:{x:7.35,y:-284.9,text:"פּוֹלִי",font:"normal 700 42px 'Assistant'",color:"#54100E",lineHeight:56.55,lineWidth:597,textAlign:"center"}},{t:this.text,p:{x:11.35,y:-234.05,text:"שריר אחורי",font:"normal 700 26px 'Assistant'",color:"#54100E",lineHeight:35.75,lineWidth:597,textAlign:"center"}}]},1).to({state:[{t:this.text_4,p:{x:7.35,y:-284.9,text:"פּוֹלִי",font:"normal 700 42px 'Assistant'",color:"#54100E",textAlign:"center",lineHeight:56.55,lineWidth:597}},{t:this.text_3,p:{x:11.35,y:-234.05,text:"שריר אחורי",font:"normal 700 26px 'Assistant'",color:"#54100E",textAlign:"center",lineHeight:35.75,lineWidth:597}},{t:this.instance_13},{t:this.text_2,p:{x:-22.25,y:-145.3,text:"פולי עם בצלצלי\nשאלוט ורוזמרין",font:"normal 700 28px 'Assistant'",color:"#62120E",lineHeight:38.35,lineWidth:226}},{t:this.text_1,p:{x:-22.25,y:-49.1,text:":שיטת עשייה",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:142,textAlign:"right"}},{t:this.text,p:{x:-22.25,y:-10.05,text:"בישול ארוך בסיר",font:"normal 700 25px 'Assistant'",color:"#62120E",lineHeight:34.4,lineWidth:199,textAlign:"right"}}]},1).wait(1));

	// arrows
	this.instance_14 = new lib.CachedBmp_285();
	this.instance_14.setTransform(-180.75,-157.45,0.4696,0.4696);

	this.instance_15 = new lib.CachedBmp_286();
	this.instance_15.setTransform(-179.6,-148.55,0.4696,0.4696);

	this.instance_16 = new lib.CachedBmp_287();
	this.instance_16.setTransform(-221,-118.35,0.4696,0.4696);

	this.instance_17 = new lib.CachedBmp_288();
	this.instance_17.setTransform(-187.75,-150.9,0.4696,0.4696);

	this.instance_18 = new lib.CachedBmp_289();
	this.instance_18.setTransform(-162.1,-159.5,0.4696,0.4696);

	this.instance_19 = new lib.CachedBmp_290();
	this.instance_19.setTransform(-142.2,-155.7,0.4696,0.4696);

	this.instance_20 = new lib.CachedBmp_291();
	this.instance_20.setTransform(-143.6,-161.45,0.4696,0.4696);

	this.instance_21 = new lib.CachedBmp_292();
	this.instance_21.setTransform(-201.5,-144.15,0.4696,0.4696);

	this.instance_22 = new lib.CachedBmp_293();
	this.instance_22.setTransform(-167.15,-164.65,0.4696,0.4696);

	this.instance_23 = new lib.CachedBmp_294();
	this.instance_23.setTransform(-81,-168.95,0.4696,0.4696);

	this.instance_24 = new lib.CachedBmp_295();
	this.instance_24.setTransform(-189,-151.8,0.4696,0.4696);

	this.instance_25 = new lib.CachedBmp_296();
	this.instance_25.setTransform(-163.95,-154.5,0.4696,0.4696);

	this.instance_26 = new lib.CachedBmp_297();
	this.instance_26.setTransform(-226.3,-154.3,0.4696,0.4696);

	this.instance_27 = new lib.CachedBmp_298();
	this.instance_27.setTransform(-67.9,-157.25,0.4696,0.4696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[]},1).to({state:[{t:this.instance_15}]},1).to({state:[]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).to({state:[{t:this.instance_22}]},1).to({state:[]},1).to({state:[{t:this.instance_23}]},1).to({state:[]},1).to({state:[{t:this.instance_24}]},1).to({state:[]},1).to({state:[{t:this.instance_25}]},1).to({state:[]},1).to({state:[{t:this.instance_26}]},1).to({state:[]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).wait(1));

	// graphic
	this.instance_28 = new lib.CachedBmp_299();
	this.instance_28.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_29 = new lib.CachedBmp_300();
	this.instance_29.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_30 = new lib.CachedBmp_301();
	this.instance_30.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_31 = new lib.CachedBmp_302();
	this.instance_31.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_32 = new lib.CachedBmp_303();
	this.instance_32.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_33 = new lib.CachedBmp_304();
	this.instance_33.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_34 = new lib.CachedBmp_305();
	this.instance_34.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_35 = new lib.CachedBmp_306();
	this.instance_35.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_36 = new lib.CachedBmp_307();
	this.instance_36.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_37 = new lib.CachedBmp_308();
	this.instance_37.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_38 = new lib.CachedBmp_309();
	this.instance_38.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_39 = new lib.CachedBmp_310();
	this.instance_39.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_40 = new lib.CachedBmp_311();
	this.instance_40.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_41 = new lib.CachedBmp_312();
	this.instance_41.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_42 = new lib.CachedBmp_313();
	this.instance_42.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_43 = new lib.CachedBmp_314();
	this.instance_43.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_44 = new lib.CachedBmp_315();
	this.instance_44.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_45 = new lib.CachedBmp_316();
	this.instance_45.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_46 = new lib.CachedBmp_317();
	this.instance_46.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_47 = new lib.CachedBmp_318();
	this.instance_47.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_48 = new lib.CachedBmp_319();
	this.instance_48.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_49 = new lib.CachedBmp_320();
	this.instance_49.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_50 = new lib.CachedBmp_321();
	this.instance_50.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_51 = new lib.CachedBmp_322();
	this.instance_51.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_52 = new lib.CachedBmp_323();
	this.instance_52.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_53 = new lib.CachedBmp_324();
	this.instance_53.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.instance_54 = new lib.CachedBmp_325();
	this.instance_54.setTransform(-236.7,-197.25,0.4696,0.4696);

	this.instance_55 = new lib.CachedBmp_326();
	this.instance_55.setTransform(-209.4,-197.25,0.4696,0.4696);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28}]}).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgwDAtrMAAAhbVMBgHAAAMAAABbVg");
	this.shape.setTransform(5,-7.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302.6,-299.5,615.2,584.5);


(lib.slice_18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("18", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-0.05,-29.15);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AghH1IgIgBIgEgBIhmgUIiDgZIAhhdQAUg3AIgnQAYhtgmhQQgth3gFiqQgCg0AChfQABhnAAguIIzBbQgtCegECpQgFAjAABHQAABkgBAWQgFCVg/AtIgEAEIhVBnIgIAOIgQAhQgGANgHAFIgBAAIgBABIgBAAQgFACgJAAg");
	this.shape.setTransform(0.0125,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AghH1IgIgBIgEgBIhmgUIiDgZIAhhdQAUg3AIgnQAYhtgmhQQgth3gFiqQgCg0AChfQABhnAAguIIzBbQgtCegECpQgFAjAABHQAABkgBAWQgFCVg/AtIgEAEIhVBnIgIAOIgQAhQgGANgHAFIgBAAIgBABIgBAAQgFACgJAAg");
	this.shape_1.setTransform(0.0125,0.025);

	this.instance = new lib.slice18b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AghH1IgIgBIgEgBIhmgUIiDgZIAhhdQAUg3AIgnQAYhtgmhQQgth3gFiqQgCg0AChfQABhnAAguIIzBbQgtCegECpQgFAjAABHQAABkgBAWQgFCVg/AtIgEAEIhVBnIgIAOIgQAhQgGANgHAFIgBAAIgBABIgBAAQgFACgJAAg");
	this.shape_2.setTransform(0.0125,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-71.7,102,146);


(lib.slice_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("17", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-6.6,-31.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AJKLSQgNgcgQACQgWAJgQAEQgdAKgdgMQhyg4hKhwQgVgfgUgGQgVgGghATQhwA7iVAlQhWAVi8AeQg0AEgfgBQg6gCgJgZQgCiTAEjLIAJleQAFigg4jdQhGj3gah+IQfgZQgSBFgqCQQgiB+gEBVIAAAPIAAAGIAAAHIAAAHIAAADQAEDCCgBvIAWAPIASANQAIAHAHAIQARASAKATIADAHIAEAKQAMAjgEAuQgOCfALCCQANCZAwCEQANAlgDAoQgDAugXApQgShYgNggg");
	this.shape.setTransform(0.0031,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AJKLSQgNgcgQACQgWAJgQAEQgdAKgdgMQhyg4hKhwQgVgfgUgGQgVgGghATQhwA7iVAlQhWAVi8AeQg0AEgfgBQg6gCgJgZQgCiTAEjLIAJleQAFigg4jdQhGj3gah+IQfgZQgSBFgqCQQgiB+gEBVIAAAPIAAAGIAAAHIAAAHIAAADQAEDCCgBvIAWAPIASANQAIAHAHAIQARASAKATIADAHIAEAKQAMAjgEAuQgOCfALCCQANCZAwCEQANAlgDAoQgDAugXApQgShYgNggg");
	this.shape_1.setTransform(0.0031,0);

	this.instance = new lib.slice17b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);
	this.instance.cache(-66,-86,133,173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AJKLSQgNgcgQACQgWAJgQAEQgdAKgdgMQhyg4hKhwQgVgfgUgGQgVgGghATQhwA7iVAlQhWAVi8AeQg0AEgfgBQg6gCgJgZQgCiTAEjLIAJleQAFigg4jdQhGj3gah+IQfgZQgSBFgqCQQgiB+gEBVIAAAPIAAAGIAAAHIAAAHIAAADQAEDCCgBvIAWAPIASANQAIAHAHAIQARASAKATIADAHIAEAKQAMAjgEAuQgOCfALCCQANCZAwCEQANAlgDAoQgDAugXApQgShYgNggg");
	this.shape_2.setTransform(0.0031,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.4,-105.2,174,214);


(lib.slice_16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("16", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(2.05,-20.3);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AjXEBQhVgMhFgRQBGh/B7iGQAug1C1iyQANgLAWAAIBrAlIAUAMIAJAGIBVA4QAeAZAhAbIh4BVIgQAOIgHAFIgHAFIgSAPIgHAFIgHAGIgJAIIjwD1IiagTg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AjXEBQhVgMhFgRQBGh/B7iGQAug1C1iyQANgLAWAAIBrAlIAUAMIAJAGIBVA4QAeAZAhAbIh4BVIgQAOIgHAFIgHAFIgSAPIgHAFIgHAGIgJAIIjwD1IiagTg");

	this.instance = new lib.slice16b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AjXEBQhVgMhFgRQBGh/B7iGQAug1C1iyQANgLAWAAIBrAlIAUAMIAJAGIBVA4QAeAZAhAbIh4BVIgQAOIgHAFIgHAFIgSAPIgHAFIgHAGIgJAIIjwD1IiagTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-48.6,118,100);


(lib.slice_15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("15", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(2.35,-7.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("Ak0ItQglgGgFgHQgGgHAJgjQAdhrAoikIBCkOQBRlFBQjRQATg1AYgLQAUgKA5ANQAtAJBIAKIB3APQg2DxACC5QADDqBcCxQAEAKABAKQABAMgDAIIg9C2QgmBtgSBKIoehVg");
	this.shape.setTransform(0.017,-0.0222);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("Ak0ItQglgGgFgHQgGgHAJgjQAdhrAoikIBCkOQBRlFBQjRQATg1AYgLQAUgKA5ANQAtAJBIAKIB3APQg2DxACC5QADDqBcCxQAEAKABAKQABAMgDAIIg9C2QgmBtgSBKIoehVg");
	this.shape_1.setTransform(0.017,-0.0222);

	this.instance = new lib.slice15b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("Ak0ItQglgGgFgHQgGgHAJgjQAdhrAoikIBCkOQBRlFBQjRQATg1AYgLQAUgKA5ANQAtAJBIAKIB3APQg2DxACC5QADDqBcCxQAEAKABAKQABAMgDAIIg9C2QgmBtgSBKIoehVg");
	this.shape_2.setTransform(0.017,-0.0222);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.3,-85.2,116,174);


(lib.slice_14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("14", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-1.55,-28.85);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AicDjQgrhPADhlIABgFIAAgDIAAgCIAhi0IACgHIADgJIA7jMQACgZB/ABIABAAIBiADQA1ABAOgCIi/MFQhxhIgxhZg");
	this.shape.setTransform(0.0152,-0.0292);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AicDjQgrhPADhlIABgFIAAgDIAAgCIAhi0IACgHIADgJIA7jMQACgZB/ABIABAAIBiADQA1ABAOgCIi/MFQhxhIgxhZg");
	this.shape_1.setTransform(0.0152,-0.0292);

	this.instance = new lib.slice14b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AicDjQgrhPADhlIABgFIAAgDIAAgCIAhi0IACgHIADgJIA7jMQACgZB/ABIABAAIBiADQA1ABAOgCIi/MFQhxhIgxhZg");
	this.shape_2.setTransform(0.0152,-0.0292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-59.8,87,122);


(lib.slice_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("13", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-2.85,-41.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AnwG0QAEgYAJgMQAMgOAYgFQB3gTB2hmQBEg6B8iEIkzi3QgIgFgHgJQgHgJABgGQAMhKAji7QADgSAMgIQAKgGAVgBQD8ABHygBIg3A6QgeAggWAUQhUBEhgCCIhPBtQguA/gjAqQgvA2ghBkIgcBVQgQAygOAgQgFAOgEAFQgGAGgOABQgvAAiOADIhrACQgvAAgkgCg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AnwG0QAEgYAJgMQAMgOAYgFQB3gTB2hmQBEg6B8iEIkzi3QgIgFgHgJQgHgJABgGQAMhKAji7QADgSAMgIQAKgGAVgBQD8ABHygBIg3A6QgeAggWAUQhUBEhgCCIhPBtQguA/gjAqQgvA2ghBkIgcBVQgQAygOAgQgFAOgEAFQgGAGgOABQgvAAiOADIhrACQgvAAgkgCg");
	this.shape_1.setTransform(0.025,0);

	this.instance = new lib.slice13b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AnwG0QAEgYAJgMQAMgOAYgFQB3gTB2hmQBEg6B8iEIkzi3QgIgFgHgJQgHgJABgGQAMhKAji7QADgSAMgIQAKgGAVgBQD8ABHygBIg3A6QgeAggWAUQhUBEhgCCIhPBtQguA/gjAqQgvA2ghBkIgcBVQgQAygOAgQgFAOgEAFQgGAGgOABQgvAAiOADIhrACQgvAAgkgCg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.6,-64.7,144,132);


(lib.slice_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("12", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(17.55,-21.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AhsDnQgagHAKgSQAGgMAggcQAngiAKgMQAZgagDgSQgngMg/AJQhZAPgMAAQixATixhuIgEgOQCahLDUg1QBQgUEsg+QAqgKAgADQAmAEAhAWQA0AjBOAvICEBOQh6Cji0BHQiBAyiYAAQgyAAg0gFg");
	this.shape.setTransform(0,-0.0114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AhsDnQgagHAKgSQAGgMAggcQAngiAKgMQAZgagDgSQgngMg/AJQhZAPgMAAQixATixhuIgEgOQCahLDUg1QBQgUEsg+QAqgKAgADQAmAEAhAWQA0AjBOAvICEBOQh6Cji0BHQiBAyiYAAQgyAAg0gFg");
	this.shape_1.setTransform(0,-0.0114);

	this.instance = new lib.slice12b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AhsDnQgagHAKgSQAGgMAggcQAngiAKgMQAZgagDgSQgngMg/AJQhZAPgMAAQixATixhuIgEgOQCahLDUg1QBQgUEsg+QAqgKAgADQAmAEAhAWQA0AjBOAvICEBOQh6Cji0BHQiBAyiYAAQgyAAg0gFg");
	this.shape_2.setTransform(0,-0.0114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.7,-44.6,160,92);


(lib.slice_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("11", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-1.45,-43.75);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AoTG9QgIgHgDgUIgGg2QgFgpAAhHQABhSgCgfQgMjNgMhdQgWiigxiCQDzgEGYAEQHeAFCqAAIgzEXIjTAiQh6AVhWATQjnAzioBUIgBABIgbANIgGADQgeANgMAHIgJAGIgIAGIAAAmIACACIABABIACABQBqBUCIAbQB8AZCPgYIAHAKIgDACIgzA1QgFAKgCAMQgEASAEANIAoAeIABAAIACABIABAAIADABIABAAIAEABQB0ALCLgNQAAAWgKAIQgJAIgVAAQpWANkEAIIgXABQg4AAgJgJg");
	this.shape.setTransform(0.025,-0.0407);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AoTG9QgIgHgDgUIgGg2QgFgpAAhHQABhSgCgfQgMjNgMhdQgWiigxiCQDzgEGYAEQHeAFCqAAIgzEXIjTAiQh6AVhWATQjnAzioBUIgBABIgbANIgGADQgeANgMAHIgJAGIgIAGIAAAmIACACIABABIACABQBqBUCIAbQB8AZCPgYIAHAKIgDACIgzA1QgFAKgCAMQgEASAEANIAoAeIABAAIACABIABAAIADABIABAAIAEABQB0ALCLgNQAAAWgKAIQgJAIgVAAQpWANkEAIIgXABQg4AAgJgJg");
	this.shape_1.setTransform(0.025,-0.0407);

	this.instance = new lib.slice11b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AoTG9QgIgHgDgUIgGg2QgFgpAAhHQABhSgCgfQgMjNgMhdQgWiigxiCQDzgEGYAEQHeAFCqAAIgzEXIjTAiQh6AVhWATQjnAzioBUIgBABIgbANIgGADQgeANgMAHIgJAGIgIAGIAAAmIACACIABABIACABQBqBUCIAbQB8AZCPgYIAHAKIgDACIgzA1QgFAKgCAMQgEASAEANIAoAeIABAAIACABIABAAIADABIABAAIAEABQB0ALCLgNQAAAWgKAIQgJAIgVAAQpWANkEAIIgXABQg4AAgJgJg");
	this.shape_2.setTransform(0.025,-0.0407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-66.7,175,136);


(lib.slice_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("10", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(4.3,-13.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AkiGCQgJgCgJgMQgIgKgCgMQgXiKA+ikQAthzBmieQCXjOgQjTICpAAQA8gCAHAHQAFAEACAPIAFAmQA6FbALCLQAFBJAABEIgmFQIgDAIIgCAJIgOBaIgBABIAAAFQgLA8gkAeQgJAHgJASIgQAgQjgjEj8g9g");
	this.shape.setTransform(-0.0344,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AkiGCQgJgCgJgMQgIgKgCgMQgXiKA+ikQAthzBmieQCXjOgQjTICpAAQA8gCAHAHQAFAEACAPIAFAmQA6FbALCLQAFBJAABEIgmFQIgDAIIgCAJIgOBaIgBABIAAAFQgLA8gkAeQgJAHgJASIgQAgQjgjEj8g9g");
	this.shape_1.setTransform(-0.0344,0);

	this.instance = new lib.slice10b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AkiGCQgJgCgJgMQgIgKgCgMQgXiKA+ikQAthzBmieQCXjOgQjTICpAAQA8gCAHAHQAFAEACAPIAFAmQA6FbALCLQAFBJAABEIgmFQIgDAIIgCAJIgOBaIgBABIAAAFQgLA8gkAeQgJAHgJASIgQAgQjgjEj8g9g");
	this.shape_2.setTransform(-0.0344,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-85.3,110,174);


(lib.slice_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("9", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-105.25,-20.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("9", "normal 700 26px 'Assistant'", "#767171");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 38;
	this.text_1.parent = this;
	this.text_1.setTransform(68.75,-21.35);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("ALtE0QmbgXhKgFQgDg/AChdQADhnAAgyQABi5geh5QClgHDngBIGMABQAvAAAJAHQAKAHALAsQAMBBAZBcIAqCaQAwC8gDCBQi8gUklgQgAyBj2IEPAPQhDDyBMDqIlkAdg");
	this.shape.setTransform(-0.0163,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("ALtE0QmbgXhKgFQgDg/AChdQADhnAAgyQABi5geh5QClgHDngBIGMABQAvAAAJAHQAKAHALAsQAMBBAZBcIAqCaQAwC8gDCBQi8gUklgQgAyBj2IEPAPQhDDyBMDqIlkAdg");
	this.shape_1.setTransform(-0.0163,-0.025);

	this.instance = new lib.slice9b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("ALtE0QmbgXhKgFQgDg/AChdQADhnAAgyQABi5geh5QClgHDngBIGMABQAvAAAJAHQAKAHALAsQAMBBAZBcIAqCaQAwC8gDCBQi8gUklgQgAyBj2IEPAPQhDDyBMDqIlkAdg");
	this.shape_2.setTransform(-0.0163,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1,p:{color:"#767171"}},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text_1,p:{color:"#54100E"}},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text_1,p:{color:"#767171"}},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.1,-55.4,295,114);


(lib.slice_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("8", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(30.85,3.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AEcKFQgVgDgNgJQgOgJgIgUIgziEIg0iEQgCgJAAgaQABgZgFgLQgphOgXgkQgphBg0gZQikhYiHigQhrh/htjIQAtgSBxhJQBog9AzATIBKAaQAtAMAkgIQADgBAGAGQAGAFADAGIADAEIAFAGIACAEIADADICNDMIAWAiIAOAVIBFBcIAFAFIAFADQAJAGAJACIBDgdIAAgBIACgCIAEgDQAggeCIihIAKADQgCC0AECCQAFCnAPCNQAIBEATBfIAhCiQAFAbgIATQgIAVgWAPQhXA7hkAAQgYAAgZgDg");
	this.shape.setTransform(0,0.0003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AEcKFQgVgDgNgJQgOgJgIgUIgziEIg0iEQgCgJAAgaQABgZgFgLQgphOgXgkQgphBg0gZQikhYiHigQhrh/htjIQAtgSBxhJQBog9AzATIBKAaQAtAMAkgIQADgBAGAGQAGAFADAGIADAEIAFAGIACAEIADADICNDMIAWAiIAOAVIBFBcIAFAFIAFADQAJAGAJACIBDgdIAAgBIACgCIAEgDQAggeCIihIAKADQgCC0AECCQAFCnAPCNQAIBEATBfIAhCiQAFAbgIATQgIAVgWAPQhXA7hkAAQgYAAgZgDg");
	this.shape_1.setTransform(0,0.0003);

	this.instance = new lib.slice8b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AEcKFQgVgDgNgJQgOgJgIgUIgziEIg0iEQgCgJAAgaQABgZgFgLQgphOgXgkQgphBg0gZQikhYiHigQhrh/htjIQAtgSBxhJQBog9AzATIBKAaQAtAMAkgIQADgBAGAGQAGAFADAGIADAEIAFAGIACAEIADADICNDMIAWAiIAOAVIBFBcIAFAFIAFADQAJAGAJACIBDgdIAAgBIACgCIAEgDQAggeCIihIAKADQgCC0AECCQAFCnAPCNQAIBEATBfIAhCiQAFAbgIATQgIAVgWAPQhXA7hkAAQgYAAgZgDg");
	this.shape_2.setTransform(0,0.0003);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.4,-85.8,156,174);


(lib.slice_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("3", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-80.8,-24.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("3", "normal 700 26px 'Assistant'", "#767171");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 36;
	this.text_1.lineWidth = 38;
	this.text_1.parent = this;
	this.text_1.setTransform(78.7,-24.25);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AqoFCIo/phQgTgUAMgjQANgkAegJQBEgMBygJQCOgKApgFQAZgCAPAJQAQAJALAXQBcC0B4CKQCECWChBdQA1AhAhAqQAhArAVBCQihA9h4ACIgHAAQieAAhchmgAR/F9QhFgNgtgIQiSgTjbhLIiyg+QhogjhNgUIAAoYQB/AHFeAXQErAUCzAGIAALfIh1gXg");
	this.shape.setTransform(-0.023,0.0019);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AqoFCIo/phQgTgUAMgjQANgkAegJQBEgMBygJQCOgKApgFQAZgCAPAJQAQAJALAXQBcC0B4CKQCECWChBdQA1AhAhAqQAhArAVBCQihA9h4ACIgHAAQieAAhchmgAR/F9QhFgNgtgIQiSgTjbhLIiyg+QhogjhNgUIAAoYQB/AHFeAXQErAUCzAGIAALfIh1gXg");
	this.shape_1.setTransform(-0.023,0.0019);

	this.instance = new lib.slice3b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AqoFCIo/phQgTgUAMgjQANgkAegJQBEgMBygJQCOgKApgFQAZgCAPAJQAQAJALAXQBcC0B4CKQCECWChBdQA1AhAhAqQAhArAVBCQihA9h4ACIgHAAQieAAhchmgAR/F9QhFgNgtgIQiSgTjbhLIiyg+QhogjhNgUIAAoYQB/AHFeAXQErAUCzAGIAALfIh1gXg");
	this.shape_2.setTransform(-0.023,0.0019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1,p:{color:"#767171"}},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text_1,p:{color:"#54100E"}},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text_1,p:{color:"#767171"}},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.8,-63.4,298,130);


(lib.slice_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("2", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(-0.5,-22.9);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AhwHwIh+gIIh/gHQgNjOgdihIgKg0IgEgSIgXhkIgBgEIgBgFIgGguIAAAAIACgJQAEgOANgLIAQgLIAWgNIARgKIARgKIDvieQCXh4C9gbQBEgEASANQATANAPBDIA8EEQAlCeASBnQiogUiVBrQiKBkhBCkQgGARgKAHQgJAFgNAAIgHAAg");
	this.shape.setTransform(-0.025,-0.0172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AhwHwIh+gIIh/gHQgNjOgdihIgKg0IgEgSIgXhkIgBgEIgBgFIgGguIAAAAIACgJQAEgOANgLIAQgLIAWgNIARgKIARgKIDvieQCXh4C9gbQBEgEASANQATANAPBDIA8EEQAlCeASBnQiogUiVBrQiKBkhBCkQgGARgKAHQgJAFgNAAIgHAAg");
	this.shape_1.setTransform(-0.025,-0.0172);

	this.instance = new lib.slice2b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AhwHwIh+gIIh/gHQgNjOgdihIgKg0IgEgSIgXhkIgBgEIgBgFIgGguIAAAAIACgJQAEgOANgLIAQgLIAWgNIARgKIARgKIDvieQCXh4C9gbQBEgEASANQATANAPBDIA8EEQAlCeASBnQiogUiVBrQiKBkhBCkQgGARgKAHQgJAFgNAAIgHAAg");
	this.shape_2.setTransform(-0.025,-0.0172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-70.6,136,144);


(lib.slice_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =true;
	}
	this.frame_1 = function() {
		var self = this;
		self.stop();
	}
	this.frame_2 = function() {
		var self = this;
		self.stop();
	}
	this.frame_3 = function() {
		var self = this;
		self.stop();
		self.mouseEnabled =false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Layer_1
	this.text = new cjs.Text("1", "normal 700 26px 'Assistant'", "#767171");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 38;
	this.text.parent = this;
	this.text.setTransform(4.15,-24.2);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("AiOGsQhRhoh1g8Qhpg2iNgWQgQgCgHgIQgHgGgDgRQgRhPgtjHQgpixgUhmQBXgCB/ADIDTAGQBxgID3gTQDpgTB/gIIBegEQA7gCAigDQAagCAOALQALAKAKAbQA+CxAPD5QAKCQAFElQg3ABlggBQj6gBieAJIgJAAQglAAgYgfg");
	this.shape.setTransform(0,0.0105);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDB50B").s().p("AiOGsQhRhoh1g8Qhpg2iNgWQgQgCgHgIQgHgGgDgRQgRhPgtjHQgpixgUhmQBXgCB/ADIDTAGQBxgID3gTQDpgTB/gIIBegEQA7gCAigDQAagCAOALQALAKAKAbQA+CxAPD5QAKCQAFElQg3ABlggBQj6gBieAJIgJAAQglAAgYgfg");
	this.shape_1.setTransform(0,0.0105);

	this.instance = new lib.slice1b();
	this.instance.shadow = new cjs.Shadow("rgba(255,205,55,1)",0,0,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505050").s().p("AiOGsQhRhoh1g8Qhpg2iNgWQgQgCgHgIQgHgGgDgRQgRhPgtjHQgpixgUhmQBXgCB/ADIDTAGQBxgID3gTQDpgTB/gIIBegEQA7gCAigDQAagCAOALQALAKAKAbQA+CxAPD5QAKCQAFElQg3ABlggBQj6gBieAJIgJAAQglAAgYgfg");
	this.shape_2.setTransform(0,0.0105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#767171"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#54100E"}}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#767171"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-66.9,194,136);


(lib.rCow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.notAllowed = new lib.slice_4_5_6_19();
	this.notAllowed.name = "notAllowed";
	this.notAllowed.setTransform(96.9,-65,1,1,0,0,0,221,80.5);

	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-343.5,-212.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.notAllowed}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rCow, new cjs.Rectangle(-343.5,-212.8,687,425.5), null);


(lib.abouttab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.hitLink.addEventListener("click",openLink);
		function openLink(){
			    window.open("https://www.hit.ac.il/");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// code
	this.hitLink = new lib.hitlogo();
	this.hitLink.name = "hitLink";
	this.hitLink.setTransform(571.05,441.1,0.7759,0.7759,0,0,0,163.8,136.1);
	new cjs.ButtonHelper(this.hitLink, 0, 1, 2, false, new lib.hitlogo(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hitLink).wait(1));

	// Layer_1
	this.aboutX = new lib.Xbotton();
	this.aboutX.name = "aboutX";
	this.aboutX.setTransform(54,34.2,1.3071,1.3071,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.aboutX, 0, 1, 2, false, new lib.Xbotton(), 3);

	this.text = new cjs.Text("שי לוי, נטע שורק, ירדן מזרחי, אבישג אוליאל", "normal 700 34px 'Assistant'", "#54100E");
	this.text.textAlign = "center";
	this.text.lineHeight = 46;
	this.text.lineWidth = 1153;
	this.text.parent = this;
	this.text.setTransform(582.45,553.7);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.text_1 = new cjs.Text("פרוייקט ייצוג אינטראקטיבי בקורסים\n ארגון וייצוג ידע ומבוא לתכנות אינטראקציה ואנימציה\nהפקולטה לטכנולוגיות למידה, שנה א' תש\"פ", "normal 700 30px 'Assistant'", "#54100E");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 41;
	this.text_1.lineWidth = 1153;
	this.text_1.parent = this;
	this.text_1.setTransform(582.45,202.65);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("המדריך השלם למפת חלקי הפרה", "normal 700 36px 'Assistant'", "#54100E");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 49;
	this.text_2.lineWidth = 1153;
	this.text_2.parent = this;
	this.text_2.setTransform(582.45,146.4);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("Let’s meat", "normal 700 100px 'Assistant'", "#F0B807");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 132;
	this.text_3.lineWidth = 1153;
	this.text_3.parent = this;
	this.text_3.setTransform(582.45,43.15);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text_3);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhavAvOMAAAhebMC1fAAAMAAABebg");
	this.shape.setTransform(580.8,302.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.aboutX}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.abouttab, new cjs.Rectangle(0,0,1161.6,604.4), null);


(lib.redCow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var selfcow = this;
		selfcow.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.slice16 = new lib.slice_16();
	this.slice16.name = "slice16";
	this.slice16.setTransform(277.55,-139.55);

	this.slice13 = new lib.slice_13();
	this.slice13.name = "slice13";
	this.slice13.setTransform(227.8,-124.1);

	this.slice14 = new lib.slice_14();
	this.slice14.name = "slice14";
	this.slice14.setTransform(196.3,-37.5);

	this.slice12 = new lib.slice_12();
	this.slice12.name = "slice12";
	this.slice12.setTransform(160.55,-111.15);

	this.slice11 = new lib.slice_11();
	this.slice11.name = "slice11";
	this.slice11.setTransform(128.3,-123.35);

	this.slice8 = new lib.slice_8();
	this.slice8.name = "slice8";
	this.slice8.setTransform(-62.15,41.15);

	this.slice18 = new lib.slice_18();
	this.slice18.name = "slice18";
	this.slice18.setTransform(230.5,62.55);

	this.slice15 = new lib.slice_15();
	this.slice15.name = "slice15";
	this.slice15.setTransform(236.7,-47.9);

	this.slice10 = new lib.slice_10();
	this.slice10.name = "slice10";
	this.slice10.setTransform(-191.15,-65.9);

	this.slice2 = new lib.slice_2();
	this.slice2.name = "slice2";
	this.slice2.setTransform(-116.8,-116.1);

	this.slice9 = new lib.slice_9();
	this.slice9.name = "slice9";
	this.slice9.setTransform(-37.35,-38.55);

	this.slice3 = new lib.slice_3();
	this.slice3.name = "slice3";
	this.slice3.setTransform(-41.4,32.95);

	this.slice17 = new lib.slice_17();
	this.slice17.name = "slice17";
	this.slice17.setTransform(140.8,8.35);

	this.slice1 = new lib.slice_1();
	this.slice1.name = "slice1";
	this.slice1.setTransform(-5.1,-122.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slice1},{t:this.slice17},{t:this.slice3},{t:this.slice9},{t:this.slice2},{t:this.slice10},{t:this.slice15},{t:this.slice18},{t:this.slice8},{t:this.slice11},{t:this.slice12},{t:this.slice14},{t:this.slice13},{t:this.slice16}]}).wait(1));

	// Layer_3
	this.grayCow = new lib.gCow();
	this.grayCow.name = "grayCow";

	this.timeline.addTween(cjs.Tween.get(this.grayCow).wait(1));

	// MergedLayer_1
	this.redCow = new lib.rCow();
	this.redCow.name = "redCow";

	this.timeline.addTween(cjs.Tween.get(this.redCow).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redCow, new cjs.Rectangle(-343.5,-212.8,687,425.5), null);


// stage content:
(lib.lets_meat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		stage.enableMouseOver(100); //הכרחי, אחרת לא ניתן לבדוק מעבר עכבר
		resetCow(); // כיבוי של כל הנתחים
		
		
		
		//------------------------------------//
		//------------- אירועים --------------//
		//------------------------------------//
		
		//  אירועים לנתחים עם אחוז שומן גבוה
		self.fats.addEventListener("mouseover", overFats);
		self.fats.addEventListener("mouseout", outFats);
		self.fats.addEventListener("click", clickFats);
		
		
		//  אירועים לנתחים עם אחוז שומן בינוני
		self.medium.addEventListener("mouseover", overMedium);
		self.medium.addEventListener("mouseout", outMedium);
		self.medium.addEventListener("click", clickMedium);
		
		//  אירועים לנתחים עם אחוז שומן נמוך
		self.thin.addEventListener("mouseover", overThin);
		self.thin.addEventListener("mouseout", outThin);
		self.thin.addEventListener("click", clickThin);
		
		
		
		//-------------------------------------//
		//---------- משתנים גלובליים ----------//
		//-------------------------------------//
		
		// משתנה גלובלי לבדיקה באם בוצע קיבוע
		var clickBtnHigh = false;
		var clickBtnMedium = false;
		var clickBtnThin = false;
		var partClicked = false; //דגל- האם יש חלק לחוץ
		
		
		
		//------------------------------------//
		//-------- פונקציות גלובליות ---------//
		//------------------------------------//
		
		//פונקציה לצביעת הנתחים באדום
		function red() {
			// הסתרה של נתחים עם אחוז שומן גבוה
			self.cow.slice1.gotoAndStop(0);
			self.cow.slice1.alpha = 1;
			self.cow.slice3.gotoAndStop(0);
			self.cow.slice3.alpha = 1;
			self.cow.slice9.gotoAndStop(0);
			self.cow.slice9.alpha = 1;
			self.cow.slice17.gotoAndStop(0);
			self.cow.slice17.alpha = 1;
		
		
			// הסתרה של נתחים עם אחוז שומן בינוני
			self.cow.slice2.gotoAndStop(0);
			self.cow.slice2.alpha = 1;
			self.cow.slice10.gotoAndStop(0);
			self.cow.slice10.alpha = 1;
			self.cow.slice15.gotoAndStop(0);
			self.cow.slice15.alpha = 1;
			self.cow.slice18.gotoAndStop(0);
			self.cow.slice18.alpha = 1;
		
			// הסתרה של נתחים עם אחוז שומן נמוך
			self.cow.slice8.gotoAndStop(0);
			self.cow.slice8.alpha = 1;
			self.cow.slice11.gotoAndStop(0);
			self.cow.slice11.alpha = 1;
			self.cow.slice12.gotoAndStop(0);
			self.cow.slice12.alpha = 1;
			self.cow.slice13.gotoAndStop(0);
			self.cow.slice13.alpha = 1;
			self.cow.slice14.gotoAndStop(0);
			self.cow.slice14.alpha = 1;
			self.cow.slice16.gotoAndStop(0);
			self.cow.slice16.alpha = 1;
		}
		
		//פונקציה להחזרת מעברי עכבר
		function hover() {
			//אחוז שומן גבוה
			self.cow.slice1.mouseEnabled = true;
			self.cow.slice3.mouseEnabled = true;
			self.cow.slice9.mouseEnabled = true;
			self.cow.slice17.mouseEnabled = true;
		
			//אחוז שומן בינוני
			self.cow.slice2.mouseEnabled = true;
			self.cow.slice10.mouseEnabled = true;
			self.cow.slice15.mouseEnabled = true;
			self.cow.slice18.mouseEnabled = true;
		
			//אחוז שומן נמוך
			self.cow.slice8.mouseEnabled = true;
			self.cow.slice11.mouseEnabled = true;
			self.cow.slice12.mouseEnabled = true;
			self.cow.slice13.mouseEnabled = true;
			self.cow.slice14.mouseEnabled = true;
			self.cow.slice16.mouseEnabled = true;
		
			//נתחים לא קיימים
			self.cow.redCow.notAllowed.mouseEnabled = true;
		}
		
		//פונקציה לביטול מעברי עכבר
		function unhover() {
			//אחוז שומן גבוה
			self.cow.slice1.mouseEnabled = false;
			self.cow.slice3.mouseEnabled = false;
			self.cow.slice9.mouseEnabled = false;
			self.cow.slice17.mouseEnabled = false;
		
			//אחוז שומן בינוני
			self.cow.slice2.mouseEnabled = false;
			self.cow.slice10.mouseEnabled = false;
			self.cow.slice15.mouseEnabled = false;
			self.cow.slice18.mouseEnabled = false;
		
			//אחוז שומן נמוך
			self.cow.slice8.mouseEnabled = false;
			self.cow.slice11.mouseEnabled = false;
			self.cow.slice12.mouseEnabled = false;
			self.cow.slice13.mouseEnabled = false;
			self.cow.slice14.mouseEnabled = false;
			self.cow.slice16.mouseEnabled = false;
		
			//נתחים לא קיימים
			self.cow.redCow.notAllowed.mouseEnabled = false;
		}
		
		
		// פונקציה לאיפוס כל הפרמטרים והצגת הפרה ללא הדגשת נתחים
		function resetCow() {
		
			//הוראות
			self.rightside.text = "העבר את העכבר על אחוז השומן הרצוי כדי לגלות אילו נתחים מתאימים";
			self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
			// הכפתורים חוזרים לצבע אדום - לא מסומנים
			self.fats.gotoAndStop(0);
			self.fats.textPart1.alpha = 1;
			self.medium.gotoAndStop(0);
			self.medium.textPart2.alpha = 1;
			self.thin.gotoAndStop(0);
			self.thin.textPart3.alpha = 1;
		
		
			// איפוס כל הדגלים לקיבוע של הכפתורים
			clickBtnHigh = false;
			clickBtnMedium = false;
			clickBtnThin = false;
		
			self.aboutT.visible = false; // הסתרת אודות
			self.cow.grayCow.visible = false; // הסתרת הפרה האפורה - הנתחים שלא מסומנים
			self.sName.sliceName.text = ""; //הסתרת השם
			self.tab1.visible = false; //הסתרה של הכרטיסיות
			self.reBtn.visible = false; //הסתרת כפתור איפוס
			self.cow.redCow.visible = true; // איפוס לפרה אדומה
		
			//ביטול דגל של חלק לחוץ
			partClicked = false;
			//צביעת נתחים
			red();
			//מעברי עכבר
			hover();
		
		
		}
		
		
		//------------------------------------//
		//---------- נתחים שלא פותחו ---------//
		//------------------------------------//
		
		
		// ריחוף על נתחים שלא פותחו 
		self.cow.redCow.notAllowed.addEventListener("mouseover", overNotAllowed);
		// יציאה מריחוף על נתחים שלא פותחו
		self.cow.redCow.notAllowed.addEventListener("mouseout", outNotAllowed);
		
		// סימן עכבר לא זמין ללחיצה
		function overNotAllowed() {
			stage.cursor = "not-allowed";
		}
		
		//סימן עכבר חוזר למצבו הקודם
		function outNotAllowed() {
			stage.cursor = "auto";
		}
		
		
		//------------------------------------//
		//----------- אחוז שומן גבוה ---------//
		//------------------------------------//
		
		// ריחוף על נתחים עם אחוז שומן גבוה
		function overFats() {
			stage.cursor = "pointer";
			if (clickBtnHigh == true || clickBtnMedium == true || clickBtnThin == true) {
				return;
			} else {
				self.rightside.text = "לחץ על אחוז שומן גבוה כדי לקבע את המסך"; //הוראות
				lightfat(); //הארת הכפתור והנתחים
			}
		}
		
		// יציאה מריחוף על נתחים עם אחוז שומן גבוה
		function outFats() {
			stage.cursor = "auto";
			if (clickBtnMedium == false && clickBtnThin == false) {
				if (clickBtnHigh == false) {
					resetCow();
				}
			} else
				return;
		}
		
		
		
		// קיבוע - קליק על נתחים עם אחוז שומן גבוה
		function clickFats() {
			if (clickBtnHigh == true) {
				resetCow();
		
			} else {
				fixing();
				clickBtnHigh = true;
				lightfat(); //הארת הכפתור והנתחים
				//הסרת מעבר עכבר משאר הנתחים
				graymedium();
				graythin();
		
		
			}
		}
		
		
		
		//------------------------------------//
		//---------- אחוז שומן בינוני --------//
		//------------------------------------//
		
		// ריחוף על נתחים עם אחוז שומן בינוני
		function overMedium() {
			stage.cursor = "pointer";
			if (clickBtnHigh == true || clickBtnMedium == true || clickBtnThin == true) {
				return;
			} else {
				self.rightside.text = "לחץ על אחוז שומן בינוני כדי לקבע את המסך"; //הוראות
				lightmedium(); //הארת הכפתור והנתחים
		
			}
		}
		
		// יציאה מריחוף על נתחים עם אחוז שומן בינוני
		function outMedium() {
			stage.cursor = "auto";
			if (clickBtnHigh == false && clickBtnThin == false) {
				if (clickBtnMedium == false) {
					resetCow();
				}
			} else
				return;
		}
		
		
		
		// קליק על אחוז שומן בינוני - קיבוע
		function clickMedium() {
			if (clickBtnMedium == true) {
				resetCow();
				return;
			} else {
				fixing();
				clickBtnMedium = true;
				lightmedium(); //הארת הכפתור והנתחים
				//הסרת מעבר עכבר משאר הנתחים
				grayfat();
				graythin();
			}
		
		}
		
		
		
		
		//------------------------------------//
		//----------- אחוז שומן נמוך ---------//
		//------------------------------------//
		
		// ריחוף על נתחים עם אחוז שומן נמוך
		function overThin() {
			stage.cursor = "pointer";
			if (clickBtnHigh == true || clickBtnMedium == true || clickBtnThin == true) {
				return;
			} else {
				resetCow();
				self.rightside.text = "לחץ על אחוז שומן נמוך כדי לקבע את המסך";
				lightthin(); //הארת הכפתור והנתחים
		
		
			}
		}
		
		// יציאה מריחוף על נתחים עם אחוז שומן נמוך 
		function outThin() {
			stage.cursor = "auto";
			if (clickBtnMedium == false && clickBtnHigh == false) {
				if (clickBtnThin == false) {
					resetCow();
				}
			} else
				return;
		}
		
		
		
		// קיבוע - קליק על נתחים עם אחוז שומן נמוך
		function clickThin() {
			if (clickBtnThin == true) {
				resetCow();
		
			} else {
				fixing();
				clickBtnThin = true;
				lightthin(); //הארת הכפתור והנתחים
				//הסרת מעבר עכבר לשאר הנתחים
				grayfat();
				graymedium();
			}
		}
		
		//קיבוע אחוזי שומן
		function fixing() {
			resetCow();
			self.rightside.text = "";
			self.leftside.text = "לחץ על אחד הנתחים מודגשים למידע נוסף";
			self.cow.grayCow.visible = true; // הצגת הנתחים שלא מסומנים בצבע אפור
			self.reBtn.visible = true //החזרת כפתור איפוס
			self.cow.redCow.visible = false; // הסתרת הפרה האדומה
		}
		
		
		//------------------------------------//
		//----הסרת מעבר עכבר וצביעה באפור-----//
		//------------------------------------//
		
		// הסרת מעבר עכבר לנתחים בשומן גבוה וצביעה באפור
		function grayfat() {
			self.fats.gotoAndStop(2);
			self.fats.textPart1.alpha = 0.5;
			self.cow.slice1.gotoAndStop(3);
			self.cow.slice1.alpha = 0.5;
			self.cow.slice3.gotoAndStop(3);
			self.cow.slice3.alpha = 0.5;
			self.cow.slice9.gotoAndStop(3);
			self.cow.slice9.alpha = 0.5;
			self.cow.slice17.gotoAndStop(3);
			self.cow.slice17.alpha = 0.5;
		
		}
		
		//הסרת מעבר עכבר לנתחים בשומן בינוני וצביעה באפור
		function graymedium() {
			self.medium.gotoAndStop(2);
			self.medium.textPart2.alpha = 0.5;
			self.cow.slice2.gotoAndStop(3);
			self.cow.slice2.alpha = 0.5;
			self.cow.slice10.gotoAndStop(3);
			self.cow.slice10.alpha = 0.5;
			self.cow.slice15.gotoAndStop(3);
			self.cow.slice15.alpha = 0.5;
			self.cow.slice18.gotoAndStop(3);
			self.cow.slice18.alpha = 0.5;
		
		}
		
		//הסרת מעבר עכבר לנתחים בשומן נמוך וצביעה באפור
		function graythin() {
			self.thin.gotoAndStop(2);
			self.thin.textPart3.alpha = 0.5;
			self.cow.slice8.gotoAndStop(3);
			self.cow.slice8.alpha = 0.5;
			self.cow.slice11.gotoAndStop(3);
			self.cow.slice11.alpha = 0.5;
			self.cow.slice12.gotoAndStop(3);
			self.cow.slice12.alpha = 0.5;
			self.cow.slice13.gotoAndStop(3);
			self.cow.slice13.alpha = 0.5;
			self.cow.slice14.gotoAndStop(3);
			self.cow.slice14.alpha = 0.5;
			self.cow.slice16.gotoAndStop(3);
			self.cow.slice16.alpha = 0.5;
		
		}
		
		//------------------------------------//
		//---------הארת הנתחים והכפתור--------//
		//------------------------------------//
		
		// הארת נתחים באחוז שומן גבוה
		function lightfat() {
			self.cow.slice1.gotoAndStop(1);
			self.cow.slice3.gotoAndStop(1);
			self.cow.slice9.gotoAndStop(1);
			self.cow.slice17.gotoAndStop(1);
			self.fats.gotoAndStop(1);
		
		}
		
		//הארת נתחים באחוז שומן בינוני
		function lightmedium() {
			self.cow.slice2.gotoAndStop(1);
			self.cow.slice10.gotoAndStop(1);
			self.cow.slice15.gotoAndStop(1);
			self.cow.slice18.gotoAndStop(1);
			self.medium.gotoAndStop(1);
		
		}
		
		//הארת נתחים באחוז שומן נמוך
		function lightthin() {
			self.cow.slice8.gotoAndStop(1);
			self.cow.slice11.gotoAndStop(1);
			self.cow.slice12.gotoAndStop(1);
			self.cow.slice13.gotoAndStop(1);
			self.cow.slice14.gotoAndStop(1);
			self.cow.slice16.gotoAndStop(1);
			self.thin.gotoAndStop(1);
		
		}
		
		
		//------------------------------------//
		//----------- לחיצה על נתחים ---------//
		//------------------------------------//
		
		
		
		//חלק כלשהו נלחץ
		function clickedPart() {
			self.cow.grayCow.visible = false; //הסתרת אפורים
			self.cow.redCow.visible = true; // איפוס לפרה אדומה
			self.tab1.visible = true; //פתיחת כרטיסיה
			partClicked = true; //דגל- נלחץ חלק
			letscook(); //התאמת הוראות
			red(); //צביעת כל הנתחים באדום
			unhover(); //ביטול מעברי עכבר לנתחים
			self.reBtn.visible = true //החזרת כפתור איפוס
		
		}
		//----------------------------------//
		//-----תיקון טעויות במעבר עכבר------//
		//----------------------------------//
		
		// במעבר עכבר על נתח
		function overSlice() {
			stage.cursor = "pointer"; //שינוי סמן עכבר
			self.leftside.text = "לחץ על הנתח למידע נוסף"; //הוראות
			if (clickBtnHigh == true) { //במקרה של קיבוע אחוז שומן גבוה
				lightfat(); //איפוס הנתחים למצב קיבוע
				self.medium.gotoAndStop(2);
				self.thin.gotoAndStop(2);
			} else if (clickBtnMedium == true) { //במקרה של קיבוע אחוז שומן בינוני
				lightmedium(); //איפוס הנתחים למצב קיבוע
				self.fats.gotoAndStop(2);
				self.thin.gotoAndStop(2);
			} else if (clickBtnThin == true) { //במקרה של קיבוע אחוז שומן נמוך
				lightthin(); //איפוס הנתחים למצב קיבוע
				self.fats.gotoAndStop(2);
				self.medium.gotoAndStop(2);
			} else { //במקרה שאין קיבוע
				red(); //איפוס הנתחים לאדום
				self.fats.gotoAndStop(0);
				self.medium.gotoAndStop(0);
				self.thin.gotoAndStop(0);
		
			}
		}
		
		//----------- נתחים שמנים ------------//
		
		//  אירועים לנתח מספר 1
		self.cow.slice1.addEventListener("mouseover", overSlice1);
		self.cow.slice1.addEventListener("mouseout", outSlice1);
		self.cow.slice1.addEventListener("click", clickSlice1);
		
		function overSlice1() {
			overSlice();
			self.cow.slice1.gotoAndStop(2); // הנתח זוהר
			self.sName.sliceName.text = "אנטריקוט";
			self.fats.gotoAndStop(1);
		
		}
		
		function outSlice1() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				self.sName.sliceName.text = "";
				if (clickBtnHigh == true) {
					self.cow.slice1.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים המודגשים למידע נוסף";
				} else {
					self.cow.slice1.gotoAndStop(0); // הנתח לא זוהר
					self.fats.gotoAndStop(0);
				}
		
			}
		
		}
		
		function clickSlice1() {
			clickedPart(); //פונקצית לחיצה על נתח
			//מעבר לכרטיסיה הנכונה
			self.tab1.gotoAndStop(0);
			//הדלקת הנתח 
			self.cow.slice1.gotoAndStop(2);
		
		
		}
		
		
		
		//  אירועים לנתח מספר 9
		self.cow.slice9.addEventListener("mouseover", overSlice9);
		self.cow.slice9.addEventListener("mouseout", outSlice9);
		self.cow.slice9.addEventListener("click", clickSlice9);
		
		
		function overSlice9() {
			overSlice();
			self.sName.sliceName.text = "אסאדו";
			self.cow.slice9.gotoAndStop(2); // הנתח זוהר
			self.fats.gotoAndStop(1);
		
		
		}
		
		
		function outSlice9() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				self.sName.sliceName.text = "";
				if (clickBtnHigh == true) {
					self.cow.slice9.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice9.gotoAndStop(0); // הנתח לא זוהר
					self.fats.gotoAndStop(0);
				}
			}
		
		}
		
		function clickSlice9() {
			clickedPart(); //פונקצית לחיצה על נתח
			self.tab1.gotoAndStop(8);
			//הדלקת הנתח 
			self.cow.slice9.gotoAndStop(2);
		}
		
		
		//  אירועים לנתח מספר 3
		self.cow.slice3.addEventListener("mouseover", overSlice3);
		self.cow.slice3.addEventListener("mouseout", outSlice3);
		self.cow.slice3.addEventListener("click", clickSlice3);
		
		
		
		function overSlice3() {
			overSlice();
			self.sName.sliceName.text = "חזה בקר";
			self.cow.slice3.gotoAndStop(2); // הנתח הנבחר זוהר
			self.fats.gotoAndStop(1);
		
		
		}
		
		function outSlice3() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				self.sName.sliceName.text = "";
				if (clickBtnHigh == true) {
					self.cow.slice3.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice3.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.fats.gotoAndStop(0);
				}
			}
		
		}
		
		function clickSlice3() {
			clickedPart(); //פונקצית לחיצה על נתח
			self.tab1.gotoAndStop(4);
			//הדלקת הנתח 
			self.cow.slice3.gotoAndStop(2);
		}
		
		
		//  אירועים לנתח מספר 17
		self.cow.slice17.addEventListener("mouseover", overSlice17);
		self.cow.slice17.addEventListener("mouseout", outSlice17);
		self.cow.slice17.addEventListener("click", clickSlice17);
		
		
		
		function overSlice17() {
			overSlice();
			self.sName.sliceName.text = "פלדה";
			self.cow.slice17.gotoAndStop(2); // הנתח הנבחר זוהר
			self.fats.gotoAndStop(1);
		
		}
		
		function outSlice17() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnHigh == true) {
					self.cow.slice17.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice17.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.fats.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
		
			}
		}
		
		function clickSlice17() {
			clickedPart(); //פונקצית לחיצה על נתח
			self.tab1.gotoAndStop(24);
			//הדלקת הנתח 
			self.cow.slice17.gotoAndStop(2);
		}
		
		
		
		
		//----------- נתחים בינוניים ------------//
		
		
		//  אירועים לנתח מספר 2
		self.cow.slice2.addEventListener("mouseover", overSlice2);
		self.cow.slice2.addEventListener("mouseout", outSlice2);
		self.cow.slice2.addEventListener("click", clickSlice2);
		
		
		
		function overSlice2() {
			overSlice();
			self.sName.sliceName.text = "צלעות";
			self.cow.slice2.gotoAndStop(2); // הנתח הנבחר זוהר
			self.medium.gotoAndStop(1);
		
		}
		
		function outSlice2() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnMedium == true) {
					self.cow.slice2.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice2.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.medium.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice2() {
			self.tab1.gotoAndStop(2);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice2.gotoAndStop(2); //הארת הנתח
		}
		
		
		//  אירועים לנתח מספר 10
		self.cow.slice10.addEventListener("mouseover", overSlice10);
		self.cow.slice10.addEventListener("mouseout", outSlice10);
		self.cow.slice10.addEventListener("click", clickSlice10);
		
		
		
		function overSlice10() {
			overSlice();
			self.sName.sliceName.text = "צוואר";
			self.cow.slice10.gotoAndStop(2); // הנתח הנבחר זוהר
			self.medium.gotoAndStop(1);
		
		}
		
		function outSlice10() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnMedium == true) {
					self.cow.slice10.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice10.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.medium.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice10() {
			self.tab1.gotoAndStop(10);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice10.gotoAndStop(2); //הארת הנתח
		}
		
		
		//  אירועים לנתח מספר 15
		self.cow.slice15.addEventListener("mouseover", overSlice15);
		self.cow.slice15.addEventListener("mouseout", outSlice15);
		self.cow.slice15.addEventListener("click", clickSlice15);
		
		
		
		function overSlice15() {
			overSlice();
			self.sName.sliceName.text = "ירכה";
			self.cow.slice15.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.medium.gotoAndStop(1);
		
		}
		
		function outSlice15() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnMedium == true) {
					self.cow.slice15.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice15.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.medium.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice15() {
			self.tab1.gotoAndStop(20);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice15.gotoAndStop(2); //הארת הנתח
		
		}
		
		
		//  אירועים לנתח מספר 18
		self.cow.slice18.addEventListener("mouseover", overSlice18);
		self.cow.slice18.addEventListener("mouseout", outSlice18);
		self.cow.slice18.addEventListener("click", clickSlice18);
		
		
		
		function overSlice18() {
			overSlice();
			self.sName.sliceName.text = "פולי";
			self.cow.slice18.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.medium.gotoAndStop(1);
		}
		
		function outSlice18() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnMedium == true) {
					self.cow.slice18.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice18.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.medium.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		function clickSlice18() {
			self.tab1.gotoAndStop(26);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice18.gotoAndStop(2); //הארת הנתח
		}
		
		
		
		
		
		//----------- נתחים רזים ------------//
		
		
		//  אירועים לנתח מספר 8
		self.cow.slice8.addEventListener("mouseover", overSlice8);
		self.cow.slice8.addEventListener("mouseout", outSlice8);
		self.cow.slice8.addEventListener("click", clickSlice8);
		
		
		
		function overSlice8() {
			overSlice();
			self.sName.sliceName.text = "אוסובוקו";
			self.cow.slice8.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.thin.gotoAndStop(1);
		}
		
		function outSlice8() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnThin == true) {
					self.cow.slice8.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice8.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.thin.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice8() {
			self.tab1.gotoAndStop(6);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice8.gotoAndStop(2); //הארת הנתח
		}
		
		
		//  אירועים לנתח מספר 11
		self.cow.slice11.addEventListener("mouseover", overSlice11);
		self.cow.slice11.addEventListener("mouseout", outSlice11);
		self.cow.slice11.addEventListener("click", clickSlice11);
		
		
		
		function overSlice11() {
			overSlice();
			self.tab1.gotoAndStop(12);
			self.sName.sliceName.text = "סינטה";
			self.cow.slice11.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.thin.gotoAndStop(1);
		
		}
		
		function outSlice11() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnThin == true) {
					self.cow.slice11.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice11.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.thin.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice11() {
			self.tab1.gotoAndStop(12);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice11.gotoAndStop(2); //הארת הנתח
		
		}
		
		
		//  אירועים לנתח מספר 12
		self.cow.slice12.addEventListener("mouseover", overSlice12);
		self.cow.slice12.addEventListener("mouseout", outSlice12);
		self.cow.slice12.addEventListener("click", clickSlice12);
		
		
		
		function overSlice12() {
			overSlice();
			self.sName.sliceName.text = "פילה - מיניון";
			self.cow.slice12.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.thin.gotoAndStop(1);
		
		}
		
		function outSlice12() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnThin == true) {
					self.cow.slice12.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice12.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.thin.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice12() {
			self.tab1.gotoAndStop(14);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice12.gotoAndStop(2); //הארת הנתח
		
		}
		
		
		//  אירועים לנתח מספר 13
		self.cow.slice13.addEventListener("mouseover", overSlice13);
		self.cow.slice13.addEventListener("mouseout", outSlice13);
		self.cow.slice13.addEventListener("click", clickSlice13);
		
		
		
		function overSlice13() {
			overSlice();
			self.sName.sliceName.text = "כנף העוקץ";
			self.cow.slice13.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.thin.gotoAndStop(1);
		
		
		}
		
		function outSlice13() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnThin == true) {
					self.cow.slice13.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice13.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.thin.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice13() {
			self.tab1.gotoAndStop(16);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice13.gotoAndStop(2); //הארת הנתח
		
		}
		
		
		//  אירועים לנתח מספר 14
		self.cow.slice14.addEventListener("mouseover", overSlice14);
		self.cow.slice14.addEventListener("mouseout", outSlice14);
		self.cow.slice14.addEventListener("click", clickSlice14);
		
		
		
		function overSlice14() {
			overSlice();
			self.sName.sliceName.text = "אווזית";
			self.cow.slice14.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.thin.gotoAndStop(1);
		
		}
		
		function outSlice14() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnThin == true) {
					self.cow.slice14.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice14.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.thin.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice14() {
			self.tab1.gotoAndStop(18);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice14.gotoAndStop(2); //הארת הנתח
		}
		
		
		//  אירועים לנתח מספר 16
		self.cow.slice16.addEventListener("mouseover", overSlice16);
		self.cow.slice16.addEventListener("mouseout", outSlice16);
		self.cow.slice16.addEventListener("click", clickSlice16);
		
		
		
		function overSlice16() {
			overSlice();
			self.sName.sliceName.text = "כף";
			self.cow.slice16.gotoAndStop(2); //הנתח הנבחר זוהר 
			self.thin.gotoAndStop(1);
		
		}
		
		
		function outSlice16() {
			stage.cursor = "auto";
			if (partClicked == false) {
				self.leftside.text = "העבר את העכבר על הנתח כדי לגלות את שמו";
				if (clickBtnThin == true) {
					self.cow.slice16.gotoAndStop(1);
					self.leftside.text = "לחץ על אחד הנתחים  המודגשים למידע נוסף";
				} else {
					self.cow.slice16.gotoAndStop(0); //הנתח הנבחר לא זוהר 
					self.thin.gotoAndStop(0);
				}
				self.sName.sliceName.text = "";
			}
		}
		
		function clickSlice16() {
			self.tab1.gotoAndStop(22);
			clickedPart(); //פונקצית לחיצה על נתח
			self.cow.slice16.gotoAndStop(2); //הארת הנתח
		
		}
		
		//----------------------------------//
		//------------מחוץ לפרה-------------//
		//---------למקרה שלא יתאפס----------//
		//----------------------------------//
		
		self.outside.addEventListener("mouseover", turnoff);
		function turnoff() {
			if (partClicked == false) { //רק אם אף חלק לא לחוץ
				stage.cursor = "auto";
				if (clickBtnHigh == true) { //במקרה של קיבוע אחוז שומן גבוה
					clickBtnHigh = false; //אתחול דגל
					clickFats(); //קיבוע נתחים שמנים
				} else if (clickBtnMedium == true) { //במקרה של קיבוע אחוז שומן בינוני
					clickBtnMedium = false; //אתחול דגל
					clickMedium(); //קיבוע נתחים בינוניים
				} else if (clickBtnThin == true) { //במקרה של קיבוע אחוז שומן נמוך
					clickBtnThin = false; //אתחול דגל
					clickThin(); //קיבוע נתחים רזים
				} else {
					resetCow(); //אתחול
				}
			}
		}
		
		
		//----------------------------------//
		//---------יציאה מכרטיסיות----------//
		//----------------------------------//
		
		self.tab1.fatX.addEventListener("click", xfats);
		self.tab1.medX.addEventListener("click", xmeds);
		self.tab1.lowX.addEventListener("click", xlows);
		
		//כרטיסיות נתחים בשומן גבוה 
		function xfats() {
			resetCow();
			clickFats();
		}
		//כרטיסיות נתחים בשומן בינוני
		function xmeds() {
			resetCow();
			clickMedium();
		}
		//כרטיסיות נתחים בשומן נמוך
		function xlows() {
			resetCow();
			clickThin();
		}
		
		//חזרה לפריים הראשי
		self.reBtn.addEventListener("click", resetCow);
		
		
		//----------------------------------//
		//--------------אודות---------------//
		//----------------------------------//
		
		self.aboutBtn.addEventListener("click", openAbout);
		function openAbout() {
			self.aboutT.visible = true;
			self.reBtn.visible = false;
			self.aboutBtn.visible = false;
			self.letsmeat.visible = false;
			self.tab1.visible = false;
		}
		
		self.aboutT.aboutX.addEventListener("click", close);
		function close() {
			self.aboutT.visible = false;
			self.aboutBtn.visible = true;
			self.letsmeat.visible = true;
			if (partClicked == true) {
				self.tab1.visible = true;
				self.reBtn.visible = true;
			}
			if (clickBtnHigh == true || clickBtnMedium == true || clickBtnThin == true)
				self.reBtn.visible = true;
		
		
		}
		
		
		//----------------------------------//
		//-----תיקון הוראות לכרטיסיות------//
		//----------------------------------//
		
		//בפרטים על הנתח
		self.tab1.nextbutton1.addEventListener("click", recipe);
		self.tab1.nextbutton2.addEventListener("click", recipe);
		self.tab1.nextbutton3.addEventListener("click", recipe);
		self.tab1.nextbutton8.addEventListener("click", recipe);
		self.tab1.nextbutton9.addEventListener("click", recipe);
		self.tab1.nextbutton10.addEventListener("click", recipe);
		self.tab1.nextbutton11.addEventListener("click", recipe);
		self.tab1.nextbutton12.addEventListener("click", recipe);
		self.tab1.nextbutton13.addEventListener("click", recipe);
		self.tab1.nextbutton14.addEventListener("click", recipe);
		self.tab1.nextbutton15.addEventListener("click", recipe);
		self.tab1.nextbutton16.addEventListener("click", recipe);
		self.tab1.nextbutton17.addEventListener("click", recipe);
		self.tab1.nextbutton18.addEventListener("click", recipe);
		
		//במתכון
		self.tab1.prebutton1.addEventListener("click", letscook);
		self.tab1.prebutton2.addEventListener("click", letscook);
		self.tab1.prebutton3.addEventListener("click", letscook);
		self.tab1.prebutton8.addEventListener("click", letscook);
		self.tab1.prebutton9.addEventListener("click", letscook);
		self.tab1.prebutton10.addEventListener("click", letscook);
		self.tab1.prebutton11.addEventListener("click", letscook);
		self.tab1.prebutton12.addEventListener("click", letscook);
		self.tab1.prebutton13.addEventListener("click", letscook);
		self.tab1.prebutton14.addEventListener("click", letscook);
		self.tab1.prebutton15.addEventListener("click", letscook);
		self.tab1.prebutton16.addEventListener("click", letscook);
		self.tab1.prebutton17.addEventListener("click", letscook);
		self.tab1.prebutton18.addEventListener("click", letscook);
		
		
		//בכרטיסית מתכון
		function recipe() {
			self.leftside.text = 'לחץ על  "קראו על הנתח"  כדי לעבור למידע על הנתח';
		}
		//בכרטיסיית מידע
		function letscook() {
			self.leftside.text = 'כדי לעבור למתכון  "Let’s cook"  לחץ על';
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// about
	this.aboutT = new lib.abouttab();
	this.aboutT.name = "aboutT";
	this.aboutT.setTransform(640,360.05,1,1,0,0,0,580.8,302.2);

	this.timeline.addTween(cjs.Tween.get(this.aboutT).wait(1));

	// slice_name
	this.aboutBtn = new lib.about();
	this.aboutBtn.name = "aboutBtn";
	this.aboutBtn.setTransform(24.1,649.95);
	new cjs.ButtonHelper(this.aboutBtn, 0, 1, 2, false, new lib.about(), 3);

	this.sName = new lib.sliceNames();
	this.sName.name = "sName";
	this.sName.setTransform(331.9,289.8,0.7131,0.7131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sName},{t:this.aboutBtn}]}).wait(1));

	// tabs
	this.tab1 = new lib.tabs();
	this.tab1.name = "tab1";
	this.tab1.setTransform(952.35,426.55,1.0648,1.0648);

	this.timeline.addTween(cjs.Tween.get(this.tab1).wait(1));

	// part2
	this.medium = new lib.part2();
	this.medium.name = "medium";
	this.medium.setTransform(965.9,441.2);

	this.timeline.addTween(cjs.Tween.get(this.medium).wait(1));

	// part3
	this.thin = new lib.part3();
	this.thin.name = "thin";
	this.thin.setTransform(965.9,566.75);

	this.timeline.addTween(cjs.Tween.get(this.thin).wait(1));

	// part1
	this.letsmeat = new lib.headline();
	this.letsmeat.name = "letsmeat";
	this.letsmeat.setTransform(639.95,64.1,1,1,0,0,0,258.1,54.4);

	this.fats = new lib.part();
	this.fats.name = "fats";
	this.fats.setTransform(966.1,313.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54100E").s().p("EgkPAgMMAAAhAWIAUAAMAAABAWgAmbLtIAAgUMAqrAAAIAAAUgAmbnuIAAgUMAqrAAAIAAAUg");
	this.shape.setTransform(870.525,429.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.fats},{t:this.letsmeat}]}).wait(1));

	// cow
	this.cow = new lib.redCow();
	this.cow.name = "cow";
	this.cow.setTransform(305.55,450.35,0.7131,0.7131);

	this.timeline.addTween(cjs.Tween.get(this.cow).wait(1));

	// out
	this.outside = new lib.out();
	this.outside.name = "outside";
	this.outside.setTransform(340.55,436,0.7442,1,0,0,0,281.5,168);

	this.timeline.addTween(cjs.Tween.get(this.outside).wait(1));

	// Instructions
	this.rightside = new cjs.Text("העבר את העכבר על אחוז השומן הרצוי כדי לגלות אילו נתחים מתאימים", "normal 700 20px 'Assistant'", "#FFFFFF");
	this.rightside.name = "rightside";
	this.rightside.textAlign = "center";
	this.rightside.lineHeight = 28;
	this.rightside.lineWidth = 623;
	this.rightside.parent = this;
	this.rightside.setTransform(943.5,139.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.rightside);
	}

	this.leftside = new cjs.Text("העבר את העכבר על הנתח כדי לגלות את שמו", "normal 700 20px 'Assistant'", "#FFFFFF");
	this.leftside.name = "leftside";
	this.leftside.textAlign = "center";
	this.leftside.lineHeight = 28;
	this.leftside.lineWidth = 531;
	this.leftside.parent = this;
	this.leftside.setTransform(299.3,139.5);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.leftside);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leftside},{t:this.rightside}]}).wait(1));

	// button
	this.reBtn = new lib.reset();
	this.reBtn.name = "reBtn";
	this.reBtn.setTransform(67.45,63.05,0.7239,0.7239,0,0,0,25.9,21.4);
	new cjs.ButtonHelper(this.reBtn, 0, 1, 2, false, new lib.reset(), 3);

	this.timeline.addTween(cjs.Tween.get(this.reBtn).wait(1));

	// Artwork_3_ai
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(240,184,7,0)").ss(25,1,1).p("A5D47MAxlAAAIAALzMgxlAAAgA57lXMAz3AAAIAALBMgz3AAAgA5bOyMAy8AAAIAAKKMgy8AAAg");
	this.shape_1.setTransform(962.9,446.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.639)").s().p("EhkoA5aMAAAhyzMDJRAAAMAAAByzgEAZhAmbMAy9AAAIAAqKMgy9AAAgAZBTJMAz4AAAIAArCMgz4AAAgAZ6AWMAxmAAAIAAryMgxmAAAg");
	this.shape_2.setTransform(636.75,360.025);

	this.instance = new lib.Artwork31aiAssetscopy();
	this.instance.setTransform(-423,-314,1.2041,1.1639);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(217,46,1889.8000000000002,883);
// library properties:
lib.properties = {
	id: '1CE8171ABF950943BCBCC32B09DB4684',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Artwork31aiAssetscopy.png?1601989758561", id:"Artwork31aiAssetscopy"},
		{src:"images/lets_meat_atlas_1.png?1601989758441", id:"lets_meat_atlas_1"},
		{src:"images/lets_meat_atlas_2.png?1601989758442", id:"lets_meat_atlas_2"},
		{src:"images/lets_meat_atlas_3.png?1601989758442", id:"lets_meat_atlas_3"},
		{src:"images/lets_meat_atlas_4.png?1601989758442", id:"lets_meat_atlas_4"},
		{src:"images/lets_meat_atlas_5.png?1601989758442", id:"lets_meat_atlas_5"},
		{src:"images/lets_meat_atlas_6.png?1601989758442", id:"lets_meat_atlas_6"},
		{src:"images/lets_meat_atlas_7.png?1601989758442", id:"lets_meat_atlas_7"},
		{src:"images/lets_meat_atlas_8.png?1601989758442", id:"lets_meat_atlas_8"},
		{src:"images/lets_meat_atlas_9.png?1601989758442", id:"lets_meat_atlas_9"},
		{src:"images/lets_meat_atlas_10.png?1601989758443", id:"lets_meat_atlas_10"},
		{src:"images/lets_meat_atlas_11.png?1601989758443", id:"lets_meat_atlas_11"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1CE8171ABF950943BCBCC32B09DB4684'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;