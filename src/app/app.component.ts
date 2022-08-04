import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repro-ionic-capacitor';

  constructor(private auth: LoginService, public router: Router){

  }

  login(token: string){
    this.auth.signInCustomToken(token).then((res: any) => {
      console.log("Login successful: ");
      console.log(res);
      this.router.navigate(['/home']);
    })
  }

}
