import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-students',
  imports: [FormsModule,CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})

export class Students {
  students = [
     { id: 1, name: 'John', email: 'john@gmail.com', course: 'IT' },
    { id: 2, name: 'Sara', email: 'sara@gmail.com', course: 'SE' }
  ]

  student ={
    id: 0,
    name: '',
    email: '',
    course: ''
  }

  isEdit = false;

 addStudent() {

  const lastIndex = this.students.length;

  this.student.id = lastIndex + 1;
  this.students.push({ ...this.student });
  this.clearForm();
  }

   editStudent(stu:any) {
    this.student = { ...stu };
    this.isEdit = true;
  }

  deleteStudent(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }

  clearForm() {
    this.student = { id: 0, name: '', email: '', course: '' };
  }
}
