import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.css'
})
export class ManageStudentComponent {

   public firstName:String=""

  addStudent(){
    alert(this.firstName)
  }
}
