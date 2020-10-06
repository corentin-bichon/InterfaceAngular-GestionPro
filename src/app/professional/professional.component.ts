import {Component, Input, OnInit} from '@angular/core';
import { ProfessionalService } from '../services/professional.service';
import {NgForm} from '@angular/forms';
import {PatientService} from '../services/patient.service';
import {Subscription} from 'rxjs';
import { RelationService } from '../services/relation.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private professionalService: ProfessionalService, private patientService: PatientService, private relationService: RelationService ) {
    this.patientService.getPatientFromServer();
    this.relationService.getRelationFromServer('%');
  }


  @Input() name: string;
  @Input() firstname: string;
  @Input() address: string;
  @Input() email: string;
  @Input() profession: string;
  @Input() phone: string;
  @Input() id: number;

  modification = false ;
  relationView = false ;

  relations: any[];
  relationSubsription: Subscription;
  patients: any[];
  patientSubsription: Subscription;

  onded;
  ngOnInit(): void {
    this.patientSubsription = this.patientService.patientSubject.subscribe(
      (patients: any[]) => {
        this.patients = patients;
      }
    );
    this.relationSubsription = this.relationService.relationSubject.subscribe(
      (relations: any[]) => {
        this.relations = relations;
      }
    );
  }

  // tslint:disable-next-line:typedef
  getId() {
    return this.id ;
  }

  // tslint:disable-next-line:typedef
  onDelete(id) {
    this.professionalService.deleteProfessionalsFromServer(id);
  }

  // tslint:disable-next-line:typedef
  onUpdateView() {
    this.modification = true ;
  }

  // tslint:disable-next-line:typedef
  onUpdate(id, form: NgForm) {
    console.log(form.value);
    this.professionalService.updateProfessionalsFromServer(id, form.value);
  }

  // tslint:disable-next-line:typedef
  onFetch() {
    this.professionalService.getProfessionalsFromServer('id', '%', '%', 'Percent');
  }

  // tslint:disable-next-line:typedef
  onRelationView() {
    this.relationView = true ;
  }

  // tslint:disable-next-line:typedef
  OnViewPatient(id) {
    // tslint:disable-next-line:forin
    for (const index in this.patients ) {
      if ( this.patients[index].id === id ) {
        return this.patients[index].firstname + ' ' + this.patients[index].name.toUpperCase() ;
      }
    }
    return 'error';
  }

  /* Mettre en vert les patients qui ont ce professionel en medecin traitant
  <div [ngStyle]="{color: (OnViewRegularDoctor(id) === true  ? 'green' : 'default') }">
  // tslint:disable-next-line:typedef
  OnViewRegularDoctor(id) {
    // tslint:disable-next-line:forin
    for (const index in this.relations) {
      console.log(this.relations[index].pro_id);
      if (this.relations[index].pro_id === id && this.relations[index].regular_doctor) {
        console.log(this.relations[index].regular_doctor);
        return true ;
      }
    }
  }
  */

  // tslint:disable-next-line:typedef
  onCreateRelation(form: NgForm ) {
    form.value.pro_id = String(this.id);
    console.log(form.value);
    this.relationService.saveRelationToServer(form.value);
    this.relationService.getRelationFromServer('%');
  }
}
