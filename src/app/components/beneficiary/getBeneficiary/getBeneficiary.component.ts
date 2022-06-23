import { Component, OnInit } from '@angular/core';
import { BeneficiaryService } from '../../../services/beneficiaryService/beneficiary.service'
import { Beneficiary } from '../../../models/beneficiary'

@Component({
  selector: 'app-getBeneficiary',
  templateUrl: './getBeneficiary.component.html',
  styleUrls: ['./getBeneficiary.component.css']
})
export class GetBeneficiaryComponent implements OnInit {

  beneficiary!: Beneficiary;

  constructor(private beneficiaryService: BeneficiaryService) { }

  ngOnInit(): void {
    this.beneficiaryService.read(localStorage['CI'])
    .subscribe(
      response => {
        this.beneficiary=response;
        console.log(this.beneficiary);
      },
      error => {
        console.log(error);
      }
    );
  }

}