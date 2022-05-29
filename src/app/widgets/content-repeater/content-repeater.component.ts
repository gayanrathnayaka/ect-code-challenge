import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-content-repeater',
  templateUrl: './content-repeater.component.html',
  styleUrls: ['./content-repeater.component.scss'],
})
export class ContentRepeaterComponent implements OnInit {
  @Input() option: Array<any> = [];

  // get the template reference of content
  @ContentChild(TemplateRef) templateRef: any;

  constructor() {}

  ngOnInit(): void {}
}
