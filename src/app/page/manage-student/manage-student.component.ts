import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-manage-student',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule,NavComponent],
  templateUrl: './manage-student.component.html',
  styleUrl: './manage-student.component.css'
})
export class ManageStudentComponent {

  public studentObj = {
    firstName:"",
    lastName:"",
    dob:"",
    address:"",
    city:"",
    religion:"",
    gender:"",
    email:"",
    phoneNumber:"",
    postalCode:"",
    zipCode:"",
  }

  constructor(private http:HttpClient){

  }

  addStudent(){
    this.http.post("http://localhost:8080/student-controller/add-student",this.studentObj).subscribe(
      (data) =>{
        Swal.fire({
          title: "Student added!",
          text: "You clicked the button!",
          icon: "success"
        });
        
      }
    )
    
  }
}
