import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  constructor(private courseService: CourseService) {}

  isLoading = true;

  selectedCourseId: number | null = null;

 courses: Course[] = [];

  ngOnInit(): void {

  this.courses = this.courseService.getCourses();

  setTimeout(() => {
    this.isLoading = false;
    console.log("Loading finished", this.isLoading);
  }, 1500);

}

  onEnroll(courseId: number) {

    console.log('Enrolling in course:', courseId);

    this.selectedCourseId = courseId;

  }

  // trackBy improves performance by re-rendering only changed items.
  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}