import {Injectable} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {DialogOverviewDeleteProfessionalComponent} from '../professional/dialog-overview-delete-professional.component';
import {DialogOverviewDeletePatientComponent} from '../patient/dialog-overview-delete-patient.component';


@Injectable()
export class DialogService {

  constructor( private  dialog: MatDialog ) {
  }

  openDeleteProfessionalDialog(name, firstname, id): void {
    this.dialog.open(DialogOverviewDeleteProfessionalComponent, {
      width: '500px',
      data: {name, firstname, id },
      panelClass: 'custom-dialog-container'
    });
  }

  openDeletePatientDialog(name, firstname, id): void {
    this.dialog.open(DialogOverviewDeletePatientComponent, {
      width: '500px',
      data: {name, firstname, id },
      panelClass: 'custom-dialog-container'
    });
  }
}
