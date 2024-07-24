import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-student',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-student.component.html',
  styleUrl: './view-all-student.component.css'
})
export class ViewAllStudentComponent {

  public studentList:any;

  constructor(private http:HttpClient){
    this.loadStudentTable();
  }
  loadStudentTable(){
    this.http.get("http://localhost:8080/student-controller/get-all").subscribe(res=>{
      this.studentList=res;
      console.log(res);
      
    })
  }
}
