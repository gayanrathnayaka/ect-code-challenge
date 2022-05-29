import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { execute } from 'src/app/utils/execute';

@Component({
  selector: 'app-simple-compiler',
  templateUrl: './simple-compiler.component.html',
  styleUrls: ['./simple-compiler.component.scss'],
})
export class SimpleCompilerComponent implements OnInit {
  code = '';
  expression = '';
  result = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const file = '/assets/code.txt';
    this.readTextFile(file);
  }

  readTextFile = (file: any) => {
    this.http.get(file, { responseType: 'text' }).subscribe((data) => {
      this.code = data;
    });
  };

  onClickSubmit = (form: any) => {
    let result = execute(form.expression, {
      a: Number(form.val1),
      b: Number(form.val2),
    });
    this.result = result ? result : 'Invalid expression or value';
  };
}
