import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { createBeneficiaryComponent } from './components/beneficiary/createBeneficiary/createBeneficiary.component';
import { getBeneficiariesComponent } from './components/beneficiary/getBeneficiaries/getBeneficiaries.component';
import { GetBeneficiaryComponent } from './components/beneficiary/getBeneficiary/getBeneficiary.component';
import { getLeadersComponent } from './components/leader/getLeaders/getLeaders.component';
import { getLeaderComponent } from './components/leader/getLeader/getLeader.component';
import { createLeaderComponent } from './components/leader/createLeader/createLeader.component';
import { getCollaboratorsComponent } from './components/collaborator/getCollaborators/getCollaborators.component';
import { getCollaboratorComponent } from './components/collaborator/getCollaborator/getCollaborator.component';
import { createCollaboratorComponent } from './components/collaborator/createCollaborator/createCollaborator.component';

const routes: Routes = [
  { path: '', redirectTo: 'beneficiarios', pathMatch: 'full' },
  { path: 'beneficiarios', component: getBeneficiariesComponent },
	{ path: 'agregarBeneficiario', component: createBeneficiaryComponent },
	{ path: 'beneficiarios/:CI', component: GetBeneficiaryComponent },
  { path: 'dirigentes', component: getLeadersComponent },
  { path: 'dirigentes/:CI', component: getLeaderComponent },
	{ path: 'agregarDirigente', component: createLeaderComponent },
  { path: 'colaboradores', component: getCollaboratorsComponent },
  { path: 'colaboradores/:CI', component: getCollaboratorComponent },
	{ path: 'agregarColaborador', component: createCollaboratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }