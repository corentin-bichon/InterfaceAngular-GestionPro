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

  openSnackBarDeleteRole(role, message: string): void {
    this.snackBar.open( 'The ' + role + ' ' + message + ' successfully deleted', 'Great!', {
      duration: 3000,
    });
  }

  openSnackBarPostRole(role, message: string): void {
    this.snackBar.open( 'The ' + role + ' ' + message + ' successfully updated ', 'Great!', {
      duration: 3000,
    });
  }

  openSnackBarAddRole(role, message: string): void {
    this.snackBar.open( 'The ' + role + ' ' + message + ' successfully added ', 'Great!', {
      duration: 3000,
    });
  }
}
