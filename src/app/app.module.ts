import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getBeneficiariesComponent } from './components/beneficiary/getBeneficiaries/getBeneficiaries.component';
import { createBeneficiaryComponent } from './components/beneficiary/createBeneficiary/createBeneficiary.component';
import { GetBeneficiaryComponent } from './components/beneficiary/getBeneficiary/getBeneficiary.component';
import { getLeadersComponent } from './components/leader/getLeaders/getLeaders.component';
import { createLeaderComponent } from './components/leader/createLeader/createLeader.component';
import { getCollaboratorsComponent } from './components/collaborator/getCollaborators/getCollaborators.component';
import { createCollaboratorComponent } from './components/collaborator/createCollaborator/createCollaborator.component';


@NgModule({
  declarations: [
    AppComponent,
    getBeneficiariesComponent,
    createBeneficiaryComponent,
    GetBeneficiaryComponent,
    getLeadersComponent,
    createLeaderComponent,
    getCollaboratorsComponent,
    createCollaboratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
