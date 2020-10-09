import {Subject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class RelationService implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  private relation = [];

  relationSubject = new Subject<any[]>();

  // tslint:disable-next-line:contextual-lifecycle

  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  emitRelationSubject() {
    this.relationSubject.next(this.relation.slice());
  }

  // tslint:disable-next-line:typedef
  getRelationFromServer( id ) {
    this.httpClient
      // tslint:disable-next-line:max-line-length
      .get<any[]>('http://localhost:8080/api/relation?pat_id=%&pro_id= ' + id + '&rNum=%&sickness=%')
      .subscribe(
        (response) => {
          this.relation = response;
          this.emitRelationSubject();
          console.log('Get RelationFromServer : success');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  // tslint:disable-next-line:typedef
  saveRelationToServer(relation) {
    this.httpClient
      .post('http://localhost:8080/api/relation', relation )
      .subscribe(
        () => {
          console.log('Enregistrement relation terminé !');
          this.getRelationFromServer('%');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  // tslint:disable-next-line:typedef
  DeleteRelationFromServer( rNum, patId, proId ) {
    this.httpClient
      // tslint:disable-next-line:max-line-length
      .delete<any[]>('http://localhost:8080/api/relation?pat_id=' + patId + '&pro_id=' + proId + '&rNum=' + rNum)
      .subscribe(
        (response) => {
          this.relation = response;
          this.getRelationFromServer('%');
          console.log('Delete RelationFromServer : success');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  // tslint:disable-next-line:typedef
  UpdateRelationToServer(rNum , relation) {
    this.httpClient
      .put('http://localhost:8080/api/relation/' + rNum , relation )
      .subscribe(
        () => {
          console.log('Update relation terminé !');
          this.getRelationFromServer('%');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}
