import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageStudentComponent } from './page/manage-student/manage-student.component';
import { ViewAllStudentComponent } from './page/view-all-student/view-all-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageStudentComponent,ViewAllStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-app';
}
