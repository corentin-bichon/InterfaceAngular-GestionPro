import {Component, Input, OnInit} from '@angular/core';
import { ProfessionalService } from '../services/professional.service';
import {NgForm} from '@angular/forms';
import {PatientService} from '../services/patient.service';
import {Subscription} from 'rxjs';
import { RelationService } from '../services/relation.service';
import { DialogService } from '../services/dialog.service';
import {SnackService} from '../services/snack.service';


@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private professionalService: ProfessionalService, private patientService: PatientService, private relationService: RelationService, public dialogService: DialogService, private snackService: SnackService) {
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

  modification = false;
  relationView = false;

  relations: any[];
  relationSubsription: Subscription;
  patients: any[];
  patientSubsription: Subscription;

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


  getId(): number {
    return this.id;
  }

  onDelete(id): void {
    this.professionalService.deleteProfessionalsFromServer(id);
  }

  onUpdateView(): void {
    this.modification = true;
  }

  onUpdate(id, form: NgForm): void {
    console.log(form.value);
    this.professionalService.updateProfessionalsFromServer(id, form.value);
    this.snackService.openSnackBarPostProfessional(name);
  }

  onFetch(): void {
    this.professionalService.getProfessionalsFromServer('id', '%', '%', 'Percent');
  }

  onRelationView(): void {
    this.relationView = true;
  }

  OnViewPatient(id): string {
    // tslint:disable-next-line:forin
    for (const index in this.patients) {
      if (this.patients[index].id === id) {
        return this.patients[index].firstname + ' ' + this.patients[index].name.toUpperCase();
      }
    }
    return 'error';
  }

  onCreateRelation(form: NgForm): void {
    form.value.pro_id = String(this.id);
    console.log(form.value);
    this.relationService.saveRelationToServer(form.value);
    this.relationService.getRelationFromServer('%');
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
}




