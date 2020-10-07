import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProfessionalService} from '../services/professional.service';
import {RelationService} from '../services/relation.service';
import {SnackService} from '../services/snack.service';


@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview-delete.html',
})
@Injectable()
export class DialogOverviewDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDeleteComponent>,
    private professionalService: ProfessionalService,
    private snackService: SnackService,
    private relationService: RelationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(id): void {
    this.relationService.DeleteRelationFromServer('%', '%', id);
    this.professionalService.deleteProfessionalsFromServer(id);
    this.dialogRef.close();
    this.snackService.openSnackBarDeleteProfessional(name);
  }
}

export interface DialogData {
  firstname: string;
  name: string;
  id: string;
}
