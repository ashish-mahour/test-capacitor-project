import { CapacitorConfig } from '@capacitor/cli';

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
      presentationOptions: ["badge", "sound", "alert"],
    }
  },  
  cordova: {
    accessOrigins: ["*"],
    preferences: {
    }
  }
};

export default config;
