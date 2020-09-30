import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  this.authStatus = this.authService.isAuth;
  }

  // tslint:disable-next-line:typedef
 onSignIn() {
   this.authService.signIn().then(
    () => {
    console.log('Connexion réussite !');
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['professional']);
    }
  );
 }

  // tslint:disable-next-line:typedef
 onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
 }

}

