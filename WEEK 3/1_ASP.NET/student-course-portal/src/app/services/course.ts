import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: '.NET',
      code: 'NET201',
      credits: 3,
      gradeStatus: 'pending'
    },

    {
      id: 3,
      name: 'SQL',
      code: 'SQL301',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 4,
      name: 'Java',
      code: 'JAVA101',
      credits: 2,
      gradeStatus: 'failed'
    },

    {
      id: 5,
      name: 'React',
      code: 'RCT101',
      credits: 3,
      gradeStatus: 'pending'
    }

  ];

  getCourses(): Course[] {

    return this.courses;

  }

  getCourseById(id: number): Course | undefined {

    return this.courses.find(c => c.id === id);

  }

  addCourse(course: Course): void {

    this.courses.push(course);

  }

}