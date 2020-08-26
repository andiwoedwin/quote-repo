import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
 
  goals: Goal[] = [
    new Goal(1, 'Life Quote', 'The bad thing is that time flies, but the good thing is that you are the pilot you can adjust your course','Andiwo','Mornica',new Date(2020,3,14)),
  ];
  
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`press OK to continue with deleting ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }


  constructor() { }

  ngOnInit(){
  }

}
