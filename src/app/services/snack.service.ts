import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()
export class SnackService {

  constructor(private snackBar: MatSnackBar ) {
  }

  openSnackBarAddRelation(): void {
    this.snackBar.open( 'New relation successfully added', 'Great!', {
      duration: 3000,
    });
  }

  openSnackBarDeleteProfessional(message: string): void {
    this.snackBar.open( 'The professional ' + message + ' successfully deleted', 'Great!', {
      duration: 3000,
    });
  }

  openSnackBarPostProfessional(message: string): void {
    this.snackBar.open( 'The professional ' + message + ' successfully updated ', 'Great!', {
      duration: 3000,
    });
  }

  openSnackBarAddProfessional(message: string): void {
    this.snackBar.open( 'The professional ' + message + ' successfully added ', 'Great!', {
      duration: 3000,
    });
  }
}
