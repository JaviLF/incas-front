import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Leader } from "src/app/models/leader";
import { LeaderService } from "src/app/services/leaderService/leader.service";



@Component({
	selector: 'app-getLeaders',
	templateUrl: './getLeaders.component.html',
	styleUrls: ['./getLeaders.component.css']
})

export class getLeadersComponent implements OnInit{
	leaders: Leader[];

	constructor(private leaderService:LeaderService, private router:Router) { this.leaders=[] }

	ngOnInit(): void {
			this.leaderService.readAll()
			.subscribe(
				response => {
					this.leaders=response;
					console.log(this.leaders);
				},
				error => {
					console.log(error);
				}
			);
	}
}