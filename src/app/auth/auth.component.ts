import {Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ProfessionalCustomService } from '../services/professional-custom.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  logo = 'https://mikekim.com/wp-content/uploads/2017/01/logo-here.png';

  constructor(private authService: AuthService, private enterpriseService: ProfessionalCustomService , private router: Router) { }

  ngOnInit(): void {
  this.authStatus = this.authService.getAuth();
  if ( this.enterpriseService.getEnterprise_Logo != null ) {
    this.logo = this.enterpriseService.getEnterprise_Logo;
  }
  }

  // tslint:disable-next-line:typedef
 onSignIn() {
   this.authService.signIn().then(
    () => {
    console.log('Connexion réussite !');
    this.authStatus = this.authService.getAuth();
    this.router.navigate(['professional']);
    }
  );
 }

  // tslint:disable-next-line:typedef
 onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.getAuth();
 }

}

