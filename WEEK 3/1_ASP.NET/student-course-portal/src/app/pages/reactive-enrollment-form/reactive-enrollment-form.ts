import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

function noCourseCode(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {
    return { noCourseCode: true };
  }

  return null;
}

function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {

    setTimeout(() => {

      if (control.value && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }

    }, 800);

  });

}
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm {

  enrollForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.enrollForm = this.fb.group({

      studentName: ['', [Validators.required, Validators.minLength(3)]],

      studentEmail: this.fb.control(
  '',
  [Validators.required, Validators.email],
  [simulateEmailCheck]
),

       courseId: ['', [Validators.required, noCourseCode]],

      preferredSemester: ['Odd', Validators.required],

      agreeToTerms: [false, Validators.requiredTrue],

      additionalCourses: this.fb.array([])

    });

  }

  onSubmit() {

    console.log(this.enrollForm.value);

    console.log(this.enrollForm.getRawValue());

    // value excludes disabled controls
    // getRawValue includes disabled controls

  }
  getCourseControl(index: number): FormControl {
  return this.additionalCourses.at(index) as FormControl;
}

  get additionalCourses() {

    return this.enrollForm.get('additionalCourses') as FormArray;

  }

  addCourse() {

    this.additionalCourses.push(

      new FormControl('', Validators.required)

    );

  }

  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }

}
