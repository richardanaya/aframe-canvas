// aframe-canvas.js
// repo    : https://github.com/richardanaya/aframe-canvas
// license : MIT

(function (window, module, AFRAME) {
	"use strict";
	AFRAME = AFRAME.aframeCore || AFRAME;

	AFRAME.registerComponent('canvas-material', {
		schema: {
			width: {
				type: 'int',
				default: 0
			},
			height: {
				type: 'int',
				default: 0
			}
		},

		update: function () {
			if(!this.canvas){
				this.canvas = document.createElement("canvas");
			}
			this.canvas.width = this.data.width;
			this.canvas.height = this.data.height;
			var _this = this;
			this.getContext = function(){
				var ctx = _this.canvas.getContext("2d");
				return ctx;
			}
			this.updateTexture = function(){
				texture.needsUpdate = true;
			}
			var texture = new THREE.Texture(this.canvas);
			var material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
			this.el.object3D.traverse( function(child) { child.material = material} )
		}
	});
})(
	typeof window !== "undefined" ? window : {},
	typeof module !== "undefined" ? module : {},
	typeof require !== "undefined" ? AFRAME || window.AFRAME || require("aframe") : (AFRAME || window.AFRAME)
);
