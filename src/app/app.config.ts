import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({
      "projectId": "friendlychat-ae99c",
      "appId": "1:1084361367184:web:519be87cb04cc56be04215",
      "storageBucket": "friendlychat-ae99c.firebasestorage.app",
      "apiKey": "AIzaSyAcLVFBq6_wkh4VajggLkM6_fRDvrhPiwM",
      "authDomain": "friendlychat-ae99c.firebaseapp.com",
      "messagingSenderId": "1084361367184"
    })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideMessaging(() => getMessaging()), 
    provideStorage(() => getStorage())
  ],
};