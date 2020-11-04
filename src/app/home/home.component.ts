import { Component, OnInit } from '@angular/core';
import {ProfessionalCustomService} from '../services/professional-custom.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  name = '';

  constructor(  private enterpriseService: ProfessionalCustomService ) {
    this.name = this.enterpriseService.getEnterprise_Name;
  }

}
