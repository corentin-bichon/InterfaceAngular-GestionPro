import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { ProfessionalService } from '../services/professional.service';
import {NgForm} from '@angular/forms';
import {ProfessionalCustomService} from '../services/professional-custom.service';
import {SnackService} from '../services/snack.service';

@Component({
  selector: 'app-professional-view',
  templateUrl: './professional-view.component.html',
  styleUrls: ['./professional-view.component.css']
})
export class ProfessionalViewComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private professionalService: ProfessionalService ,  private enterpriseService: ProfessionalCustomService, private snackService: SnackService) {
    this.professionalService.getProfessionalsFromServer('id', '%', '%', 'Percent');
  }

  addPro = false ;
  sortPro = false ;
  sortS = 'id' ;
  idS = '%';
  nameS = '%';
  professionS = 'Percent' ;

  professionals: any[];
  professionalSubsription: Subscription;


  name = '' ;

  ngOnInit(): void {
    this.professionalSubsription = this.professionalService.professionalSubject.subscribe(
      (professionals: any[]) => {
        this.professionals = professionals;
      }
    );
    this.professionalService.emitProfessionnalSubject();
    this.name = this.enterpriseService.getEnterprise_Name;
  }

  // tslint:disable-next-line:typedef
  onFetch() {
    this.professionalService.getProfessionalsFromServer('id', '%', '%', 'Percent');
  }

  // tslint:disable-next-line:typedef
  onCreate(form: NgForm) {
    console.log(form.value);
    this.professionalService.createProfessionalsFromServer(form.value);
    this.onCreateStopView();
    this.snackService.openSnackBarAddProfessional(form.value.name.toUpperCase());
  }

  // tslint:disable-next-line:typedef
  onCreateView() {
    this.addPro = this.addPro === true ? false : true ;
  }

  // tslint:disable-next-line:typedef
  onCreateStopView() {
    this.addPro = false;
  }

  // tslint:disable-next-line:typedef
  onSortView() {
    this.sortPro = this.sortPro === true ? false : true ;
  }

  // tslint:disable-next-line:typedef
  onSortStopView() {
    this.sortPro = false ;
    this.professionalService.getProfessionalsFromServer('id', '%', '%', 'Percent');
  }

  // tslint:disable-next-line:typedef
  onSort(form: NgForm ) {
    console.log(form.value.nameSelect);
    if (form.value.idSelect !== '' ){  this.idS = form.value.idSelect; } else { this.idS = '%'; }
    if (form.value.nameSelect !== undefined ){  this.nameS = form.value.nameSelect; } else { this.nameS = '%'; }
    // tslint:disable-next-line:max-line-length
    if (form.value.professionSelect !== 'all'){  this.professionS = form.value.professionSelect; } else { this.professionS = 'Percent' ; }
    if (form.value.sortSelect !== undefined ) { this.sortS = form.value.sortSelect ; }  else { this.sortS = 'id' ; }
    console.log(this.sortS, this.idS, this.nameS, this.professionS);
    // tslint:disable-next-line:max-line-length
    this.professionalService.getProfessionalsFromServer( this.sortS, this.idS, this.nameS, this.professionS);
  }
}
