import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Collaborator } from "src/app/models/collaborator";
import { CollaboratorService } from "src/app/services/collaboratorService/collaborator.service";



@Component({
	selector: 'app-getCollaborators',
	templateUrl: './getCollaborators.component.html',
	styleUrls: ['./getCollaborators.component.css']
})

export class getCollaboratorsComponent implements OnInit{
	collaborators: Collaborator[];

	constructor(private collaboratorService:CollaboratorService, private router:Router) { this.collaborators=[] }

	ngOnInit(): void {
			this.collaboratorService.readAll()
			.subscribe(
				response => {
					this.collaborators=response;
					console.log(this.collaborators);
				},
				error => {
					console.log(error);
				}
			);
	}
}