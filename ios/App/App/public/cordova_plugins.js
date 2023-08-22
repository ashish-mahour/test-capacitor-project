
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "mx.ferreyra.callnumber.CallNumber",
          "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
          "pluginId": "mx.ferreyra.callnumber",
        "clobbers": [
          "call"
        ]
        },
      {
          "id": "cordova-base64-to-gallery.base64ToGallery",
          "file": "plugins/cordova-base64-to-gallery/www/base64ToGallery.js",
          "pluginId": "cordova-base64-to-gallery",
        "clobbers": [
          "cordova.base64ToGallery"
        ]
        },
      {
          "id": "cordova-plugin-aes256-encryption.AES256",
          "file": "plugins/cordova-plugin-aes256-encryption/www/AES256.js",
          "pluginId": "cordova-plugin-aes256-encryption",
        "clobbers": [
          "cordova.plugins.AES256"
        ]
        },
      {
          "id": "cordova-plugin-android-permissions.Permissions",
          "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
          "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
          "cordova.plugins.permissions"
        ]
        },
      {
          "id": "cordova-plugin-3dtouch.ThreeDeeTouch",
          "file": "plugins/cordova-plugin-3dtouch/www/ThreeDeeTouch.js",
          "pluginId": "cordova-plugin-3dtouch",
        "clobbers": [
          "ThreeDeeTouch"
        ]
        },
      {
          "id": "cordova-base64-to-gallery.object.assign-polyfill",
          "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
          "pluginId": "cordova-base64-to-gallery"
        },
      {
          "id": "cordova-plugin-app-exit.exitApp",
          "file": "plugins/cordova-plugin-app-exit/www/ExitApp.js",
          "pluginId": "cordova-plugin-app-exit",
        "merges": [
          "navigator.app"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-3dtouch": "1.3.8",
      "cordova-plugin-android-permissions": "1.1.5",
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-base64-to-gallery": "4.1.3",
      "cordova-plugin-aes256-encryption": "1.2.2",
      "cordova-plugin-app-exit": "0.0.1"
    };
    // BOTTOM OF METADATA
    });
    