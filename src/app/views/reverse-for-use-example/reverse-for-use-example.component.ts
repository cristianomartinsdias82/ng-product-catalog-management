import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c3r-reverse-for-use-example',
  templateUrl: './reverse-for-use-example.component.html',
  styleUrls: ['./reverse-for-use-example.component.scss']
})
export class ReverseForUseExampleComponent implements OnInit {

  syntax = `<ul><li *reverseFor="let item in [1,2,3,4] using 'my custom numbers'">{{item}}</li></ul>`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
