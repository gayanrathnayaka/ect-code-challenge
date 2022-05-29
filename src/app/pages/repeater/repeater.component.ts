import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.scss'],
})
export class RepeaterComponent implements OnInit {
  data = [
    { name: 'John', age: 20, price: 100 },
    { name: 'Mary', age: 30, price: 200 },
    { name: 'Mike', age: 40, price: 300 },
    { name: 'Adam', age: 50, price: 400 },
    { name: 'Peter', age: 60, price: 500 },
    { name: 'Paul', age: 70, price: 600 },
  ];

  codePage = `  <app-content-repeater [option]="data">
  <ng-template let-item>
    {{ item.age }} - {{ item.name }} - {{ item.price }}
  </ng-template>
</app-content-repeater>`;
  codeRepeater = `<div class="container">
  <div *ngFor="let item of option" class="children">
    <div *ngTemplateOutlet="templateRef; context: { $implicit: item }"></div>
  </div>
</div>
`;

  item: any;

  constructor() {}

  ngOnInit(): void {}
}
