import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.scss',
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
