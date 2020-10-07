import {Injectable} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import {DialogOverviewDeleteComponent} from '../professional/dialog-overview-delete.component';


@Injectable()
export class DialogService {

  constructor( private  dialog: MatDialog ) {
  }

  openDialog(name, firstname, id): void {
    this.dialog.open(DialogOverviewDeleteComponent, {
      width: '500px',
      data: {name, firstname, id },
      panelClass: 'custom-dialog-container'
    });
  }
}
