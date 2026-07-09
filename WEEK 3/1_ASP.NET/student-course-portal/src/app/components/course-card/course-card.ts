import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';


@Component({
  selector: 'app-course-card',
  imports: [
    CommonModule,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {


  @Input() course!: Course;


  cardClasses = {
    'course-card': true
  };


  showDetails = false;


  constructor(
    private enrollmentService: EnrollmentService
  ) {}


  toggleEnrollment(){

    if(this.enrollmentService.isEnrolled(this.course.id)){

      this.enrollmentService.unenroll(this.course.id);

    }
    else{

      this.enrollmentService.enroll(this.course.id);

    }

  }


  isEnrolled(){

    return this.enrollmentService.isEnrolled(this.course.id);

  }


  toggleDetails(){

    this.showDetails = !this.showDetails;

  }


}