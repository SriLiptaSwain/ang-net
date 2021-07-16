import { Injectable } from '@angular/core';
import { Assignment } from '../assigns/assigns.model';
import {Observable, of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  assignments: Assignment[] =[{
    name:'One',
    dueDate: new Date('2021-01-01'),
    submitted: true
  },{
    name:'Two',
    dueDate: new Date('2021-01-02'),
    submitted: false
  }];

  constructor(private loggingService: LoggingService) { }

  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }

  addAssignments(assignment: Assignment): Observable<string>{
    this.assignments.push(assignment)
    this.loggingService.log(assignment.name,'added !');
    return of('Assignment added !')
  }

  updateAssignments(assignment:Assignment): Observable<string>{
    this.assignments.forEach((assignment,i)=>{
      if(assignment==assignment){
        this.assignments[i] = assignment;
      }
    })
    this.loggingService.log(assignment.name,'updated !');

    return of('Assignment updated !')
  }

  deleteAssignment(deleted: Assignment): Observable<string>{
    this.assignments.forEach((assignment,i)=>{
      if(assignment==deleted){
        this.assignments.splice(i,1)
      }
    })
    this.loggingService.log(deleted.name,'deleted !');

    return of("Deleted !")
  }
}
