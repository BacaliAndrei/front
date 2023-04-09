import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Question from 'src/app/models/Question';



@Component({
  selector: 'student-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  id: string | null;
  question: Question | undefined;
  currentAnswer: String | undefined;
  
  constructor(private route: ActivatedRoute) {
    this.id = null;
  }

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    const response = await fetch(`http://localhost:8080/api/v1/quest?id=${this.id}`);
    this.question = await response.json();
  }

  submitAnswer() {
    console.log(this.currentAnswer)
    // fetch("http://localhost:8080/api/v1/answer") -> fetch - do POST with body
  }
}
