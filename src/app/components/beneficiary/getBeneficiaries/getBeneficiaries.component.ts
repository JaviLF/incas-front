import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Beneficiary } from "src/app/models/beneficiary";
import { BeneficiaryService } from "src/app/services/beneficiaryService/beneficiary.service";



@Component({
	selector: 'app-getBeneficiaries',
	templateUrl: './getBeneficiaries.component.html',
	styleUrls: ['./getBeneficiaries.component.css']
})

export class getBeneficiariesComponent implements OnInit{
	beneficiaries: Beneficiary[];

	constructor(private beneficiaryService:BeneficiaryService, private router:Router) { this.beneficiaries=[] }

	ngOnInit(): void {
			this.beneficiaryService.readAll()
			.subscribe(
				response => {
					this.beneficiaries=response;
					console.log(this.beneficiaries);
				},
				error => {
					console.log(error);
				}
			);
	}
}