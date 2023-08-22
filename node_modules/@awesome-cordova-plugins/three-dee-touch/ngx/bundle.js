'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var ThreeDeeTouch = /** @class */ (function (_super) {
    tslib.__extends(ThreeDeeTouch, _super);
    function ThreeDeeTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDeeTouch.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    ThreeDeeTouch.prototype.watchForceTouches = function () { return core.cordova(this, "watchForceTouches", { "observable": true }, arguments); };
    ThreeDeeTouch.prototype.configureQuickActions = function (quickActions) { return core.cordova(this, "configureQuickActions", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.onHomeIconPressed = function () { return core.cordovaFunctionOverride(this, "onHomeIconPressed", {}, arguments); };
    ThreeDeeTouch.prototype.enableLinkPreview = function () { return core.cordova(this, "enableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.disableLinkPreview = function () { return core.cordova(this, "disableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ThreeDeeTouch, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    ThreeDeeTouch.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ThreeDeeTouch });
    ThreeDeeTouch.pluginName = "ThreeDeeTouch";
    ThreeDeeTouch.plugin = "cordova-plugin-3dtouch";
    ThreeDeeTouch.pluginRef = "ThreeDeeTouch";
    ThreeDeeTouch.repo = "https://github.com/EddyVerbruggen/cordova-plugin-3dtouch";
    ThreeDeeTouch.platforms = ["iOS"];
    ThreeDeeTouch = tslib.__decorate([], ThreeDeeTouch);
    return ThreeDeeTouch;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: ThreeDeeTouch, decorators: [{
            type: i0.Injectable
        }], propDecorators: { isAvailable: [], watchForceTouches: [], configureQuickActions: [], onHomeIconPressed: [], enableLinkPreview: [], disableLinkPreview: [] } });

exports.ThreeDeeTouch = ThreeDeeTouch;
