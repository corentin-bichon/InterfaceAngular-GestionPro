import {Subject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SnackService} from './snack.service';

@Injectable()
export class ProfessionalService implements OnInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private snackService: SnackService ) {}

  private professional = [] ;

  professionalSubject = new Subject<any[]>();


  // tslint:disable-next-line:contextual-lifecycle use-lifecycle-interface
  ngOnInit(): void {
  }

  emitProfessionnalSubject(): void {
    this.professionalSubject.next(this.professional.slice());
  }

  getProfessionalsFromServer(trie, idSelect, nameSelect, professionalSelect): void {
    this.httpClient
      // tslint:disable-next-line:max-line-length
      .get<any[]>('http://localhost:8080/api/professionals?choice=' + trie + '&id=' + idSelect + '&name=' + nameSelect + '&profession=' + professionalSelect)
      .subscribe(
        (response) => {
          this.professional = response;
          this.emitProfessionnalSubject();
          console.log('Get professionalsFromServer : success');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteProfessionalsFromServer(id): void {
    this.httpClient
      .delete('http://localhost:8080/api/professionals/' + id)
      .subscribe(
        () => {
          console.log(' Suppression : Success !');
          this.snackService.openSnackBarDeleteRole('professional' , name);
          this.getProfessionalsFromServer('id', '%', '%', 'Percent');
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }

  updateProfessionalsFromServer(id, professional): void {
    this.httpClient
      .put('http://localhost:8080/api/professionals/' + id , professional  )
      .subscribe(
        () => {
          console.log(' Modification : Success !');
          this.getProfessionalsFromServer('id', '%', '%', 'Percent');
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }

  createProfessionalsFromServer(professional): void {
    this.httpClient
      .post('http://localhost:8080/api/professionals', professional  )
      .subscribe(
        () => {
          console.log('Creation : Success !');
          this.getProfessionalsFromServer('id', '%', '%', 'Percent');
        },
        (error) => {
          console.log('Error! : ' + error);
        }
      );
  }
}
