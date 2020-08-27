import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  downvote=0;
  upvote=0

voteDown(){
  this.downvote=this.downvote+1;
}

voteUp(){
  this.upvote=this.upvote+1;
}

  constructor() { }

  ngOnInit() {
  }

}
