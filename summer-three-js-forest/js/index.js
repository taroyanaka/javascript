var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}if (WEBGL.isWebGLAvailable() === false) {
	document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

var scene = void 0,camera = void 0,renderer = void 0,controls = void 0;

var land = void 0,firTree = void 0,oakTree = void 0,tipi = void 0,fence = void 0,bonfire = void 0,stone = void 0,bigStone = void 0,timber = void 0,
stones = [],
stoneX = void 0,stoneY = void 0,stoneZ = void 0;

var windowWidth = window.innerWidth,
windowHeight = window.innerHeight;

var windowHalfX = window.innerWidth / 2,
windowHalfY = window.innerHeight / 2;

//let mouseX = 0;
//let mouseY = 0;

var uniforms = {
	amplitude: { value: 5.0 },
	opacity: { value: .4 },
	color: { value: new THREE.Color(0xf0fffc) } };


function getCustomColor(geometry) {
	var count = geometry.attributes.position.count;
	var displacement = new THREE.Float32BufferAttribute(count * 3, 3);
	geometry.addAttribute('displacement', displacement);
	var customColor = new THREE.Float32BufferAttribute(count * 3, 3);
	geometry.addAttribute('customColor', customColor);
	var color = new THREE.Color(0xf0fffc);
	for (var i = 0, l = customColor.count; i < l; i++) {
		color.setHSL(i / l, 0.8, 0.7);
		color.toArray(customColor.array, i * customColor.itemSize);
	}
}

function init() {
	// Create scene
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(80, windowWidth / windowHeight, .1, 1000);
	camera.lookAt(scene.position);

	camera.position.set(25, 30, 60);

	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(windowWidth, windowHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	// render controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.minPolarAngle = Math.PI * .1; // min rotate
	controls.maxPolarAngle = Math.PI * .5; // max rotate
	controls.minDistance = 30; // min zoom
	controls.maxDistance = 100; // max zoom

	//drawAxes(); // add axes lines
	setLights();
	initSummer();

	document.body.appendChild(renderer.domElement);

	// add events listeners
	//document.addEventListener('mousemove', onDocumentMouseMove, false);
	window.addEventListener('resize', onWindowResize);
}

// create summer scene
function initSummer() {
	drawLand();
	drawFirTrees();
	drawOakTrees();
	drawTipis();
	drawFence();
	drawBonfire();
	drawSmallStones();
	drawBigStones();
	drawTimber();
}

// create lights
function setLights() {
	var light = new THREE.HemisphereLight(0xb8b09c, 0x97c653, 1, 100);
	scene.add(light);

	var ambientLight = new THREE.AmbientLight(0xFFFFFF, .2);
	scene.add(ambientLight);

	var ambientLight2 = new THREE.AmbientLight(0xFFFFFF, .5);
	scene.add(ambientLight2);

	var directionalLight = new THREE.DirectionalLight(0xb8b09c, .7, 100);
	directionalLight.position.set(10, 10, 30);
	scene.add(directionalLight);

	var spotLight = new THREE.SpotLight(0xFFFFFF, .1);
	spotLight.angle = Math.PI / 3;
	spotLight.penumbra = 1;
	spotLight.position.set(25, 40, 40);
	spotLight.castShadow = true;
	spotLight.shadow.camera.near = 1.2;
	spotLight.shadow.camera.far = 140;
	spotLight.shadow.mapSize.width = 1024;
	spotLight.shadow.mapSize.height = 1024;
	scene.add(spotLight);

	var spotLight2 = new THREE.SpotLight(0x83c000, .2);
	spotLight2.angle = Math.PI / 3;
	spotLight2.penumbra = 1;
	spotLight2.position.set(23, 17, 40);
	spotLight2.castShadow = true;
	spotLight2.shadow.camera.near = 1;
	spotLight2.shadow.camera.far = 140;
	spotLight2.shadow.mapSize.width = 1024;
	spotLight2.shadow.mapSize.height = 1024;
	scene.add(spotLight2);

	//scene.add( new THREE.CameraHelper( spotLight.shadow.camera ) );
	//scene.add( new THREE.CameraHelper( spotLight2.shadow.camera ) );
}

// add axes lines
function drawAxes() {
	var axesHelper = new THREE.AxesHelper(100);
	scene.add(axesHelper);
}

// draw land
function drawLand() {
	land = new Land();
	land.group.position.set(0, 0, 0);
	land.group.rotation.x = -1.57;
	scene.add(land.group);
}

// draw christmas trees
function drawFirTrees() {
	_drawFirTreesCenter();
	_drawFirTreesRight();
	_drawFirTreesLeft();
}
function _drawFirTreesCenter() {
	for (var i = 1; i < 3; i++) {
		firTree = new FirTree();
		firTree.group.position.x = i * 2;
		firTree.group.position.y = 13;
		firTree.group.position.z = i * 12 * -1;
		scene.add(firTree.group);
	}
}
function _drawFirTreesRight() {
	for (var i = 1; i < 3; i++) {
		firTree = new FirTree();
		firTree.group.position.x = i * 13;
		firTree.group.position.y = 13;
		firTree.group.position.z = i * 10 * -1;
		scene.add(firTree.group);
	}
}
function _drawFirTreesLeft() {
	for (var i = 1; i < 3; i++) {
		firTree = new FirTree();
		firTree.group.position.x = i * 15 * -1;
		firTree.group.position.y = 13;
		firTree.group.position.z = i * 3 * -1;
		scene.add(firTree.group);
	}
}

// draw oak trees
function drawOakTrees() {
	_drawOakTreeRight();
	_drawOakTreeLeft();
}
function _drawOakTreeRight() {
	oakTree = new OakTree();
	oakTree.group.position.x = 15;
	oakTree.group.position.z = -25;
	scene.add(oakTree.group);
}
function _drawOakTreeLeft() {
	oakTree = new OakTree();
	oakTree.group.position.x = -25;
	oakTree.group.position.z = 7;
	scene.add(oakTree.group);
}

// draw timber
function drawTimber() {
	timber = new Timber();
	timber.group.position.x = -10;
	timber.group.position.y = 2.2;
	timber.group.position.z = -22;
	scene.add(timber.group);
}

// draw Teepee
function drawTipis() {
	for (var i = 1; i < 3; i++) {
		tipi = new Tipi();
		tipi.group.position.x = i * 10;
		tipi.group.position.y = 9;
		tipi.group.position.z = i * 8;
		tipi.group.rotation.y = 1;
		scene.add(tipi.group);
	}
}

// draw fence
function drawFence() {
	fence = new Fence();
	fence.group.position.z = 10;
	fence.group.position.x = -15;
	fence.group.rotation.y = .6;
	scene.add(fence.group);
}

// draw bonfire
function drawBonfire() {
	bonfire = new Bonfire();
	bonfire.group.position.z = 25;
	bonfire.group.position.x = 5;
	scene.add(bonfire.group);
}

// draw small stones
function drawSmallStones() {
	var nStones = 20;
	var stonesDist = 20;
	for (var i = 1; i < nStones; i++) {
		stone = new SmallStone();
		stoneY = 0;
		stoneX = Math.cos(Math.PI * Math.random(i)) * stonesDist * 1.2;
		stoneZ = -(Math.sin(Math.PI * Math.random(i)) * stonesDist) / 1.2;
		stone.group.position.set(stoneX, stoneY, stoneZ);
		scene.add(stone.group);
		stones.push(stone);
	}
}

// draw big stone
function drawBigStones() {
	bigStone = new BigStone();
	scene.add(bigStone.group);
}

// render
function animate() {
	requestAnimationFrame(animate);

	render();
}

function render() {
	renderer.render(scene, camera);
}

// Objects' classes
var Land = function () {
	function Land() {_classCallCheck(this, Land);
		this.group = new THREE.Group();

		this.groundMaterial = new THREE.MeshStandardMaterial({
			color: 0x452823,
			roughness: 1 });


		this.grassMaterial = new THREE.MeshStandardMaterial({
			color: 0x97c653,
			roughness: 1 });


		this.drawGround();
		this.drawGrass();
	}_createClass(Land, [{ key: 'drawGround', value: function drawGround()

		{
			var groundGeometry = new THREE.BoxGeometry(80, 70, 3, 10, 10, 1);
			var ground = new THREE.Mesh(groundGeometry, this.groundMaterial);
			ground.translateZ(-2);
			this.group.add(ground);
		} }, { key: 'drawGrass', value: function drawGrass()

		{
			var grassGeometry = new THREE.BoxGeometry(80, 70, 1, 10, 10, 1);
			var grass = new THREE.Mesh(grassGeometry, this.grassMaterial);
			grass.receiveShadow = true;
			this.group.add(grass);
		} }]);return Land;}();var


Tree =
function Tree() {_classCallCheck(this, Tree);
	this.group = new THREE.Group();

	this.sheetsMaterial = new THREE.MeshStandardMaterial({
		color: 0x5da600,
		roughness: 1,
		flatShading: true });


	this.treeMaterial = new THREE.MeshStandardMaterial({
		color: 0x983734,
		roughness: 1,
		flatShading: true });

};var

FirTree = function (_Tree) {_inherits(FirTree, _Tree);
	function FirTree() {_classCallCheck(this, FirTree);var _this = _possibleConstructorReturn(this, (FirTree.__proto__ || Object.getPrototypeOf(FirTree)).call(this));

		_this.drawSheets();
		_this.drawTree();return _this;
	}_createClass(FirTree, [{ key: 'drawSheets', value: function drawSheets()

		{
			var sheetsGeometry = new THREE.ConeGeometry(4, 20, 4);
			var sheets = new THREE.Mesh(sheetsGeometry, this.sheetsMaterial);
			sheets.castShadow = true;
			this.group.add(sheets);
		} }, { key: 'drawTree', value: function drawTree()

		{
			var treeGeaometry = new THREE.CylinderGeometry(2, 1, 5, 4);
			var tree = new THREE.Mesh(treeGeaometry, this.treeMaterial);
			tree.castShadow = true;
			tree.translateY(-10);
			this.group.add(tree);
		} }]);return FirTree;}(Tree);var

OakTree = function (_Tree2) {_inherits(OakTree, _Tree2);
	function OakTree() {_classCallCheck(this, OakTree);var _this2 = _possibleConstructorReturn(this, (OakTree.__proto__ || Object.getPrototypeOf(OakTree)).call(this));


		_this2.drawSheets();
		_this2.drawTree();return _this2;
	}_createClass(OakTree, [{ key: 'drawSheets', value: function drawSheets()

		{
			var sheetsGeometry = new THREE.DodecahedronGeometry(7);
			var sheets = new THREE.Mesh(sheetsGeometry, this.sheetsMaterial);
			sheets.castShadow = true;
			sheets.position.y = 15;
			this.group.add(sheets);
		} }, { key: 'drawTree', value: function drawTree()

		{
			var treeGeaometry = new THREE.CylinderGeometry(1, .6, 20, 4);
			var tree = new THREE.Mesh(treeGeaometry, this.treeMaterial);
			tree.castShadow = true;
			tree.position.y = 10;
			this.group.add(tree);
		} }]);return OakTree;}(Tree);var

Timber = function (_Tree3) {_inherits(Timber, _Tree3);
	function Timber() {_classCallCheck(this, Timber);var _this3 = _possibleConstructorReturn(this, (Timber.__proto__ || Object.getPrototypeOf(Timber)).call(this));

		_this3.drawTimber();
		_this3.drawBranch();return _this3;
	}_createClass(Timber, [{ key: 'drawBranch', value: function drawBranch()

		{
			var branchGeametry = new THREE.ConeGeometry(.5, 2, 5, 5);
			var branch = new THREE.Mesh(branchGeametry, this.treeMaterial);
			branch.castShadow = true;
			branch.position.y = 2.5;
			branch.rotation.z = .2;
			this.group.add(branch);
		} }, { key: 'drawTimber', value: function drawTimber()

		{
			var timberGeaometry = new THREE.CylinderGeometry(2, 1.5, 7, 9, 2);
			var timber = new THREE.Mesh(timberGeaometry, this.treeMaterial);
			timber.castShadow = true;
			timber.rotation.z = 1.5;
			timber.rotation.y = .5;
			this.group.add(timber);
		} }]);return Timber;}(Tree);var


Tipi = function () {
	function Tipi() {_classCallCheck(this, Tipi);
		this.group = new THREE.Group();

		this.envelopeMaterial = new THREE.MeshStandardMaterial({
			color: 0xB6B19D,
			roughness: 1,
			flatShading: true });


		this.woodMaterial = new THREE.MeshStandardMaterial({
			color: 0x803829,
			roughness: 1 });


		this.innerMaterial = new THREE.MeshStandardMaterial({
			color: 0x1C1C1C,
			flatShading: true,
			side: THREE.DoubleSide });


		this.drawEnvelope();
		this.drawWood();
		this.drawInner();
	}_createClass(Tipi, [{ key: 'drawEnvelope', value: function drawEnvelope()

		{
			var envelopeGeometry = new THREE.ConeGeometry(5, 17, 8);
			var envelope = new THREE.Mesh(envelopeGeometry, this.envelopeMaterial);
			envelope.castShadow = true;
			envelope.receiveShadow = true;
			this.group.add(envelope);

			var bigPatternGeometry = new THREE.TorusGeometry(2.5, .3, 4, 8);
			var bigPattern = new THREE.Mesh(bigPatternGeometry, this.woodMaterial);
			bigPattern.rotation.x = 1.6;
			bigPattern.rotation.z = 1.5;
			this.group.add(bigPattern);

			var smallPatternGeometry = new THREE.TorusGeometry(1, .3, 4, 8);
			var smallPattern = new THREE.Mesh(smallPatternGeometry, this.woodMaterial);
			smallPattern.position.y = 5;
			smallPattern.rotation.x = 1.6;
			smallPattern.rotation.z = 1.5;
			this.group.add(smallPattern);
		} }, { key: 'drawWood', value: function drawWood()

		{
			var woodBigGeometry = new THREE.ConeGeometry(.1, 8, 10);
			var woodBig = new THREE.Mesh(woodBigGeometry, this.woodMaterial);
			woodBig.translateY(10);
			woodBig.castShadow = true;
			woodBig.receiveShadow = true;
			this.group.add(woodBig);

			var woodMediumGeometry = new THREE.ConeGeometry(.1, 5, 10);
			var woodMedium = new THREE.Mesh(woodMediumGeometry, this.woodMaterial);
			woodMedium.translateY(10.5);
			woodMedium.translateZ(-1);
			woodMedium.rotation.x = -.4;
			woodMedium.castShadow = true;
			woodMedium.receiveShadow = true;
			this.group.add(woodMedium);

			var woodSmallGeometry = new THREE.ConeGeometry(.1, 3, 10);
			var woodSmall = new THREE.Mesh(woodSmallGeometry, this.woodMaterial);
			woodSmall.translateX(-.7);
			woodSmall.translateY(9.5);
			woodSmall.translateZ(.5);
			woodSmall.rotation.z = .5;
			woodSmall.rotation.x = .4;
			woodSmall.castShadow = true;
			woodSmall.receiveShadow = true;
			this.group.add(woodSmall);
		} }, { key: 'drawInner', value: function drawInner()

		{
			var darkInnerGeometry = new THREE.ConeGeometry(2, 5, 3, 1);
			var darkInner = new THREE.Mesh(darkInnerGeometry, this.innerMaterial);
			darkInner.position.x = -3.4;
			darkInner.position.y = -6;
			darkInner.position.z = 1.3;
			darkInner.rotation.y = -.12;
			darkInnerGeometry.vertices[0].x += .4;
			this.group.add(darkInner);
		} }]);return Tipi;}();var


Fence = function () {
	function Fence() {_classCallCheck(this, Fence);
		this.group = new THREE.Group();

		this.woodMaterial = new THREE.MeshStandardMaterial({
			color: 0xC28E58,
			roughness: 1,
			flatShading: true });


		this.drawWoods();
	}_createClass(Fence, [{ key: 'drawWoods', value: function drawWoods()

		{
			this._drawWoodTop();
			this._drawWoodBottom();
			this._drawWoodLeft();
			this._drawWoodRight();
		} }, { key: '_drawWoodTop', value: function _drawWoodTop()

		{
			var woodGeometry_top = new THREE.CylinderGeometry(.3, .4, 20, 5);
			var wood_top = new THREE.Mesh(woodGeometry_top, this.woodMaterial);
			wood_top.castShadow = true;
			wood_top.receiveShadow = true;
			wood_top.position.set(10, 5.3, 0);
			wood_top.rotation.z = -1.6;
			this.group.add(wood_top);
		} }, { key: '_drawWoodBottom', value: function _drawWoodBottom()

		{
			var woodGeometry_bottom = new THREE.CylinderGeometry(.6, .5, 20, 5);
			var wood_bottom = new THREE.Mesh(woodGeometry_bottom, this.woodMaterial);
			wood_bottom.castShadow = true;
			wood_bottom.receiveShadow = true;
			wood_bottom.position.set(10, 3, 0);
			wood_bottom.rotation.z = -1.45;
			this.group.add(wood_bottom);
		} }, { key: '_drawWoodLeft', value: function _drawWoodLeft()

		{
			var woodGeometry_left = new THREE.CylinderGeometry(.7, .3, 8, 4);
			var wood_left = new THREE.Mesh(woodGeometry_left, this.woodMaterial);
			wood_left.castShadow = true;
			wood_left.receiveShadow = true;
			wood_left.position.set(2, 3, -1);
			this.group.add(wood_left);
		} }, { key: '_drawWoodRight', value: function _drawWoodRight()

		{
			var woodGeometry_right = new THREE.CylinderGeometry(.7, .3, 8, 4);
			var wood_right = new THREE.Mesh(woodGeometry_right, this.woodMaterial);
			wood_right.castShadow = true;
			wood_right.receiveShadow = true;
			wood_right.position.set(17, 3, -1);
			this.group.add(wood_right);
		} }]);return Fence;}();var


Bonfire = function () {
	function Bonfire() {_classCallCheck(this, Bonfire);
		this.group = new THREE.Group();

		this.woodMaterial = new THREE.MeshStandardMaterial({
			color: 0xC28E58,
			roughness: 1 });


		this.fireMaterial = new THREE.ShaderMaterial({
			uniforms: uniforms,
			vertexShader: document.getElementById('vertexshader').textContent,
			fragmentShader: document.getElementById('fragmentshader').textContent,
			blending: THREE.AdditiveBlending,
			transparent: true });


		this.fire = this._drawFire();
		this.group.add(this.fire);

		this.animate();
		this.drawWoods();
	}_createClass(Bonfire, [{ key: 'animate', value: function animate()

		{
			TweenMax.to(this.fire.position, 1, {
				y: 1,
				repeat: Infinity,
				yoyo: true,
				ease: Sine.easeInOut });

			TweenMax.to(this.fire.rotation, 1, {
				y: Math.PI,
				repeat: Infinity,
				ease: Power0.easeNone });

		} }, { key: 'drawWoods', value: function drawWoods()

		{
			this._drawWoodLower();
			this._drawWoodMiddle();
			this._drawWoodHigher();
		} }, { key: '_drawWoodLower', value: function _drawWoodLower()

		{
			var woodGeometry_lower = new THREE.BoxGeometry(1.6, .7, 8);
			var wood_lower = new THREE.Mesh(woodGeometry_lower, this.woodMaterial);
			wood_lower.castShadow = true;
			wood_lower.receiveShadow = true;
			wood_lower.position.set(0, .7, 0);
			wood_lower.rotation.y = -.6;
			this.group.add(wood_lower);
		} }, { key: '_drawWoodMiddle', value: function _drawWoodMiddle()

		{
			var woodGeometry_middle = new THREE.CylinderGeometry(.3, .4, 10, 4);
			var wood_middle = new THREE.Mesh(woodGeometry_middle, this.woodMaterial);
			wood_middle.castShadow = true;
			wood_middle.receiveShadow = true;
			wood_middle.position.set(0, 1.5, 0);
			wood_middle.rotation.z = 1.72;
			this.group.add(wood_middle);
		} }, { key: '_drawWoodHigher', value: function _drawWoodHigher()

		{
			var woodGeometry_higher = new THREE.BoxGeometry(1.3, .7, 8);
			var wood_higher = new THREE.Mesh(woodGeometry_higher, this.woodMaterial);
			wood_higher.castShadow = true;
			wood_higher.receiveShadow = true;
			wood_higher.position.set(0, 2.2, 0);
			wood_higher.rotation.y = .6;
			wood_higher.rotation.x = .4;
			this.group.add(wood_higher);
		} }, { key: '_drawFire', value: function _drawFire()

		{
			var groupFire = new THREE.Group();

			var fireGeometry = new THREE.OctahedronBufferGeometry(1);
			var fire = new THREE.Mesh(fireGeometry, this.fireMaterial);
			getCustomColor(fireGeometry);
			fire.position.y = 5;
			groupFire.add(fire);

			var fireGeometry2 = new THREE.OctahedronBufferGeometry(1.5);
			var fire2 = new THREE.Mesh(fireGeometry2, this.fireMaterial);
			getCustomColor(fireGeometry2);
			fire2.position.y = 5;
			groupFire.add(fire2);

			var fireGeometry3 = new THREE.OctahedronBufferGeometry(2);
			var fire3 = new THREE.Mesh(fireGeometry3, this.fireMaterial);
			getCustomColor(fireGeometry3);
			fire3.position.y = 5;
			groupFire.add(fire3);

			return groupFire;
		} }]);return Bonfire;}();var


Stone =
function Stone() {_classCallCheck(this, Stone);
	this.group = new THREE.Group();

	this.stoneMaterial = new THREE.MeshStandardMaterial({
		color: 0xA69673,
		roughness: 1,
		flatShading: true });


};var

SmallStone = function (_Stone) {_inherits(SmallStone, _Stone);
	function SmallStone() {_classCallCheck(this, SmallStone);var _this4 = _possibleConstructorReturn(this, (SmallStone.__proto__ || Object.getPrototypeOf(SmallStone)).call(this));

		_this4.drawStone();return _this4;
	}_createClass(SmallStone, [{ key: 'drawStone', value: function drawStone()

		{
			var stoneGeometry = new THREE.DodecahedronGeometry(Math.random(4), 0);
			var stone = new THREE.Mesh(stoneGeometry, this.stoneMaterial);
			stone.position.y = 1;
			stone.castShadow = true;
			this.group.add(stone);
		} }]);return SmallStone;}(Stone);var

BigStone = function (_Stone2) {_inherits(BigStone, _Stone2);
	function BigStone() {_classCallCheck(this, BigStone);var _this5 = _possibleConstructorReturn(this, (BigStone.__proto__ || Object.getPrototypeOf(BigStone)).call(this));

		_this5.drawStones();return _this5;
	}_createClass(BigStone, [{ key: 'drawStones', value: function drawStones()

		{
			this._drawStone_1();
			this._drawStone_2();
			this._drawStone_3();
		} }, { key: '_drawStone_1', value: function _drawStone_1()

		{
			var stoneGeometry = new THREE.SphereGeometry(5, 4, 2, 0, 6.3, 0, 1.6);
			var stone = new THREE.Mesh(stoneGeometry, this.stoneMaterial);
			stone.position.y = .3;
			stone.position.x = 25;
			stoneGeometry.vertices[0].y -= 1.5;
			stone.castShadow = true;
			this.group.add(stone);
		} }, { key: '_drawStone_2', value: function _drawStone_2()

		{
			var stoneGeometry = new THREE.SphereGeometry(4, 4, 2, 0, 6.3, 0, 1.6);
			var stone = new THREE.Mesh(stoneGeometry, this.stoneMaterial);
			stone.position.y = .3;
			stone.position.x = -5;
			stone.position.z = -5;
			stoneGeometry.vertices[0].y -= .6;
			stoneGeometry.vertices[3].y += 1.2;
			stoneGeometry.vertices[4].y += 1.2;
			stone.castShadow = true;
			this.group.add(stone);
		} }, { key: '_drawStone_3', value: function _drawStone_3()

		{
			var stoneGeometry = new THREE.SphereGeometry(6, 4, 2, 0, 6.3, 0, 1.8);
			var stone = new THREE.Mesh(stoneGeometry, this.stoneMaterial);
			stone.position.y = .6;
			stone.position.x = -25;
			stone.position.z = -25;
			stoneGeometry.vertices[0].y -= 1.6;
			stoneGeometry.vertices[2].y += 1.2;
			stoneGeometry.vertices[3].y += 1.2;
			stone.castShadow = true;
			this.group.add(stone);
		} }]);return BigStone;}(Stone);


// update size canvas if window resize
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
};

// change camera view if mouse move
/*
function onDocumentMouseMove(event) {
	mouseX = (event.clientX - windowHalfX) / 100;
	mouseY = (event.clientY - windowHalfY) / 100;
}
*/

init();
animate();