import { Routes } from '@angular/router';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { StudentProfileComponent } from './components/student-profile/student-profile';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'courses',
    component: CourseList
  },
  {
    path: 'enroll',
    component: EnrollmentForm
  },
  {
  path: 'enroll-reactive',
  component: ReactiveEnrollmentForm
},
 {
    path: 'student-profile',
    component: StudentProfileComponent
  }

];