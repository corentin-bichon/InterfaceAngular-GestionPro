import {Component, Input, OnInit} from '@angular/core';
import { ProfessionalService } from '../services/professional.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  @Input() name: string;
  @Input() firstname: string;
  @Input() address: string;
  @Input() email: string;
  @Input() profession: string;
  @Input() phone: string;
  @Input() id: number;

  constructor(private professionalService: ProfessionalService ) { }

  modification = false ;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getId() {
    return this.id ;
  }

  // tslint:disable-next-line:typedef
  onDelete(id) {
    this.professionalService.deleteProfessionalsFromServer(id);
  }

  // tslint:disable-next-line:typedef
  onUpdateView() {
    this.modification = true ;
  }

  // tslint:disable-next-line:typedef
  onUpdate(id, form: NgForm) {
    console.log(form.value);
    this.professionalService.updateProfessionalsFromServer(id, form.value);
  }

  // tslint:disable-next-line:typedef
  onFetch() {
    this.professionalService.getProfessionalsFromServer('id', '%', '%', 'Percent');
  }


}
