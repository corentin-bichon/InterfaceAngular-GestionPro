import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfessionalViewComponent } from './professional-view/professional-view.component';
import { ProfessionalComponent } from './professional/professional.component';
import {ProfessionalService} from './services/professional.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { ProfessionalCustomService } from './services/professional-custom.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.services';
import { PatientService } from './services/patient.service';
import { RelationService } from './services/relation.service';


const appRoutes: Routes = [
  {path: 'professional', canActivate: [AuthGuard], component: ProfessionalViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', canActivate: [AuthGuard], component: ProfessionalViewComponent},
  {path: 'not-found', component: FourOhFourComponent },
  {path: '**', redirectTo: '/not-found'},
];


@NgModule({
  declarations: [
    AppComponent,
    ProfessionalViewComponent,
    ProfessionalComponent,
    AuthComponent,
    FourOhFourComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProfessionalService,
    AuthService,
    AuthGuard,
    ProfessionalCustomService,
    PatientService,
    RelationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
