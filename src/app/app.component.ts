import { Component , OnInit } from '@angular/core';
import {ProfessionalCustomService} from './services/professional-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  logo = 'https://mikekim.com/wp-content/uploads/2017/01/logo-here.png';
  name = 'MyEnterprise' ;

  constructor(private enterpriseService: ProfessionalCustomService) { }

  ngOnInit(): void {
    if ( this.enterpriseService.getEnterprise_Logo != null ) {
      this.logo = this.enterpriseService.getEnterprise_Logo;
    }
    this.name = this.enterpriseService.getEnterprise_Name;
  }
}
