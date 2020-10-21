import {Component, Input, OnInit} from '@angular/core';
import {ProfessionalService} from '../services/professional.service';
import {PatientService} from '../services/patient.service';
import {RelationService} from '../services/relation.service';
import {DialogService} from '../services/dialog.service';
import {SnackService} from '../services/snack.service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {


  // tslint:disable-next-line:max-line-length
  constructor(private patientService: PatientService, public dialogService: DialogService, private snackService: SnackService) {
  }

  @Input() name: string;
  @Input() firstname: string;
  @Input() address: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() id: number;

  modification = false;

  patients: any[];
  patientSubsription: Subscription;

  ngOnInit(): void {
  }


  getId(): number {
    return this.id;
  }

  onDelete(id): void {
    this.patientService.deletePatientFromServer(id);
  }

  onUpdateView(): void {
    this.modification = this.modification  === true ? false : true ;
  }

  onUpdate(id, form: NgForm): void {
    console.log(form.value);
    this.patientService.updatePatientFromServer(id, form.value);
    this.snackService.openSnackBarPostRole('patient' , name);
  }

  onFetch(): void {
    this.patientService.getPatientFromServer('id', '%', '%');
  }
}

