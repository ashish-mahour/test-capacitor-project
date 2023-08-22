
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-appavailability.AppAvailability",
          "file": "plugins/cordova-plugin-appavailability/www/AppAvailability.js",
          "pluginId": "cordova-plugin-appavailability",
        "clobbers": [
          "appAvailability"
        ]
        },
      {
          "id": "cordova-plugin-calendar.Calendar",
          "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
          "pluginId": "cordova-plugin-calendar",
        "clobbers": [
          "Calendar"
        ]
        },
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
          "id": "cordova-plugin-app-version.AppVersionPlugin",
          "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
          "pluginId": "cordova-plugin-app-version",
        "clobbers": [
          "cordova.getAppVersion"
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
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-android-permissions.Permissions",
          "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
          "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
          "cordova.plugins.permissions"
        ]
        },
      {
          "id": "cordova-plugin-nativestorage.mainHandle",
          "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
          "pluginId": "cordova-plugin-nativestorage",
        "clobbers": [
          "NativeStorage"
        ]
        },
      {
          "id": "cordova-base64-to-gallery.object.assign-polyfill",
          "file": "plugins/cordova-base64-to-gallery/www/object.assign-polyfill.js",
          "pluginId": "cordova-base64-to-gallery"
        },
      {
          "id": "cordova-plugin-nativestorage.LocalStorageHandle",
          "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
          "pluginId": "cordova-plugin-nativestorage"
        },
      {
          "id": "cordova-plugin-nativestorage.NativeStorageError",
          "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
          "pluginId": "cordova-plugin-nativestorage"
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
      "cordova-plugin-android-permissions": "1.1.5",
      "mx.ferreyra.callnumber": "0.0.2",
      "cordova-base64-to-gallery": "4.1.3",
      "cordova-plugin-aes256-encryption": "1.2.2",
      "cordova-plugin-androidx-adapter": "1.1.3",
      "cordova-plugin-app-exit": "0.0.1",
      "cordova-plugin-app-version": "0.1.14",
      "cordova-plugin-appavailability": "0.4.2",
      "cordova-plugin-badge": "0.8.9",
      "cordova-plugin-calendar": "5.1.6",
      "cordova-plugin-nativestorage": "2.3.2"
    };
    // BOTTOM OF METADATA
    });
    