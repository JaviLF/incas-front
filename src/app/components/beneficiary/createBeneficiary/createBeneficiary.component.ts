import { Component, OnInit } from "@angular/core";
import { BeneficiaryService } from "src/app/services/beneficiaryService/beneficiary.service";

@Component({
	selector: 'app-createBeneficiary-component',
	templateUrl: 'createBeneficiary.component.html',
	styleUrls: ['createBeneficiary.component.css']
})

export class createBeneficiaryComponent implements OnInit {

	beneficiary = {
		CI: 1000000,
		Name: "Baden",
		LastName: "Powell",
		Age: 21,
		CurrentLevel: "Rover",
		CurrentAntiquity: 2,
		IsRegistered: false,
    UnityId: 1
  };
  submitted = false;
  createdBeneficiary: any;

  constructor(private beneficiaryService:BeneficiaryService) { }

  ngOnInit(): void {
  }

  createBeneficiary(): void {
    const data = {
      CI: this.beneficiary.CI,
      Name: this.beneficiary.Name,
      LastName: this.beneficiary.LastName,
      Age: this.beneficiary.Age,
      CurrentLevel: this.beneficiary.CurrentLevel,
      CurrentAntiquity: this.beneficiary.CurrentAntiquity,
      IsRegistered: this.beneficiary.IsRegistered,
      UnityId: this.beneficiary.UnityId,
    };

    this.beneficiaryService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.createdBeneficiary=response;
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newBeneficiary(): void {
    this.submitted = false;
    this.beneficiary = {
      CI: 1000001,
			Name: "Baden",
			LastName: "Powell",
			Age: 21,
			CurrentLevel: "Rover",
			CurrentAntiquity: 2,
			IsRegistered: false,
      UnityId: 1,
    };
  }

}

