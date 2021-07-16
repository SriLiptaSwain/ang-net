import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignsComponent } from './assigns/assigns.component';
import { SubmitDirectiveDirective } from './shared/submit-directive.directive';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { AssignmentDetailComponent } from './assigns/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assigns/add-assignment/add-assignment.component';
import { AssignmentService } from './shared/assignment.service';
import { RouterModule, Routes } from '@angular/router';
import { LoggingService } from './shared/logging.service';

const appRoutes: Routes = [
  {path: '', component: AssignsComponent},
  {path: 'home', component: AssignsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AssignsComponent,
    SubmitDirectiveDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
