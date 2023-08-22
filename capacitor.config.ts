import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.capacitor.demo',
  appName: 'TestCapacitorApp',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
