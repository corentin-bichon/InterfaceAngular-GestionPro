import {Subject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SnackService} from './snack.service';

@Injectable()
export class PatientService implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute , private snackService: SnackService ) {}

  private patient = [];

  patientSubject = new Subject<any[]>();

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  emitPatientSubject() {
    this.patientSubject.next(this.patient.slice());
  }

  // tslint:disable-next-line:typedef
  getPatientFromServer(trie, idSelect, nameSelect) {
    this.httpClient
      // tslint:disable-next-line:max-line-length
      .get<any[]>('http://localhost:8080/api/patients?choice=' + trie + '&id=' + idSelect + '&name=' + nameSelect)
      .subscribe(
        (response) => {
          this.patient = response;
          this.emitPatientSubject();
          console.log('Get patientFromServer : success');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deletePatientFromServer(id): void {
    this.httpClient
      .delete('http://localhost:8080/api/patients/' + id)
      .subscribe(
        () => {
          console.log(' Suppression : Success !');
          this.snackService.openSnackBarDeleteRole('patient' , name);
          this.getPatientFromServer('id', '%', '%');
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }

  updatePatientFromServer(id, patient): void {
    this.httpClient
      .put('http://localhost:8080/api/patients/' + id , patient  )
      .subscribe(
        () => {
          console.log(' Modification : Success !');
          this.getPatientFromServer('id', '%', '%');
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }

  createPatientFromServer(patient): void {
    this.httpClient
      .post('http://localhost:8080/api/patients', patient  )
      .subscribe(
        () => {
          console.log('Creation : Success !');
          this.getPatientFromServer('id', '%', '%');
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }

}
