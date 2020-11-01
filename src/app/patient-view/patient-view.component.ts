import { Component, OnInit } from '@angular/core';
import {PatientService} from '../services/patient.service';
import {ProfessionalCustomService} from '../services/professional-custom.service';
import {SnackService} from '../services/snack.service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  constructor(private patientService: PatientService, private snackService: SnackService, private enterpriseService: ProfessionalCustomService) {
    this.patientService.getPatientFromServer('id', '%', '%');
  }

  addPatient = false ;
  sortPatient = false ;
  sortS = 'id' ;
  idS = '%';
  nameS = '%';
  isLoading: boolean ;

  patients: any[];
  patientSubsription: Subscription;


  name = '' ;

  ngOnInit(): void {
    this.patientSubsription = this.patientService.patientSubject.subscribe(
      (patients: any[]) => {
        this.patients = patients;
        this.isLoading = ( this.patients.length === 0 );
      }
    );
    this.patientService.emitPatientSubject();
    this.name = this.enterpriseService.getEnterprise_Name;
  }

  // tslint:disable-next-line:typedef
  onFetch() {
    this.patientService.getPatientFromServer('id', '%', '%');
  }

  // tslint:disable-next-line:typedef
  onCreate(form: NgForm) {
    console.log(form.value);
    this.patientService.createPatientFromServer(form.value);
    this.onCreateStopView();
    this.snackService.openSnackBarAddRole('patient' , form.value.name.toUpperCase());
  }

  // tslint:disable-next-line:typedef
  onCreateView() {
    this.addPatient = this.addPatient === true ? false : true ;
  }

  // tslint:disable-next-line:typedef
  onCreateStopView() {
    this.addPatient = false;
  }

  // tslint:disable-next-line:typedef
  onSortView() {
    this.sortPatient = this.sortPatient === true ? false : true ;
  }

  // tslint:disable-next-line:typedef
  onSortStopView() {
    this.sortPatient = false ;
    this.patientService.getPatientFromServer('id', '%', '%');
  }

  // tslint:disable-next-line:typedef
  onSort(form: NgForm ) {
    console.log(form.value.nameSelect);
    if (form.value.idSelect !== '' ){  this.idS = form.value.idSelect; } else { this.idS = '%'; }
    if (form.value.nameSelect !== undefined ){  this.nameS = form.value.nameSelect; } else { this.nameS = '%'; }
    if (form.value.sortSelect !== undefined ) { this.sortS = form.value.sortSelect ; }  else { this.sortS = 'id' ; }
    console.log(this.sortS, this.idS, this.nameS);
    // tslint:disable-next-line:max-line-length
    this.patientService.getPatientFromServer( this.sortS, this.idS, this.nameS );
  }
}
