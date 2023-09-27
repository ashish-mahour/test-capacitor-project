import { CapacitorConfig } from '@capacitor/cli';
import { Capacitor } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'com.test.capacitor.demo',
  appName: 'TestCapacitorApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    SplashScreen: {
        launchAutoHide:  false,
        showSpinner: false,
        spinnerColor: "#2698f3",
        androidSplashResourceName: "splash_full"
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"]
    },

  },  
  cordova: {
    accessOrigins: ["*"],
    preferences: {
      // environmentIDValue: "0b11157d649c/e12007c915ba/launch-a00885a9c4aa-staging"
    }
  }
};

export default config;
