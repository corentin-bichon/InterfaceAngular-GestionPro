import {Subject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class PatientService implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  private patient = [];

  patientSubject = new Subject<any[]>();

  // tslint:disable-next-line:contextual-lifecycle

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  emitPatientSubject() {
    this.patientSubject.next(this.patient.slice());
  }

  // tslint:disable-next-line:typedef
  getPatientFromServer() {
    this.httpClient
      // tslint:disable-next-line:max-line-length
      .get<any[]>('http://localhost:8080/api/patients?choice=id&id=%&name=%')
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

}
