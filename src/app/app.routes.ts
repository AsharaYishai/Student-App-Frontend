import { Routes } from '@angular/router';
import { ManageStudentComponent } from './page/manage-student/manage-student.component';
import { ViewAllStudentComponent } from './page/view-all-student/view-all-student.component';

export const routes: Routes = [
{
    path:"add-student",
    component:ManageStudentComponent
},
{
    path:"view-all-student",
    component:ViewAllStudentComponent
}
];


