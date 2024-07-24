import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-student',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,],
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

  deleteStudent(student:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) { 
        this.http.delete(`http://localhost:8080/student-controller/delete-student/${student.id}`,{responseType:'text'}).subscribe(res=>{
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          this.loadStudentTable()
          console.log(res);
        })
        console.log(student);

    
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }
}
