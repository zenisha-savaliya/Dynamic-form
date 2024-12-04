import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        options: [
          { key: 'cat', value: 'Cat' },
          { key: 'dog', value: 'Dog' },
          { key: 'horse', value: 'Horse' },
          { key: 'capybara', value: 'Capybara' },
        ],
        order: 5,
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Zenisha',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'last name',
        value: 'Savaliya',
        required: true,
        order: 2,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 3,
      }),
      new TextboxQuestion({
        key: 'Address',
        label: 'Address',
        type: 'texarea',
        required: true,
        order: 4,
      }),
    ];
    const sortedQuestions = questions.sort((a, b) => a.order - b.order);
    return of(sortedQuestions);
  }
}
