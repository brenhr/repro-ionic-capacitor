import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  app: any;
  auth: any;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyB0uCLs23fFUjOE8MjPSXhASCA4qcHxlrw",
      authDomain: "fr-test-auth.firebaseapp.com",
      databaseURL: "https://fr-test-auth-default-rtdb.firebaseio.com",
      projectId: "fr-test-auth",
      storageBucket: "fr-test-auth.appspot.com",
      messagingSenderId: "485692940978",
      appId: "1:485692940978:web:deb9e2dbb5336238bb1fab",
      measurementId: "G-TW2Q9BPMKQ"
    };  
    
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app);
  }

  signInCustomToken(token: string){
    return signInWithCustomToken(this.auth, token);
  }
}
