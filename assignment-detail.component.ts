import { Component, Input, OnInit } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assigns.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;
  
  constructor(private assignmentService:AssignmentService) { }

  onAssiSubmitted(){
    this.passedAssignment.submitted = true;
    this.assignmentService.updateAssignments(this.passedAssignment).subscribe(res => console.log(res));
  }

  show = true;

  ngOnInit(): void {    
  }

  onDelete(){
    this.assignmentService.deleteAssignment(this.passedAssignment).subscribe(res => console.log(res));
    this.passedAssignment = null;
  }

}
