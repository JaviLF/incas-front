import { Component, OnInit } from "@angular/core";
import { LeaderService } from "src/app/services/leaderService/leader.service";

@Component({
	selector: 'app-createLeader-component',
	templateUrl: 'createLeader.component.html',
	styleUrls: ['createLeader.component.css']
})

export class createLeaderComponent implements OnInit {

	leader = {
		CI: 1000001,
		Name: "Baden",
		LastName: "Powell",
		Age: 21,
		CurrentCharge: "Encargado de rama rover",
		CurrentAntiquity: 2,
		IsRegistered: false,
    UnityId: 1,
  };
  submitted = false;
  createdLeader: any;

  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
  }

  createLeader(): void {
    const data = {
      CI: this.leader.CI,
      Name: this.leader.Name,
      LastName: this.leader.LastName,
      Age: this.leader.Age,
      CurrentCharge: this.leader.CurrentCharge,
      CurrentAntiquity: this.leader.CurrentAntiquity,
      IsRegistered: this.leader.IsRegistered,
      UnityId: this.leader.UnityId,
    };

    this.leaderService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdLeader=response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newLeader(): void {
    this.submitted = false;
    this.leader = {
    CI: 1000001,
		Name: "Baden",
		LastName: "Powell",
		Age: 21,
		CurrentCharge: "Encargado de rama rover",
		CurrentAntiquity: 2,
		IsRegistered: false,
    UnityId: 1,
    };
  }

}
