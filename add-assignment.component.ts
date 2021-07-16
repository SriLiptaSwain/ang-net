import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assigns.model'

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

  constructor() { }
  enabled=false;
  ngOnInit(): void {
    setTimeout( () => {this.enabled = true;},3000)
  }
  
  name: string
  dueDate: Date
  
  @Output() newAss = new EventEmitter<Assignment>();

  onSubmit(){
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    this.newAss.emit(assignment);
  }
}
