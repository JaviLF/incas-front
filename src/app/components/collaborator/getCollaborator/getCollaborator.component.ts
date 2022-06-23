import { Component, OnInit } from '@angular/core';
import { CollaboratorService } from '../../../services/collaboratorService/collaborator.service'
import { Collaborator } from '../../../models/collaborator'

@Component({
  selector: 'app-getCollaborator',
  templateUrl: './getCollaborator.component.html',
  styleUrls: ['./getCollaborator.component.css']
})
export class getCollaboratorComponent implements OnInit {

  collaborator!: Collaborator;

  constructor(private collaboratorService: CollaboratorService) { }

  ngOnInit(): void {
    this.collaboratorService.read(localStorage['CI'])
    .subscribe(
      response => {
        this.collaborator=response;
        console.log(this.collaborator);
      },
      error => {
        console.log(error);
      }
    );
  }

}