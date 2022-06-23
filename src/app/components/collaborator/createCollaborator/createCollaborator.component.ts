import { Component, OnInit } from "@angular/core";
import { CollaboratorService } from "src/app/services/collaboratorService/collaborator.service";

@Component({
	selector: 'app-createCollaborator-component',
	templateUrl: 'createCollaborator.component.html',
	styleUrls: ['createCollaborator.component.css']
})

export class createCollaboratorComponent implements OnInit {

	collaborator = {
		CI: 1000001,
		Name: "Baden",
		LastName: "Powell",
		Age: 21,
		ProfesionalLevel: "Ingeniero de telecomunicaciones",
		IsRegistered: false,
    UnityId: 1,
  };
  submitted = false;
  createdCollaborator: any;

  constructor(private collaboratorService:CollaboratorService) { }

  ngOnInit(): void {
  }

  createCollaborator(): void {
    const data = {
      CI: this.collaborator.CI,
      Name: this.collaborator.Name,
      LastName: this.collaborator.LastName,
      Age: this.collaborator.Age,
      ProfesionalLevel: this.collaborator.ProfesionalLevel,
      IsRegistered: this.collaborator.IsRegistered,
      UnityId: this.collaborator.UnityId,
    };

    this.collaboratorService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdCollaborator=response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newCollaborator(): void {
    this.submitted = false;
    this.collaborator = {
      CI: 99849333,
		Name: "Baden",
		LastName: "Powell",
		Age: 21,
		ProfesionalLevel: "Ingeniero de telecomunicaciones",
		IsRegistered: false,
    UnityId: 1,
    };
  }

}
