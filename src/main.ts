import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqr4orusVu13LQOlakAWbAbnrihKAKToE',
  authDomain: 'studiokai-a291d.firebaseapp.com',
  projectId: 'studiokai-a291d',
  storageBucket: 'studiokai-a291d.appspot.com',
  messagingSenderId: '633057980783',
  appId: '1:633057980783:web:c52ec4af2819725411f89a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
