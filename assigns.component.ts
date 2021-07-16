import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';
import {Assignment} from './assigns.model';

@Component({
  selector: 'app-assigns',
  templateUrl: './assigns.component.html',
  styleUrls: ['./assigns.component.css']
})
export class AssignsComponent implements OnInit {

  title = "My Assignment"
  
  constructor(private assignService: AssignmentService) { }

  ngOnInit() {
    // this.assignments=this.assignService.getAssignments();
    this.getAssignments();
  }

  getAssignments(){
    this.assignService.getAssignments().subscribe(
      assignments => this.assignments = assignments
    );
  }

  selectedAssignment: Assignment
  assignments: Assignment[];

  setSelected(assignment:Assignment){
    this.selectedAssignment = assignment;
  }

  formvisible = false;

  onAddBtnClick(){
    this.formvisible=true;
    this.selectedAssignment = null;
  }

  onNewAss(event: Assignment){
    this.assignService.addAssignments(event).subscribe(success=>console.log(success))
    this.formvisible=false;
  }

}
