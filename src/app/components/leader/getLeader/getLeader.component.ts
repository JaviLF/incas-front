import { Component, OnInit } from '@angular/core';
import { LeaderService } from '../../../services/leaderService/leader.service'
import { Leader } from '../../../models/leader'

@Component({
  selector: 'app-getLeader',
  templateUrl: './getLeader.component.html',
  styleUrls: ['./getLeader.component.css']
})
export class getLeaderComponent implements OnInit {

  leader!: Leader;

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.leaderService.read(localStorage['CI'])
    .subscribe(
      response => {
        this.leader=response;
        console.log(this.leader);
      },
      error => {
        console.log(error);
      }
    );
  }

}