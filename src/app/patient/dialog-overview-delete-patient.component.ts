import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PatientService } from '../services/patient.service';
import {SnackService} from '../services/snack.service';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview-delete-patient.html',
})
@Injectable()
export class DialogOverviewDeletePatientComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDeletePatientComponent>,
    private patientService: PatientService,
    private snackService: SnackService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(id): void {
    this.patientService.deletePatientFromServer(id);
    this.dialogRef.close();
    this.snackService.openSnackBarDeleteRole('patient' , name);
  }
}

export interface DialogData {
  firstname: string;
  name: string;
  id: string;
}
