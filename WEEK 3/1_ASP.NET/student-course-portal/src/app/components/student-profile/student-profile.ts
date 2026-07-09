import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';


@Component({
 selector:'app-student-profile',
 templateUrl:'./student-profile.html'
})
export class StudentProfileComponent implements OnInit{


 enrolledCourses: Course[] = [];


 constructor(private enrollmentService: EnrollmentService){}


 ngOnInit(){

   this.enrolledCourses =
   this.enrollmentService.getEnrolledCourses();

 }


}